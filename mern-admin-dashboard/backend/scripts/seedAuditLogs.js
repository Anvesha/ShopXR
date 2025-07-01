import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AuditLog from '../models/auditLogModel.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await AuditLog.insertMany([
    {
      timestamp: new Date(),
      actor: 'Admin User',
      action: 'Created User',
      target: 'User: John Doe',
      ipAddress: '192.168.1.1',
      device: 'Windows Chrome'
    },
    {
      timestamp: new Date(),
      actor: 'System',
      action: 'Processed Model',
      target: 'Model #456',
      ipAddress: 'N/A',
      device: 'Server'
    }
  ]);
  console.log('✅ Logs seeded');
  mongoose.disconnect();
});
