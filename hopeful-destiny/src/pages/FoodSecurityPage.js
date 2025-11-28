import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Sprout, Users, TrendingUp, DollarSign, Lightbulb, HandshakeIcon, Beef, UtensilsCrossed, Target, CheckCircle, Award } from 'lucide-react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import foodSecurity from "../assets/Food.png";
import DonateCTA from "../components/DonateCTA";

function FoodSecurityPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [impactRef, impactInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const keyStats = [
    { icon: <Users className="w-8 h-8" />, value: '65%', label: 'Face Food Insecurity', color: 'red' },
    { icon: <Sprout className="w-8 h-8" />, value: '300+', label: 'Farmers Supported', color: 'green' },
    { icon: <DollarSign className="w-8 h-8" />, value: '200+', label: 'Grants Awarded', color: 'yellow' },
    { icon: <HandshakeIcon className="w-8 h-8" />, value: '50+', label: 'Loan Groups', color: 'blue' },
  ];

  const programs = [
    {
      icon: <Sprout className="w-6 h-6" />,
      title: 'Agricultural Support',
      description: 'Providing youth and households with grants and resources for food production at household level.',
      color: 'green',
      impact: '300+ families supported'
    },
    {
      icon: <Beef className="w-6 h-6" />,
      title: 'Animal Farming',
      description: 'Supporting poultry, dairy, and beekeeping ventures for sustainable income generation.',
      color: 'orange',
      impact: '150+ ventures started'
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6" />,
      title: 'Kitchen Gardening',
      description: 'Empowering families to grow fresh produce, promoting healthy eating and self-sufficiency.',
      color: 'emerald',
      impact: '200+ gardens established'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Agribusiness',
      description: 'Supporting commercial farming through grants and supply of farming implements.',
      color: 'blue',
      impact: '100+ businesses launched'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Income Generation',
      description: 'Awarding grants for youth and women to start businesses and self-employment activities.',
      color: 'yellow',
      impact: '250+ grants awarded'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Modern Skills Training',
      description: 'Training in content creation, talent development, music, film, and digital skills.',
      color: 'purple',
      impact: '180+ youth trained'
    },
    {
      icon: <HandshakeIcon className="w-6 h-6" />,
      title: 'Loan Groups',
      description: 'Supporting financial inclusion through training and provision of loans and grants.',
      color: 'indigo',
      impact: '50+ groups active'
    },
  ];

  const interventionData = [
    {
      category: 'Food Production',
      icon: <Sprout className="w-8 h-8" />,
      color: 'green',
      items: [
        {
          gap: 'Poverty preventing land access for food production',
          intervention: 'Supporting food production at household level',
          achievement: 'Youth and households receive grants and production resources',
          monitoring: 'Number of youth/women starting agricultural activities'
        },
        {
          gap: 'Limited animal farming opportunities',
          intervention: 'Supporting poultry, dairy, and beekeeping',
          achievement: 'Youth/women start animal keeping ventures',
          monitoring: 'Number of youth/women in animal farming'
        },
        {
          gap: 'Lack of household food gardens',
          intervention: 'Supporting kitchen gardening',
          achievement: 'Youth/women establish kitchen gardens',
          monitoring: 'Number of kitchen gardens established'
        },
        {
          gap: 'Limited commercial farming participation',
          intervention: 'Supporting agribusiness/commercial farming',
          achievement: 'Grants and implements for agribusiness',
          monitoring: 'Number starting agribusiness ventures'
        }
      ]
    },
    {
      category: 'Economic Empowerment',
      icon: <DollarSign className="w-8 h-8" />,
      color: 'yellow',
      items: [
        {
          gap: 'High unemployment rates',
          intervention: 'Awarding business startup grants',
          achievement: 'Self-employment and business creation',
          monitoring: 'Number of grants awarded'
        },
        {
          gap: 'Lack of modern income skills',
          intervention: 'Training in digital and creative skills',
          achievement: 'Participation in modern economy',
          monitoring: 'Number trained in modern skills'
        },
        {
          gap: 'Limited access to credit',
          intervention: 'Supporting loan groups with training and grants',
          achievement: 'Increased participation in financial groups',
          monitoring: 'Number in loan groups'
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
            backgroundImage: `url(${foodSecurity})`,
            transform: heroInView ? 'scale(1)' : 'scale(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/80" />
        
        <div className={`relative h-full flex items-center justify-center text-center px-6 transition-all duration-1000 ${
          heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Sprout className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Food Security & Livelihoods</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nourishing Communities
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Empowering individuals with sustainable agriculture and income opportunities
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
              { id: 'programs', label: 'Our Programs', icon: <Sprout className="w-5 h-5" /> },
              { id: 'interventions', label: 'Detailed Interventions', icon: <CheckCircle className="w-5 h-5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-green-600 text-white shadow-lg'
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
                <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border border-green-200 mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Sprout className="w-8 h-8 text-green-600" />
                    The Challenge
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Food security is a fundamental human right, yet high levels of poverty in our communities prevent many from accessing adequate food. The lack of land and the inability to hire land for food production exacerbate this issue.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our organization is dedicated to empowering individuals and households to achieve food security through sustainable agricultural practices and income-generating opportunities.
                  </p>
                </div>

                {/* Food Insecurity Visual */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Food Insecurity in Our Communities</h3>
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
                          stroke="url(#gradient-green)"
                          strokeWidth="20"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 110}`}
                          strokeDashoffset={`${2 * Math.PI * 110 * (1 - 0.65)}`}
                          className="transition-all duration-2000"
                        />
                        <defs>
                          <linearGradient id="gradient-green" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#eab308" />
                            <stop offset="100%" stopColor="#ca8a04" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl font-bold text-yellow-600 mb-2">65%</div>
                          <div className="text-sm text-gray-600 font-medium">of households</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Estimated percentage of households experiencing food insecurity due to poverty and lack of resources.
                  </p>
                </div>
              </div>
            )}

            {/* Programs Tab */}
            {activeTab === 'programs' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
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
        className="py-16 bg-gradient-to-br from-green-50 to-white"
      >
        <div className={`container mx-auto px-6 transition-all duration-1000 ${
          impactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tracking Our Impact
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Through comprehensive monitoring and evaluation, we track youth and women supported in agricultural ventures, grants awarded, skills training participation, and loan group involvement. Our commitment to accountability ensures sustainable food security and economic empowerment.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-semibold text-lg hover:bg-green-700 transition-all transform hover:scale-105 cursor-pointer">
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

export default FoodSecurityPage;
