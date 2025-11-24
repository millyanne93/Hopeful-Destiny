import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Heart, CreditCard, Building2, ArrowRight, Check, Sparkles } from 'lucide-react';

const Donation = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [selectedMethod, setSelectedMethod] = useState(null);

  const donationMethods = [
    {
      id: 'paybill',
      icon: <CreditCard className="w-8 h-8" />,
      title: 'M-PESA PayBill',
      description: 'Quick and secure mobile payment',
      color: 'green',
      details: {
        paybill: '123456',
        account: 'Your Name/Donation'
      }
    },
    {
      id: 'bank',
      icon: <Building2 className="w-8 h-8" />,
      title: 'Bank Transfer',
      description: 'Direct bank deposit',
      color: 'blue',
      details: {
        bank: 'Bank Name',
        account: '1234567890',
        branch: 'Branch Name'
      }
    }
  ];

  const impactLevels = [
    { amount: 'KSh 1,000', impact: 'School supplies for one child', icon: '📚' },
    { amount: 'KSh 5,000', impact: 'Health clinic visit for a family', icon: '🏥' },
    { amount: 'KSh 10,000', impact: 'Month of clean water access', icon: '💧' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 relative overflow-hidden">
      {/* Animated Background Particles */}
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

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

      <div 
        ref={ref}
        className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${
          inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-white animate-pulse mr-2" />
              <span className="text-white/90 text-sm font-semibold uppercase tracking-wide">Make an Impact Today</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Support Our Cause
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Every contribution, no matter the size, creates ripples of change in our communities. 
              Choose your preferred donation method below.
            </p>
          </div>

          {/* Donation Methods Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {donationMethods.map((method, index) => (
              <div
                key={method.id}
                className={`group relative bg-white rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                  selectedMethod === method.id ? 'ring-4 ring-white shadow-2xl' : 'hover:shadow-xl'
                }`}
                onClick={() => setSelectedMethod(selectedMethod === method.id ? null : method.id)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Selected Indicator */}
                {selectedMethod === method.id && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500 text-white rounded-full p-1">
                      <Check className="w-5 h-5" />
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={`inline-flex p-4 bg-${method.color}-50 rounded-2xl mb-4 group-hover:bg-${method.color}-100 transition-all transform group-hover:scale-110 group-hover:rotate-3`}>
                  <div className={`text-${method.color}-600 transform group-hover:scale-110 transition-transform`}>
                    {method.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-yellow-700 transition-colors">
                  {method.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {method.description}
                </p>

                {/* Details - Show when selected */}
                <div className={`transition-all duration-500 overflow-hidden ${
                  selectedMethod === method.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
                    {Object.entries(method.details).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                        <span className="text-sm font-medium text-gray-600 capitalize">{key}:</span>
                        <span className="text-sm font-bold text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <button className={`w-full mt-4 px-6 py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2 ${
                  selectedMethod === method.id
                    ? 'bg-yellow-600 text-white hover:bg-yellow-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  {selectedMethod === method.id ? 'Copy Details' : 'Select Method'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Decorative corner */}
                <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-${method.color}-400 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>

          {/* Impact Levels Section */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              See Your Impact
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {impactLevels.map((level, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white transition-all transform hover:scale-105 cursor-pointer"
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
          </div>

          {/* Call to Action Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="group relative bg-white text-yellow-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl overflow-hidden">
                {/* Ripple effect */}
                <span className="absolute inset-0 bg-yellow-100 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Donate Now
                  <Heart className="w-5 h-5 group-hover:scale-110 group-hover:animate-pulse transition-transform fill-current" />
                </span>
              </button>

              <button className="group bg-yellow-800 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-900 transition-all transform hover:scale-105 border-2 border-white/30 hover:border-white flex items-center justify-center gap-2">
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
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
      </div>
    </section>
  );
};

export default Donation;
