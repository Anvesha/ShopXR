import React, { useState } from "react";
import {
  FaCheckCircle,
  FaEdit,
  FaTrash,
  FaDownload,
  FaSlidersH,
} from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import Sidebar from "../components/Sidebar";

const UploadGalleryPage = () => {
  const [selected, setSelected] = useState([]);

  const images = Array(8).fill({
    name: "Telephone",
    status: "Succeeded",
    scanType: "Photo Scan",
    date: "Apr 13 2025 - 18:12",
    imageUrl: "./assets/telephone.png", 
  });

  const toggleSelect = (index) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="flex bg-black min-h-screen text-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-[#0e0e0e] border-r border-gray-800 hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-black w-full">
        <div className="max-w-[1440px] mx-auto px-8 py-10">

          {/* Tabs */}
          <div className="flex space-x-8 text-sm font-medium mb-8 border-b border-gray-700">
            {["All", "Processed", "Succeeded", "Failed"].map((tab, idx) => (
              <button
                key={idx}
                className={`pb-2 ${
                  idx === 0
                    ? "border-b-2 border-white text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search & Filter */}
          <div className="flex flex-wrap items-center justify-between mb-10 gap-4">
            <input
              type="text"
              placeholder="Search for anything..."
              className="bg-[#1A1A1A] placeholder-gray-500 text-white px-4 py-2 rounded-lg border border-gray-700 w-full max-w-sm"
            />
            <div className="flex gap-3">
              <button className="bg-[#1A1A1A] border border-gray-700 px-4 py-2 rounded-md text-sm">
                Categories
              </button>
              <button className="bg-[#1A1A1A] border border-gray-700 px-4 py-2 rounded-md text-sm">
                Sort by
              </button>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => toggleSelect(index)}
                className={`cursor-pointer relative bg-[#1E1E1E] rounded-xl p-3 border transition ${
                  selected.includes(index)
                    ? "border-blue-400"
                    : "border-transparent"
                }`}
              >
                <div className="relative">
                  <img
                    src={img.imageUrl}
                    alt={img.name}
                    className="w-full h-[188px] object-cover rounded-md"
                  />
                  <span className="absolute top-2 left-2 bg-green-600 text-xs px-2 py-1 rounded">
                    {img.status}
                  </span>
                  {selected.includes(index) && (
                    <FaCheckCircle
                      className="absolute top-2 right-2 text-green-400"
                      size={18}
                    />
                  )}
                </div>
                <div className="mt-3">
                  <div className="font-semibold text-sm">{img.name}</div>
                  <div className="text-xs bg-[#2A2A2A] inline-block mt-1 px-2 py-0.5 rounded text-gray-300">
                    {img.scanType}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">{img.date}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 bg-[#1A1A1A] border border-gray-700 rounded-xl px-6 py-4 flex flex-wrap justify-between items-center text-sm">
            <div className="mb-2 sm:mb-0">
              Selected {selected.length}{" "}
              <button className="text-blue-500 ml-2 underline">Select All</button>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-1 px-4 py-1 border border-gray-600 rounded-md">
                <FiBox /> AR
              </button>
              <button className="flex items-center gap-1 px-4 py-1 border border-gray-600 rounded-md">
                <FaDownload /> Download
              </button>
              <button className="flex items-center gap-1 px-4 py-1 border border-gray-600 rounded-md">
                <FaEdit /> Edit
              </button>
              <button className="flex items-center gap-1 px-4 py-1 border border-red-600 text-red-400 rounded-md">
                <FaTrash /> Delete
              </button>
              <button className="flex items-center gap-1 px-4 py-1 border border-gray-600 rounded-md">
                <FaSlidersH /> Adjust
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UploadGalleryPage;
