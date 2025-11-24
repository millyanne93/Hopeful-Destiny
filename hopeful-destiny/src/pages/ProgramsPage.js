import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Heart, TrendingUp, Users, ArrowRight } from 'lucide-react';
import Programs from '../components/Programs';
import Footer from '../components/Footer';

const ProgramsPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('all');

  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '5', label: 'Focus Areas', color: 'blue' },
    { icon: <Heart className="w-8 h-8" />, number: '1000+', label: 'Lives Impacted', color: 'red' },
    { icon: <TrendingUp className="w-8 h-8" />, number: '15+', label: 'Active Projects', color: 'green' },
  ];

  const tabs = [
    { id: 'all', label: 'All Programs' },
    { id: 'education', label: 'Education' },
    { id: 'health', label: 'Health' },
    { id: 'community', label: 'Community' },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Enhanced Hero Section */}
      <div 
        ref={heroRef}
        className="pt-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-yellow-300 rounded-full blur-2xl opacity-20 animate-float"
              style={{
                width: `${50 + Math.random() * 100}px`,
                height: `${50 + Math.random() * 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className={`container mx-auto px-6 py-16 relative z-10 transition-all duration-1000 ${
          heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center max-w-4xl mx-auto">
            {/* Animated Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md mb-6 transform hover:scale-105 transition-transform">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-semibold text-gray-700">5 Key Focus Areas</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="inline-block animate-fade-in-up">Our</span>{' '}
              <span className="inline-block animate-fade-in-up animation-delay-200 text-yellow-600">Programs</span>
            </h1>
            
            <p className={`text-lg md:text-xl text-gray-700 leading-relaxed mb-8 transition-all duration-1000 delay-300 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              We focus on five key thematic areas to create sustainable and lasting
              change in our communities. Each program is designed to address critical
              needs and empower individuals to build a hopeful destiny.
            </p>

            {/* Interactive Tab Filter (Optional - can be used to filter programs) */}
            <div className={`flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-500 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                    activeTab === tab.id
                      ? 'bg-yellow-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-yellow-50 border border-gray-200'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className="py-12 bg-white relative"
      >
        <div className="container mx-auto px-6">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 ${
            statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-${stat.color}-50 to-white rounded-2xl p-6 border border-${stat.color}-100 hover:border-${stat.color}-300 transition-all transform hover:scale-105 hover:shadow-xl cursor-pointer overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 flex items-center gap-4">
                  <div className={`p-3 bg-${stat.color}-100 rounded-xl group-hover:scale-110 transition-transform`}>
                    <div className={`text-${stat.color}-600`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div>
                    <div className={`text-3xl font-bold text-${stat.color}-600 group-hover:scale-110 transition-transform`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>

                {/* Animated corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-${stat.color}-400 rounded-bl-full opacity-10 transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section with Enhanced Layout */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Programs />
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section 
        ref={ctaRef}
        className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 py-20 relative overflow-hidden"
      >
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-white rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 12}s`,
              }}
            />
          ))}
        </div>

        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${
          ctaInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Want to Support Our Programs?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
              Your contribution can make a real difference in the lives of those we serve.
              Join us in building hopeful destinies.
            </p>

            {/* Enhanced Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative bg-white text-yellow-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl hover:shadow-3xl overflow-hidden">
                {/* Ripple effect */}
                <span className="absolute inset-0 bg-yellow-100 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Donate Now
                  <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </span>
              </button>

              <button className="group bg-yellow-800 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-900 transition-all transform hover:scale-105 border-2 border-white/30 hover:border-white flex items-center justify-center gap-2">
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Impact Statement */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { amount: 'Ksh 1,000', impact: 'School supplies for one child' },
                { amount: 'Ksh 5,000', impact: 'Health clinic visit for a family' },
                { amount: 'Ksh 10,000', impact: 'Month of clean water access' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl font-bold text-white mb-2">{item.amount}</div>
                  <div className="text-white/90 text-sm">{item.impact}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramsPage;
