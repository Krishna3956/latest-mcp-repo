# Vercel Deployment Checklist - Track MCP

This checklist ensures your application is production-ready for Vercel deployment with zero functional regressions.

## Pre-Deployment Verification

### Code Quality & Testing
- [ ] **Lint Check**: Run `npm run lint` - all errors resolved
- [ ] **Type Check**: Run `npm run type-check` - no TypeScript errors
- [ ] **Build Test**: Run `npm run build` - build completes without errors
- [ ] **Preview Test**: Run `npm run preview` - app runs correctly in production mode
- [ ] **Manual Testing**: Test all core features locally:
  - [ ] Homepage loads with tool listings
  - [ ] Search functionality works
  - [ ] Filtering by stars/recent/name works
  - [ ] Tool detail page renders markdown correctly
  - [ ] Submit tool dialog functions properly
  - [ ] Navigation between pages works
  - [ ] Responsive design on mobile/tablet/desktop

### Environment Variables
- [ ] **`.env.example` exists** with all required variables documented
- [ ] **Production `.env` configured** in Vercel dashboard:
  - [ ] `VITE_SUPABASE_PROJECT_ID` set
  - [ ] `VITE_SUPABASE_PUBLISHABLE_KEY` set
  - [ ] `VITE_SUPABASE_URL` set
  - [ ] Optional: `VITE_GITHUB_TOKEN` for higher API rate limits
- [ ] **No secrets in source code** - all sensitive data in environment variables
- [ ] **`.env` file in `.gitignore`** - never commit secrets

### Configuration Files
- [ ] **`vercel.json` exists** with:
  - [ ] Correct `buildCommand`: `npm run build`
  - [ ] Correct `outputDirectory`: `dist`
  - [ ] Framework set to `vite`
  - [ ] Routes configured for SPA routing
  - [ ] Security headers configured
  - [ ] Cache headers for assets optimized
- [ ] **`.vercelignore` exists** with unnecessary files excluded
- [ ] **`package.json` scripts correct**:
  - [ ] `build` script runs production build
  - [ ] `dev` script for local development
  - [ ] `lint` script for code quality
  - [ ] `type-check` script for TypeScript validation

### Build Optimization
- [ ] **`vite.config.ts` optimized** for production:
  - [ ] Code splitting configured for vendor chunks
  - [ ] Minification enabled
  - [ ] Source maps disabled in production
  - [ ] Chunk size warnings configured
- [ ] **`tsconfig.json` production-ready**:
  - [ ] Path aliases configured (`@/*`)
  - [ ] Strict mode settings appropriate
  - [ ] Skip lib check enabled for faster builds
- [ ] **Bundle size acceptable**:
  - [ ] Main bundle < 500KB (gzipped)
  - [ ] Vendor chunks properly split
  - [ ] No unused dependencies

### Supabase Integration
- [ ] **Supabase credentials valid** and tested
- [ ] **Database connection works** in production environment
- [ ] **RLS policies configured** appropriately
- [ ] **CORS settings allow Vercel domain**
- [ ] **Rate limiting considered** for API calls

### Asset & Static File Handling
- [ ] **Public assets in `/public` directory**
- [ ] **Asset paths use relative URLs** or CDN
- [ ] **Images optimized** for web (compressed, correct format)
- [ ] **Favicon configured** in `index.html`
- [ ] **Meta tags complete** for SEO and social sharing

### Security
- [ ] **Security headers configured** in `vercel.json`:
  - [ ] `X-Content-Type-Options: nosniff`
  - [ ] `X-Frame-Options: DENY`
  - [ ] `X-XSS-Protection: 1; mode=block`
  - [ ] `Referrer-Policy: strict-origin-when-cross-origin`
- [ ] **No console.log statements** in production code
- [ ] **Error handling implemented** gracefully
- [ ] **API keys not exposed** in client-side code
- [ ] **HTTPS enforced** on Vercel (automatic)

### Performance
- [ ] **Code splitting working** - separate chunks for vendors
- [ ] **Lazy loading implemented** where applicable
- [ ] **Images optimized** and properly sized
- [ ] **CSS minified** and optimized
- [ ] **JavaScript minified** in production
- [ ] **No unused CSS** or dead code
- [ ] **Lighthouse score > 80** (test with `npm run preview`)

### SEO & Metadata
- [ ] **`index.html` has proper meta tags**:
  - [ ] Title tag descriptive
  - [ ] Meta description present
  - [ ] Open Graph tags for social sharing
  - [ ] Twitter card tags
- [ ] **Sitemap considered** (if applicable)
- [ ] **Robots.txt configured** (if applicable)

### Git & Repository
- [ ] **`.gitignore` complete** - excludes:
  - [ ] `node_modules/`
  - [ ] `dist/`
  - [ ] `.env` and `.env.local`
  - [ ] `.DS_Store` and editor files
- [ ] **All changes committed** to main branch
- [ ] **No uncommitted changes** before deployment
- [ ] **Branch protection rules** configured (if team project)

## Vercel Deployment Steps

### 1. Connect Repository
- [ ] Repository connected to Vercel
- [ ] GitHub/GitLab/Bitbucket account authorized
- [ ] Correct repository selected

### 2. Configure Project
- [ ] **Framework**: Vite (auto-detected)
- [ ] **Build Command**: `npm run build` (auto-detected)
- [ ] **Output Directory**: `dist` (auto-detected)
- [ ] **Install Command**: `npm install` (auto-detected)
- [ ] **Environment Variables**: All configured in Vercel dashboard

### 3. Deploy
- [ ] Click "Deploy" button
- [ ] Monitor build logs for errors
- [ ] Wait for deployment to complete
- [ ] Verify deployment URL works

### 4. Post-Deployment Verification
- [ ] **Homepage loads** without errors
- [ ] **All pages accessible** and render correctly
- [ ] **Search functionality works**
- [ ] **Filtering works**
- [ ] **Tool detail pages load** with markdown rendering
- [ ] **Submit tool dialog works**
- [ ] **No console errors** (check browser DevTools)
- [ ] **No 404 errors** for assets
- [ ] **Performance acceptable** (check Network tab)
- [ ] **Mobile responsive** - test on mobile device
- [ ] **Supabase connection working** - data loads correctly

## Monitoring & Maintenance

### Ongoing Checks
- [ ] **Monitor Vercel Analytics** for performance metrics
- [ ] **Check error logs** regularly
- [ ] **Monitor Supabase usage** and rate limits
- [ ] **Test critical user flows** weekly
- [ ] **Keep dependencies updated** (security patches)

### Rollback Plan
- [ ] Previous deployment URL available
- [ ] Can revert to previous commit if needed
- [ ] Backup of database available

## Common Issues & Solutions

### Build Fails
**Issue**: Build command fails
- [ ] Check `npm run build` works locally
- [ ] Verify all environment variables set in Vercel
- [ ] Check for TypeScript errors: `npm run type-check`
- [ ] Check for lint errors: `npm run lint`

### App Crashes After Deploy
**Issue**: App works locally but fails on Vercel
- [ ] Check browser console for errors
- [ ] Verify environment variables are correct
- [ ] Check Supabase connection in production
- [ ] Review Vercel deployment logs
- [ ] Test with `npm run preview` locally

### Assets Not Loading
**Issue**: Images or CSS not loading
- [ ] Verify asset paths are relative or use CDN
- [ ] Check `.vercelignore` doesn't exclude assets
- [ ] Verify public directory structure
- [ ] Check cache headers in `vercel.json`

### Performance Issues
**Issue**: App slow on Vercel
- [ ] Check bundle size: `npm run build` output
- [ ] Verify code splitting working
- [ ] Check Lighthouse scores
- [ ] Optimize images
- [ ] Consider using Vercel Analytics for insights

### Environment Variables Not Working
**Issue**: Env vars undefined in production
- [ ] Verify variables prefixed with `VITE_` (Vite requirement)
- [ ] Check variables set in Vercel dashboard (not `.env`)
- [ ] Redeploy after adding variables
- [ ] Verify variable names match exactly

## Deployment Success Criteria

✅ **Your deployment is successful when:**
1. Build completes without errors
2. All pages load and render correctly
3. All features work as expected
4. No console errors in browser
5. Supabase data loads correctly
6. Performance is acceptable (Lighthouse > 80)
7. Mobile responsive design works
8. Security headers present
9. No 404 errors for assets
10. All environment variables working

## Quick Reference

### Local Testing Commands
```bash
# Check code quality
npm run lint
npm run type-check

# Build and preview production
npm run build
npm run preview

# Full validation
npm run validate
```

### Vercel CLI Commands (Optional)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from CLI
vercel

# Deploy to production
vercel --prod

# View deployment logs
vercel logs
```

### Environment Variables Template
```
VITE_SUPABASE_PROJECT_ID=your_project_id
VITE_SUPABASE_PUBLISHABLE_KEY=your_key
VITE_SUPABASE_URL=https://your-project.supabase.co
```

---

**Last Updated**: 2025-10-19
**Framework**: Vite + React + TypeScript
**Deployment Platform**: Vercel
