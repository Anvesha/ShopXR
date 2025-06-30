import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';

import connectDB from './config/dbs.js';         // Your DB connection function
import uploadRoutes from './routes/uploadRoutes.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();
// Or if you want to use mongoose directly:
mongoose.connect('mongodb://localhost:27017/shopxar', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.use(cors());
app.use(express.json());

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(path.resolve(), '/uploads')));

// API routes
app.use('/api/upload', uploadRoutes);
app.use('/api/auth', authRoutes); // ✅ Correct

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
