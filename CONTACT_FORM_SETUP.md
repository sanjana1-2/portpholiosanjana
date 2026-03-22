# Contact Form Setup Guide

## How It Works
1. User fills contact form on portfolio
2. Message saved to MongoDB
3. Email sent to admin (you)
4. Confirmation email sent to user
5. Success message shown to user

---

## STEP 1: Install Nodemailer

In VS Code terminal, run:
```bash
cd server
npm install nodemailer
cd ..
```

---

## STEP 2: Setup Gmail App Password

### 2.1 Enable 2-Factor Authentication
- Go to https://myaccount.google.com
- Click "Security" (left menu)
- Scroll to "2-Step Verification"
- Click "Get Started"
- Follow steps to enable 2FA

### 2.2 Create App Password
- Go to https://myaccount.google.com/apppasswords
- Select "Mail" and "Windows Computer"
- Click "Generate"
- Copy the 16-character password
- **SAVE THIS PASSWORD**

---

## STEP 3: Create .env File in Server

### 3.1 Open server/.env
- In VS Code, open `server/.env`
- Add these lines:

```
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
```

Replace:
- `your-email@gmail.com` with your Gmail address
- `xxxx xxxx xxxx xxxx` with the 16-character app password (without spaces)

### 3.2 Example
```
EMAIL_USER=sanjana.rajbhar@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
```

---

## STEP 4: Update Contact Route

The contact route is already created at `server/routes/contact.js`

It will:
- Save message to MongoDB
- Send email to admin
- Send confirmation to user

---

## STEP 5: Test Contact Form

### 5.1 Start Server
```bash
npm run dev
```

### 5.2 Fill Contact Form
- Go to http://localhost:3000
- Scroll to Contact section
- Fill in:
  - Name: Your Name
  - Email: your-email@gmail.com
  - Message: Test message
- Click "SEND"

### 5.3 Check Results
- You should see "MESSAGE SENT." message
- Check your email inbox for:
  - Admin notification (from your Gmail)
  - User confirmation (from your Gmail)
- Check MongoDB for saved message

---

## STEP 6: Customize Email

### 6.1 Change Admin Email
Edit `server/routes/contact.js` line 35:
```javascript
to: 'sanjana.rajbhar@gmail.com',  // Change this to your email
```

### 6.2 Change Email Subject
Edit lines 34 and 45 to customize subject lines

### 6.3 Change Email Template
Edit the HTML in `adminMailOptions` and `userMailOptions` to customize email design

---

## Troubleshooting

### "Failed to send message" error?
1. Check .env file has correct EMAIL_USER and EMAIL_PASSWORD
2. Verify Gmail app password is correct (16 characters)
3. Check 2FA is enabled on Gmail
4. Check server logs for detailed error

### Email not received?
1. Check spam/junk folder
2. Verify email address is correct
3. Check Gmail allows "Less secure apps" (if not using app password)

### MongoDB error?
1. Check MongoDB is running
2. Verify MONGODB_URI in .env is correct
3. Check database connection in server logs

### Form not submitting?
1. Check browser console (F12) for errors
2. Check server logs for errors
3. Verify backend is running on port 5000

---

## For Production (Render)

### Add Environment Variables to Render
1. Go to your backend service on Render
2. Click "Environment"
3. Add:
   - `EMAIL_USER`: your-email@gmail.com
   - `EMAIL_PASSWORD`: your-app-password

### Use Different Email Service (Optional)
Instead of Gmail, you can use:
- SendGrid
- Mailgun
- AWS SES
- Brevo (formerly Sendinblue)

---

## View All Contact Messages

### Via MongoDB
1. Go to MongoDB Atlas
2. Click "Collections"
3. Find "contacts" collection
4. View all submitted messages

### Via API
- GET http://localhost:5000/api/contact
- Returns all contact submissions

---

## Next Steps
1. Test contact form locally
2. Deploy to Render
3. Test on live site
4. Monitor incoming messages

---

## Security Notes
- Never commit .env file to GitHub
- Keep app password secret
- Consider rate limiting for production
- Validate all inputs on backend
