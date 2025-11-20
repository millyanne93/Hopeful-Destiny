import { useState, useEffect } from 'react';
import { ArrowRight, Heart, Users, BookOpen } from 'lucide-react';
import heroImage from '../assets/children-laughing.jpg';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fade in animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Stats that count up
  const stats = [
    { icon: <Users className="w-6 h-6" />, number: '500+', label: 'Children Supported' },
    { icon: <BookOpen className="w-6 h-6" />, number: '50+', label: 'Schools Reached' },
    { icon: <Heart className="w-6 h-6" />, number: '10+', label: 'Communities Served' },
  ];

  return (
    <section className="relative h-[600px] md:h-[700px] text-white flex items-center pt-20 overflow-hidden">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 transition-transform duration-100"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Animated Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content with staggered animations */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="inline-block animate-fade-in-up">Hopeful Destiny</span>
            <br />
            <span className="inline-block animate-fade-in-up animation-delay-200 text-yellow-400">
              Organisation
            </span>
          </h1>
          
          <p
            className={`text-lg md:text-xl mb-8 max-w-2xl transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Together we empower the community through education, child protection, and empowerment projects.
          </p>

          {/* Interactive Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button className="group bg-yellow-700 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2">
              Donate Now
              <Heart className="w-5 h-5 group-hover:animate-pulse" />
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all border-2 border-white/30 hover:border-white flex items-center justify-center gap-2">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Animated Stats Cards */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:bg-white/20 hover:border-yellow-400 transition-all cursor-pointer transform hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-yellow-400 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold group-hover:text-yellow-400 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-200">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
