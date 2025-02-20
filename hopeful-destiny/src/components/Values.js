// components/Values.jsx
// import React from 'react';
import ValueCard from './ValueCard'; // Import your ValueCard component

const Values = () => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <ValueCard title="Dignity" />
          <ValueCard title="Partnership" />
          <ValueCard title="Transparency" />
        </div>
      </div>
    </section>
  );
};

export default Values;