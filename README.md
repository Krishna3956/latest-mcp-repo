# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/2852fd63-ae48-4c6c-a82f-da09d8352ab9

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/2852fd63-ae48-4c6c-a82f-da09d8352ab9) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Option 1: Deploy to Vercel (Recommended)

**Prerequisites:**
- Vercel account (free at [vercel.com](https://vercel.com))
- GitHub account with repository access

**Steps:**
1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Configure environment variables:
   - `VITE_SUPABASE_PROJECT_ID`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_URL`
6. Click "Deploy"
7. Your app will be live at `https://your-project.vercel.app`

**Automatic Deployments:**
- Every push to `main` branch automatically deploys to production
- Preview deployments created for pull requests

### Option 2: Deploy via Lovable

Simply open [Lovable](https://lovable.dev/projects/2852fd63-ae48-4c6c-a82f-da09d8352ab9) and click on Share → Publish.

### Option 3: Deploy to Custom Domain

**With Vercel:**
1. Deploy to Vercel (see Option 1)
2. In Vercel dashboard, go to Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

**With Lovable:**
Navigate to Project > Settings > Domains and click Connect Domain.
Read more: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Pre-Deployment Checklist

Before deploying to production, ensure:
- [ ] All environment variables configured
- [ ] `npm run build` completes without errors
- [ ] `npm run lint` passes all checks
- [ ] `npm run preview` works correctly
- [ ] All features tested locally
- [ ] No console errors in browser DevTools

See [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) for comprehensive pre-deployment verification.

## Environment Variables

Create a `.env` file in the root directory (see `.env.example`):

```env
VITE_SUPABASE_PROJECT_ID=your_project_id
VITE_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
VITE_SUPABASE_URL=https://your-project.supabase.co
```

**Important:** Never commit `.env` to version control. Use Vercel's environment variable dashboard for production.
