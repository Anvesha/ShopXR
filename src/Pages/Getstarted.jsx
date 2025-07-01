import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Getstarted = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[url('/assets/bg.png')] bg-cover bg-center text-white overflow-hidden">
      
      {/* Top Bar for Mobile */}
      <div className="md:hidden flex items-center justify-between p-4 bg-black bg-opacity-80">
        <h1 className="text-lg font-semibold">Get Started</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white focus:outline-none"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed md:static z-20 top-0 left-0 h-full w-64 transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-1/4 md:border-r`}>
        <Sidebar />
      </div>

      {/* Backdrop on mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main
        className={`flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 min-[801px]:grid-cols-2 gap-8 items-center justify-center transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : ''
        } md:ml-0`}
      >
        {/* Card 1 */}
        <div className="bg-black w-full max-w-xl min-h-[520px] rounded-3xl p-8 flex flex-col items-center shadow-2xl hover:scale-[1.03] transition-transform duration-300">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Get Started Now</h2>
          <p className="text-base mb-6 text-center">
            Get started now with 3D customization and custom configuration.
          </p>
          <img
            src="/assets/upload.png"
            alt="Upload Illustration"
            className="mb-6 w-48 sm:w-56 object-contain"
          />
          <div className="w-full space-y-3">
            <button
              onClick={() => navigate('/uploadpage')}
              className="bg-[#688F81] w-full py-3 rounded-md font-semibold text-lg hover:bg-green-700 transition duration-200"
            >
              START NOW
            </button>
            <button
              onClick={() => navigate('/videotutorials')}
              className="border border-white w-full py-3 rounded-md text-lg hover:bg-white hover:text-black transition duration-200"
            >
              VIDEO TUTORIAL
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-black w-full max-w-xl min-h-[520px] rounded-3xl p-8 flex flex-col items-center shadow-2xl hover:scale-[1.03] transition-transform duration-300">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Try Our Sample 3D Model</h2>
          <p className="text-base text-center mb-6">
            Download and try our professional 3D headphone model.
          </p>
          <img
            src="/assets/headphone.png"
            alt="Headphone Model"
            className="mb-6 w-48 sm:w-56 object-contain"
          />
          <button onClick={() => navigate('/startanduploadvideo')} 
          className="bg-[#688F81] w-full py-3 rounded-md font-semibold text-lg hover:bg-green-700 transition duration-200">
            DOWNLOAD
          </button>
        </div>
      </main>
    </div>
  );
};

export default Getstarted;
