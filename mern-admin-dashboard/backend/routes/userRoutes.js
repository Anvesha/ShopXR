// routes/userRoutes.js

import express from 'express';
import { getAllUsers, getUserByEmail } from '../controllers/userController.js';
import { logAudit } from '../utils/logAction.js';

const router = express.Router();

// GET all users - /api/users
router.get('/', async (req, res, next) => {
  try {
    const result = await getAllUsers(req, res);
    await logAudit(req, {
      actor: 'Admin User',
      action: 'Viewed All Users',
      target: 'User List',
    });
    return result;
  } catch (err) {
    next(err);
  }
});

// GET user by email - /api/users/:email
router.get('/:email', async (req, res, next) => {
  try {
    const result = await getUserByEmail(req, res);
    await logAudit(req, {
      actor: 'Admin User',
      action: 'Viewed User Details',
      target: `User: ${req.params.email}`,
    });
    return result;
  } catch (err) {
    next(err);
  }
});

export default router;
