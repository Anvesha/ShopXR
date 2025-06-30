// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js"; // ✅ import your routes
import modelUploadRoutes from "./routes/modelUploadRoutes.js"; // ✅ NEW: import model upload routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the 3D Portal Admin API");
});

// ✅ Use your user routes
app.use("/api/users", userRoutes);

// ✅ NEW: Use your model upload routes
app.use("/api/model-uploads", modelUploadRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
