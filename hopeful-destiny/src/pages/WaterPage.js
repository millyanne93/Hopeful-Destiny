import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Droplet, Users, TrendingUp, Target, CheckCircle, Home, Shield, Wrench, Heart } from 'lucide-react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import waterAndSanitation from "../assets/Water.png";
import DonateCTA from "../components/DonateCTA";

function WaterPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [impactRef, impactInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const keyStats = [
    { icon: <Users className="w-8 h-8" />, value: '70%', label: 'Lack Clean Water Access', color: 'blue' },
    { icon: <Droplet className="w-8 h-8" />, value: '10+', label: 'Communities Served', color: 'cyan' },
    { icon: <Home className="w-8 h-8" />, value: '5,000+', label: 'People Reached', color: 'green' },
    { icon: <Shield className="w-8 h-8" />, value: '2,500+', label: 'Hygiene Kits Distributed', color: 'purple' },
  ];

  const focusAreas = [
    {
      icon: <Droplet className="w-6 h-6" />,
      title: 'Water Supply Systems',
      description: 'Drilling boreholes and supporting water catchment systems to provide clean water access.',
      color: 'blue'
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Sanitation Facilities',
      description: 'Constructing latrines in schools and communities to improve sanitation access.',
      color: 'green'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Hygiene Promotion',
      description: 'Providing hygiene items and education to promote healthy practices.',
      color: 'purple'
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Emergency Response',
      description: 'Supplying water treatment sachets during emergencies to ensure safe drinking water.',
      color: 'orange'
    },
  ];

  const interventions = [
    {
      gap: 'Lack of clean water within a reasonable distance',
      interventions: [
        'Drilling boreholes and supporting water catchment, supply'
      ],
      achievements: ['Increased number of households with clean water'],
      monitoring: ['Number of people who access clean water through water projects done'],
      icon: <Droplet className="w-8 h-8" />,
      color: 'blue'
    },
    {
      gap: 'Lack of sanitation facilities in households',
      interventions: [
        'Sensitization on sanitation facilities/toilets'
      ],
      achievements: ['Increased number of households with latrines'],
      monitoring: ['Number of people with access to latrines'],
      icon: <Home className="w-8 h-8" />,
      color: 'green'
    },
    {
      gap: 'Lack of enough sanitation facilities in schools/market',
      interventions: [
        'Construction of latrines in schools'
      ],
      achievements: ['Increased number of children with access to latrines'],
      monitoring: ['Number of children with access to latrines'],
      icon: <Shield className="w-8 h-8" />,
      color: 'purple'
    },
    {
      gap: 'Lack of water treatment sachets',
      interventions: [
        'Supply of water treatment sachets during emergency'
      ],
      achievements: ['Increased number of households with water treatment sachets'],
      monitoring: ['Number of households with water treatment sachets'],
      icon: <Wrench className="w-8 h-8" />,
      color: 'orange'
    },
    {
      gap: 'Lack of hygiene lessons and supplies',
      interventions: [
        'Supply of hygiene items like sanitary pads and supporting hygiene lessons'
      ],
      achievements: ['Increased access to hygiene lessons and supplies'],
      monitoring: ['Number of children/youth/women accessing hygiene lessons and supplies'],
      icon: <Heart className="w-8 h-8" />,
      color: 'pink'
    }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section with Parallax Effect */}
      <div
        ref={heroRef}
        className="relative h-[500px] overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500"
          style={{
            backgroundImage: `url(${waterAndSanitation})`,
            transform: heroInView ? 'scale(1)' : 'scale(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-cyan-800/80" />

        <div className={`relative h-full flex items-center justify-center text-center px-6 transition-all duration-1000 ${
          heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Droplet className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Water, Sanitation & Hygiene</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Clean Water for All
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Ensuring access to safe water and promoting healthy sanitation practices in our communities
            </p>
          </div>
        </div>
      </div>

      {/* Key Statistics */}
      <section
        ref={statsRef}
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-6">
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${
            statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {keyStats.map((stat, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-${stat.color}-50 to-white rounded-2xl p-8 border-2 border-${stat.color}-200 hover:border-${stat.color}-400 transition-all transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-xl cursor-pointer`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-4 bg-${stat.color}-100 rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                  <div className={`text-${stat.color}-600`}>{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'overview', label: 'Overview', icon: <Target className="w-5 h-5" /> },
              { id: 'focus', label: 'Focus Areas', icon: <Droplet className="w-5 h-5" /> },
              { id: 'interventions', label: 'Our Interventions', icon: <CheckCircle className="w-5 h-5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-6xl mx-auto">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="animate-fade-in">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border border-blue-200 mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Droplet className="w-8 h-8 text-blue-600" />
                    The Challenge
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Access to clean water and adequate sanitation facilities is essential for the health and well-being of our communities. However, many households face significant challenges due to the lack of clean water within a reasonable distance and the absence of proper sanitation facilities.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our organization is committed to addressing these critical gaps and ensuring that everyone has access to safe water and sanitation, fostering a healthier and more resilient future.
                  </p>
                </div>

                {/* Circular Progress Visual */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Water Access Challenges in Our Communities</h3>
                  <div className="flex justify-center mb-8">
                    <div className="relative w-64 h-64">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="128"
                          cy="128"
                          r="110"
                          stroke="#e5e7eb"
                          strokeWidth="20"
                          fill="none"
                        />
                        <circle
                          cx="128"
                          cy="128"
                          r="110"
                          stroke="url(#gradient)"
                          strokeWidth="20"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 110}`}
                          strokeDashoffset={`${2 * Math.PI * 110 * (1 - 0.7)}`}
                          className="transition-all duration-2000"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#0ea5e9" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl font-bold text-blue-600 mb-2">70%</div>
                          <div className="text-sm text-gray-600 font-medium">of households</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    This represents the estimated percentage of households in our target communities that lack access to clean water and adequate sanitation facilities.
                  </p>
                </div>
              </div>
            )}

            {/* Focus Areas Tab */}
            {activeTab === 'focus' && (
              <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
                {focusAreas.map((area, index) => (
                  <div
                    key={index}
                    className={`group bg-gradient-to-br from-${area.color}-50 to-white rounded-2xl p-8 border-2 border-${area.color}-200 hover:border-${area.color}-400 transition-all transform hover:scale-105 hover:shadow-xl`}
                  >
                    <div className={`inline-flex p-4 bg-${area.color}-100 rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                      <div className={`text-${area.color}-600`}>{area.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{area.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Interventions Tab */}
            {activeTab === 'interventions' && (
              <div className="space-y-8 animate-fade-in">
                {interventions.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br from-${item.color}-50 to-white rounded-2xl p-8 shadow-xl border-2 border-${item.color}-200 hover:border-${item.color}-400 transition-all`}
                  >
                    <div className="flex items-start gap-6">
                      <div className={`flex-shrink-0 p-4 bg-${item.color}-100 rounded-xl`}>
                        <div className={`text-${item.color}-600`}>{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Challenge {index + 1}</h3>

                        {/* Gap */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <span className={`w-2 h-2 bg-${item.color}-500 rounded-full`}></span>
                            The Gap
                          </h4>
                          <p className="text-gray-700 pl-4">{item.gap}</p>
                        </div>

                        {/* Interventions */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <span className={`w-2 h-2 bg-${item.color}-500 rounded-full`}></span>
                            Our Interventions
                          </h4>
                          <ul className="space-y-2 pl-4">
                            {item.interventions.map((intervention, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className={`w-5 h-5 text-${item.color}-600 flex-shrink-0 mt-0.5`} />
                                <span className="text-gray-700">{intervention}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <span className={`w-2 h-2 bg-${item.color}-500 rounded-full`}></span>
                            Expected Achievements
                          </h4>
                          <ul className="space-y-2 pl-4">
                            {item.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <TrendingUp className={`w-5 h-5 text-${item.color}-600 flex-shrink-0 mt-0.5`} />
                                <span className="text-gray-700">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Monitoring */}
                        <div className={`bg-${item.color}-100 rounded-xl p-4`}>
                          <h4 className="font-semibold text-gray-900 mb-2">Monitoring & Evaluation</h4>
                          <ul className="space-y-1">
                            {item.monitoring.map((metric, idx) => (
                              <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                                <span className={`w-1.5 h-1.5 bg-${item.color}-600 rounded-full`}></span>
                                {metric}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section
        ref={impactRef}
        className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50"
      >
        <div className={`container mx-auto px-6 transition-all duration-1000 ${
          impactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Commitment to Clean Water & Sanitation
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We track the number of people accessing clean water through our projects, households with latrines, children with school sanitation facilities, and individuals receiving hygiene education. Through comprehensive monitoring and evaluation, we demonstrate our commitment to improving water and sanitation conditions in our communities.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 cursor-pointer">
              <Target className="w-6 h-6" />
              Learn More About Our Impact
            </div>
          </div>
        </div>
      </section>

      <DonateCTA />
      <Footer />
    </>
  );
}

export default WaterPage;
