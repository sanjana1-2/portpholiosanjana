const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields required' });
    }

    const contact = new Contact({
      name,
      email,
      message,
      submittedAt: new Date()
    });

    await contact.save();
    console.log('Message saved:', { name, email });

    res.status(201).json({ success: true, message: 'Message saved' });

  } catch (error) {
    res.status(500).json({ error: 'Failed to save' });
  }
});

// GET - View all messages
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ submittedAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve' });
  }
});

module.exports = router;
