import React from 'react';
import AboutHeader from '../components/AboutHeader';
import VisionMissionPromise from '../components/VisionMissionPromise';
import Values from '../components/Values';
import Leadership from '../components/Leadership';

const AboutPage = () => {
  return (
    <div className="w-full">
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <AboutHeader />
        </div>
      </section>

      <div className="container mx-auto px-6 mt-16">
        <VisionMissionPromise />
      </div>

      <div className="container mx-auto px-6 mt-20">
        <Values />
      </div>

      <div className="container mx-auto px-6 mt-16 mb-16">
        <Leadership />
      </div>
    </div>
  );
};

export default AboutPage;
