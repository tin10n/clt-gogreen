const express = require('express');
const bcrypt = require('bcryptjs');
const pool = require('./db');
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, username } = req.body;
    const zip_code_raw = req.body?.zip_code ?? req.body?.zipcode ?? req.body?.zipCode ?? '';
    const zip_code = String(zip_code_raw).trim().padStart(5, '0');

    if (!name || !email || !password || !username || !zip_code) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const password_hash = await bcrypt.hash(password, 10);

    await pool.execute(
      `INSERT INTO user_info (name, email, password_hash, username, zip_code)
       VALUES (?, ?, ?, ?, ?)`,
      [name.trim(), email.trim().toLowerCase(), password_hash, username.trim(), zip_code]
    );

    res.json({ success: true });
  } catch (err) {
    if (err?.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'Username or email already exists' });
    }
    console.error('signup error', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

