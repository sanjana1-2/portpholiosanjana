# Deploy to Netlify - Step by Step

## Step 1: Build Your Portfolio
Run this command in your terminal:

```bash
cd client
npm run build
```

Wait for it to finish. You'll see a `client/build` folder created.

## Step 2: Create Netlify Account
1. Go to https://netlify.com
2. Click **"Sign up"**
3. Choose **"Sign up with GitHub"**
4. Authorize Netlify to access your GitHub

## Step 3: Deploy Your Portfolio
1. In Netlify dashboard, click **"Add new site"** → **"Import an existing project"**
2. Select **GitHub** as your Git provider
3. Find and select your repository: `portpholiosanjana`
4. Click **"Deploy site"**

Netlify will automatically:
- Build your project
- Deploy it
- Give you a live URL

## Step 4: Wait for Deployment
- Deployment takes 2-5 minutes
- You'll see a URL like: `https://your-portfolio-name.netlify.app`
- Your portfolio is now LIVE! 🎉

## Step 5: Custom Domain (Optional)
1. In Netlify, go to **"Domain settings"**
2. Click **"Add custom domain"**
3. Enter your domain name
4. Follow the instructions

## Your Live Portfolio
Once deployed, you can:
- Share the URL with anyone
- It updates automatically when you push to GitHub
- All sections work (About, Projects, Skills, etc.)
- Contact form displays (but won't save messages)

## Troubleshooting

**Build failed?**
- Check that `client/package.json` exists
- Make sure all dependencies are installed: `npm install`

**Site not loading?**
- Wait 5 minutes for deployment to complete
- Check Netlify deploy logs for errors

**Want to update?**
- Just push to GitHub
- Netlify auto-deploys in 1-2 minutes

## Done!
Your portfolio is now live on Netlify! 🚀
