import React from "react";

const RecentActivity = () => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl border border-gray-700 w-full"> {/* Added w-full for explicit full width */}
      <div className="font-semibold mb-2">Recent Activity</div>
      <div className="text-sm text-gray-400 mb-4">
        Latest user actions and system events
      </div>
      <ul className="space-y-3">
        <li className="flex justify-between items-start text-sm"> {/* Added items-start for better vertical alignment */}
          <span>
            <span className="text-white">Uploaded 3D Model</span>
            <br />
            <span className="text-gray-400 text-xs">
              User : John Doe , Model # 123
            </span>
          </span>
          <span className="text-xs text-gray-400 flex-shrink-0 ml-2">14:30</span> {/* flex-shrink-0 to prevent time from wrapping */}
        </li>
        <li className="flex justify-between items-start text-sm">
          <span>
            <span className="text-white">User Login</span>
            <br />
            <span className="text-gray-400 text-xs">User : Jane Smith</span>
          </span>
          <span className="text-xs text-gray-400 flex-shrink-0 ml-2">13:15</span>
        </li>
        {/* You can add more list items here dynamically from data */}
        <li className="flex justify-between items-start text-sm">
          <span>
            <span className="text-white">Video Request Completed</span>
            <br />
            <span className="text-gray-400 text-xs">User : Michael Brown, Request # 456</span>
          </span>
          <span className="text-xs text-gray-400 flex-shrink-0 ml-2">12:00</span>
        </li>
        <li className="flex justify-between items-start text-sm">
          <span>
            <span className="text-white">New User Registered</span>
            <br />
            <span className="text-gray-400 text-xs">User : Emily White</span>
          </span>
          <span className="text-xs text-gray-400 flex-shrink-0 ml-2">11:45</span>
        </li>
      </ul>
    </div>
  );
};

export default RecentActivity;