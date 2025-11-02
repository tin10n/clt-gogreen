// server/signUp.js
const express = require('express');
const bcrypt = require('bcryptjs');
const pool = require('./db');
const router = express.Router();


function baseUsername(name, email) {
  const fromEmail = (email || '').split('@')[0];
  if (fromEmail) return fromEmail.replace(/[^a-z0-9._-]/gi, '').toLowerCase();
  const fromName = (name || '').trim().toLowerCase().replace(/\s+/g, '.').replace(/[^a-z0-9._-]/g, '');
  return fromName || `user${Date.now()}`;
}

async function ensureUniqueUsername(base) {
  let candidate = base;
  let suffix = 0;
  
  while (true) {
    const [rows] = await pool.execute('SELECT id FROM user_info WHERE username = ?', [candidate]);
    if (rows.length === 0) return candidate;
    suffix += 1;
    candidate = `${base}-${suffix}`;
  }
}

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const zip_code_raw = req.body.zip_code ?? req.body.zipcode ?? req.body.zip ?? '';

    if (!name || !email || !password || !zip_code_raw) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const zip_code = String(zip_code_raw).trim().padStart(5, '0').slice(0, 5);
    const password_hash = await bcrypt.hash(password, 10);

    
    const base = baseUsername(name, email);
    const username = await ensureUniqueUsername(base);

    await pool.execute(
      `INSERT INTO user_info (name, email, password_hash, username, zip_code)
       VALUES (?, ?, ?, ?, ?)`,
      [name.trim(), email.trim().toLowerCase(), password_hash, username, zip_code]
    );

    return res.json({ success: true });
  } catch (err) {
    if (err?.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'Email already exists' });
    }
    console.error('signup error', err);
    return res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;
