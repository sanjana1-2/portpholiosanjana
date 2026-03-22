# Step-by-Step Render Deployment Guide

## STEP 1: Create MongoDB Database (5 minutes)

### 1.1 Go to MongoDB Atlas
- Open https://www.mongodb.com/cloud/atlas
- Click "Sign Up" or "Sign In"
- Create account with email or Google

### 1.2 Create Free Cluster
- Click "Create" → "Build a Cluster"
- Choose "Free" tier (M0)
- Select region closest to you
- Click "Create Cluster"
- Wait 2-3 minutes for cluster to be ready

### 1.3 Create Database User
- Go to "Database Access" (left menu)
- Click "Add New Database User"
- Username: `sanjana`
- Password: Create strong password (save it!)
- Click "Add User"

### 1.4 Get Connection String
- Go to "Clusters" (left menu)
- Click "Connect" button
- Choose "Connect your application"
- Copy the connection string
- Replace `<password>` with your password
- Replace `myFirstDatabase` with `portfolio`
- Example: `mongodb+srv://sanjana:password123@cluster.mongodb.net/portfolio`
- **SAVE THIS STRING** - you'll need it in Step 3

---

## STEP 2: Prepare GitHub Repository

### 2.1 Verify Your Code is Pushed
- Go to https://github.com/sanjana1-2/digitalpresence
- Check if you see:
  - `client/` folder
  - `server/` folder
  - `package.json`
  - `README.md`

If not, run:
```bash
git add -A
git commit -m "Final portfolio update"
git push origin main
```

### 2.2 Check Your Repository Settings
- Go to GitHub repo settings
- Make sure it's public (not private)
- Note your repo URL

---

## STEP 3: Deploy Backend on Render

### 3.1 Create Render Account
- Go to https://render.com
- Click "Sign Up"
- Choose "Sign up with GitHub"
- Authorize Render to access your GitHub

### 3.2 Create Web Service for Backend
- Click "New +" button (top right)
- Select "Web Service"
- Choose your GitHub repo (digitalpresence)
- Click "Connect"

### 3.3 Configure Backend Service
Fill in these fields:

**Name:** `sanjana-portfolio-api`

**Environment:** Node

**Build Command:** 
```
npm install
```

**Start Command:**
```
cd server && node index.js
```

**Root Directory:** (leave empty)

Click "Create Web Service"

### 3.4 Add Environment Variables
- Wait for the service to be created
- Go to "Environment" tab
- Click "Add Environment Variable"
- Add these variables:

**Variable 1:**
- Key: `MONGODB_URI`
- Value: (paste your MongoDB connection string from Step 1.4)

**Variable 2:**
- Key: `NODE_ENV`
- Value: `production`

**Variable 3:**
- Key: `PORT`
- Value: `5000`

Click "Save"

### 3.5 Wait for Deployment
- Go to "Logs" tab
- Wait until you see: "Server running on port 5000"
- This takes 2-3 minutes
- Copy your backend URL (e.g., `https://sanjana-portfolio-api.onrender.com`)
- **SAVE THIS URL** - you'll need it in Step 4

---

## STEP 4: Deploy Frontend on Render

### 4.1 Create Static Site
- Click "New +" button
- Select "Static Site"
- Choose your GitHub repo (digitalpresence)
- Click "Connect"

### 4.2 Configure Frontend Service
Fill in these fields:

**Name:** `sanjana-portfolio`

**Build Command:**
```
cd client && npm run build
```

**Publish Directory:**
```
client/build
```

Click "Create Static Site"

### 4.3 Add Environment Variable
- Go to "Environment" tab
- Click "Add Environment Variable"

**Variable:**
- Key: `REACT_APP_API_URL`
- Value: (paste your backend URL from Step 3.5)
  - Example: `https://sanjana-portfolio-api.onrender.com`

Click "Save"

### 4.4 Wait for Deployment
- Go to "Logs" tab
- Wait until you see: "Build successful"
- This takes 3-5 minutes
- Copy your frontend URL (e.g., `https://sanjana-portfolio.onrender.com`)

---

## STEP 5: Test Your Deployment

### 5.1 Visit Your Portfolio
- Open your frontend URL in browser
- Example: `https://sanjana-portfolio.onrender.com`
- You should see your portfolio homepage

### 5.2 Test Features
- Scroll through sections
- Check if projects load
- Try the contact form
- Open browser console (F12) for any errors

### 5.3 If Something Doesn't Work
- Check Render logs for errors
- Verify MongoDB connection string is correct
- Make sure backend URL is set in frontend environment
- Redeploy if needed (click "Manual Deploy")

---

## STEP 6: Custom Domain (Optional)

### 6.1 Add Custom Domain
- Go to your Static Site settings
- Click "Add Custom Domain"
- Enter your domain (e.g., sanjana.com)
- Follow DNS instructions

---

## Your Portfolio is Live!

**Frontend:** https://sanjana-portfolio.onrender.com
**Backend API:** https://sanjana-portfolio-api.onrender.com

### What's Deployed:
✅ React frontend with all components
✅ Node.js backend with API routes
✅ MongoDB database
✅ Contact form functionality
✅ Project management system

### Next Steps:
- Share your portfolio URL
- Monitor Render logs for issues
- Update content anytime by pushing to GitHub
- Render auto-deploys on push

---

## Troubleshooting

### Backend not starting?
- Check MongoDB connection string
- Verify environment variables are set
- Check server logs for errors

### Frontend not loading?
- Check build logs
- Verify REACT_APP_API_URL is set
- Clear browser cache

### Projects not showing?
- Check backend is running
- Verify MongoDB has data
- Check browser console for API errors

### Contact form not working?
- Verify backend URL in frontend
- Check MongoDB connection
- Check server logs

---

## Questions?
Check Render documentation: https://render.com/docs
