// server/login.js
const express = require('express');
const bcrypt = require('bcryptjs');
const pool = require('./db');

const router = express.Router();

// POST /api/login
router.post('/login', async (req, res) => {
  try {
    const { usernameOrEmail, password } = req.body;
    if (!usernameOrEmail || !password) {
      return res.status(400).json({ error: 'Missing username/email or password' });
    }

    
    const [rows] = await pool.execute(
      `SELECT id, name, email, username, password_hash, zip_code
       FROM user_info
       WHERE username = ? OR email = ?
       LIMIT 1`,
      [usernameOrEmail, usernameOrEmail.toLowerCase()]
    );

    if (rows.length !== 1) return res.status(401).json({ error: 'Invalid credentials' });

    const user = rows[0];
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

    
    res.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        zip_code: user.zip_code
      }
    });
  } catch (err) {
    console.error('login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
