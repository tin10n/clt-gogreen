// server/routes/signup.js
import express from 'express';
import bcrypt from 'bcryptjs';
import pool from '../db.js';

const router = express.Router();

function baseUsername(name, email) {
	const fromEmail = (email || '').split('@')[0];
	if (fromEmail) return fromEmail.replace(/[^a-z0-9._-]/gi, '').toLowerCase();
	const fromName = (name || '')
		.trim()
		.toLowerCase()
		.replace(/\s+/g, '.')
		.replace(/[^a-z0-9._-]/g, '');
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
		const { name, email, password, zip_code } = req.body;
		if (!name || !email || !password || !zip_code) {
			return res.status(400).json({ error: 'Missing required fields' });
		}

		const password_hash = await bcrypt.hash(password, 10);
		const username = await ensureUniqueUsername(baseUsername(name, email));

		await pool.execute(
			`INSERT INTO user_info (name, email, password_hash, username, zip_code)
       VALUES (?, ?, ?, ?, ?)`,
			[name.trim(), email.trim().toLowerCase(), password_hash, username, zip_code]
		);

		res.json({ success: true });
	} catch (err) {
		if (err?.code === 'ER_DUP_ENTRY') {
			return res.status(409).json({ error: 'Email already exists' });
		}
		console.error('signup error', err);
		res.status(500).json({ error: 'Server error' });
	}
});

export default router;
