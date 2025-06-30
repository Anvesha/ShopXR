// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  plan: String,
  status: String,
  shopifyConnected: Boolean,
  websiteType: String,
  country: String,
  lastLogin: String,
  videosSubmitted: Number,
  modelsCompleted: Number,
  revenueGenerated: Number,
  signupDate: String,
  videosThisMonth: Number,
  modelsThisMonth: Number,
  iframeEmbeds: Number,
});

const User = mongoose.model("User", userSchema);

export default User;
