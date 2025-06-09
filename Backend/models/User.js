import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  mobile: String,
  password: { type: String, required: true },
});

export default mongoose.model('User', userSchema);
