import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaUpload,
  FaChartBar,
  FaCogs,
  FaPlug,
  FaEnvelope,
} from 'react-icons/fa';

const Sidebar = () => {
  const navItems = [
    { icon: <FaHome />, label: 'Home', path: '/' },
    { icon: <FaUpload />, label: 'Upload', path: '/uploadpage' },
    { icon: <FaChartBar />, label: 'Analytics', path: '/analytics' },
    { icon: <FaCogs />, label: 'Customize', path: '/customize' },
    { icon: <FaPlug />, label: 'Integration', path: '/integration' },
    { icon: <FaEnvelope />, label: 'Contact Us', path: '/contact' },
    
  ];

  return (
    <aside className="w-64 bg-black text-white p-6 flex flex-col justify-between min-h-screen rounded-tr-3xl rounded-br-3xl">
      <div>
        <Link to="/">
  <h1 className="text-2xl font-bold mb-10 cursor-pointer">
    ShopXAR
  </h1>
</Link>

        {/* Navigation */}
        <nav className="space-y-4">
          {navItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-2 rounded-md cursor-pointer transition-colors duration-200 ${
                  isActive
                    ? 'bg-white text-black font-semibold'
                    : 'hover:bg-gray-800'
                }`
              }
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="text-sm mt-10 mb-6 pb-6 border-t border-white pt-4">
        <NavLink to="/profiledashboard" className="flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-md">
          <div className="bg-white w-10 h-10 rounded-full overflow-hidden">
            <img
              src="/assets/profile.png"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold">MONOVA</div>
            <div className="text-gray-400 text-xs">
              samwheeler@example.com
            </div>
          </div>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
