# Vercel Webhook Setup Guide

## ✅ Current Status

Your GitHub repository is **already connected** to Vercel, which means webhooks are automatically configured!

## 🔍 How Vercel Webhooks Work

When you connect a GitHub repository to Vercel:
1. ✅ Vercel automatically creates a webhook in your GitHub repository
2. ✅ The webhook listens for push events
3. ✅ When you push to GitHub, Vercel receives the webhook
4. ✅ Vercel automatically builds and deploys your project

## 🚀 Verify Webhook is Active

### Option 1: Check GitHub Webhooks

1. Go to your GitHub repository: https://github.com/Vast-Studios/lockfix
2. Navigate to **Settings** → **Webhooks**
3. You should see a webhook from Vercel:
   - **Payload URL**: `https://api.vercel.com/v1/integrations/github/...`
   - **Events**: `push`, `pull_request`
   - **Status**: Active (green checkmark)

### Option 2: Check Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Select your **lockfix** project
3. Go to **Settings** → **Git**
4. Verify:
   - ✅ GitHub repository is connected
   - ✅ Production branch: `main`
   - ✅ Automatic deployments: Enabled

## 🧪 Test Automatic Deployment

To verify it's working:

```bash
# Make a small change
echo "<!-- Test deployment -->" >> index.html

# Commit and push
git add .
git commit -m "Test automatic deployment"
git push origin main
```

Then check:
- Vercel Dashboard → Deployments (should see new deployment starting)
- GitHub → Actions (if you have GitHub Actions enabled)

## 🔧 Troubleshooting

### If Webhook Isn't Working:

1. **Reconnect GitHub Repository**:
   ```bash
   npx vercel git disconnect
   npx vercel git connect
   ```

2. **Check GitHub Permissions**:
   - GitHub → Settings → Applications → Authorized OAuth Apps
   - Find Vercel and ensure it has repository access

3. **Manually Trigger Deployment**:
   ```bash
   npx vercel --prod
   ```

## 📊 Webhook Events

Vercel listens for these GitHub events:
- **push** → Deploy to production (if main branch) or preview
- **pull_request** → Create preview deployment
- **pull_request.closed** → Clean up preview deployment

## 🎯 Current Configuration

- **Repository**: `Vast-Studios/lockfix`
- **Branch**: `main`
- **Auto-deploy**: ✅ Enabled (should be)
- **Webhook**: ✅ Created automatically by Vercel

## 💡 Pro Tips

1. **Preview Deployments**: Every PR gets its own preview URL
2. **Production Deployments**: Only pushes to `main` deploy to production
3. **Build Logs**: Check Vercel Dashboard for detailed build logs
4. **Notifications**: Get notified via email or Slack when deployments complete

