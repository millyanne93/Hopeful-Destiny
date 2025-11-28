import React, { useState } from 'react';
import { BookOpen, Heart, Users, Droplet, Leaf, ArrowRight, Info } from 'lucide-react';
import { useInView } from 'react-intersection-observer';


const Programs = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [hoveredCard, setHoveredCard] = useState(null);

  const programs = [
    {
      icon: <BookOpen className="w-12 h-12 text-yellow-600" />,
      title: "Education & Child Protection",
      description: "Supporting children with school fees, uniforms, books and learning items.",
      to: "/Hopeful-Destiny/education",
      color: "blue",
      stats: "500+ Children"
    },
    {
      icon: <Heart className="w-12 h-12 text-yellow-600" />,
      title: "Health & Nutrition",
      description: "Supporting health and nutrition programs, community training.",
      to: "/Hopeful-Destiny/health",
      color: "red",
      stats: "30+ Clinics"
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-600" />,
      title: "Food Security & Livelihoods",
      description: "Supporting table banking, youth empowerment, and food security.",
      to: "/Hopeful-Destiny/food-security",
      color: "green",
      stats: "200+ Families"
    },
    {
      icon: <Droplet className="w-12 h-12 text-yellow-600" />,
      title: "Water & Sanitation",
      description: "Supporting clean water supply and hygiene promotion practices.",
      to: "/Hopeful-Destiny/water-sanitation",
      color: "cyan",
      stats: "10+ Communities"
    },
    {
      icon: <Leaf className="w-12 h-12 text-yellow-600" />,
      title: "Climate Change",
      description: "Tree planting, adaptation measures, and research support.",
      to: "/Hopeful-Destiny/climate",
      color: "emerald",
      stats: "5000+ Trees"
    },
  ];

  return (
    <section id="programs" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            Our Focus Areas
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6">
            Comprehensive programs designed to create lasting impact in our communities
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                inView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Enhanced Card with 3D effect */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-yellow-300 overflow-hidden h-full">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${program.color}-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Icon with animated ring */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 bg-${program.color}-50 rounded-2xl group-hover:bg-yellow-100 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3`}>
                    <div className="transform group-hover:scale-110 transition-transform duration-500">
                      {program.icon}
                    </div>
                  </div>
                  
                  {/* Animated ring on hover */}
                  {hoveredCard === index && (
                    <div className="absolute inset-0 animate-ping">
                      <div className={`w-full h-full bg-${program.color}-200 rounded-2xl opacity-20`}></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-yellow-700 transition-colors duration-300">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Stats badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-gray-100 group-hover:bg-yellow-100 rounded-full text-sm font-semibold text-gray-700 group-hover:text-yellow-700 transition-all mb-4">
                    <Info className="w-4 h-4 mr-1" />
                    {program.stats}
                  </div>

                  {/* Learn More Link with arrow */}
                  <a
                    href={program.to}
                    className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors group-hover:gap-3 gap-2 duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Decorative corner element */}
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-${program.color}-400 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
