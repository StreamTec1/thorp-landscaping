# Thorp Landscaping Website

Professional landscaping website for Thorp Landscaping, built with Next.js 14, TypeScript, and Tailwind CSS. Managed by StreamTec Services.

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm
- **Deployment**: Ready for Vercel

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Professional navigation and footer
- ✅ Hero section with call-to-action
- ✅ Services showcase page
- ✅ Portfolio/gallery page
- ✅ Contact form page
- ✅ SEO optimized metadata
- ✅ Fast loading with Next.js optimization
- ✅ Tailwind CSS for consistent styling

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navigation & footer
│   ├── page.tsx            # Homepage
│   ├── services/page.tsx   # Services page
│   ├── portfolio/page.tsx  # Portfolio/gallery page
│   ├── contact/page.tsx    # Contact form page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Header/Navigation component
│   ├── Footer.tsx          # Footer component
│   └── Hero.tsx            # Hero section component
├── lib/                    # Utility functions
└── styles/                 # CSS modules (if needed)
```

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm installed

### Installation

1. Clone or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file from `.env.example`:

```bash
cp .env.example .env.local
```

4. Update environment variables in `.env.local` with your information

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

The site auto-reloads as you edit files.

### Build for Production

```bash
npm run build
npm start
```

### Linting

Check for code issues:

```bash
npm run lint
```

Fix linting issues:

```bash
npm run lint -- --fix
```

## Key Pages

- **Homepage** (`/`) - Welcome page with hero section and service overview
- **Services** (`/services`) - Detailed service offerings
- **Portfolio** (`/portfolio`) - Project gallery and case studies
- **Contact** (`/contact`) - Contact form for inquiries

## Customization

### Update Company Information

1. **Navigation & Footer**: Edit company details in `src/components/Navigation.tsx` and `src/components/Footer.tsx`
2. **Contact Info**: Update phone and email in the footer and contact page
3. **Metadata**: Update site metadata in `src/app/layout.tsx`
4. **Services**: Modify services list in `src/app/page.tsx` and `/services`

### Add Images

1. Place images in the `public/` directory
2. Use Next.js Image component for optimization:

```tsx
import Image from "next/image";

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

### Color Scheme

The site uses green as the primary color (Tailwind `green-600`). To change:
1. Update Tailwind color references in components
2. Modify theme in `tailwind.config.ts` if needed

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

Learn more: [Vercel Deployment](https://vercel.com/docs)

### Other Hosting

The site can be deployed on any Node.js hosting:
- AWS
- Heroku
- DigitalOcean
- etc.

## Next Steps

- [ ] Add company logo and branding colors
- [ ] Add actual project images to portfolio
- [ ] Implement email functionality for contact form
- [ ] Add testimonials section
- [ ] Set up analytics (Google Analytics)
- [ ] Optimize images and performance
- [ ] Add schema.org structured data for SEO
- [ ] Set up contact form email notifications
- [ ] Add blog section (optional)

## Support & Maintenance

For support or maintenance requests, contact StreamTec Services.

## License

© 2026 Thorp Landscaping. All rights reserved.

