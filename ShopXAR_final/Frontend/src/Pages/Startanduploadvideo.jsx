import React, { useState } from 'react';
import { FaBars, FaChevronDown, FaImage, FaVideo, FaTimes } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';

const Startanduploadvideo = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-[url('/assets/bg.png')] bg-cover bg-center min-h-screen text-white relative">
      {/* Hamburger Button (Mobile only) */}
      <button
        className="absolute top-4 left-4 z-50 md:hidden bg-black p-2 rounded-md border border-white"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-40 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:translate-x-0 md:w-1/4`}
      >
        <Sidebar />
      </div>

      {/* Overlay for small screen sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex justify-center items-center p-4 sm:p-6 lg:p-10 ml-0 md:ml-0">
        <div className="bg-black border border-white rounded-3xl w-full max-w-6xl p-4 sm:p-6 lg:p-8 space-y-6">
          {/* Dropdown */}
          <div className="flex items-center gap-2 border border-white rounded-lg px-4 py-2 w-full max-w-sm mx-auto">
            <FaBars className="text-white" />
            <select className="bg-black text-white outline-none w-full">
              <option>Select</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
            <FaChevronDown className="text-white" />
          </div>

          {/* Upload and Preview */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Form Box */}
            <div className="border border-white rounded-2xl p-4 sm:p-6 w-full lg:max-w-sm space-y-4">
              <input
                type="text"
                placeholder="Enter the name for Product"
                className="w-full p-2 rounded-md bg-black border border-white text-white placeholder-gray-400"
              />

              <button className="w-full flex items-center gap-2 p-2 rounded-md border border-white text-white hover:bg-white hover:text-black transition">
                <FaImage />
                Upload Image
              </button>
              <p className="text-xs text-gray-400">Supported file formats: jpg, png</p>

              <button className="w-full flex items-center gap-2 p-2 rounded-md border border-white text-white hover:bg-white hover:text-black transition">
                <FaVideo />
                Upload Video
              </button>
              <p className="text-xs text-gray-400">Supported file formats: mp4, mov</p>

              <button className="w-full mt-4 bg-[#7DA18A] hover:bg-[#6a947a] text-white py-2 rounded-md font-semibold">
                SAVE
              </button>
            </div>

            {/* Preview Box */}
            <div className="border border-white rounded-2xl flex-1 flex flex-col justify-center items-center p-4">
              <img
                src="/assets/vase.png"
                alt="Vase Preview"
                className="h-64 sm:h-80 md:h-96 object-contain"
              />
              <p className="text-xs text-gray-400 mt-2 text-center">Rotate for better View</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startanduploadvideo;
