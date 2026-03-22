# Email Setup with Brevo (Easy & Free)

## Why Brevo?
- Free tier: 300 emails/day
- No app password issues
- More reliable than Gmail
- Easy setup

---

## STEP 1: Create Brevo Account

1. Go to https://www.brevo.com
2. Click "Sign Up"
3. Fill in:
   - Email: your-email@gmail.com
   - Password: Create strong password
   - Company: Your name
4. Click "Create Account"
5. Verify email (check inbox)

---

## STEP 2: Get SMTP Credentials

### 2.1 Go to SMTP Settings
- Login to Brevo
- Click "Settings" (bottom left)
- Click "SMTP & API"
- Click "SMTP"

### 2.2 Find Your Credentials
You'll see:
- **SMTP Server:** smtp-relay.brevo.com
- **Port:** 587
- **Login:** Your Brevo email
- **Password:** Your Brevo password

---

## STEP 3: Update server/.env

Open `server/.env` and update:

```
MONGODB_URI=mongodb://localhost:27017/sanjana-portfolio
PORT=5000
NODE_ENV=development
EMAIL_USER=your-brevo-email@gmail.com
EMAIL_PASSWORD=your-brevo-password
```

Replace:
- `your-brevo-email@gmail.com` = Your Brevo account email
- `your-brevo-password` = Your Brevo password

### Example:
```
EMAIL_USER=sanjana.rajbhar@gmail.com
EMAIL_PASSWORD=MyBrevoPassword123
```

---

## STEP 4: Restart Server

- Press `Ctrl + C` in terminal
- Type `Y` and press Enter
- Run: `npm run dev`

---

## STEP 5: Test Contact Form

1. Go to http://localhost:3000
2. Scroll to CONTACT section
3. Fill form:
   - Name: Test User
   - Email: your-email@gmail.com
   - Message: Test message
4. Click SEND

### Check Results:

**In Browser:**
- You should see "MESSAGE SENT."

**In Server Logs:**
- Look for: `✅ Admin email sent successfully`
- Look for: `✅ User confirmation email sent successfully`

**In Email:**
- Check your inbox for 2 emails:
  1. Admin notification
  2. User confirmation

---

## If Still Not Working

### Check Server Logs
Look for error messages like:
```
❌ Error sending admin email: ...
```

### Common Issues:

**"Invalid login"**
- Check EMAIL_USER is correct Brevo email
- Check EMAIL_PASSWORD is correct Brevo password
- No typos

**"Connection refused"**
- Check internet connection
- Check Brevo SMTP server is correct: `smtp-relay.brevo.com`

**"Port 587 refused"**
- Your firewall might be blocking
- Try port 25 instead (change in contact.js line 7)

### Verify Credentials
1. Go to https://www.brevo.com
2. Login
3. Click Settings → SMTP & API
4. Copy credentials again
5. Update .env
6. Restart server

---

## Success!
Once you see "✅ Admin email sent successfully" in logs, emails are working!

---

## Next Steps

### Deploy to Render
1. Push to GitHub
2. Create Web Service on Render
3. Add environment variables:
   - EMAIL_USER: your-brevo-email
   - EMAIL_PASSWORD: your-brevo-password
4. Deploy!

### Monitor Emails
- Go to Brevo dashboard
- Click "Transactional"
- View all sent emails
- Check delivery status

---

## Questions?
- Brevo Help: https://help.brevo.com
- SMTP Setup: https://help.brevo.com/hc/en-us/articles/209467485
