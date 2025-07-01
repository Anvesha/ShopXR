// routes/auditLogs.js
import express from "express";
import AuditLog from "../models/auditLogModel.js";

const router = express.Router();

// GET /api/audit-logs
router.get("/", async (req, res) => {
  try {
    const logs = await AuditLog.find().sort({ timestamp: -1 }).limit(100); // latest 100 logs
    res.json(logs);
  } catch (error) {
    console.error("Failed to fetch audit logs:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
