// routes/userRoutes.js

import express from 'express';
import { getAllUsers, getUserByEmail } from '../controllers/userController.js';

const router = express.Router();

// GET all users - maps to GET /api/users
router.get('/', getAllUsers);

// GET single user by email - maps to GET /api/users/:email
router.get('/:email', getUserByEmail);

export default router;
