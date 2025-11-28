import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, Sparkles } from 'lucide-react';

const Mission = ({ alignment = "center", removeSection = false }) => {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const highlightWords = ['children', 'youth', 'women', 'education', 'empowerment'];

  useEffect(() => {
    setIsVisible(true);

    // Rotating highlight effect
    const interval = setInterval(() => {
      // Removed unused activeWord state update
      // If you want to implement word highlighting later, add the logic here
    }, 2000);

    return () => clearInterval(interval);
  }, [highlightWords.length]); // Added highlightWords.length to dependency array

  const fullAboutContent = `Hopeful Destiny CBO is a non-political and non-profit organization in Kitale, Kenya, dedicated to supporting children, youth, and women through sponsorship and empowerment projects.

Founded in January 2025, the organization operates across Trans Nzoia County, bridging gaps where government services do not fully reach.

The organization focuses on key areas such as Education, Child Protection, Health and Nutrition, Food Security, Water and Sanitation, and Climate Change.

Many children in Trans Nzoia face challenges in accessing education due to poverty. Hopeful Destiny aims to provide school fees, uniforms, and learning materials, ensuring that children complete their education.

Health and nutrition programs are also a priority, with the organization supporting the county government by supplying essential items like medical kits, nutritional supplements, and hygiene products.

The community also benefits from sustainable projects targeting youth and women, including vocational training, agribusiness, and small-scale enterprises, fostering financial independence.

Climate change has impacted the region significantly, with erratic weather patterns affecting agriculture and livelihoods. The organization supports mitigation strategies such as tree planting and training programs on climate adaptation.

Hopeful Destiny CBO is committed to empowering communities through partnerships, grants, and fundraising efforts, ensuring long-term development and sustainability.`;

  const shortAboutContent = fullAboutContent.split('\n\n')[0] + "...";

  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  const buttonAlignmentClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end"
  };

  const MissionContent = () => (
    <div className={`flex flex-col h-full ${alignmentClasses[alignment]} relative`}>
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 bg-yellow-400 rounded-full blur-3xl animate-float"
            style={{
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Title with animation */}
      <div
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
          <span className="relative z-10">Welcome to Hopeful Destiny CBO</span>
          <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-yellow-500 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform origin-left transition-transform duration-700 scale-x-100"></div>
        </h2>
      </div>

      {/* Content with staggered fade-in */}
      <div
        className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="min-h-[150px] relative">
          {/* Animated background card */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-white rounded-2xl transform transition-all duration-500 hover:shadow-xl -z-10"></div>

          <div className="relative p-6 md:p-8">
            <p
              className={`text-gray-700 whitespace-pre-line leading-relaxed text-base md:text-lg ${
                alignment === "center" ? "max-w-3xl mx-auto" : ""
              } transition-all duration-500 ${
                isAboutExpanded ? 'max-h-[2000px]' : 'max-h-32 overflow-hidden'
              }`}
            >
              {isAboutExpanded ? fullAboutContent : shortAboutContent}
            </p>

            {/* Fade overlay when collapsed */}
            {!isAboutExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            )}
          </div>
        </div>

        {/* Enhanced button with ripple effect */}
        <div className={`mt-8 flex ${buttonAlignmentClasses[alignment]}`}>
          <button
            onClick={() => setIsAboutExpanded(!isAboutExpanded)}
            className="group relative inline-flex items-center px-6 py-3 border-2 border-yellow-600 rounded-full bg-gradient-to-r from-yellow-50 to-yellow-100 text-yellow-700 font-semibold hover:from-yellow-600 hover:to-yellow-700 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden"
          >
            {/* Ripple effect background */}
            <span className="absolute inset-0 bg-yellow-600 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>

            {/* Button content */}
            <span className="relative z-10 flex items-center">
              {isAboutExpanded ? (
                <>
                  Read Less
                  <ChevronUp className="w-5 h-5 ml-2 transform group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  Read More
                  <ChevronDown className="w-5 h-5 ml-2 transform group-hover:translate-y-1 transition-transform animate-bounce" />
                </>
              )}
            </span>
          </button>
        </div>
      </div>

      {/* Key focus areas with animated pills */}
      <div
        className={`mt-8 flex flex-wrap gap-3 ${buttonAlignmentClasses[alignment]} transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {['Education', 'Health', 'Empowerment', 'Climate Action'].map((area, index) => (
          <span
            key={area}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-yellow-200 text-yellow-700 text-sm font-medium hover:bg-yellow-100 hover:border-yellow-400 transition-all transform hover:scale-110 cursor-pointer shadow-sm hover:shadow-md"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>
            {area}
          </span>
        ))}
      </div>
    </div>
  );

  if (removeSection) {
    return <MissionContent />;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white pt-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <MissionContent />
      </div>
    </section>
  );
};

export default Mission;
