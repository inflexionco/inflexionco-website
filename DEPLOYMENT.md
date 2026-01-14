# Deployment Guide

This guide covers the steps needed to fully deploy your Inflexion Co. website.

## Environment Setup

### Contact Form Email Service

The contact form API route is ready but needs an email service configured. Choose one of these options:

#### Option 1: Resend (Recommended for Vercel)

1. Sign up at https://resend.com (free tier: 3,000 emails/month)
2. Get your API key from the dashboard
3. Add to Vercel environment variables:
   ```
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=support@inflexion.com
   ```
4. Uncomment the Resend code in `app/api/contact/route.ts` (lines 63-75)
5. Install Resend: `npm install resend`

#### Option 2: SendGrid

1. Sign up at https://sendgrid.com
2. Get your API key
3. Add to environment variables:
   ```
   SENDGRID_API_KEY=your_api_key_here
   CONTACT_EMAIL=support@inflexion.com
   ```
4. Install SendGrid: `npm install @sendgrid/mail`
5. Implement in `app/api/contact/route.ts`

#### Option 3: Nodemailer with SMTP

1. Get SMTP credentials (Gmail, Outlook, etc.)
2. Add to environment variables:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=support@inflexion.com
   ```
3. Install nodemailer: `npm install nodemailer`
4. Implement in `app/api/contact/route.ts`

## Social Media Links

Update social media links in `app/components/Footer.tsx` (lines 17-33):
- Uncomment the social media section
- Replace placeholder URLs with your actual profiles:
  - Twitter: `https://twitter.com/yourusername`
  - GitHub: `https://github.com/yourusername`
  - LinkedIn: `https://linkedin.com/company/yourusername`

## Security Headers

Security headers are configured in `next.config.ts`. The following headers are automatically applied:
- Strict-Transport-Security (HSTS)
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

## Error Tracking (Optional)

For production error tracking, consider integrating:
- **Sentry**: https://sentry.io
- **LogRocket**: https://logrocket.com
- **Bugsnag**: https://bugsnag.com

Update `app/error.tsx` and `app/global-error.tsx` to send errors to your chosen service.

## Deployment to Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to https://vercel.com and sign in
3. Click "Add New Project"
4. Import your repository
5. Configure:
   - **Framework Preset:** Next.js (auto-detected)
   - **Build Command:** `npm run build`
   - **Output Directory:** Leave empty
   - **Install Command:** `npm install`
6. Add environment variables (if using email service)
7. Click "Deploy"

## Post-Deployment Checklist

- [ ] Test contact form submission
- [ ] Verify all pages load correctly
- [ ] Check dark mode toggle works
- [ ] Test on mobile devices
- [ ] Review Privacy Policy and Terms of Service for accuracy
- [ ] Set up DNS records for custom domain (if applicable)
- [ ] Configure SSL certificate (automatic on Vercel)
- [ ] Test error boundaries by triggering an error
- [ ] Monitor contact form submissions

## Custom Domain (Optional)

To use a custom domain:
1. Go to Vercel Project Settings → Domains
2. Add your domain (e.g., inflexion.com)
3. Configure DNS records as shown by Vercel
4. Wait for DNS propagation (can take up to 48 hours)

## Maintenance

- Regularly check for npm package updates: `npm outdated`
- Monitor error logs in Vercel dashboard
- Review and respond to contact form submissions
- Keep dependencies up to date for security

## Support

If you encounter issues during deployment, check:
- Vercel deployment logs
- Browser console for client-side errors
- API route logs in Vercel Functions dashboard
