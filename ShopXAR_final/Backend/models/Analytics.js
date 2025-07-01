// models/Analytics.js
import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema({
  funnelMetrics: [
    {
      label: String,
      value: String,
      note: String,
      color: String,
    },
  ],
  technicalMetrics: {
    arIssues: [
      {
        label: String,
        value: String,
      },
    ],
    performance: [
      {
        label: String,
        value: String,
        highlight: Boolean,
      },
    ],
  },
}, { timestamps: true });

const Analytics = mongoose.model('Analytics', analyticsSchema);
export default Analytics;
