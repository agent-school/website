# Deployment Guide

**Generated:** 2026-02-10  
**Project:** Agent School Website  
**Platform:** Vercel

---

## Overview

This Next.js application is optimized for deployment on **Vercel**, the platform created by the Next.js team. Deployment is automatic via Git integration with zero configuration required.

---

## Vercel Deployment

### Automatic Deployment (Recommended)

**1. Connect Repository to Vercel**

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your Git provider (GitHub, GitLab, Bitbucket)
4. Authorize Vercel to access your repository
5. Select the website repository
6. Click "Import"

**2. Configure Project (Auto-detected)**

Vercel will automatically detect:
- ✅ Framework: Next.js
- ✅ Build Command: `next build`
- ✅ Output Directory: `.next`
- ✅ Install Command: `npm install`
- ✅ Dev Command: `next dev`

**No configuration changes needed** - `vercel.json` already specifies framework.

**3. Deploy**

- Click "Deploy"
- First deployment takes ~2-3 minutes
- Subsequent deployments: ~1-2 minutes

### Deployment Triggers

**Automatic deployments:**
- ✅ Push to `main` branch → Production deployment
- ✅ Push to any branch → Preview deployment
- ✅ Pull Request opened → Preview deployment (with unique URL)

**Manual deployment:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

---

## Environment Variables

**None required** for current configuration.

### Adding Environment Variables (If Needed)

**In Vercel Dashboard:**
1. Go to Project Settings
2. Click "Environment Variables"
3. Add variables for each environment:
   - **Production** - For `main` branch
   - **Preview** - For all other branches
   - **Development** - For local `vercel dev`

**Example variables (if added in future):**
```env
# Analytics
NEXT_PUBLIC_ANALYTICS_ID=your-id

# API endpoints
NEXT_PUBLIC_API_URL=https://api.example.com

# Feature flags
NEXT_PUBLIC_ENABLE_FEATURE_X=true
```

**Note:** `NEXT_PUBLIC_` prefix makes variables accessible in browser (client-side)

---

## Build Configuration

### Next.js Config (`next.config.mjs`)

**Current optimizations:**
```javascript
{
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),  // WSL optimization
  typescript: {
    ignoreBuildErrors: false,  // Fail build on type errors
  },
  experimental: {
    webpackBuildWorker: true,  // Parallel compilation
    turbopack: {
      root: process.cwd(),
    },
  },
}
```

### Vercel Config (`vercel.json`)

**Minimal configuration:**
```json
{
  "framework": "nextjs"
}
```

**Optional settings you can add:**
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "regions": ["iad1"],  // Specific region (default: all edge)
  "env": {
    "NEXT_PUBLIC_ENV": "production"
  }
}
```

---

## Deployment Process

### What Happens During Deployment

1. **Install Dependencies**
   ```bash
   npm install
   ```
   - Installs all production and dev dependencies
   - Uses `package-lock.json` for reproducible builds

2. **Run Build**
   ```bash
   npm run build
   ```
   - Type-checks TypeScript (`tsc`)
   - Runs ESLint
   - Compiles Next.js pages and components
   - Optimizes bundles
   - Generates static pages
   - Creates production build in `.next/`

3. **Deploy to Edge Network**
   - Uploads static assets to CDN
   - Deploys serverless functions (if any)
   - Configures edge caching
   - Assigns deployment URL

4. **Health Check**
   - Verifies deployment is healthy
   - Runs smoke tests
   - Makes deployment live

**Expected build time:** 1-3 minutes

---

## Deployment Environments

### Production
- **URL:** `https://your-domain.com` (custom domain)
- **Default:** `https://project-name.vercel.app`
- **Branch:** `main` (or configured production branch)
- **Auto-deploy:** Yes (on push to main)

### Preview
- **URL:** `https://project-name-[branch]-[user].vercel.app`
- **Branch:** Any non-production branch
- **Auto-deploy:** Yes (on push)
- **Use case:** Test features before merging

### Development
- **URL:** `http://localhost:3000`
- **Command:** `npm run dev` or `vercel dev`
- **Use case:** Local development

---

## Custom Domain Setup

### Adding a Custom Domain

**1. In Vercel Dashboard:**
1. Go to Project Settings
2. Click "Domains"
3. Click "Add Domain"
4. Enter your domain (e.g., `agentschool.io`)

**2. Configure DNS:**

**Option A: Use Vercel Nameservers (Recommended)**
1. Vercel provides nameservers
2. Update DNS at your registrar
3. Wait for propagation (~5 minutes)

**Option B: Use CNAME Record**
1. Add CNAME record at your DNS provider:
   ```
   CNAME  www  cname.vercel-dns.com
   ```
2. Wait for propagation (~5-30 minutes)

**Option C: Use A Record**
1. Add A record at your DNS provider:
   ```
   A  @  76.76.21.21
   ```

### SSL Certificate

- ✅ **Automatic** - Vercel provides free SSL via Let's Encrypt
- ✅ **Auto-renewal** - Certificates renew automatically
- ✅ **HTTPS redirect** - HTTP automatically redirects to HTTPS

---

## Performance Optimizations

### Edge Network

Vercel deploys to a global edge network:
- 🌍 **40+ Edge Locations** worldwide
- ⚡ **Ultra-low latency** (sub-50ms)
- 📦 **Automatic CDN** for static assets
- 🔄 **Automatic cache invalidation** on deploy

### Build Optimizations

**Already configured:**
- ✅ Automatic code splitting
- ✅ Image optimization (Next.js Image component)
- ✅ Static page generation
- ✅ Incremental Static Regeneration (if used)
- ✅ Tree shaking (unused code removal)
- ✅ Minification and compression

### Caching Strategy

**Vercel default caching:**
- **Static assets** - Cached forever (hashed filenames)
- **Pages** - Cached with revalidation
- **API routes** - No caching by default
- **Images** - Cached + optimized by Vercel

**Custom caching** (if needed):
```typescript
// In page.tsx
export const revalidate = 3600; // Revalidate every hour

// In route handler
export const dynamic = 'force-static'; // Force static generation
```

---

## Monitoring & Analytics

### Vercel Analytics (Built-in)

**Enable in Dashboard:**
1. Go to Project Settings
2. Click "Analytics"
3. Enable Vercel Analytics

**Metrics tracked:**
- Page views
- Unique visitors
- Top pages
- Referrers
- Devices & browsers

### Vercel Speed Insights

**Enable in Dashboard:**
1. Go to Project Settings
2. Click "Speed Insights"
3. Enable

**Metrics tracked:**
- Core Web Vitals (LCP, FID, CLS)
- Time to First Byte (TTFB)
- First Contentful Paint (FCP)
- Real user monitoring

### Custom Analytics

**To add (future):**
```typescript
// src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />  // Add this
      </body>
    </html>
  );
}
```

---

## Rollback & Versioning

### Rollback to Previous Deployment

**In Vercel Dashboard:**
1. Go to "Deployments" tab
2. Find the working deployment
3. Click "..." menu
4. Click "Promote to Production"

**Via CLI:**
```bash
# List deployments
vercel ls

# Promote specific deployment
vercel promote [deployment-url]
```

### Version History

- ✅ **Infinite history** - All deployments saved
- ✅ **Instant rollback** - One-click restore
- ✅ **Preview old versions** - Every deployment has unique URL

---

## CI/CD Integration

### Current Setup

**Vercel built-in CI/CD:**
- ✅ Automatic builds on Git push
- ✅ Preview deployments for PRs
- ✅ Build status checks
- ✅ Deployment comments on PRs

**⚠️ No custom CI/CD pipeline** (no GitHub Actions, GitLab CI, etc.)

### Adding GitHub Actions (Future)

**Example: Additional checks before deploy**
```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run lint

  type-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npx tsc --noEmit

  # Vercel will still handle actual deployment
```

---

## Troubleshooting

### Build Failures

**⚠️ Known Issue:** Site currently doesn't compile

**Common causes:**
1. **TypeScript errors**
   - Fix: Run `npx tsc --noEmit` locally
   - Check build logs in Vercel dashboard

2. **ESLint errors**
   - Fix: Run `npm run lint` locally
   - Address all warnings/errors

3. **Missing dependencies**
   - Fix: Ensure `package-lock.json` is committed
   - Check dependency versions

4. **Out of memory**
   - Fix: Contact Vercel support to increase limits
   - Optimize build process

**Check build logs:**
1. Go to Vercel Dashboard
2. Click on failed deployment
3. View "Build Logs" tab
4. Look for error messages (usually near the end)

### Deployment Issues

**Deployment is slow:**
- Check build output size (should be <50MB)
- Optimize images (use WebP, proper sizing)
- Reduce dependency count

**404 errors:**
- Verify file paths in `src/app/`
- Check `next.config.mjs` for routing config
- Clear Vercel cache (redeploy)

**Styling doesn't apply:**
- Verify Tailwind config is correct
- Check `globals.css` is imported
- Rebuild and redeploy

---

## Alternative Deployment Platforms

While Vercel is recommended, Next.js can deploy to:

### Netlify
- Similar to Vercel
- Automatic deployments
- Edge network
- **Setup:** Add `netlify.toml` config

### AWS Amplify
- AWS-hosted
- Auto-scaling
- **Setup:** Use Amplify Console

### Docker (Self-hosted)
```dockerfile
# Dockerfile (example)
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Static Export
```bash
# next.config.mjs
const nextConfig = {
  output: 'export',
};

# Build static site
npm run build

# Deploy `out/` directory to any static host
```

**Note:** Static export disables Next.js dynamic features (API routes, ISR, etc.)

---

## Security Best Practices

### Current Configuration

✅ **HTTPS by default** - All traffic encrypted  
✅ **No environment secrets in code** - Use Vercel env vars  
✅ **Dependency scanning** - Vercel checks for vulnerabilities  
✅ **Automatic updates** - Vercel patches infrastructure  

### Recommendations

1. **Enable Vercel Protection** (Paid feature)
   - DDoS mitigation
   - Bot protection
   - Rate limiting

2. **Add Security Headers**
   ```javascript
   // next.config.mjs
   const nextConfig = {
     async headers() {
       return [
         {
           source: '/:path*',
           headers: [
             { key: 'X-Frame-Options', value: 'DENY' },
             { key: 'X-Content-Type-Options', value: 'nosniff' },
             { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
           ],
         },
       ];
     },
   };
   ```

3. **Content Security Policy**
   ```javascript
   // next.config.mjs
   const csp = `
     default-src 'self';
     script-src 'self' 'unsafe-eval' 'unsafe-inline';
     style-src 'self' 'unsafe-inline';
     img-src 'self' data: https:;
   `;
   
   headers: [
     { key: 'Content-Security-Policy', value: csp.replace(/\s{2,}/g, ' ').trim() }
   ]
   ```

---

## Cost & Limits

### Vercel Free Tier (Hobby)

**Included:**
- ✅ Unlimited deployments
- ✅ 100 GB bandwidth/month
- ✅ 100 GB-hours compute time
- ✅ 6,000 build minutes/month
- ✅ Custom domains (unlimited)
- ✅ SSL certificates
- ✅ Preview deployments

**Sufficient for:** Personal projects, small marketing sites, prototypes

### Vercel Pro Tier

**Cost:** $20/month  
**Limits:**
- 1 TB bandwidth
- 1,000 GB-hours compute
- 24,000 build minutes

**Sufficient for:** Production websites with moderate traffic

### Cost Optimization

**Tips:**
- Optimize images (reduce bandwidth)
- Use static generation where possible
- Cache aggressively
- Monitor analytics to avoid overages

---

## Deployment Checklist

Before deploying to production:

- [ ] Fix all TypeScript errors (`npx tsc --noEmit`)
- [ ] Fix all ESLint warnings (`npm run lint`)
- [ ] Test build locally (`npm run build && npm run start`)
- [ ] Check responsive design (mobile, tablet, desktop)
- [ ] Test dark mode
- [ ] Verify all images load
- [ ] Test all interactive components
- [ ] Check Core Web Vitals with Lighthouse
- [ ] Update environment variables in Vercel
- [ ] Set up custom domain (if needed)
- [ ] Enable Vercel Analytics
- [ ] Test on multiple browsers
- [ ] Run accessibility audit

---

## Post-Deployment

### Monitoring

1. **Check Vercel Dashboard** for deployment status
2. **Visit live site** to verify functionality
3. **Run Lighthouse audit** for performance
4. **Monitor Analytics** for traffic and errors
5. **Set up alerts** for downtime (Vercel status page)

### Maintenance

1. **Regular updates:**
   ```bash
   npm outdated  # Check for updates
   npm update    # Update dependencies
   ```

2. **Security patches:**
   - Vercel auto-patches infrastructure
   - Monitor GitHub security alerts for dependencies

3. **Performance monitoring:**
   - Check Core Web Vitals monthly
   - Optimize slow pages
   - Compress large assets

---

## Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **Vercel CLI:** https://vercel.com/docs/cli
- **Vercel Status:** https://vercel-status.com

---

## Support

**Vercel Support:**
- **Community:** https://github.com/vercel/next.js/discussions
- **Pro Support:** Available on Pro/Enterprise plans
- **Documentation:** https://vercel.com/docs

**Internal Docs:**
- See `docs/bugs/` for known issues
- Check `AGENTS.md` for project context
