const express = require('express');
const bcrypt = require('bcrypt');
const { pool } = require('./db');
const router = express.Router();

router.post('/api/users', async (req, res) => {
  const { firstName, username, email, password } = req.body;
  if (!firstName || !username || !email || !password) {
  }
  try {
    const password_hash = await bcrypt.hash(password, 10);
    await pool.query(
      'INSERT INTO user_profiles (username, email, password_hash, first_name, last_name) VALUES (?, ?, ?, ?, ?)',
      [username, email, password_hash, firstName]
    );
    res.json({ success: true });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') return res.status(409).json({ error: 'Username or email already exists' });
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;