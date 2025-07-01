import React, { useState, useContext } from 'react';
import Sidebar from '../components/Sidebar';
import { FaUpload } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const CustomizePage = () => {
  const [toggles, setToggles] = useState({
    companyLogo: true,
    buyNow: true,
    recommendation: true,
    photoMode: true,
  });

  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-black bg-[url('/assets/bg.png')] bg-cover bg-center text-black dark:text-white transition-colors duration-300">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-4 sm:p-6 flex justify-center items-start">
        <div className="w-full max-w-5xl bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-3xl p-4 sm:p-6 shadow-lg space-y-5 transition-colors duration-300">

          {/* Header */}
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-semibold">
              Personalization for Try On
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* Company Logo Upload */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-gray-100 dark:bg-[#1E1E1E] rounded-md p-4">
              <span className="text-sm sm:text-base">Company Logo</span>
              <button className="bg-gray-300 dark:bg-gray-800 p-3 rounded-full text-lg">
                <FaUpload />
              </button>
            </div>

            {/* Buy Now Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-gray-100 dark:bg-[#1E1E1E] rounded-md p-4">
              <span className="text-sm sm:text-base">Buy now button</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={toggles.buyNow}
                  onChange={() => handleToggle('buyNow')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-cyan-500 transition-all duration-300"></div>
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    toggles.buyNow ? 'translate-x-5' : ''
                  }`}
                />
              </label>
            </div>

            {/* Buy Now Text */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-gray-100 dark:bg-[#1E1E1E] rounded-md p-4">
              <span className="text-sm sm:text-base">Buynow button text</span>
              <input
                type="text"
                placeholder="BUY NOW"
                className="bg-white dark:bg-black text-black dark:text-white border border-gray-400 dark:border-gray-600 rounded px-3 py-1 text-sm w-full sm:w-56"
              />
            </div>

            {/* Product Recommendation Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-gray-100 dark:bg-[#1E1E1E] rounded-md p-4">
              <span className="text-sm sm:text-base">Product Recommendation</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={toggles.recommendation}
                  onChange={() => handleToggle('recommendation')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-cyan-500 transition-all duration-300"></div>
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    toggles.recommendation ? 'translate-x-5' : ''
                  }`}
                />
              </label>
            </div>

            {/* Photo Mode Option Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-gray-100 dark:bg-[#1E1E1E] rounded-md p-4">
              <span className="text-sm sm:text-base">Photo Mode Option</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={toggles.photoMode}
                  onChange={() => handleToggle('photoMode')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-cyan-500 transition-all duration-300"></div>
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    toggles.photoMode ? 'translate-x-5' : ''
                  }`}
                />
              </label>
            </div>

            {/* Color Theme Dropdown (Controls Global Theme) */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-gray-100 dark:bg-[#1E1E1E] rounded-md p-4">
              <span className="text-sm sm:text-base">Color Theme</span>
              <select
                value={theme}
                
                className="bg-white dark:bg-black border border-gray-400 dark:border-gray-600 text-black dark:text-white rounded px-3 py-1 text-sm"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>

            {/* Language */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-gray-100 dark:bg-[#1E1E1E] rounded-md p-4">
              <span className="text-sm sm:text-base">Language</span>
              <select className="bg-white dark:bg-black border border-gray-400 dark:border-gray-600 text-black dark:text-white rounded px-3 py-1 text-sm">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>

            {/* Fonts */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-gray-100 dark:bg-[#1E1E1E] rounded-md p-4">
              <span className="text-sm sm:text-base">Fonts</span>
              <select className="bg-white dark:bg-black border border-gray-400 dark:border-gray-600 text-black dark:text-white rounded px-3 py-1 text-sm">
                <option>Helvetica</option>
                <option>Roboto</option>
                <option>Inter</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
            <button className="px-4 py-2 border border-gray-600 rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-800 transition">
              Reset to Default
            </button>
            <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-md text-sm transition">
              Save & Preview
            </button>
            <button className="px-4 py-2 border border-gray-600 rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-800 transition">
              Cancel
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomizePage;
