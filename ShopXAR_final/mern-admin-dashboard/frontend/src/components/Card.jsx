import React from "react";

const Card = ({ title, value, icon, info }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow hover:shadow-lg transition-all border border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-400">{title}</span>
        <span>{icon}</span>
      </div>
      <div className="text-2xl font-bold">{value}</div>
      {info && <div className="text-sm text-green-400 mt-2">{info}</div>}
    </div>
  );
};

export default Card;