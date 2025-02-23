import React from 'react';

const ValueCard = ({ title, description, Icon }) => {
  return (
    <div className="group relative overflow-hidden bg-blue-900 p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-white hover:text-gray-800">
      {/* Hover effect background */}
      <div className="absolute inset-0 bg-yellow-50 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out opacity-0 group-hover:opacity-100" />
      
      <div className="relative z-10 text-white group-hover:text-gray-800">
        {/* Icon Container */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 bg-blue-800 group-hover:bg-yellow-50">
          <Icon className="w-8 h-8 text-yellow-500 group-hover:text-yellow-600" />
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 group-hover:text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
