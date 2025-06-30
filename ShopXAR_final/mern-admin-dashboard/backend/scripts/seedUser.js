import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js'; // Adjust path if needed

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  const existing = await User.findOne({ email: 'john@example.com' });
  if (!existing) {
    await User.create({
      name: 'John Doe',
      email: 'john@example.com',
      role: 'User',
      status: 'Active'
    });
    console.log('✅ Test user inserted');
  } else {
    console.log('ℹ️ Test user already exists');
  }
  mongoose.disconnect();
})
.catch(err => console.error('❌ MongoDB Error:', err));
