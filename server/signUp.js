// server/signup.js
const express = require('express');
const bcrypt = require('bcryptjs');
const pool = require('./db');

const router = express.Router();

// POST /api/signup
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, username, zip_code } = req.body;

    if (!name || !email || !password || !username || !zip_code) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const password_hash = await bcrypt.hash(password, 10);

    await pool.execute(
      `INSERT INTO user_info (name, email, password_hash, username, zip_code)
       VALUES (?, ?, ?, ?, ?)`,
      [name.trim(), email.trim().toLowerCase(), password_hash, username.trim(), String(zip_code).padStart(5,'0')]
    );

    res.json({ success: true });
  } catch (err) {
    if (err?.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'Username or email already exists' });
    }
    console.error('signup error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
