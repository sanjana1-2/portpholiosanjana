# ⚡ Quick Deploy Guide - 5 Minutes

Follow these steps to deploy your portfolio in 5 minutes!

## 🎯 Step 1: MongoDB Atlas (2 minutes)

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up with GitHub
3. Create a new project
4. Create a free cluster
5. Create a database user (save username & password)
6. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/portfolio`

## 🌐 Step 2: Deploy Frontend on Netlify (2 minutes)

1. Go to https://netlify.com
2. Click "New site from Git"
3. Connect GitHub → Select `sanjana1-2/PORTFOLIO`
4. Build settings auto-fill from `netlify.toml`
5. Click "Deploy site"
6. ✅ Frontend live in 2-3 minutes!

**Your Frontend URL**: `https://your-site-name.netlify.app`

## 🔧 Step 3: Deploy Backend on Railway (1 minute)

1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select `sanjana1-2/PORTFOLIO`
5. Go to Variables tab
6. Add environment variable:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   NODE_ENV=production
   ```
7. ✅ Backend deployed automatically!

**Your Backend URL**: Check Railway dashboard for URL

## 🔗 Step 4: Connect Frontend to Backend (Optional but Recommended)

If your backend URL is different from localhost:

1. Open `client/src/App.js`
2. Find API calls (axios.get, axios.post)
3. Update to use your backend URL:
   ```javascript
   const API_URL = 'https://your-railway-url.up.railway.app';
   ```
4. Commit and push to GitHub
5. Netlify auto-redeploys

---

## ✅ Verification

### Test Frontend
- Visit your Netlify URL
- Check splash screen animation
- Verify all sections load

### Test Backend
- Visit `https://your-railway-url.up.railway.app/api/health`
- Should see: `{"status":"Server is running"}`

### Test API Connection
- Submit contact form
- Check if data appears in MongoDB

---

## 🎉 Done!

Your portfolio is now live! 

**Frontend**: https://your-site-name.netlify.app
**Backend**: https://your-railway-url.up.railway.app

---

## 📱 Share Your Portfolio

- Share the Netlify URL with everyone
- Add to LinkedIn profile
- Include in resume
- Share on social media

---

## 🆘 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Check `client/package.json` dependencies |
| Backend not connecting | Verify MongoDB URI in Railway variables |
| API calls fail | Check backend URL in frontend code |
| Splash screen missing | Verify `SplashScreen.js` import in `App.js` |

---

**Time to Deploy**: ~5 minutes ⏱️
**Cost**: FREE (all services have free tier)
**Status**: Ready to Go! 🚀
