# Render Deployment - Quick Start

## Prerequisites
- GitHub account with your portfolio pushed
- MongoDB Atlas account (free tier available)
- Render account

## 5-Minute Setup

### 1. MongoDB Atlas Setup (2 min)
```
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Create database user
4. Get connection string: mongodb+srv://username:password@cluster.mongodb.net/portfolio
5. Copy this string
```

### 2. Deploy Backend on Render (2 min)
```
1. Go to https://render.com/dashboard
2. Click "New +" → "Web Service"
3. Select your GitHub repo (digitalpresence or portpholiosanjana)
4. Fill in:
   - Name: sanjana-portfolio-api
   - Build: npm install
   - Start: cd server && node index.js
5. Add Environment Variables:
   - MONGODB_URI: (paste your MongoDB connection string)
   - NODE_ENV: production
6. Click "Create Web Service"
7. Wait for deployment (2-3 minutes)
8. Copy the backend URL (e.g., https://sanjana-portfolio-api.onrender.com)
```

### 3. Deploy Frontend on Render (1 min)
```
1. Click "New +" → "Static Site"
2. Select your GitHub repo
3. Fill in:
   - Name: sanjana-portfolio
   - Build: cd client && npm run build
   - Publish: client/build
4. Add Environment Variable:
   - REACT_APP_API_URL: (paste your backend URL from step 2)
5. Click "Create Static Site"
6. Wait for deployment
```

## Your Portfolio is Live!
- Frontend: https://sanjana-portfolio.onrender.com
- Backend API: https://sanjana-portfolio-api.onrender.com

## Test It
1. Visit your frontend URL
2. Check if projects load
3. Try contact form
4. Check browser console for errors

## If Something Goes Wrong
- Check Render logs (click service → Logs)
- Verify MongoDB connection string
- Ensure backend URL is correct in frontend
- Check GitHub repo has latest code
