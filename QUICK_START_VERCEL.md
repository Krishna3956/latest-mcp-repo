# Quick Start: Deploy to Vercel in 5 Minutes

**Status**: ✅ Your app is ready to deploy!

---

## Step 1: Prepare Your Code (1 minute)

```bash
# Make sure everything is committed
git add .
git commit -m "Optimize for Vercel deployment"
git push origin main
```

---

## Step 2: Create Vercel Account (2 minutes)

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel

---

## Step 3: Deploy Your App (2 minutes)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Select your GitHub repository
4. Click "Import"

**Vercel will auto-detect:**
- Framework: Vite ✓
- Build Command: `npm run build` ✓
- Output Directory: `dist` ✓

---

## Step 4: Add Environment Variables (1 minute)

In Vercel project settings, add:

| Variable | Value |
|----------|-------|
| `VITE_SUPABASE_PROJECT_ID` | `ctpswgynnyeuxouaqjuq` |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | `eyJhbGc...` (your key) |
| `VITE_SUPABASE_URL` | `https://ctpswgynnyeuxouaqjuq.supabase.co` |

**Get these from:**
- Go to [Supabase Dashboard](https://app.supabase.com)
- Select your project
- Settings → API
- Copy the values

---

## Step 5: Deploy! (Automatic)

Click "Deploy" button and wait for completion.

Your app will be live at: **https://your-project.vercel.app**

---

## Verify It Works (2 minutes)

1. Visit your deployment URL
2. Test:
   - [ ] Homepage loads
   - [ ] Search works
   - [ ] Filtering works
   - [ ] Tool detail pages load
   - [ ] No console errors (F12)

---

## That's It! 🎉

Your app is now live on Vercel!

### Automatic Updates
- Every push to `main` automatically deploys
- Preview deployments for pull requests
- Automatic HTTPS

### Next Steps
- Set up custom domain (optional)
- Monitor Vercel Analytics
- Keep dependencies updated

---

## Troubleshooting

### Build Fails
- Check environment variables are set
- Verify variable names are exact
- Redeploy after changes

### App Crashes
- Check browser console (F12)
- Verify Supabase connection
- Check Vercel deployment logs

### Need More Help?
See [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md)

---

**Status**: ✅ Ready to deploy!  
**Time to Production**: ~10 minutes
