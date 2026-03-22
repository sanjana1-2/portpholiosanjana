# Quick Email Fix - Get Messages on Gmail

## Problem
Email credentials not set in .env file

## Solution

### STEP 1: Get Gmail App Password
1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and "Windows Computer"
3. Click "Generate"
4. Copy the 16-character password (example: `abcd efgh ijkl mnop`)

### STEP 2: Update server/.env
Open `server/.env` and update:

```
MONGODB_URI=mongodb://localhost:27017/sanjana-portfolio
PORT=5000
NODE_ENV=development
EMAIL_USER=sanjana.rajbhar@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

Replace `abcd efgh ijkl mnop` with your actual 16-character app password

### STEP 3: Restart Server
- Press `Ctrl + C` in terminal
- Type `Y` and press Enter
- Run: `npm run dev`

### STEP 4: Test
1. Go to http://localhost:3000
2. Fill contact form
3. Click SEND
4. Check your Gmail inbox

You should receive:
- ✅ Admin notification (message from portfolio)
- ✅ User confirmation (thank you email)

## If Still Not Working

### Check Server Logs
Look for these messages:
```
Admin email sent successfully
User confirmation email sent successfully
```

If you see errors, check:
1. EMAIL_USER is correct Gmail address
2. EMAIL_PASSWORD is 16-character app password (not Gmail password)
3. 2FA is enabled on Gmail account
4. No extra spaces in .env file

### Test Email Manually
```bash
# In terminal, test if nodemailer is installed
npm list nodemailer
```

If not installed:
```bash
cd server
npm install nodemailer
cd ..
npm run dev
```

## Done!
Your contact form now sends emails to your Gmail!
