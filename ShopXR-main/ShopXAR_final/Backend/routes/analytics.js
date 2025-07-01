import express  from 'express';
import Analytics from '../models/Analytics.js';

const router = express.Router();

// GET latest analytics
router.get('/', async (req, res) => {
  try {
    const data = await Analytics.findOne().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new analytics
router.post('/', async (req, res) => {
  try {
    const newEntry = new Analytics(req.body);
    const saved = await newEntry.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
