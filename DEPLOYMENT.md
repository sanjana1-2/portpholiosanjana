# 🚀 Deployment Guide - Sanjana Bhardwaj Portfolio

This guide covers deploying your portfolio to production using Netlify (Frontend) and Railway/Heroku (Backend).

## 📋 Prerequisites

- GitHub account with repository pushed
- Netlify account (free tier available)
- Railway or Heroku account (free tier available)
- MongoDB Atlas account (free tier available)

## 🌐 Frontend Deployment (Netlify)

### Step 1: Connect GitHub to Netlify

1. Go to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Select GitHub and authorize
4. Choose your repository: `sanjana1-2/PORTFOLIO`
5. Click "Connect repository"

### Step 2: Configure Build Settings

Netlify should auto-detect the settings from `netlify.toml`:
- **Build command**: `cd client && npm run build`
- **Publish directory**: `client/build`

If not auto-detected, set them manually:
1. Go to Site settings → Build & deploy
2. Set Build command: `cd client && npm run build`
3. Set Publish directory: `client/build`

### Step 3: Deploy

1. Click "Deploy site"
2. Wait for build to complete (usually 2-3 minutes)
3. Your site will be live at: `https://your-site-name.netlify.app`

### Step 4: Custom Domain (Optional)

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain and follow DNS setup

---

## 🔧 Backend Deployment (Railway)

### Step 1: Create Railway Account

1. Go to [Railway](https://railway.app)
2. Sign up with GitHub
3. Create a new project

### Step 2: Connect GitHub Repository

1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Choose `sanjana1-2/PORTFOLIO`
4. Select the repository

### Step 3: Configure Environment Variables

1. Go to Variables tab
2. Add the following variables:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
NODE_ENV=production
PORT=5000
```

### Step 4: Configure Start Command

1. Go to Settings
2. Set Start Command: `cd server && npm start`
3. Set Root Directory: `.` (root)

### Step 5: Deploy

1. Railway will automatically deploy
2. Your backend will be live at: `https://your-railway-app.up.railway.app`

---

## 🗄️ MongoDB Atlas Setup

### Step 1: Create MongoDB Cluster

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Create a new project
4. Create a new cluster (free tier available)

### Step 2: Create Database User

1. Go to Database Access
2. Click "Add New Database User"
3. Create username and password
4. Save credentials

### Step 3: Get Connection String

1. Go to Clusters
2. Click "Connect"
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<username>` and `<password>` with your credentials

### Step 4: Add to Environment Variables

Add to Railway/Heroku:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
```

---

## 🔗 Connect Frontend to Backend

### Update API Base URL

In `client/src/App.js` or API service file:

```javascript
// Development
const API_BASE = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:5000' 
  : 'https://your-railway-app.up.railway.app';

// Use in axios calls
axios.get(`${API_BASE}/api/projects`);
```

Or create an `.env` file in client:
```
REACT_APP_API_URL=https://your-railway-app.up.railway.app
```

---

## ✅ Deployment Checklist

- [ ] GitHub repository is up to date
- [ ] MongoDB Atlas cluster created
- [ ] MongoDB connection string obtained
- [ ] Netlify site connected and deployed
- [ ] Railway/Heroku backend deployed
- [ ] Environment variables set correctly
- [ ] Frontend API URL updated
- [ ] Test all API endpoints
- [ ] Test contact form submission
- [ ] Test project loading
- [ ] Verify splash screen animation
- [ ] Check responsive design on mobile

---

## 🧪 Testing After Deployment

### Frontend Tests
1. Visit your Netlify URL
2. Check splash screen animation (3 seconds)
3. Verify all sections load
4. Test responsive design (mobile, tablet, desktop)
5. Check custom cursor functionality
6. Verify all animations work

### Backend Tests
1. Test health endpoint: `https://your-backend.up.railway.app/api/health`
2. Test projects endpoint: `https://your-backend.up.railway.app/api/projects`
3. Test contact form submission
4. Check MongoDB data is being saved

---

## 🐛 Troubleshooting

### Build Fails on Netlify
- Check `client/package.json` for correct dependencies
- Ensure all imports are correct
- Check for console errors in build logs

### Backend Not Connecting
- Verify MongoDB URI is correct
- Check environment variables are set
- Ensure CORS is enabled in Express
- Check firewall/network settings

### API Calls Failing
- Verify backend URL in frontend code
- Check CORS headers
- Ensure backend is running
- Check MongoDB connection

### Splash Screen Not Showing
- Verify `SplashScreen.js` is imported in `App.js`
- Check CSS files are loaded
- Verify image paths are correct

---

## 📊 Monitoring

### Netlify
- Go to Analytics tab to see traffic
- Check Deploy logs for build issues
- Monitor performance metrics

### Railway
- View logs in Railway dashboard
- Monitor resource usage
- Check for errors in logs

---

## 🔄 Continuous Deployment

Both Netlify and Railway support automatic deployment:
- Push to GitHub → Automatic build and deploy
- No manual deployment needed
- Rollback available if needed

---

## 💡 Tips

1. **Keep secrets safe**: Never commit `.env` files
2. **Test locally first**: Run `npm run dev` before pushing
3. **Monitor logs**: Check deployment logs for errors
4. **Use staging**: Create a staging branch for testing
5. **Backup database**: Regular MongoDB backups recommended

---

## 📞 Support

If you encounter issues:
1. Check deployment logs
2. Verify environment variables
3. Test API endpoints manually
4. Check browser console for errors
5. Review MongoDB connection

---

**Deployment Status**: Ready to Deploy ✅
**Last Updated**: January 2026
