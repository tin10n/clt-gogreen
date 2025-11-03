import express from 'express';
import signupRoutes from './signUp.js';
import loginRoutes from './logIn.js';

const router = express.Router();

router.use(signupRoutes);
router.use(loginRoutes);

export default router;
