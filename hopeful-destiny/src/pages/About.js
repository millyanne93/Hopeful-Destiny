import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import AboutHeader from '../components/AboutHeader';
import VisionMissionPromise from '../components/VisionMissionPromise';
import Values from '../components/Values';
import Leadership from '../components/Leadership';
import Footer from '../components/Footer';
import DonateCTA from '../components/DonateCTA';
const AboutPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Intersection Observer hooks for each section
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [visionRef, visionInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [leadershipRef, leadershipInView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full relative">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero-style header with gradient */}
      <section 
        ref={headerRef}
        className="pt-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-50 relative overflow-hidden"
      >
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className={`container mx-auto px-6 py-16 relative z-10 transition-all duration-1000 ${
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <AboutHeader />
        </div>
      </section>

      {/* Vision, Mission, Promise - Card Style */}
      <section 
        ref={visionRef}
        className="py-20 bg-white relative"
      >
        <div className={`container mx-auto px-6 transition-all duration-1000 delay-200 ${
          visionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section title with animation */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Our Foundation
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The guiding principles that drive our mission forward
            </p>
          </div>

          <div className="relative">
            {/* Connecting line between cards */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent transform -translate-y-1/2 z-0"></div>
            
            <VisionMissionPromise />
          </div>
        </div>
      </section>

      {/* Values - Interactive Grid */}
      <section 
        ref={valuesRef}
        className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-yellow-200 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className={`container mx-auto px-6 relative z-10 transition-all duration-1000 delay-300 ${
          valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Values />
        </div>
      </section>

      {/* Leadership - Premium Card Style */}
      <section 
        ref={leadershipRef}
        className="py-20 bg-white relative"
      >
        <div className={`container mx-auto px-6 transition-all duration-1000 delay-400 ${
          leadershipInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Leadership />
        </div>
      </section>

      <DonateCTA />

      <Footer />
    </div>
  );
};

export default AboutPage;
