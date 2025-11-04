// backend route (NOT the React component)
import { Router } from 'express';
import pool from '../db.js';

const router = Router();

// GET http://localhost:8000/api/leaderboard
router.get('/leaderboard', async (_req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT
        zip_code,
        COALESCE(SUM(points), 0) AS points,
        COUNT(*)                 AS members
      FROM clt_go_green.user_info
      GROUP BY zip_code
      ORDER BY points DESC, zip_code ASC
    `);
    res.json(rows);
  } catch (err) {
    console.error('Leaderboard query failed:', err);
    res.status(500).json({ error: 'Failed to load leaderboard' });
  }
});

export default router;
