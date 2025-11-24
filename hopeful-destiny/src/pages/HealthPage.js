import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Heart, Users, TrendingUp, Target, CheckCircle, Award, Stethoscope, Pill, Activity, Shield } from 'lucide-react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import healthAndNutrition from "../assets/Health.png";
import DonateCTA from "../components/DonateCTA";

function HealthPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [impactRef, impactInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const keyStats = [
    { icon: <Users className="w-8 h-8" />, value: '80%', label: 'Face Health Access Barriers', color: 'red' },
    { icon: <Stethoscope className="w-8 h-8" />, value: '30+', label: 'Health Clinics Supported', color: 'blue' },
    { icon: <Pill className="w-8 h-8" />, value: '5,000+', label: 'People Reached', color: 'green' },
    { icon: <Shield className="w-8 h-8" />, value: '2,000+', label: 'Health Items Distributed', color: 'purple' },
  ];

  const programs = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: 'Health Campaigns',
      description: 'Supporting community health workers to reach disadvantaged households with vital health information.',
      color: 'blue',
      impact: '3,000+ households reached'
    },
    {
      icon: <Pill className="w-6 h-6" />,
      title: 'Nutrition Supplements',
      description: 'Providing essential nutrition supplements and food to combat nutritional deficiencies.',
      color: 'green',
      impact: '1,500+ children supported'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Preventive Health Items',
      description: 'Distributing mosquito nets, preventive drugs, and essential health products.',
      color: 'purple',
      impact: '2,000+ households protected'
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Community Training',
      description: 'Training community health workers and promoting healthy practices.',
      color: 'orange',
      impact: '100+ health workers trained'
    },
  ];

  const interventionData = [
    {
      category: 'Health Access & Campaigns',
      icon: <Stethoscope className="w-8 h-8" />,
      color: 'blue',
      items: [
        {
          gap: 'Communities have limited access to community health and nutrition programs',
          intervention: 'Supporting health and nutrition programs with the departments of health',
          achievement: 'Increased access to health/nutrition campaigns and reaching disadvantaged households through supporting community health workers',
          monitoring: 'Number of households/children/youths reached during campaigns'
        }
      ]
    },
    {
      category: 'Nutrition Support',
      icon: <Pill className="w-8 h-8" />,
      color: 'green',
      items: [
        {
          gap: 'Nutritional deficiencies in disadvantaged households',
          intervention: 'Supply of Nutrition supplements and food to disadvantaged households',
          achievement: 'Supplying households with supplements and food to combat malnutrition',
          monitoring: 'Number of children/households supported with nutrition supplements'
        }
      ]
    },
    {
      category: 'Preventive Healthcare',
      icon: <Shield className="w-8 h-8" />,
      color: 'purple',
      items: [
        {
          gap: 'Limited access to preventive health items',
          intervention: 'Supply of health items like nets and preventive drugs',
          achievement: 'Supply and delivery of health products to prevent diseases',
          monitoring: 'Number of children/households supported through the supply of health items'
        }
      ]
    }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative h-[500px] overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500"
          style={{
            backgroundImage: `url(${healthAndNutrition})`,
            transform: heroInView ? 'scale(1)' : 'scale(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-800/80" />

        <div className={`relative h-full flex items-center justify-center text-center px-6 transition-all duration-1000 ${
          heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Heart className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Health & Nutrition</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Healthy Communities
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Ensuring access to essential health services and nutrition for all
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

      {/* Tab Navigation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'overview', label: 'Overview', icon: <Target className="w-5 h-5" /> },
              { id: 'programs', label: 'Our Programs', icon: <Heart className="w-5 h-5" /> },
              { id: 'interventions', label: 'Detailed Interventions', icon: <CheckCircle className="w-5 h-5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-red-600 text-white shadow-lg'
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
                <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border border-red-200 mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Heart className="w-8 h-8 text-red-600" />
                    The Challenge
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Access to essential health and nutrition programs is often limited in our communities, particularly for disadvantaged households. This lack of access contributes to poor health outcomes and nutritional deficiencies, especially among children and vulnerable populations.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our organization is committed to bridging these gaps and ensuring that everyone has the opportunity to lead a healthy and fulfilling life through comprehensive health and nutrition programs.
                  </p>
                </div>

                {/* Health Access Visual */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Health Access Barriers in Our Communities</h3>
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
                          stroke="url(#gradient-red)"
                          strokeWidth="20"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 110}`}
                          strokeDashoffset={`${2 * Math.PI * 110 * (1 - 0.8)}`}
                          className="transition-all duration-2000"
                        />
                        <defs>
                          <linearGradient id="gradient-red" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ef4444" />
                            <stop offset="100%" stopColor="#dc2626" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl font-bold text-red-600 mb-2">80%</div>
                          <div className="text-sm text-gray-600 font-medium">of households</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Estimated percentage of households facing significant barriers in accessing adequate health and nutrition programs.
                  </p>
                </div>
              </div>
            )}

            {/* Programs Tab */}
            {activeTab === 'programs' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 animate-fade-in">
                {programs.map((program, index) => (
                  <div
                    key={index}
                    className={`group bg-gradient-to-br from-${program.color}-50 to-white rounded-2xl p-6 border-2 border-${program.color}-200 hover:border-${program.color}-400 transition-all transform hover:scale-105 hover:shadow-xl`}
                  >
                    <div className={`inline-flex p-4 bg-${program.color}-100 rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                      <div className={`text-${program.color}-600`}>{program.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{program.description}</p>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 bg-${program.color}-100 rounded-full text-sm font-semibold text-${program.color}-700`}>
                      <Award className="w-4 h-4" />
                      {program.impact}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Interventions Tab */}
            {activeTab === 'interventions' && (
              <div className="space-y-8 animate-fade-in">
                {interventionData.map((category, catIndex) => (
                  <div key={catIndex} className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 bg-${category.color}-100 rounded-xl`}>
                        <div className={`text-${category.color}-600`}>{category.icon}</div>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{category.category}</h2>
                    </div>

                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`bg-gradient-to-br from-${category.color}-50 to-white rounded-xl p-6 shadow-lg border-2 border-${category.color}-200 hover:border-${category.color}-400 transition-all`}
                      >
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                          {/* Gap */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                              <span className={`w-2 h-2 bg-${category.color}-500 rounded-full`}></span>
                              The Gap
                            </h4>
                            <p className="text-sm text-gray-700">{item.gap}</p>
                          </div>

                          {/* Intervention */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                              <CheckCircle className={`w-4 h-4 text-${category.color}-600`} />
                              Intervention
                            </h4>
                            <p className="text-sm text-gray-700">{item.intervention}</p>
                          </div>

                          {/* Achievement */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                              <TrendingUp className={`w-4 h-4 text-${category.color}-600`} />
                              Achievement
                            </h4>
                            <p className="text-sm text-gray-700">{item.achievement}</p>
                          </div>

                          {/* Monitoring */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                              <Target className={`w-4 h-4 text-${category.color}-600`} />
                              Monitoring
                            </h4>
                            <p className="text-sm text-gray-700">{item.monitoring}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section
        ref={impactRef}
        className="py-16 bg-gradient-to-br from-red-50 to-white"
      >
        <div className={`container mx-auto px-6 transition-all duration-1000 ${
          impactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tracking Our Impact
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Through comprehensive monitoring and evaluation, we track households reached during health campaigns, children supported with nutrition supplements, and families protected through health item distribution. Our commitment to accountability ensures sustainable health improvements and better nutrition outcomes.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-semibold text-lg hover:bg-red-700 transition-all transform hover:scale-105 cursor-pointer">
              <Target className="w-6 h-6" />
              View Full Impact Report
            </div>
          </div>
        </div>
      </section>

      <DonateCTA />
      <Footer />
    </>
  );
}

export default HealthPage;
