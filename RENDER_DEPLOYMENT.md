# Deploy Portfolio on Render

## Step 1: Prepare Your Repository
Your portfolio is already on GitHub at https://github.com/sanjana1-2/port

## Step 2: Create Render Account
1. Go to https://render.com
2. Sign up with GitHub account
3. Authorize Render to access your repositories

## Step 3: Deploy Backend (Node.js Server)

### Create Web Service for Backend
1. Click "New +" → "Web Service"
2. Connect your GitHub repository (sanjana1-2/digitalpresence or portpholiosanjana)
3. Configure:
   - **Name**: sanjana-portfolio-api
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `cd server && node index.js`
   - **Root Directory**: (leave empty)

4. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `NODE_ENV`: production
   - `PORT`: 5000

5. Click "Create Web Service"

## Step 4: Deploy Frontend (React)

### Create Static Site for Frontend
1. Click "New +" → "Static Site"
2. Connect your GitHub repository
3. Configure:
   - **Name**: sanjana-portfolio
   - **Build Command**: `cd client && npm run build`
   - **Publish Directory**: `client/build`

4. Click "Create Static Site"

## Step 5: Connect Frontend to Backend

After both are deployed:

1. Get your backend URL from Render (e.g., https://sanjana-portfolio-api.onrender.com)
2. Update `client/src/App.js` to use the backend URL:

```javascript
const API_URL = process.env.REACT_APP_API_URL || 'https://sanjana-portfolio-api.onrender.com';

// Use API_URL in axios calls
axios.get(`${API_URL}/api/projects`)
```

3. Add environment variable in Static Site settings:
   - `REACT_APP_API_URL`: https://sanjana-portfolio-api.onrender.com

4. Redeploy frontend

## Step 6: MongoDB Setup

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Add to Render backend environment variables as `MONGODB_URI`

## Deployment Complete!
Your portfolio will be live at the Render Static Site URL provided.

### Troubleshooting
- Check Render logs for errors
- Verify MongoDB connection string
- Ensure backend and frontend URLs match
- Check CORS settings in server/index.js
