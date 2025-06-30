// backend/utils/logAudit.js

import AuditLog from '../models/auditLogModel.js';

/**
 * Logs an audit entry using Express request context
 * Automatically extracts IP and device if available
 */
export const logAudit = async (req, { actor, action, target }) => {
  try {
    const ipAddress =
      req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown';

    const userAgent = req.headers['user-agent'] || 'Unknown';

    const newLog = new AuditLog({
      actor,
      action,
      target,
      ipAddress,
      device: userAgent,
      timestamp: new Date(),
    });

    await newLog.save();
    // Optional: console.log("✅ Audit log recorded.");
  } catch (err) {
    console.error("❌ Audit log failed:", err.message);
  }
};
