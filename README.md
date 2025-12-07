# 🚀 High-Conversion Landing Page Template

A modern, production-ready Next.js template designed for maximum conversion rates. Built with best practices for performance, SEO, and user experience.

**Live Demo:** [https://www.linkhouse.store/](https://www.linkhouse.store/)

## ✨ Features

### 🎯 Conversion-Optimized Design
- **Hero Section** with clear value proposition and strong CTA
- **Social Proof** with testimonials and user reviews
- **Feature Showcase** highlighting key benefits
- **Pricing Page** with multiple tiers and billing toggle
- **FAQ Section** addressing common objections
- **Mobile-First** responsive design for all devices

### ⚡ Performance & SEO
- **Next.js 15** with App Router for optimal performance
- **React 19** with latest features
- **TypeScript** for type safety
- **Tailwind CSS v4** for rapid styling
- **Image Optimization** with Next.js Image component
- **Analytics Ready** with Vercel Analytics integration

### 🎨 Modern Tech Stack
- **Framework:** Next.js 15.5.2
- **UI Library:** React 19.1.0
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript 5
- **Analytics:** Vercel Analytics
- **Build Tool:** Turbopack (Next.js built-in)

## 🏗️ Project Structure

```
linkhouse/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── pricing/
│   │   └── page.tsx      # Pricing page with plans
│   ├── thank-you/
│   │   └── page.tsx      # Thank you page
│   ├── layout.tsx        # Root layout
│   └── utils/
│       └── analytics.ts  # Analytics tracking utilities
├── public/               # Static assets (images, icons)
├── globals.css           # Global styles
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:peev/linkhouse.git
   cd linkhouse
   ```
   
   Or using HTTPS:
   ```bash
   git clone https://github.com/peev/linkhouse.git
   cd linkhouse
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization Guide

### 1. Update Branding
- Replace logo in `public/` directory
- Update logo references in `app/page.tsx` and `app/pricing/page.tsx`
- Modify brand colors in `globals.css` or Tailwind config

### 2. Customize Content
- **Brand Name:** Replace "LinkHaus" references throughout the codebase with your brand name
- **Metadata:** Update SEO metadata in `app/layout.tsx` (title, description)
- **Hero Section:** Edit the main headline and description in `app/page.tsx`
- **Features:** Update the benefits section with your product features
- **Testimonials:** Replace with real customer testimonials
- **Pricing:** Modify plans in `app/pricing/page.tsx`
- **Logo:** Replace logo images in `public/` directory and update references

### 3. Configure Analytics
- Set up Vercel Analytics (included by default)
- Add Google Analytics by updating `app/utils/analytics.ts`
- Customize event tracking for your needs

### 4. Add Your Images
- Replace images in `public/` directory
- Update image paths in components
- Optimize images for web (recommended: WebP format)

### 5. Styling
- Modify Tailwind classes directly in components
- Update `globals.css` for global styles
- Customize color scheme in Tailwind config

## 🎨 Key Sections

### Landing Page (`app/page.tsx`)
- **Header** with logo and CTA button
- **Hero Section** with value proposition
- **What is [Product]** section with features
- **Benefits** grid with icons
- **How it Works** step-by-step guide
- **Testimonials** social proof
- **FAQ** section

### Pricing Page (`app/pricing/page.tsx`)
- **Pricing Tiers** with monthly/annual toggle
- **Countdown Timer** for limited-time offers
- **Feature Comparison** between plans
- **CTA Buttons** for each plan

## 📊 Analytics Integration

The template includes built-in analytics tracking:

```typescript
import { trackButtonClick, trackLinkClick } from './utils/analytics';

// Track button clicks
trackButtonClick('sign_up_header', 'header');

// Track link clicks
trackLinkClick('Learn More', '/features');
```

### Supported Analytics
- ✅ Vercel Analytics (included)
- 🔧 Google Analytics (ready to configure)

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure settings
4. Deploy!

### Deploy to Other Platforms

```bash
# Build the production bundle
npm run build

# Start the production server
npm start
```

The template is compatible with:
- ✅ Vercel
- ✅ Netlify
- ✅ AWS Amplify
- ✅ Railway
- ✅ Any Node.js hosting platform

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory for environment-specific variables:

```env
# Google Tag Manager ID (optional)
# Get your GTM ID from https://tagmanager.google.com
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Web3Forms Access Key (optional, for thank-you page email collection)
# Get your access key from https://web3forms.com
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-web3forms-access-key

# Google Analytics ID (optional)
# If you want to use Google Analytics instead of or alongside GTM
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Note:** Copy `.env.example` to `.env.local` and fill in your values. The `.env.local` file is gitignored and won't be committed to the repository.

### Next.js Config
Modify `next.config.ts` for custom configurations:
- Image domains
- Redirects
- Headers
- Webpack configuration

## 📈 Conversion Optimization Tips

This template includes several conversion optimization techniques:

1. **Clear Value Proposition** - Hero section immediately communicates value
2. **Multiple CTAs** - Strategic placement throughout the page
3. **Social Proof** - Testimonials build trust
4. **Urgency** - Countdown timer on pricing page
5. **Feature Benefits** - Clear explanation of value
6. **FAQ Section** - Addresses common objections
7. **Mobile Optimization** - Responsive design for all devices
8. **Fast Loading** - Optimized images and code splitting

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Analytics by [Vercel Analytics](https://vercel.com/analytics)

## 📞 Support

For support, open an issue in the repository or contact the maintainers.

## ⚠️ Important Notes

- **Brand Customization:** This template includes example branding (LinkHaus). Make sure to replace all brand-specific content with your own before deploying.
- **API Keys:** Never commit your `.env.local` file. All sensitive keys should use environment variables.
- **Images:** Replace all placeholder images in the `public/` directory with your own optimized images.

---

**Made with ❤️ for high-converting landing pages**

**Demo:** [https://www.linkhouse.store/](https://www.linkhouse.store/)