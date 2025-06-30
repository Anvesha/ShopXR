import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';

// Route imports
import userRoutes from "./routes/userRoutes.js";
import modelUploadRoutes from "./routes/modelUploadRoutes.js";
import dashboardRoutes from "./routes/dashboard.js";
import auditLogRoutes from './routes/auditLogs.js'; // ✅ Audit logs route

// Optional: import AuditLog model directly if needed elsewhere
// import AuditLog from './models/auditLogModel.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// To fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Basic test route
app.get("/", (req, res) => {
  res.send("Welcome to the 3D Portal Admin API");
});

// Mount API routes
app.use("/api/users", userRoutes);
app.use("/api/model-uploads", modelUploadRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/audit-logs", auditLogRoutes); // ✅ Dynamic Audit logs route

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
