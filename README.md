# Inflexion - Company Website

A modern, responsive company website built with Next.js 14, TypeScript, and Tailwind CSS. This website showcases your company's projects and provides a support center for user feedback and concerns.

## Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Performance**: Built with Next.js 14 for optimal performance and SEO
- **Project Showcase**: Display your apps and projects with details
- **Support Center**: Contact form for users to submit feedback and concerns
- **Easy to Customize**: Simple to update with your own content and branding

## Pages

1. **Home** - Hero section with company introduction and call-to-actions
2. **Projects** - Grid layout showcasing all your projects and applications
3. **Support** - Contact form for user feedback, bug reports, and feature requests

## Getting Started

### Prerequisites

- Node.js 18+ installed on your computer
- A text editor (VS Code recommended)

### Installation

1. The project is already set up at:
   ```
   ~/Developer/Personal/inflexion
   ```

2. Navigate to the project directory:
   ```bash
   cd ~/Developer/Personal/inflexion
   ```

3. Install dependencies (already done, but run if needed):
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Building for Production

Build the production-ready version:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Customization Guide

### 1. Update Company Information

**Change Company Name:**
- Edit `app/components/Navigation.tsx` (line 15)
- Edit `app/components/Footer.tsx` (line 10)
- Edit `app/page.tsx` (line 10)

**Update Contact Email:**
- Edit `app/components/Footer.tsx` (lines 37-38)
- Edit `app/support/page.tsx` (lines 47-51)

### 2. Customize Projects

Edit `app/projects/page.tsx` and update the `projects` array (starting at line 10) with your actual projects:

```typescript
const projects = [
  {
    id: 1,
    name: 'Your Project Name',
    description: 'Project description',
    category: 'Category',
    technologies: ['Tech1', 'Tech2'],
    status: 'Live', // or 'Beta', 'In Development'
  },
  // Add more projects...
];
```

### 3. Customize Colors

The website uses blue as the primary color. To change it:

1. Find and replace `blue-600` with your color (e.g., `purple-600`)
2. Common color classes to update:
   - `text-blue-600`
   - `bg-blue-600`
   - `hover:bg-blue-700`
   - `border-blue-600`

### 4. Update Metadata (SEO)

Edit `app/layout.tsx` (lines 17-20) to update site title and description.

### 5. Add Your Logo

Replace the text logo in `app/components/Navigation.tsx` with an image:

```tsx
<Image src="/logo.png" alt="Inflexion" width={150} height={40} />
```

Place your logo file in the `public` folder.

## Deployment to Vercel (FREE)

Vercel is the easiest and FREE way to deploy your Next.js website.

### Step 1: Create a GitHub Account (if you don't have one)

1. Go to [github.com](https://github.com)
2. Sign up for a free account

### Step 2: Push Your Code to GitHub

1. Initialize git (if not already done):
   ```bash
   cd ~/Developer/Personal/inflexion
   git init
   git add .
   git commit -m "Initial commit - Inflexion website"
   ```

2. Create a new repository on GitHub:
   - Go to github.com and click "New repository"
   - Name it "inflexion-website"
   - Don't initialize with README (we already have one)
   - Click "Create repository"

3. Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/inflexion-website.git
   git branch -M main
   git push -u origin main
   ```

### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account (it's FREE)
3. Click "Add New Project"
4. Import your `inflexion-website` repository
5. Click "Deploy"

**That's it!** Vercel will build and deploy your website in about 2 minutes.

You'll get a free URL like: `https://inflexion-website.vercel.app`

### Step 4: Add a Custom Domain (Optional)

1. Buy a domain from [Namecheap](https://www.namecheap.com) (~$10-15/year)
2. In Vercel dashboard, go to your project
3. Click "Settings" → "Domains"
4. Add your custom domain
5. Update your domain's DNS settings (Vercel will show you how)

## Making Updates

After deploying, whenever you want to update the website:

1. Make your changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Updated projects section"
   git push
   ```

Vercel will automatically detect the changes and redeploy your website!

## Form Submission

The contact form currently simulates submission. To make it functional:

### Option 1: Use Web3Forms (FREE)

1. Sign up at [web3forms.com](https://web3forms.com) (free forever)
2. Get your access key
3. Update `app/support/page.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
      ...formData,
    }),
  });

  if (response.ok) {
    setSubmitStatus('success');
  } else {
    setSubmitStatus('error');
  }
  setIsSubmitting(false);
};
```

### Option 2: Use Formspree (FREE)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update the form action in `app/support/page.tsx`

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)
- **Version Control**: Git

## Project Structure

```
inflexion/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx    # Top navigation bar
│   │   └── Footer.tsx         # Footer component
│   ├── projects/
│   │   └── page.tsx           # Projects showcase page
│   ├── support/
│   │   └── page.tsx           # Support/contact page
│   ├── layout.tsx             # Root layout with nav & footer
│   ├── page.tsx               # Homepage
│   └── globals.css            # Global styles
├── public/                    # Static files (images, etc.)
├── package.json               # Dependencies
└── README.md                  # This file
```

## Support

If you need help with this website:
- Check Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Vercel docs: [vercel.com/docs](https://vercel.com/docs)

## License

This project is yours to use and modify as you wish.

---

**Built with ❤️ for Inflexion**

## Quick Checklist Before Going Live

- [ ] Update company name and branding
- [ ] Add your actual projects to the projects page
- [ ] Update contact email addresses
- [ ] Test the website on mobile devices
- [ ] Set up form submission (Web3Forms or Formspree)
- [ ] Add your logo image
- [ ] Update SEO metadata (title, description)
- [ ] Test all links and navigation
- [ ] Deploy to Vercel
- [ ] (Optional) Connect custom domain
