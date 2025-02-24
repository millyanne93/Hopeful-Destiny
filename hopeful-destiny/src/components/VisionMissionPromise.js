import React, { useState } from 'react';
import { Eye, Target, Heart, ArrowRight } from 'lucide-react';

const VisionMissionPromise = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const contentDetails = {
    vision: {
      icon: <Eye className="w-16 h-16 text-yellow-600" />,
      title: "Our Vision",
      shortDesc: "Creating hopeful destiny of the communities",
      longDesc: "Our vision extends beyond immediate assistance to creating lasting positive change in Trans Nzoia County. We envision communities where:",
      points: [
        "Every child has access to quality education and protection",
        "Youth and women are economically empowered",
        "Communities are resilient to climate change",
        "Access to clean water and proper sanitation is universal",
        "Food security is assured for all households"
      ],
      stats: [
        { number: "5+", label: "Focus Areas" },
        { number: "990K+", label: "Population Reach" },
        { number: "34%", label: "Poverty Rate" }
      ]
    },
    mission: {
      icon: <Target className="w-16 h-16 text-yellow-600" />,
      title: "Our Mission",
      shortDesc: "Supporting children, youth, and women through sponsorship and empowerment projects",
      longDesc: "We execute our mission through targeted interventions in key areas:",
      points: [
        "Education sponsorship and learning support",
        "Health and nutrition programs",
        "Food security initiatives",
        "Water and sanitation projects",
        "Climate change adaptation programs"
      ],
      stats: [
        { number: "100+", label: "Projects" },
        { number: "5", label: "Sub-counties" },
        { number: "3", label: "Target Groups" }
      ]
    },
    promise: {
      icon: <Heart className="w-16 h-16 text-yellow-600" />,
      title: "Our Promise",
      shortDesc: "Together we empower the community through education, child protection and community empowerment projects",
      longDesc: "We are committed to sustainable development through:",
      points: [
        "Transparent and accountable project management",
        "Community-driven initiative development",
        "Partnership with local government and institutions",
        "Long-term sustainability focus",
        "Inclusive programming for all community members"
      ],
      stats: [
        { number: "100%", label: "Transparency" },
        { number: "24/7", label: "Community Support" },
        { number: "3+", label: "Partner Types" }
      ]
    }
  };

  const TabContent = ({ content }) => (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="bg-yellow-50 p-4 rounded-full">
            {content.icon}
          </div>
          <div className="ml-6">
            <h3 className="text-2xl font-bold text-gray-800">{content.title}</h3>
            <p className="text-gray-600 mt-2">{content.shortDesc}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-4">{content.longDesc}</p>
            <ul className="space-y-3">
              {content.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4">Key Metrics</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {content.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-yellow-700">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="flex border-b">
        {Object.keys(contentDetails).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 px-6 text-center transition-all duration-300 ${
              activeTab === tab
                ? 'bg-yellow-50 text-yellow-700 border-b-2 border-yellow-700'
                : 'hover:bg-gray-50'
            }`}
          >
            {contentDetails[tab].title}
          </button>
        ))}
      </div>
      <TabContent content={contentDetails[activeTab]} />
    </div>
  );
};

export default VisionMissionPromise;
