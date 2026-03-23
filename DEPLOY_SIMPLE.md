# Deploy to Netlify - No Database Needed

## Simplest Way: Deploy Only Frontend

### Step 1: Build Your Frontend
```bash
cd client
npm run build
```

This creates a `client/build` folder with your portfolio.

### Step 2: Deploy to Netlify
1. Go to https://netlify.com
2. Sign up with GitHub
3. Click **"New site from Git"**
4. Select your GitHub repo: `portpholiosanjana`
5. Fill in:
   - Build Command: `cd client && npm run build`
   - Publish Directory: `client/build`
6. Click **"Deploy"**

### Done!
Your portfolio will be live at a Netlify URL (e.g., `https://your-portfolio.netlify.app`)

---

## Alternative: Deploy Frontend + Backend Separately

### Frontend on Netlify (same as above)

### Backend on Render (without database)
1. Go to https://render.com
2. Click **"New +"** → **"Web Service"**
3. Select your GitHub repo
4. Fill in:
   - Name: `portfolio-backend`
   - Build Command: `cd server && npm install`
   - Start Command: `cd server && node index.js`
   - Plan: **Free**
5. Click **"Create Web Service"**

### Connect Frontend to Backend
1. Get your backend URL from Render
2. Update `client/src/App.js`:
   ```javascript
   const API_URL = process.env.NODE_ENV === 'production' 
     ? 'https://portfolio-backend.onrender.com'
     : 'http://localhost:5000';
   ```
3. Push to GitHub and Netlify will auto-deploy

---

## What You Get
- ✅ Live portfolio website
- ✅ All sections visible (About, Projects, Skills, etc.)
- ✅ Contact form (messages won't save without backend)
- ✅ Free hosting
- ✅ Auto-deploy on GitHub push

## Limitations Without Backend
- Contact form won't save messages
- No admin panel to view messages
- No database storage

## To Enable Contact Form
Deploy backend on Render (see Alternative section above)
