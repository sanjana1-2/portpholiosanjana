# How to Run Portfolio in VS Code

## Prerequisites
- Visual Studio Code installed
- Node.js installed (v14+)
- MongoDB running locally OR MongoDB Atlas connection string

---

## STEP 1: Open Project in VS Code

### 1.1 Open Folder
- Open VS Code
- Click "File" → "Open Folder"
- Navigate to your `portsanjana` folder
- Click "Select Folder"

### 1.2 Open Terminal
- Click "Terminal" → "New Terminal" (or press Ctrl + `)
- You should see terminal at bottom of VS Code

---

## STEP 2: Install Dependencies

### 2.1 Install Root Dependencies
In the terminal, type:
```bash
npm install
```
Wait for it to complete (1-2 minutes)

### 2.2 Install Client Dependencies
```bash
cd client
npm install
cd ..
```
Wait for it to complete (2-3 minutes)

### 2.3 Install Server Dependencies
```bash
cd server
npm install
cd ..
```
Wait for it to complete (1-2 minutes)

---

## STEP 3: Setup Environment Variables

### 3.1 Create .env file in server folder
- Right-click on `server` folder
- Click "New File"
- Name it `.env`
- Add this content:

```
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
PORT=5000
```

**OR if using MongoDB Atlas:**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
NODE_ENV=development
PORT=5000
```

---

## STEP 4: Start MongoDB (if using local)

### 4.1 Check if MongoDB is Running
Open a new terminal and type:
```bash
mongosh
```

If it connects, MongoDB is running. Type `exit` to close.

If not, install MongoDB from: https://www.mongodb.com/try/download/community

---

## STEP 5: Run the Application

### 5.1 Start Both Backend and Frontend
In VS Code terminal, type:
```bash
npm run dev
```

You should see:
```
[0] Server running on port 5000
[0] MongoDB connected
[1] webpack compiled successfully
```

### 5.2 Open in Browser
- Open browser
- Go to: http://localhost:3000
- Your portfolio should load!

---

## STEP 6: Make Changes and See Live Updates

### 6.1 Edit Files
- Open any file in `client/src/`
- Make changes (e.g., edit About.js)
- Save file (Ctrl + S)

### 6.2 See Changes Instantly
- Browser automatically refreshes
- Changes appear immediately

### 6.3 Backend Changes
- Edit files in `server/`
- Save file
- Server restarts automatically
- Refresh browser to see changes

---

## STEP 7: Stop the Server

### 7.1 Stop Running Server
- In VS Code terminal
- Press `Ctrl + C`
- Type `Y` and press Enter
- Server stops

---

## Useful VS Code Tips

### Open Multiple Terminals
- Click "+" icon in terminal
- Now you have 2 terminals
- Run backend in one, frontend in other

### View Logs
- Terminal shows all logs
- Scroll up to see previous messages
- Errors appear in red

### Debug Mode
- Press F5 to start debugging
- Set breakpoints by clicking line numbers
- Step through code

### Extensions to Install
- "ES7+ React/Redux/React-Native snippets"
- "MongoDB for VS Code"
- "Thunder Client" (for API testing)

---

## Common Issues

### Port 3000 already in use?
```bash
# Kill process on port 3000
npx kill-port 3000
npm run dev
```

### MongoDB connection error?
- Check .env file has correct MONGODB_URI
- If using local MongoDB, make sure it's running
- If using Atlas, check connection string

### npm install fails?
```bash
# Clear npm cache
npm cache clean --force
npm install
```

### Changes not showing?
- Hard refresh browser: Ctrl + Shift + R
- Check browser console for errors (F12)
- Check VS Code terminal for errors

---

## Project Structure

```
portsanjana/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js         # Main app
│   │   └── index.js       # Entry point
│   └── package.json
├── server/                # Node.js backend
│   ├── index.js           # Server entry
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   └── package.json
├── package.json           # Root package
└── .env                   # Environment variables
```

---

## Next Steps

1. Make changes to your portfolio
2. Test locally at http://localhost:3000
3. Push to GitHub when ready
4. Deploy to Render (see STEP_BY_STEP_RENDER.md)

---

## Need Help?

### Check Logs
- Look at terminal output
- Errors usually show what's wrong

### Restart Everything
```bash
# Stop server (Ctrl + C)
# Clear node_modules
rm -r node_modules client/node_modules server/node_modules
# Reinstall
npm install
# Run again
npm run dev
```

### Test API Manually
- Install Thunder Client extension
- Test endpoints at http://localhost:5000/api/projects
- Check if data returns
