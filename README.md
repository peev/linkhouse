# LinkHouse

A modern Next.js landing page template optimized for conversions.

![Screenshot](./public/Screenshot%202025-12-07%20075142.png)

**Live Demo:** [https://www.linkhouse.store/](https://www.linkhouse.store/)

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open** [http://localhost:3000](http://localhost:3000)

## Configuration

### Google Analytics Setup

1. **Create a Google Tag Manager account**
   - Go to [Google Tag Manager](https://tagmanager.google.com)
   - Create a new account and container
   - Copy your GTM Container ID (format: `GTM-XXXXXXX`)

2. **Add environment variable**
   - Create a `.env.local` file in the root directory
   - Add your GTM ID:
     ```env
     NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
     ```

3. **Restart your development server**
   - The Google Tag Manager script will automatically load on all pages

### Web3Forms Setup

1. **Get your access key**
   - Go to [Web3Forms](https://web3forms.com)
   - Sign up for a free account
   - Generate an access key from your dashboard

2. **Add environment variable**
   - Add to your `.env.local` file:
     ```env
     NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key-here
     ```

3. **Restart your development server**
   - The email form on the thank-you page will now work

**Note:** Make sure `.env.local` is in your `.gitignore` file (it should be by default) to keep your keys secure.

## Deployment

Deploy to Vercel:

1. Push to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Deploy

Or build manually:
```bash
npm run build
npm start
```
