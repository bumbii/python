# Deployment Guide for Vercel

This repository has been configured to deploy to Vercel using Nextra (a Next.js-based documentation framework).

## Quick Deploy to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will automatically detect Next.js
5. Click "Deploy"

That's it! Vercel will automatically:
- Install dependencies
- Build your project
- Deploy to a production URL

### Method 2: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

## Local Development

### Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your documentation site.

### Build for Production

```bash
npm run build
```

This will create an optimized production build in the `out` directory.

### Start Production Server

```bash
npm start
```

## Configuration Files

- **package.json**: Dependencies and scripts
- **next.config.js**: Next.js configuration with Nextra
- **theme.config.jsx**: Nextra theme configuration
- **tsconfig.json**: TypeScript configuration
- **vercel.json**: Vercel deployment settings
- **pages/_meta.json**: Navigation structure

## Customization

### Update Site Title and Logo

Edit `theme.config.jsx`:

```jsx
export default {
  logo: <span>Your Site Title</span>,
  project: {
    link: 'https://github.com/your-username/your-repo'
  },
  // ... other settings
}
```

### Update GitHub Links

Update the `project.link` and `docsRepositoryBase` in `theme.config.jsx` with your actual GitHub repository URL.

### Add New Pages

1. Create a new `.md` or `.mdx` file in the `pages` directory
2. Add it to the corresponding `_meta.json` file to include it in navigation

Example:
```json
{
  "my-new-page": "My New Page Title"
}
```

## Automatic Deployments

Once connected to Vercel:
- Every push to `main` branch triggers a production deployment
- Every push to other branches creates a preview deployment
- Pull requests get automatic preview URLs

## Environment Variables

If you need environment variables:
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables

## Custom Domain

To add a custom domain:
1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your domain and follow DNS configuration instructions

## Support

- [Nextra Documentation](https://nextra.site)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
