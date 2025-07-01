import React from 'react';
import Sidebar from '../components/Sidebar';

const ProfileDashboard = () => {
  return (
    <div className="flex h-screen text-white bg-[url('/assets/bg.png')] bg-cover bg-center min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="bg-black border border-[#14532d] rounded-2xl p-6 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card - Profile Form */}
          <div className="bg-[#0a0a0a] rounded-xl p-6 border border-[#14532d]">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-600 rounded-full w-16 h-16"></div>
                <div>
                  <h3 className="font-semibold text-lg">Sam Wheeler</h3>
                  <p className="text-sm underline text-gray-300">samwheeler@example.com</p>
                </div>
              </div>
              <button className="bg-[#688F81] px-4 py-1 rounded-md">Edit</button>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm">First Name</label>
                  <p className="border-b border-white pb-1 text-sm">Kanishk Dadwal</p>
                </div>
                <div>
                  <label className="text-sm">Last Name</label>
                  <p className="border-b border-white pb-1 text-sm"></p>
                </div>
                <div>
                  <label className="text-sm">Phone no.</label>
                  <p className="border-b border-white pb-1 text-sm">+91 8699062545</p>
                </div>
                <div>
                  <label className="text-sm">Company</label>
                  <p className="border-b border-white pb-1 text-sm"></p>
                </div>
                <div className="col-span-2">
                  <label className="text-sm">Email</label>
                  <p className="border-b border-white pb-1 text-sm"></p>
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 bg-[#688F81] px-6 py-2 rounded-md text-white float-right"
              >
                SAVE
              </button>
            </form>
          </div>

          {/* Right Card - Credit Cards */}
          <div className="bg-[#0a0a0a] rounded-xl p-6 border border-[#14532d] flex flex-col gap-6 justify-center">
            <div className="bg-gradient-to-tr from-pink-500 to-orange-400 rounded-xl p-6 shadow-md text-white">
              <p className="text-sm">Current Balance</p>
              <h2 className="text-2xl font-bold mt-1">$4,570.80</h2>
              <div className="mt-6">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1087/1087815.png"
                  alt="Graph"
                  className="w-20 float-right"
                />
              </div>
            </div>

            <div className="bg-gradient-to-tr from-red-500 to-orange-500 rounded-xl p-6 shadow-md text-white">
              <p className="text-sm">Current Balance</p>
              <h2 className="text-2xl font-bold mt-1">$4,570.80</h2>
              <div className="flex justify-between items-center mt-6">
                <p className="text-xs">5294 2436 4780 2468</p>
                <p className="text-xs">12/24</p>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                alt="Mastercard"
                className="w-12 mt-2"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileDashboard;
