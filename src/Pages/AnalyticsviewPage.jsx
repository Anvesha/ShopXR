import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { FaChevronDown, FaSearch } from 'react-icons/fa';

const funnelMetrics = [
  { label: 'Product Page Views', value: '45,672', note: '—' },
  { label: '3D Viewer Interactions', value: '12,834', note: '28.1% conversion' },
  { label: 'AR Launches', value: '8,921', note: '69.5% conversion' },
  { label: 'Add to Cart', value: '4,567', note: '51.2% conversion' },
  { label: 'Purchases', value: '2,341', note: '51.3% conversion' },
];

const tableData = [
  {
    name: 'Wireless Headphones Pro',
    pageViews: 5432,
    views3D: 1876,
    viewsAR: 1234,
    cart3D: '32.1%',
    cartAR: '41.2%',
    convNormal: '2.1%',
    conv3D: '4.3%',
    convAR: '6.8%',
    uplift3D: '+104.8%',
    upliftAR: '+223.9%',
    aov: '$289.50',
  },
  {
    name: 'Smart Watch Elite',
    pageViews: 4321,
    views3D: 1543,
    viewsAR: 987,
    cart3D: '28.9%',
    cartAR: '38.7%',
    convNormal: '1.8%',
    conv3D: '3.6%',
    convAR: '5.9%',
    uplift3D: '+122.0%',
    upliftAR: '+227.3%',
    aov: '$425.75',
  },
  {
    name: 'Gaming Chair Deluxe',
    pageViews: 3876,
    views3D: 1298,
    viewsAR: 876,
    cart3D: '25.4%',
    cartAR: '35.1%',
    convNormal: '2.3%',
    conv3D: '3.8%',
    convAR: '5.2%',
    uplift3D: '+65.2%',
    upliftAR: '+126.1%',
    aov: '$599.99',
  },
];

const AnalyticsPage = () => {
  const [activeTab, setActiveTab] = useState('product');

  return (
    <div className="flex bg-[url('/assets/bg.png')] bg-cover bg-center text-white min-h-screen">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-10">
        <div className="bg-black border border-gray-700 rounded-2xl p-6 space-y-6 shadow-md max-w-7xl mx-auto">

          {/* Top Filters */}
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <div className="flex gap-4 flex-wrap">
              <button className="bg-[#1f1f1f] text-white px-4 py-2 rounded-md flex items-center gap-2 border border-gray-600">
                Last 30 Days <FaChevronDown />
              </button>
              <button className="bg-[#1f1f1f] text-white px-4 py-2 rounded-md flex items-center gap-2 border border-gray-600">
                MainStore <FaChevronDown />
              </button>
            </div>
          </div>

          {/* Conversion Funnel */}
          <div className="bg-[#111] p-4 rounded-xl border border-gray-700 overflow-x-auto">
            <p className="text-sm mb-4 text-gray-300">Conversion Funnel</p>
            <div className="flex flex-wrap justify-between gap-4">
              {funnelMetrics.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-4 rounded-xl min-w-[150px]"
                  style={{
                    background:
                      idx === 0 ? '#7e5bef' :
                      idx === 1 ? '#3b82f6' :
                      idx === 2 ? '#8b5cf6' :
                      idx === 3 ? '#10b981' :
                      '#059669',
                  }}
                >
                  <div className="text-xl font-bold">{item.value}</div>
                  <div className="text-xs mt-1">{item.label}</div>
                  <div className="text-[10px] text-white/80 mt-1">{item.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('product')}
              className={`px-4 py-1 text-xs rounded-full ${
                activeTab === 'product'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-[#1f1f1f] text-white border border-gray-600'
              }`}
            >
              Product Performance
            </button>
            <button
              onClick={() => setActiveTab('audience')}
              className={`px-4 py-1 text-xs rounded-full ${
                activeTab === 'audience'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-[#1f1f1f] text-white border border-gray-600'
              }`}
            >
              Audience Insights
            </button>
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-4 py-1 text-xs rounded-full ${
                activeTab === 'technical'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-[#1f1f1f] text-white border border-gray-600'
              }`}
            >
              Technical Metrics
            </button>
          </div>

          {/* Product Performance */}
          {activeTab === 'product' && (
            <>
              {/* Search + Export */}
              <div className="flex flex-wrap justify-between items-center">
                <div className="relative w-full sm:w-1/2 max-w-xs">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full bg-[#1f1f1f] text-white pl-10 pr-4 py-2 rounded-md border border-gray-600 focus:outline-none"
                  />
                </div>
                <button className="bg-[#1f1f1f] text-white px-4 py-2 rounded-md mt-4 sm:mt-0 border border-gray-600">
                  Export to Sheets
                </button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto border border-gray-700 rounded-xl">
                <table className="w-full text-sm text-left text-white">
                  <thead className="bg-[#1f1f1f] text-gray-400">
                    <tr>
                      <th className="px-4 py-3">Product Name</th>
                      <th className="px-4 py-3">Page Views</th>
                      <th className="px-4 py-3">3D Views</th>
                      <th className="px-4 py-3">AR Views</th>
                      <th className="px-4 py-3">Cart Rate (3D)</th>
                      <th className="px-4 py-3">Cart Rate (AR)</th>
                      <th className="px-4 py-3">Conv. Normal</th>
                      <th className="px-4 py-3">Conv. 3D</th>
                      <th className="px-4 py-3">Conv. AR</th>
                      <th className="px-4 py-3">3D Uplift</th>
                      <th className="px-4 py-3">AR Uplift</th>
                      <th className="px-4 py-3">AOV AR/3D</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item, idx) => (
                      <tr key={idx} className="border-t border-gray-800 hover:bg-[#1c1c1c]">
                        <td className="px-4 py-3">{item.name}</td>
                        <td className="px-4 py-3">{item.pageViews}</td>
                        <td className="px-4 py-3">{item.views3D}</td>
                        <td className="px-4 py-3">{item.viewsAR}</td>
                        <td className="px-4 py-3">{item.cart3D}</td>
                        <td className="px-4 py-3">{item.cartAR}</td>
                        <td className="px-4 py-3">{item.convNormal}</td>
                        <td className="px-4 py-3 text-blue-400">{item.conv3D}</td>
                        <td className="px-4 py-3 text-purple-400">{item.convAR}</td>
                        <td className="px-4 py-3 text-blue-400">{item.uplift3D}</td>
                        <td className="px-4 py-3 text-purple-400">{item.upliftAR}</td>
                        <td className="px-4 py-3">{item.aov}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Audience Insights */}
          {activeTab === 'audience' && (
            <div className="grid gap-6 md:grid-cols-3">
              {/* Device Breakdown */}
              <div className="bg-[#111] p-4 border border-gray-700 rounded-xl">
                <p className="text-sm mb-2 text-gray-400">Device Breakdown</p>
                <img
                  src="/assets/device-chart.png"
                  alt="Device Breakdown"
                  className="w-full h-full object-contain aspect-square"
                />
              </div>

              {/* Traffic Sources */}
              <div className="bg-[#111] p-4 border border-gray-700 rounded-xl">
                <p className="text-sm mb-2 text-gray-400">Traffic Sources</p>
                <img
                  src="/assets/traffic-chart.png"
                  alt="Traffic Sources"
                  className="w-full h-full object-contain aspect-square"
                />
              </div>

              {/* Regional Engagement */}
              <div className="bg-[#111] p-4 border border-gray-700 rounded-xl">
                <p className="text-sm mb-2 text-gray-400">Regional Engagement</p>
                <img
                  src="/assets/region-chart.png"
                  alt="Regional Engagement"
                  className="w-full h-full object-contain aspect-square"
                />
              </div>
            </div>
          )}

          {/* Technical Metrics placeholder */}
          {activeTab === 'technical' && (
            <div className="text-center text-gray-400 mt-6">
              Technical metrics coming soon...
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default AnalyticsPage;
