# Test Contact Form - Step by Step

## STEP 1: Stop Current Server
- In VS Code terminal
- Press `Ctrl + C`
- Type `Y` and press Enter

## STEP 2: Install Dependencies
```bash
cd server
npm install
cd ..
```

## STEP 3: Start Server
```bash
npm run dev
```

Wait for:
```
[0] Server running on port 5000
[0] MongoDB connected
[1] webpack compiled successfully
```

## STEP 4: Open Browser
- Go to http://localhost:3000
- Scroll to CONTACT section

## STEP 5: Fill Contact Form
- Name: `Test User`
- Email: `test@example.com`
- Message: `This is a test message`

## STEP 6: Click SEND Button

## STEP 7: Check Results

### In Browser:
- You should see: "MESSAGE SENT."
- Form should clear

### In VS Code Terminal:
- Look for: `Contact form received: { name: 'Test User', ... }`
- Look for: `Contact saved to database: ...`

### In MongoDB:
1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Collections"
3. Find "contacts" collection
4. You should see your message saved

## STEP 8: If It Doesn't Work

### Check Terminal for Errors
- Look at server logs
- Copy any error messages

### Check Browser Console
- Press F12
- Click "Console" tab
- Look for red error messages

### Common Issues:

**"Cannot find module 'Contact'"**
- Make sure `server/models/Contact.js` exists
- Check file name spelling

**"MongoDB connection error"**
- Check .env file has MONGODB_URI
- Make sure MongoDB is running
- Check connection string is correct

**"POST /api/contact 404"**
- Make sure server restarted after creating contact.js
- Check server/index.js has `app.use('/api/contact', require('./routes/contact'));`

**Form not submitting**
- Check browser console (F12) for errors
- Check server logs for errors
- Make sure backend is running on port 5000

## STEP 9: View All Messages

### Via API
Open in browser:
```
http://localhost:5000/api/contact
```

You should see JSON with all messages

### Via MongoDB
1. Go to MongoDB Atlas
2. Click "Collections"
3. Click "contacts"
4. View all submitted messages

## Success!
If you see the message saved in MongoDB, the contact form is working!

## Next: Add Email (Optional)
Once this works, we can add email notifications.
