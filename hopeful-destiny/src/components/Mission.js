// components/Mission.jsx (About Us Section)
import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const Mission = () => {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const fullAboutContent = `
    Hopeful Destiny CBO is a non-political and non-profit organization in Kitale, Kenya, dedicated to supporting children, youth, and women through sponsorship and empowerment projects. Our organization was founded with the vision of creating lasting change in communities through sustainable development initiatives. We work closely with local leaders and community members to identify needs and implement effective solutions that promote long-term growth and independence.
  `;

  const shortAboutContent = fullAboutContent.slice(0, 150) + "...";

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
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