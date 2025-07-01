// controllers/userController.js

import User from '../models/User.js';

// @desc    Get all users
// @route   GET /api/users
// @access  Public or Protected (based on middleware)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    console.error("❌ Error fetching all users:", err.message);
    res.status(500).json({ error: 'Server error while fetching users' });
  }
};

// @desc    Get a user by email
// @route   GET /api/users/:email
// @access  Public or Protected (based on middleware)
export const getUserByEmail = async (req, res) => {
  try {
    const decodedEmail = decodeURIComponent(req.params.email); // Handle special characters like %40
    const user = await User.findOne({ email: decodedEmail });

    if (!user) {
      console.warn(`⚠️ No user found with email: ${decodedEmail}`);
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    console.error("❌ Error fetching user by email:", err.message);
    res.status(500).json({ message: 'Server error while fetching user' });
  }
};
