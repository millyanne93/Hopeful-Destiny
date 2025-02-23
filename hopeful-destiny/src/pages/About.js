import React, { useState } from 'react';
import { Users, Target, Heart, Eye, ArrowRight } from 'lucide-react';
import Mission from '../components/Mission';
import Values from '../components/Values';

// ✅ Import the image from the assets folder
import aboutImage from '../assets/children-friends.jpg';

const AboutPage = () => {
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

  return (
    <div className="w-full">
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center text-left mt-12">
              {/* ✅ Replacing Placeholder with Image */}
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="About Us"
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>

              {/* ✅ Right Column - Mission Section */}
              <div>
                <Mission />
              </div>
            </div>
          </div>
        </div>
      </section>  

      {/* ✅ Vision, Mission, Promise Section */}
      <div className="container mx-auto px-6 mt-16">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Navigation Tabs */}
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

          {/* Tab Content Section */}
          <div className="p-8">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="flex items-center mb-8">
                <div className="bg-yellow-50 p-4 rounded-full">
                  {contentDetails[activeTab].icon}
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold text-gray-800">{contentDetails[activeTab].title}</h3>
                  <p className="text-gray-600 mt-2">{contentDetails[activeTab].shortDesc}</p>
                </div>
              </div>

              {/* Main Content */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-4">{contentDetails[activeTab].longDesc}</p>
                  <ul className="space-y-3">
                    {contentDetails[activeTab].points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats/Metrics */}
                <div className="bg-yellow-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4">Key Metrics</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {contentDetails[activeTab].stats.map((stat, index) => (
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
        </div>
      </div> 

      {/* ✅ Values Section */}
      <div className="container mx-auto px-6 mt-20">
        <Values />
      </div>

      {/* ✅ Leadership Section with Responsibilities */}
      <div className="container mx-auto px-6 mt-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Leadership</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Chairperson', description: 'Oversees the organization’s overall strategy, governance, and decision-making.' },
            { title: 'Vice-chairperson', description: 'Assists the Chairperson and steps in when necessary to provide leadership.' },
            { title: 'Secretary', description: 'Maintains records, documents meetings, and manages organizational correspondence.' },
            { title: 'Treasurer', description: 'Manages the organization’s finances, budget, and financial reporting.' },
            { title: 'Vice Secretary', description: 'Supports the Secretary in administrative and record-keeping tasks.' },
            { title: 'Committee Members', description: 'Participate in decision-making, project oversight, and community engagement.' }
          ].map((role, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-yellow-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center">{role.title}</h3>
              <p className="text-gray-600 text-center mt-2">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
