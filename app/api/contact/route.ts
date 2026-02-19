import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Rate limiting store (in-memory, resets on server restart)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // 3 requests per minute per IP

// Simple rate limiting function
function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);

  if (!record || now > record.resetTime) {
    // Create new record
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  // Increment count
  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, app, category, message } = body;

    // Validate required fields
    if (!name || !email || !category || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the submission
    console.log('Contact form submission:', {
      name,
      email,
      app: app || 'N/A',
      category,
      message,
      timestamp: new Date().toISOString(),
      ip,
    });

    // Send email using nodemailer
    try {
      // Create transporter
      const transporter = nodemailer.createTransporter({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER || 'inflexionco+support@gmail.com',
          pass: process.env.EMAIL_PASSWORD, // App-specific password
        },
      });

      // Email content
      const mailOptions = {
        from: process.env.EMAIL_USER || 'inflexionco+support@gmail.com',
        to: 'inflexionco+support@gmail.com',
        replyTo: email,
        subject: `[${category.toUpperCase()}] New contact from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Contact Form Submission</h2>
            <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">

            <p><strong style="color: #374151;">Name:</strong> ${name}</p>
            <p><strong style="color: #374151;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong style="color: #374151;">App/Project:</strong> ${app || 'N/A'}</p>
            <p><strong style="color: #374151;">Category:</strong> <span style="background-color: #dbeafe; padding: 4px 8px; border-radius: 4px;">${category}</span></p>

            <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">

            <p><strong style="color: #374151;">Message:</strong></p>
            <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; border-left: 4px solid #2563eb;">
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>

            <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">

            <p style="color: #6b7280; font-size: 12px;">
              <strong>Timestamp:</strong> ${new Date().toISOString()}<br>
              <strong>IP:</strong> ${ip}
            </p>
          </div>
        `,
        text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
App/Project: ${app || 'N/A'}
Category: ${category}

Message:
${message}

---
Timestamp: ${new Date().toISOString()}
IP: ${ip}
        `,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      console.log('Email sent successfully to inflexionco+support@gmail.com');
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // Continue anyway - don't fail the request if email fails
      // The submission is logged, so you can retrieve it from logs
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received. We\'ll get back to you soon!'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
