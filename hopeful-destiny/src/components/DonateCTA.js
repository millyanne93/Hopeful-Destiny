import React from 'react';

const DonateCTA = ({ className = "" }) => {
  return (
    <div className={`mt-8 p-6 bg-blue-100 rounded-lg text-center ${className} sm:w-full md:w-full lg:w-full`}>
      <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Support Our Mission</h2>
      <p className="text-gray-800 mb-4">
        Your generous donation helps us make a real difference in the lives of those we serve. Join us in creating a brighter future.
      </p>
      <a
        href=""
        className="bg-yellow-700 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-full inline-block"
      >
        Donate Now
      </a>
    </div>
  );
};

export default DonateCTA;