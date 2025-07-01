// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  mobile: { type: String },
  password: { type: String, required: true },
  plan: { type: String, default: 'Basic' },        // e.g., Basic, Pro, Enterprise
  status: { type: String, default: 'Trial' },      // e.g., Active, Trial
  videos: { type: Number, default: 0 },
  models: { type: Number, default: 0 },
  shopify: { type: Boolean, default: false },
  lastActive: { type: Date, default: Date.now }
}, {
  timestamps: true
});

export default mongoose.model('User', userSchema);
