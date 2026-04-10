# Thorp Landscaping Website - Copilot Instructions

## Project Overview
Professional landscaping website for Thorp Landscaping built with Next.js 14+, TypeScript, and Tailwind CSS.
Deployed and maintained for StreamTec Services.

## Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── services/          # Services page
│   ├── portfolio/         # Portfolio/gallery page
│   └── contact/           # Contact page
├── components/            # Reusable React components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── PortfolioGrid.tsx
│   └── ContactForm.tsx
├── lib/                   # Utility functions
│   ├── types.ts          # TypeScript types
│   └── utils.ts          # Helper functions
├── styles/               # CSS modules and globals
│   └── globals.css
└── ...
```

## Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Package Manager**: npm

## Development Guidelines
- Use TypeScript for type safety and better IDE support
- Follow component-based architecture principles
- Leverage Tailwind CSS for consistent styling
- Keep components small and single-responsibility
- Use environment variables for sensitive data (.env.local)
- Follow mobile-first responsive design approach
- Optimize images using Next.js Image component
- Use semantic HTML and ARIA labels for accessibility

## Key Features to Implement
- [x] Project scaffolded with TypeScript and Tailwind
- [ ] Homepage with hero section and service overview
- [ ] Services page with detailed service descriptions
- [ ] Portfolio/gallery with project images
- [ ] Contact form with email integration
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] SEO optimization (meta tags, schema.org)
- [ ] Fast loading times (image optimization, code splitting)
- [ ] Smooth animations and transitions
- [ ] Client testimonials section
- [ ] Call-to-action buttons throughout site

## Important Commands
```bash
# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Fix linting issues
npm run lint -- --fix
```

## Environment Variables Template
Create `.env.local` in the root directory:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=contact@thorplandscaping.com
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password
```

## Deployment Notes
- Deploy to Vercel for optimal Next.js performance
- Enable automatic deployments from git
- Set environment variables in Vercel dashboard
- Use Next.js Image Optimization
- Monitor Core Web Vitals

## Code Quality
- Run `npm run lint` before committing
- Ensure TypeScript has no errors: `npm run build`
- Test responsive design on multiple breakpoints
- Validate HTML and accessibility with tools like axe

## Next Steps for Development
1. Update Homepage with company information
2. Create Services page with service details
3. Build Portfolio page with project gallery
4. Implement contact form with email functionality
5. Add testimonials section
6. Optimize performance and SEO
7. Set up analytics
8. Deploy to production
