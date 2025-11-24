import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ValueCard from './ValueCard';
import { Shield, Handshake, Compass, Heart, Users, Star } from 'lucide-react';

const Values = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [activeValue, setActiveValue] = useState(null);

  const values = [
    {
      title: 'Dignity',
      description: 'We respect and value every individual we serve, honoring their inherent worth and treating everyone with compassion.',
      Icon: Shield,
      color: 'blue',
      stat: '100%',
      statLabel: 'Respectful Service'
    },
    {
      title: 'Partnership',
      description: 'We believe in collaborative efforts for greater impact, working together with communities and stakeholders.',
      Icon: Handshake,
      color: 'green',
      stat: '50+',
      statLabel: 'Active Partners'
    },
    {
      title: 'Transparency',
      description: 'We maintain integrity in all our operations, ensuring accountability and open communication at every level.',
      Icon: Compass,
      color: 'purple',
      stat: '100%',
      statLabel: 'Open Reports'
    },
  ];

  const additionalValues = [
    { icon: Heart, label: 'Compassion' },
    { icon: Users, label: 'Community' },
    { icon: Star, label: 'Excellence' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-5 animate-float"
            style={{
              width: `${10 + Math.random() * 30}px`,
              height: `${10 + Math.random() * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 15}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>

      <div 
        ref={ref}
        className="container mx-auto px-6 relative z-10"
      >
        {/* Enhanced Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <div className="inline-flex items-center justify-center mb-4">
            <Star className="w-5 h-5 text-yellow-400 animate-pulse mr-2" />
            <span className="text-blue-200 text-sm font-semibold uppercase tracking-wide">What Drives Us</span>
            <Star className="w-5 h-5 text-yellow-400 animate-pulse ml-2" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            These principles guide every action we take and every decision we make in our mission to serve communities.
          </p>

          {/* Decorative Line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Main Values Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {values.map((value, index) => (
            <ValueCard
              key={index}
              title={value.title}
              description={value.description}
              Icon={value.Icon}
              color={value.color}
              stat={value.stat}
              statLabel={value.statLabel}
              index={index}
              isActive={activeValue === index}
              onHover={() => setActiveValue(index)}
              onLeave={() => setActiveValue(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
