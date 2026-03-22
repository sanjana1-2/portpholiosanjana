# Fix Email Error - Invalid Login

## Problem
Error: "Invalid login: Username and Password not accepted"

This means your Gmail credentials in .env are wrong.

---

## Solution

### STEP 1: Verify 2FA is Enabled
1. Go to https://myaccount.google.com
2. Click "Security" (left menu)
3. Look for "2-Step Verification"
4. If it says "OFF", click "Get Started" and enable it
5. **IMPORTANT: 2FA must be ON to use app passwords**

### STEP 2: Generate New App Password
1. Go to https://myaccount.google.com/apppasswords
2. If you see "App passwords" option:
   - Select "Mail"
   - Select "Windows Computer"
   - Click "Generate"
   - Google shows 16-character password
   - **COPY THIS EXACTLY** (with spaces)
   - Example: `abcd efgh ijkl mnop`

3. If you DON'T see "App passwords":
   - Your 2FA is not enabled
   - Go back to Step 1 and enable 2FA first

### STEP 3: Update server/.env
Open `server/.env` and update:

```
EMAIL_USER=sanjana.rajbhar@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

**IMPORTANT:**
- EMAIL_USER = Your Gmail address
- EMAIL_PASSWORD = The 16-character app password (with spaces)
- Do NOT use your Gmail password
- Do NOT add extra spaces or quotes

### STEP 4: Restart Server
- Press `Ctrl + C` in terminal
- Type `Y` and press Enter
- Run: `npm run dev`

### STEP 5: Test Again
1. Go to http://localhost:3000
2. Fill contact form
3. Click SEND
4. Check Gmail inbox

---

## Troubleshooting

### Still getting "Invalid login" error?

**Check 1: Is 2FA enabled?**
- Go to https://myaccount.google.com/security
- Look for "2-Step Verification"
- If OFF, enable it first

**Check 2: Is app password correct?**
- Go to https://myaccount.google.com/apppasswords
- Generate a NEW app password
- Copy it exactly (with spaces)
- Update .env with new password
- Restart server

**Check 3: Is EMAIL_USER correct?**
- Make sure it's your Gmail address
- Example: `sanjana.rajbhar@gmail.com`
- No typos

**Check 4: Check .env file**
- Open `server/.env`
- Make sure no extra spaces
- Make sure no quotes around password
- Example of CORRECT format:
  ```
  EMAIL_USER=sanjana.rajbhar@gmail.com
  EMAIL_PASSWORD=abcd efgh ijkl mnop
  ```

### Still not working?

Try this:
1. Delete current app password
2. Generate completely new one
3. Copy it exactly
4. Update .env
5. Restart server
6. Test again

---

## Alternative: Use Different Email Service

If Gmail is not working, use:

### Option 1: SendGrid (Recommended)
- Free tier: 100 emails/day
- More reliable
- Setup: https://sendgrid.com

### Option 2: Mailgun
- Free tier: 5,000 emails/month
- Setup: https://www.mailgun.com

### Option 3: Brevo
- Free tier: 300 emails/day
- Setup: https://www.brevo.com

---

## Success!
Once you see "Admin email sent successfully" in server logs, emails are working!

Check your Gmail inbox for:
- Admin notification
- User confirmation email
