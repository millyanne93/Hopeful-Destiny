// src/components/DonationCTA.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Heart, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DonateCTA = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const impactLevels = [
    { amount: 'KSh 1,000', impact: 'School supplies for one child', icon: '📚' },
    { amount: 'KSh 5,000', impact: 'Health clinic visit for a family', icon: '🏥' },
    { amount: 'KSh 10,000', impact: 'Month of clean water access', icon: '💧' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 relative overflow-hidden">
      {/* Background elements same as your current Donation.js */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20 animate-float"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

      <div
        ref={ref}
        className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${
          inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Header */}
          <div className="inline-flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-white animate-pulse mr-2" />
            <span className="text-white/90 text-sm font-semibold uppercase tracking-wide">Make an Impact Today</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Change a Life Today
          </h2>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
            Your support creates lasting change in our communities. See what your donation can achieve.
          </p>

          {/* Impact Levels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {impactLevels.map((level, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white transition-all transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {level.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-3">
                  {level.amount}
                </div>
                <div className="text-white/90 text-base leading-relaxed">
                  {level.impact}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/donate"
              className="group relative bg-white text-yellow-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl overflow-hidden flex items-center justify-center gap-2"
            >
              <span className="relative z-10">
                Donate Now
              </span>
              <Heart className="w-5 h-5 group-hover:scale-110 group-hover:animate-pulse transition-transform fill-current" />
            </Link>

            <Link
              to="/contact"
              className="group bg-yellow-800 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-900 transition-all transform hover:scale-105 border-2 border-white/30 hover:border-white flex items-center justify-center gap-2"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-300" />
              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-300" />
              <span>Tax Deductible</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-300" />
              <span>Transparent Use</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateCTA;
