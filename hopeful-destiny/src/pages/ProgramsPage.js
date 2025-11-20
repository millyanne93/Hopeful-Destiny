import React from 'react';
import Programs from '../components/Programs';
import Footer from '../components/Footer';

const ProgramsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-br from-yellow-50 to-yellow-100">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Programs
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We focus on five key thematic areas to create sustainable and lasting 
              change in our communities. Each program is designed to address critical 
              needs and empower individuals to build a hopeful destiny.
            </p>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <Programs />

      {/* Call to Action */}
      <section className="bg-yellow-700 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to Support Our Programs?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Your contribution can make a real difference in the lives of those we serve. 
            Join us in building hopeful destinies.
          </p>
          <button className="bg-white text-yellow-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
            Donate Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramsPage;
