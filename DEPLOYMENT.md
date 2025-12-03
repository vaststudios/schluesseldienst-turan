# Deployment Guide - Vercel

## Quick Deploy

Your site is ready to deploy! Follow these steps:

### Step 1: Login to Vercel

Run this command in your terminal:
```bash
npx vercel login
```

This will open your browser to authenticate with Vercel.

### Step 2: Deploy to Production

Once logged in, deploy your site:
```bash
npx vercel --prod
```

### Step 3: Follow the Prompts

The CLI will ask you:
1. **Set up and deploy?** → Type `Y` and press Enter
2. **Which scope?** → Select your team (Vast Studios)
3. **Link to existing project?** → Type `N` for a new project
4. **What's your project's name?** → Enter a name (e.g., `lockfix`)
5. **In which directory is your code located?** → Press Enter (current directory)

### Alternative: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository (if connected) or drag & drop your project folder
4. Vercel will auto-detect it's a static site
5. Click "Deploy"

## Project Configuration

The `vercel.json` file is configured for:
- ✅ Static site deployment
- ✅ Build command: `npm run build` (compiles Tailwind CSS)
- ✅ Cache headers for assets and CSS
- ✅ Automatic optimization

## Post-Deployment

After deployment, you'll get:
- 🌐 A production URL (e.g., `lockfix.vercel.app`)
- 🔄 Automatic deployments on git push (if connected)
- 📊 Analytics and performance monitoring
- 🔒 HTTPS enabled by default

## Environment Variables

If you need to add environment variables (like API keys):
1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add your variables

## Custom Domain

To add a custom domain:
1. Go to project settings → Domains
2. Add your domain
3. Follow DNS configuration instructions

