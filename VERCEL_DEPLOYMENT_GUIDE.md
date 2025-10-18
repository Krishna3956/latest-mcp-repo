# Vercel Deployment Guide - Track MCP

Complete guide for deploying Track MCP to Vercel with optimal performance and reliability.

## Table of Contents
1. [Quick Start](#quick-start)
2. [Configuration Overview](#configuration-overview)
3. [Step-by-Step Deployment](#step-by-step-deployment)
4. [Environment Variables](#environment-variables)
5. [Performance Optimization](#performance-optimization)
6. [Troubleshooting](#troubleshooting)
7. [Monitoring & Maintenance](#monitoring--maintenance)

## Quick Start

### For First-Time Deployment

```bash
# 1. Validate everything works locally
npm run validate

# 2. Push to GitHub
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main

# 3. Deploy via Vercel Dashboard
# Go to https://vercel.com/dashboard
# Click "Add New..." → "Project"
# Select your GitHub repository
# Configure environment variables (see below)
# Click "Deploy"
```

### For Subsequent Deployments

Simply push to your main branch - Vercel automatically deploys!

```bash
git push origin main
```

## Configuration Overview

### Files Created for Vercel Optimization

| File | Purpose |
|------|---------|
| `vercel.json` | Vercel deployment configuration, routing, headers, caching |
| `.vercelignore` | Files to exclude from deployment (reduces build time) |
| `.env.example` | Template for environment variables |
| `vite.config.ts` | Optimized Vite build configuration for production |
| `DEPLOYMENT_CHECKLIST.md` | Pre-deployment verification checklist |

### Key Optimizations Implemented

✅ **Build Optimization**
- Code splitting for vendor chunks (React, UI, Supabase, utilities)
- Minification with Terser
- Disabled source maps in production
- Chunk size warnings configured

✅ **Routing & SPA Support**
- All routes redirect to `index.html` for client-side routing
- Asset caching optimized (1 year for versioned assets)
- HTML caching set to 1 hour

✅ **Security Headers**
- `X-Content-Type-Options: nosniff` - Prevent MIME type sniffing
- `X-Frame-Options: DENY` - Prevent clickjacking
- `X-XSS-Protection` - Enable XSS protection
- `Referrer-Policy` - Control referrer information
- `Permissions-Policy` - Disable unnecessary APIs

✅ **Build Efficiency**
- `.vercelignore` excludes unnecessary files
- Reduced build time and deployment size
- Faster cold starts

## Step-by-Step Deployment

### Step 1: Prepare Your Repository

```bash
# Ensure all changes are committed
git status

# If changes exist, commit them
git add .
git commit -m "Prepare for Vercel deployment"

# Push to GitHub
git push origin main
```

### Step 2: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### Step 3: Import Project to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Select "Import Git Repository"
4. Find and select your repository
5. Click "Import"

### Step 4: Configure Project Settings

Vercel should auto-detect most settings:

- **Framework**: Vite ✓ (auto-detected)
- **Build Command**: `npm run build` ✓ (auto-detected)
- **Output Directory**: `dist` ✓ (auto-detected)
- **Install Command**: `npm install` ✓ (auto-detected)

If not auto-detected, configure manually:
1. Click "Edit" next to each setting
2. Enter the correct value
3. Save changes

### Step 5: Configure Environment Variables

1. In Vercel project settings, go to "Environment Variables"
2. Add the following variables:

| Variable | Value | Example |
|----------|-------|---------|
| `VITE_SUPABASE_PROJECT_ID` | Your Supabase project ID | `ctpswgynnyeuxouaqjuq` |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Your Supabase publishable key | `eyJhbGc...` |
| `VITE_SUPABASE_URL` | Your Supabase URL | `https://ctpswgynnyeuxouaqjuq.supabase.co` |

**Getting Supabase Credentials:**
1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to Settings → API
4. Copy the values from "Project URL" and "anon public" key

**Important:** 
- These variables must be prefixed with `VITE_` for Vite to expose them to the browser
- Never commit `.env` file to version control
- Use Vercel's environment variable dashboard for production

### Step 6: Deploy

1. Click "Deploy" button
2. Monitor the deployment logs
3. Wait for "Deployment Complete" message
4. Your app is live at `https://your-project.vercel.app`

### Step 7: Verify Deployment

1. Visit your deployment URL
2. Test all features:
   - [ ] Homepage loads
   - [ ] Search works
   - [ ] Filtering works
   - [ ] Tool detail pages load
   - [ ] Submit tool dialog works
   - [ ] No console errors (F12 → Console)

## Environment Variables

### Required Variables

All variables must be prefixed with `VITE_` to be exposed to the browser in Vite.

```env
# Supabase Configuration
VITE_SUPABASE_PROJECT_ID=your_project_id
VITE_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
VITE_SUPABASE_URL=https://your-project.supabase.co
```

### Optional Variables

```env
# GitHub Token (for higher API rate limits)
VITE_GITHUB_TOKEN=your_github_token
```

### Local Development

Create `.env` file in project root:

```bash
cp .env.example .env
# Edit .env with your values
```

**Important:** `.env` is in `.gitignore` - never commit it!

### Production (Vercel)

1. Go to Vercel Project Settings
2. Environment Variables section
3. Add each variable
4. Redeploy for changes to take effect

## Performance Optimization

### Build Optimization

The project is configured for optimal production builds:

**Code Splitting:**
- `react-vendor.js` - React and React DOM
- `ui-vendor.js` - Radix UI components
- `supabase-vendor.js` - Supabase client
- `utils-vendor.js` - React Router and React Query
- `main.js` - Application code

**Minification:**
- JavaScript minified with Terser
- CSS minified by Vite
- HTML minified
- Console logs removed in production

**Caching:**
- Versioned assets cached for 1 year
- HTML cached for 1 hour
- Allows for instant updates when needed

### Local Build Analysis

```bash
# Build for production
npm run build

# Analyze bundle size
npm run preview

# Full validation (lint + type check + build)
npm run validate
```

### Performance Metrics

Target metrics for Lighthouse:
- **Performance**: > 80
- **Accessibility**: > 90
- **Best Practices**: > 90
- **SEO**: > 90

Check with Vercel Analytics or local Lighthouse audit.

## Troubleshooting

### Build Fails

**Error: "npm ERR! code ERESOLVE"**
```bash
# Solution: Use npm 7+ or add legacy peer deps flag
npm install --legacy-peer-deps
```

**Error: "Cannot find module"**
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Error: "TypeScript errors"**
```bash
# Check for errors
npm run type-check

# Fix errors in your code
```

### App Crashes After Deploy

**Symptom:** Works locally but fails on Vercel

**Solutions:**
1. Check browser console for errors (F12)
2. Verify environment variables in Vercel dashboard
3. Check Vercel deployment logs
4. Test locally with `npm run preview`
5. Verify Supabase connection works

**Check Logs:**
```bash
# Using Vercel CLI
vercel logs

# Or view in Vercel Dashboard → Deployments → Logs
```

### Assets Not Loading

**Symptom:** Images, CSS, or fonts not loading

**Solutions:**
1. Verify assets in `/public` directory
2. Check asset paths are relative (not absolute)
3. Verify `.vercelignore` doesn't exclude assets
4. Check browser Network tab for 404 errors
5. Verify cache headers in `vercel.json`

### Environment Variables Not Working

**Symptom:** `undefined` in browser console for env vars

**Solutions:**
1. Verify variables prefixed with `VITE_`
2. Check variables set in Vercel dashboard (not `.env`)
3. Redeploy after adding variables
4. Verify variable names match exactly
5. Clear browser cache (Ctrl+Shift+Delete)

### Performance Issues

**Symptom:** App slow or unresponsive

**Solutions:**
1. Check bundle size: `npm run build` output
2. Verify code splitting working
3. Optimize images (use WebP format)
4. Check Lighthouse scores
5. Review Vercel Analytics for bottlenecks

## Monitoring & Maintenance

### Vercel Analytics

Monitor your deployment:
1. Go to Vercel Dashboard
2. Select your project
3. View Analytics tab
4. Monitor:
   - Response times
   - Error rates
   - Bandwidth usage
   - Deployment frequency

### Automated Deployments

**Main Branch:**
- Every push to `main` deploys to production
- Automatic preview deployments for pull requests

**Custom Domains:**
- Configure in Vercel Settings → Domains
- Update DNS records as instructed
- HTTPS automatically enabled

### Dependency Updates

Keep dependencies secure and up-to-date:

```bash
# Check for updates
npm outdated

# Update packages
npm update

# Update major versions (be careful)
npm install package@latest

# Test after updates
npm run validate
```

### Rollback

If deployment has issues:

1. Go to Vercel Dashboard
2. Select your project
3. Go to Deployments
4. Find previous working deployment
5. Click "Promote to Production"

Or revert code:
```bash
git revert HEAD
git push origin main
```

## Best Practices

✅ **Do:**
- Test locally before pushing: `npm run validate`
- Use environment variables for secrets
- Keep dependencies updated
- Monitor Vercel Analytics
- Use meaningful commit messages
- Create pull requests for changes
- Test on multiple devices/browsers

❌ **Don't:**
- Commit `.env` file
- Hardcode API keys or secrets
- Deploy without testing locally
- Ignore build warnings
- Use console.log in production code
- Deploy directly to production without testing

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Support

For issues or questions:
1. Check [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)
2. Review Vercel deployment logs
3. Check browser console for errors
4. Consult documentation links above
5. Review Vercel community forums

---

**Last Updated**: 2025-10-19
**Framework**: Vite + React + TypeScript
**Deployment Platform**: Vercel
**Status**: ✅ Production Ready
