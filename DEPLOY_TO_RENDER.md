# Deploy Your Portfolio to Render - Step by Step

## What You'll Get
- Free backend server on Render
- Free frontend hosting on Render
- Free PostgreSQL database
- Live portfolio URL

---

## STEP 1: Create Render Account (2 minutes)

1. Go to https://render.com
2. Click "Sign up"
3. Choose "Sign up with GitHub"
4. Authorize Render to access your GitHub
5. Done!

---

## STEP 2: Create PostgreSQL Database (3 minutes)

1. In Render dashboard, click **"New +"** button (top right)
2. Select **"PostgreSQL"**
3. Fill in the form:
   - **Name**: `portfolio-db`
   - **Database**: `portfolio`
   - **User**: `portfolio_user`
   - **Region**: Choose closest to you (e.g., Singapore, US East)
   - **Plan**: Select **"Free"**
4. Click **"Create Database"**
5. **Wait 2-3 minutes** for database to be ready
6. When ready, you'll see a connection string. **Copy the "Internal Database URL"** (looks like: `postgresql://...`)
7. Save this URL somewhere safe - you'll need it in Step 4

---

## STEP 3: Build Your Frontend

Before deploying, build your React app:

```bash
cd client
npm run build
```

This creates a `client/build` folder with optimized files.

---

## STEP 4: Deploy Backend to Render (5 minutes)

1. Click **"New +"** → **"Web Service"**
2. Select your GitHub repository: `portpholiosanjana`
3. Fill in:
   - **Name**: `portfolio-backend`
   - **Environment**: `Node`
   - **Build Command**: 
     ```
     cd client && npm run build && cd ../server && npm install
     ```
   - **Start Command**: 
     ```
     cd server && node index.js
     ```
   - **Plan**: Select **"Free"**
4. Click **"Create Web Service"**
5. Wait for it to deploy (2-3 minutes)

### Add Environment Variables to Backend:

1. In your Web Service dashboard, click **"Environment"** tab
2. Add these variables:
   - **Key**: `DATABASE_URL`
     **Value**: Paste the PostgreSQL URL from Step 2
   - **Key**: `NODE_ENV`
     **Value**: `production`
   - **Key**: `PORT`
     **Value**: `5000`
3. Click **"Save"**
4. Render will auto-redeploy with the new variables

---

## STEP 5: Deploy Frontend to Render (3 minutes)

1. Click **"New +"** → **"Static Site"**
2. Select your GitHub repository: `portpholiosanjana`
3. Fill in:
   - **Name**: `portfolio-frontend`
   - **Build Command**: 
     ```
     cd client && npm run build
     ```
   - **Publish Directory**: `client/build`
   - **Plan**: Select **"Free"**
4. Click **"Create Static Site"**
5. Wait for deployment (1-2 minutes)

---

## STEP 6: Connect Frontend to Backend

Your frontend needs to know where the backend is.

1. Get your backend URL from Render:
   - Go to your Web Service (portfolio-backend)
   - Copy the URL (looks like: `https://portfolio-backend.onrender.com`)

2. Update your frontend code:
   - Open `client/src/App.js`
   - Find where you make API calls
   - Update to use your backend URL:

```javascript
const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://portfolio-backend.onrender.com'
  : 'http://localhost:5000';

// Then use API_URL in your axios calls:
// axios.get(`${API_URL}/api/projects`)
```

3. Also check `client/src/components/Contact.js` and update any API calls there

4. Push to GitHub:
```bash
git add .
git commit -m "Update API URLs for production"
git push origin main
```

5. Render will auto-deploy your frontend with the new URLs

---

## STEP 7: Test Your Deployment

1. Wait for both services to finish deploying (check the logs)
2. Visit your frontend URL: `https://portfolio-frontend.onrender.com`
3. Test the contact form - it should save messages to your database
4. Check the backend health: `https://portfolio-backend.onrender.com/api/health`

---

## TROUBLESHOOTING

**Frontend not loading?**
- Check the Static Site logs in Render
- Verify build command is correct
- Make sure `client/build` folder exists

**Backend not working?**
- Check Web Service logs in Render
- Verify DATABASE_URL is correct
- Check that PORT is set to 5000

**Contact form not working?**
- Check that API_URL is correct in frontend code
- Verify backend is running
- Check browser console for errors

**Database connection failing?**
- Verify DATABASE_URL is correct
- Make sure it's the "Internal Database URL"
- Check that database is ready (not still initializing)

---

## Your Live URLs

Once deployed:
- **Frontend**: https://portfolio-frontend.onrender.com
- **Backend**: https://portfolio-backend.onrender.com
- **Database**: PostgreSQL on Render

---

## Next Steps

1. Follow steps 1-7 above
2. Test everything works
3. Share your live portfolio!

Need help? Check Render docs: https://render.com/docs
