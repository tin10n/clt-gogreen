import { Router } from 'express';
import signupRoutes from './signUp.js';
import loginRoutes from './logIn.js';
import leaderboardRoutes from './leaderboard.js';

const router = Router();
router.use(signupRoutes);
router.use(loginRoutes);
router.use(leaderboardRoutes); // exposes /leaderboard under /api

export default router;
