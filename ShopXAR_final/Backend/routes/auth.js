import express from 'express';
import { register, login } from '../controllers/authController.js'; // adjust path as needed

const router = express.Router();

// POST /api/register -> register new user
router.post('/register', register);

// POST /api/auth/login -> login user
router.post('/auth/login', login);

export default router;
