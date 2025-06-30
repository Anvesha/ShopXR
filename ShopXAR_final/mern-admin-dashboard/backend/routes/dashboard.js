// backend/routes/dashboard.js
import express from 'express';
import User from '../models/User.js';
const router = express.Router();

router.get('/stats', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const activeUsers = await User.countDocuments({ status: 'Active' });
    const videosUploaded = 5678; // Replace with dynamic value if you have a model
    const totalRevenue = 45231; // Replace with actual revenue data source

    res.json({
      totalUsers,
      activeUsers,
      videosUploaded,
      totalRevenue
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error fetching dashboard stats' });
  }
});

export default router;
