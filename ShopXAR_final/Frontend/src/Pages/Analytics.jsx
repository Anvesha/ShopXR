import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { FaChevronDown } from 'react-icons/fa';

const funnelMetrics = [
  { label: 'Product Page Views', value: '45,672', note: '—', color: 'bg-[#7e5bef]' },
  { label: '3D Viewer Interactions', value: '12,834', note: '28.1% conversion', color: 'bg-[#3b82f6]' },
  { label: 'AR Launches', value: '8,921', note: '69.5% conversion', color: 'bg-[#8b5cf6]' },
  { label: 'Add to Cart', value: '4,567', note: '51.2% conversion', color: 'bg-[#10b981]' },
  { label: 'Purchases', value: '2,341', note: '51.3% conversion', color: 'bg-[#059669]' },
];

const AnalyticsPage = () => {
  const [activeTab, setActiveTab] = useState('Product Performance');

  return (
    <div className="flex min-h-screen bg-[url('/assets/bg.png')] bg-cover bg-center text-white">
      {/* Sidebar */}
      <div className="hidden md:block fixed top-0 left-0 h-full w-60 bg-[#0a0a0a] z-10">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-60 px-4 sm:px-6 md:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black border border-gray-800 rounded-3xl shadow-xl p-6 sm:p-10 space-y-8">

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-between items-center gap-4">
              <button className="bg-[#1f1f1f] text-white px-4 py-2 rounded-md flex items-center gap-2 border border-gray-600">
                Last 30 Days <FaChevronDown />
              </button>
              <button className="bg-[#1f1f1f] text-white px-4 py-2 rounded-md flex items-center gap-2 border border-gray-600">
                MainStore <FaChevronDown />
              </button>
            </div>

            {/* Conversion Funnel */}
            <div className="bg-[#111111] p-6 rounded-xl border border-gray-700">
              <p className="text-sm mb-4 text-gray-400">Conversion Funnel</p>
              <p className="text-xs text-gray-500 mb-4">User journey from page view to purchase</p>
              <div className="flex flex-wrap gap-4 justify-between">
                {funnelMetrics.map((item, idx) => (
                  <div
                    key={idx}
                    className={`text-center text-white p-4 rounded-xl min-w-[150px] ${item.color}`}
                  >
                    <div className="text-lg font-bold">{item.value}</div>
                    <div className="text-xs mt-1">{item.label}</div>
                    <div className="text-[10px] text-white/80 mt-1">{item.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-2 flex-wrap">
              {['Product Performance', 'Audience Insights', 'Technical Metrics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1 text-xs rounded-full border ${
                    activeTab === tab
                      ? 'bg-white text-black font-semibold'
                      : 'bg-[#1f1f1f] text-white border-gray-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'Product Performance' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#111] p-4 rounded-xl border border-gray-700">
                  <p className="text-sm mb-2 text-gray-300">Conversion Rate Uplift Over Time</p>
                  <img
                    src="/assets/graph1.png"
                    alt="Line Chart"
                    className="w-full h-auto object-contain rounded-md"
                  />
                </div>
                <div className="bg-[#111] p-4 rounded-xl border border-gray-700">
                  <p className="text-sm mb-2 text-gray-300">Conversions by Channel</p>
                  <img
                    src="/assets/graphs2.png"
                    alt="Bar Chart"
                    className="w-full h-auto object-contain rounded-md"
                  />
                </div>
              </div>
            )}

            {activeTab === 'Audience Insights' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#111] p-4 border border-gray-700 rounded-xl">
                  <p className="text-sm mb-2 text-gray-400">Device Breakdown</p>
                  <img
                    src="/assets/audiancegraph.png"
                    alt="Device Breakdown"
                    className="w-full h-full object-contain aspect-square"
                  />
                </div>
                <div className="bg-[#111] p-4 border border-gray-700 rounded-xl">
                  <p className="text-sm mb-2 text-gray-400">Traffic Sources</p>
                  <img
                    src="/assets/trafficsource.png"
                    alt="Traffic Sources"
                    className="w-full h-full object-contain aspect-square"
                  />
                </div>
                <div className="bg-[#111] p-4 border border-gray-700 rounded-xl">
                  <p className="text-sm mb-2 text-gray-400">Regional Engagement</p>
                  <img
                    src="/assets/region.png"
                    alt="Regional Engagement"
                    className="w-full h-full object-contain aspect-square"
                  />
                </div>
              </div>
            )}

            {activeTab === 'Technical Metrics' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#111] p-6 border border-gray-700 rounded-xl">
                  <h3 className="text-sm text-gray-300 mb-4">AR Compatibility Issues</h3>
                  <p className="text-xs text-gray-500 mb-3">
                    Devices unable to launch AR experiences
                  </p>
                  <ul className="space-y-3 text-sm">
                    {[
                      { label: 'WebXR Not Supported', value: '23.4%' },
                      { label: 'Device Too Old', value: '18.7%' },
                      { label: 'Browser Compatibility', value: '12.1%' },
                      { label: 'iOS Restrictions', value: '8.9%' },
                    ].map((item, i) => (
                      <li key={i} className="flex justify-between">
                        <span>{item.label}</span>
                        <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                          {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#111] p-6 border border-gray-700 rounded-xl">
                  <h3 className="text-sm text-gray-300 mb-4">Performance Metrics</h3>
                  <p className="text-xs text-gray-500 mb-3">
                    Technical performance indicators
                  </p>
                  <ul className="space-y-3 text-sm">
                    {[
                      { label: 'Avg Model Load Time', value: '2.3s', highlight: false },
                      { label: 'AR Placement Success', value: '94.2%', highlight: true },
                      { label: '3D Interaction Events/Session', value: '12.7', highlight: false },
                      { label: 'Scroll Depth Before 3D', value: '67.8%', highlight: false },
                    ].map((metric, i) => (
                      <li key={i} className="flex justify-between">
                        <span>{metric.label}</span>
                        <span
                          className={`text-xs px-3 py-1 rounded-full ${
                            metric.highlight
                              ? 'bg-green-500 text-black'
                              : 'bg-[#1f1f1f] text-white'
                          }`}
                        >
                          {metric.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsPage;
