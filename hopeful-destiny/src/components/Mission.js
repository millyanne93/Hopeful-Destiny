// components/Mission.jsx (Enhanced About Us Section)
import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const Mission = () => {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  const fullAboutContent = `
    Hopeful Destiny CBO is a non-political and non-profit organization in Kitale, Kenya, dedicated to supporting children, youth, and women through sponsorship and empowerment projects.
    Founded in January 2025, the organization operates across Trans Nzoia County, bridging gaps where government services do not fully reach.
    The organization focuses on key areas such as Education, Child Protection, Health and Nutrition, Food Security, Water and Sanitation, and Climate Change.
    
    Many children in Trans Nzoia face challenges in accessing education due to poverty. Hopeful Destiny aims to provide school fees, uniforms, and learning materials, ensuring that children complete their education.
    
    Health and nutrition programs are also a priority, with the organization supporting the county government by supplying essential items like medical kits, nutritional supplements, and hygiene products. 
    
    The community also benefits from sustainable projects targeting youth and women, including vocational training, agribusiness, and small-scale enterprises, fostering financial independence.
    
    Climate change has impacted the region significantly, with erratic weather patterns affecting agriculture and livelihoods. The organization supports mitigation strategies such as tree planting and training programs on climate adaptation.
    
    Hopeful Destiny CBO is committed to empowering communities through partnerships, grants, and fundraising efforts, ensuring long-term development and sustainability.
  `;

  const shortAboutContent = fullAboutContent.slice(0, 300) + "..."; // Adjust the length as needed

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Welcome to Hopeful Destiny CBO</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isAboutExpanded ? fullAboutContent : shortAboutContent}
          </p>
          <button
            onClick={() => setIsAboutExpanded(!isAboutExpanded)}
            className="mt-4 text-yellow-700 font-semibold flex items-center mx-auto hover:text-yellow-800"
          >
            {isAboutExpanded ? (
              <>Read Less <ChevronUp className="w-4 h-4 ml-2" /></>
            ) : (
              <>Read More <ChevronDown className="w-4 h-4 ml-2" /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mission;
