import React, { useState } from 'react';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

const Uploadpage = () => {
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');
  const [error, setError] = useState('');
  const [uploadedFileInfo, setUploadedFileInfo] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadMessage('');
    setError('');
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setUploadedFileInfo(res.data.file);
      setUploadMessage('File uploaded successfully!');
      setError('');
    } catch (err) {
      const msg = err.response?.data?.message || 'Upload failed. Check file type/size.';
      setError(msg);
      setUploadMessage('');
      setUploadedFileInfo(null);
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-[url('/assets/bg.png')] bg-cover bg-center min-h-screen text-white">
      
      {/* Sidebar */}
      <div className="w-full md:w-1/4">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex justify-center items-center p-4 sm:p-6 lg:p-10">
        <div className="bg-black border border-white rounded-3xl w-full max-w-6xl p-6 sm:p-8">

          {/* Dropdown */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 border border-white rounded-lg px-4 py-2 w-full max-w-sm">
              <FaBars className="text-white" />
              <select className="bg-black text-white outline-none w-full">
                <option>Select</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <FaChevronDown className="text-white" />
            </div>
          </div>

          {/* Upload Box */}
          <div
            className="border border-white rounded-2xl w-full h-[300px] sm:h-[400px] flex items-center justify-center px-4 text-center cursor-pointer relative"
            onClick={() => document.getElementById('hidden-file').click()}
          >
            <div>
              <img
                src="/assets/uploaded.png"
                alt="Upload Icon"
                className="mx-auto w-24 sm:w-32 h-auto"
              />
              <p className="text-gray-300 mt-4 text-sm sm:text-lg">
                Drag or click to upload your File
              </p>
              {file && (
                <p className="text-green-400 mt-2 text-sm">
                  Selected: {file.name}
                </p>
              )}
              <input
                type="file"
                id="hidden-file"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* Upload Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleUpload}
              className="bg-white text-black font-semibold px-6 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Upload File
            </button>

            {uploadMessage && (
              <p className="text-green-400 mt-4">{uploadMessage}</p>
            )}
            {error && (
              <p className="text-red-400 mt-4">{error}</p>
            )}
          </div>

          

        </div>
      </div>
    </div>
  );
};

export default Uploadpage;
