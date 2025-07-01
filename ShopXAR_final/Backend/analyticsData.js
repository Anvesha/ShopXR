// analyticsData.js

const analyticsData = {
  funnelMetrics: [
    { label: 'Product Page Views', value: '45,672', note: '—', color: '#7e5bef' },
    { label: '3D Viewer Interactions', value: '12,834', note: '28.1% conversion', color: '#3b82f6' },
    { label: 'AR Launches', value: '8,921', note: '69.5% conversion', color: '#8b5cf6' },
    { label: 'Add to Cart', value: '4,567', note: '51.2% conversion', color: '#10b981' },
    { label: 'Purchases', value: '2,341', note: '51.3% conversion', color: '#059669' }
  ],
  technicalMetrics: {
    arIssues: [
      { label: 'WebXR Not Supported', value: '23.4%' },
      { label: 'Device Too Old', value: '18.7%' },
      { label: 'Browser Compatibility', value: '12.1%' },
      { label: 'iOS Restrictions', value: '8.9%' }
    ],
    performance: [
      { label: 'Avg Model Load Time', value: '2.3s', highlight: false },
      { label: 'AR Placement Success', value: '94.2%', highlight: true },
      { label: '3D Interaction Events/Session', value: '12.7', highlight: false },
      { label: 'Scroll Depth Before 3D', value: '67.8%', highlight: false }
    ]
  }
};

export default analyticsData;
