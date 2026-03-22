# Email Setup for Contact Form - Step by Step

## STEP 1: Create Gmail App Password

### 1.1 Go to Google Account
- Open https://myaccount.google.com
- Sign in with your Gmail account

### 1.2 Enable 2-Factor Authentication (if not already enabled)
- Click "Security" (left menu)
- Scroll down to "2-Step Verification"
- If not enabled, click "Get Started" and follow steps
- If already enabled, skip to Step 1.3

### 1.3 Create App Password
- Go to https://myaccount.google.com/apppasswords
- Select:
  - App: "Mail"
  - Device: "Windows Computer"
- Click "Generate"
- Google will show a 16-character password
- **COPY THIS PASSWORD** (example: `abcd efgh ijkl mnop`)

---

## STEP 2: Update .env File

### 2.1 Open server/.env
- In VS Code, open `server/.env`
- Add or update these lines:

```
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

### 2.2 Replace Values
- `your-email@gmail.com` → Your Gmail address
- `abcd efgh ijkl mnop` → Your 16-character app password

### 2.3 Example
```
EMAIL_USER=sanjana.rajbhar@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

---

## STEP 3: Install Nodemailer

### 3.1 In VS Code Terminal
```bash
cd server
npm install nodemailer
cd ..
```

Wait for installation to complete.

---

## STEP 4: Restart Server

### 4.1 Stop Current Server
- Press `Ctrl + C` in terminal
- Type `Y` and press Enter

### 4.2 Start Server Again
```bash
npm run dev
```

Wait for:
```
[0] Server running on port 5000
[0] MongoDB connected
```

---

## STEP 5: Test Email

### 5.1 Open Browser
- Go to http://localhost:3000
- Scroll to CONTACT section

### 5.2 Fill Form
- Name: `Test User`
- Email: `your-email@gmail.com` (use your real email)
- Message: `This is a test message`

### 5.3 Click SEND

### 5.4 Check Results

**In Browser:**
- You should see "MESSAGE SENT."

**In Email:**
- Check your inbox for 2 emails:
  1. **Admin notification** - Message from your portfolio
  2. **User confirmation** - Thank you message

**In Server Logs:**
- Look for:
  ```
  Admin email sent successfully
  User confirmation email sent successfully
  ```

---

## STEP 6: Customize Email

### 6.1 Change Admin Email Address
Edit `server/routes/contact.js` line 42:
```javascript
to: 'sanjana.rajbhar@gmail.com',  // Change this to your email
```

### 6.2 Change Email Subject
Edit line 43 to customize subject line

### 6.3 Change Email Template
Edit the HTML in `adminEmail` and `userEmail` to customize design

---

## Troubleshooting

### "Failed to send message" error?
1. Check .env file has EMAIL_USER and EMAIL_PASSWORD
2. Verify 2FA is enabled on Gmail
3. Verify app password is correct (16 characters)
4. Check server logs for detailed error

### Email not received?
1. Check spam/junk folder
2. Verify email address is correct in .env
3. Check server logs for "email sent successfully"
4. Try sending again

### "Invalid login credentials"?
1. Verify EMAIL_USER is correct Gmail address
2. Verify EMAIL_PASSWORD is the 16-character app password (not your Gmail password)
3. Make sure 2FA is enabled
4. Generate new app password and try again

### Server won't start?
1. Check .env file syntax (no extra spaces)
2. Verify nodemailer is installed: `npm list nodemailer`
3. Check for typos in EMAIL_USER and EMAIL_PASSWORD
4. Restart server: Ctrl + C, then npm run dev

---

## For Production (Render)

### Add Environment Variables
1. Go to your backend service on Render
2. Click "Environment"
3. Add:
   - `EMAIL_USER`: your-email@gmail.com
   - `EMAIL_PASSWORD`: your-app-password

### Deploy
- Push changes to GitHub
- Render auto-deploys
- Test contact form on live site

---

## Alternative Email Services

If you don't want to use Gmail, you can use:

### SendGrid
- Free tier: 100 emails/day
- Setup: https://sendgrid.com

### Mailgun
- Free tier: 5,000 emails/month
- Setup: https://www.mailgun.com

### Brevo (formerly Sendinblue)
- Free tier: 300 emails/day
- Setup: https://www.brevo.com

---

## Success!
Your contact form now sends emails! Users will receive confirmation, and you'll get notifications.

## Next Steps
1. Test locally
2. Deploy to Render
3. Test on live site
4. Monitor incoming messages
