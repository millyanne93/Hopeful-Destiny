import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useInView } from 'react-intersection-observer';
import { MapPin, Cloud, Users, TrendingDown, Heart, ChevronRight, BarChart3, Mountain } from 'lucide-react';
import TransNzoiaMap from '../../assets/TransNzoia.jpg';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const TransNzoiaBlog = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});
  const [showRainfallData, setShowRainfallData] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [activeZone, setActiveZone] = useState(null);

  // Intersection observer for sections
  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [mapRef, mapInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [climateRef, climateInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = document.querySelectorAll('h2');
      const visibleSectionsUpdate = {};

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        if (isVisible) {
          visibleSectionsUpdate[section.textContent] = true;
        }
      });

      setVisibleSections(visibleSectionsUpdate);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const rainfallData = [
    { month: 'Jan', rainfall: 30 },
    { month: 'Feb', rainfall: 40 },
    { month: 'Mar', rainfall: 120 },
    { month: 'Apr', rainfall: 170 },
    { month: 'May', rainfall: 140 },
    { month: 'Jun', rainfall: 80 },
    { month: 'Jul', rainfall: 70 },
    { month: 'Aug', rainfall: 90 },
    { month: 'Sep', rainfall: 60 },
    { month: 'Oct', rainfall: 80 },
    { month: 'Nov', rainfall: 110 },
    { month: 'Dec', rainfall: 60 }
  ];

  const keyStats = [
    { icon: <MapPin className="w-6 h-6" />, label: 'Area', value: '2,495.6 km²', color: 'blue' },
    { icon: <Users className="w-6 h-6" />, label: 'Population', value: '990,341', color: 'green' },
    { icon: <TrendingDown className="w-6 h-6" />, label: 'Poverty Rate', value: '58.7%', color: 'red' },
    { icon: <Cloud className="w-6 h-6" />, label: 'Annual Rainfall', value: '1000-1700mm', color: 'cyan' },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Helmet>
        <title>Understanding Trans Nzoia County | Hopeful Destiny CBO</title>
        <meta name="description" content="Learn about Trans Nzoia County in Kenya, the region Hopeful Destiny CBO serves." />
      </Helmet>

      {/* Animated Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Enhanced Table of Contents - Floating Sidebar */}
      <div className="hidden lg:block fixed left-4 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 max-w-xs z-40 backdrop-blur-sm bg-white/95">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-5 h-5 text-yellow-600" />
          <h3 className="font-bold text-lg text-gray-900">Contents</h3>
        </div>
        <ul className="space-y-2">
          {['Position and Size', 'Climatic Conditions', 'Ecological Conditions', 'Population and Demographics', 'Poverty Analysis', 'Why This Matters'].map((section) => (
            <li key={section} className="transition-all duration-300">
              <a
                href={`#${section.toLowerCase().replace(/\s+/g, '-')}`}
                className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all ${
                  visibleSections[section]
                    ? 'bg-yellow-100 text-yellow-800 font-semibold shadow-sm'
                    : 'text-gray-600 hover:text-yellow-600 hover:bg-yellow-50'
                }`}
              >
                <ChevronRight className={`w-4 h-4 transition-transform ${visibleSections[section] ? 'rotate-90' : ''}`} />
                <span className="text-sm">{section}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative pt-24 pb-16 bg-gradient-to-br from-yellow-50 via-white to-yellow-50 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-yellow-300 rounded-full blur-2xl opacity-10 animate-float"
              style={{
                width: `${50 + Math.random() * 100}px`,
                height: `${50 + Math.random() * 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className={`max-w-5xl mx-auto px-6 relative z-10 transition-all duration-1000 ${
          heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center">
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-700 border border-green-200">
                <MapPin className="w-4 h-4 mr-2" />
                Regional Information
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 border border-blue-200">
                <Users className="w-4 h-4 mr-2" />
                Community Context
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Understanding{' '}
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">
                Trans Nzoia County
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The region where <span className="font-semibold text-yellow-700">Hopeful Destiny</span> serves communities and creates lasting change
            </p>
          </div>
        </div>
      </div>

      {/* Key Stats Cards */}
      <section 
        ref={statsRef}
        className="py-12 bg-white relative"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${
            statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {keyStats.map((stat, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-${stat.color}-50 to-white rounded-2xl p-6 border border-${stat.color}-100 hover:border-${stat.color}-300 transition-all transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-xl cursor-pointer`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 bg-${stat.color}-100 rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                  <div className={`text-${stat.color}-600`}>{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-xl text-gray-700 leading-relaxed bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            Hopeful Destiny Organization primarily serves the communities of Trans Nzoia County in Kenya.
            Understanding the geographical, climatic and demographic context of this region is crucial to
            appreciating the challenges and opportunities we face in our work.
          </p>
        </div>

        {/* Position and Size Section */}
        <section id="position-and-size" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-yellow-100 rounded-xl">
              <MapPin className="w-6 h-6 text-yellow-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Position and Size</h2>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Trans Nzoia County is situated in the North Rift of the former Rift Valley province, covering an
            area of 2,495.6 square kilometers between latitudes 00° 52´ and 10° 18´ north of the equator.
          </p>

          {/* Interactive Map */}
          <div 
            ref={mapRef}
            className={`my-10 transition-all duration-1000 ${
              mapInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative group bg-gradient-to-br from-yellow-50 to-white p-6 rounded-3xl shadow-2xl border border-yellow-200 hover:border-yellow-400 transition-all">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={TransNzoiaMap}
                  alt="Trans Nzoia County Map"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110 cursor-zoom-in"
                  onClick={() => window.open(TransNzoiaMap, '_blank')}
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-700 font-medium mb-2">
                  Map of Trans Nzoia County showing its location and boundaries
                </p>
                <p className="text-sm text-gray-500 italic flex items-center justify-center gap-2">
                  <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                  Click image to view full size
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            The county borders the Republic of Uganda to the West, Bungoma and Kakamega Counties to the South,
            West Pokot County to the East, and Elgeyo Marakwet and Uasin Gishu Counties to the South East.
          </p>

          {/* Subcounties Card */}
          <div 
            className="mt-8 bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all cursor-pointer"
            onClick={() => toggleSection('subcounties')}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Political and Administrative Areas</h3>
              <button className="p-2 bg-yellow-100 rounded-full text-yellow-600 hover:bg-yellow-200 transition-colors">
                <ChevronRight className={`w-6 h-6 transition-transform duration-300 ${expandedSections['subcounties'] ? 'rotate-90' : ''}`} />
              </button>
            </div>

            <div className={`transition-all duration-500 overflow-hidden ${
              expandedSections['subcounties'] ? 'max-h-96 opacity-100' : 'max-h-20 opacity-70'
            }`}>
              <p className="text-gray-700 mb-4">Trans Nzoia County has five subcounties:</p>
              <div className="grid md:grid-cols-2 gap-3">
                {['Cherangany', 'Kwanza', 'Endebes', 'Saboti', 'Kiminini'].map((sub, idx) => (
                  <div key={sub} className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <span className="font-medium text-gray-900">{sub}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-gray-700">
                <strong>County Headquarters:</strong> Kitale
              </p>
            </div>

            {!expandedSections['subcounties'] && (
              <p className="text-yellow-600 font-medium text-sm mt-2 flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                Click to expand for more details
              </p>
            )}
          </div>
        </section>

        {/* Climate Section */}
        <section 
          ref={climateRef}
          id="climatic-conditions" 
          className="mb-20 scroll-mt-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Cloud className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Climatic Conditions</h2>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-200 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              The County has a <span className="font-semibold text-blue-700">cool and temperate climate</span> with mean maximum temperatures 
              ranging between <strong>23.4°C and 29.2°C</strong> and mean minimum temperatures 
              ranging between <strong>11.0°C and 13.5°C</strong>.
            </p>
          </div>

          {/* Interactive Rainfall Chart */}
          <div className={`transition-all duration-1000 ${
            climateInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button
              onClick={() => setShowRainfallData(!showRainfallData)}
              className="w-full group bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-t-2xl hover:from-blue-700 hover:to-blue-800 transition-all flex justify-between items-center shadow-lg"
            >
              <span className="text-lg font-semibold flex items-center gap-3">
                <BarChart3 className="w-6 h-6" />
                Monthly Rainfall Distribution
              </span>
              <span className="text-2xl font-bold group-hover:scale-110 transition-transform">
                {showRainfallData ? '−' : '+'}
              </span>
            </button>

            {showRainfallData && (
              <div className="bg-white border-x-2 border-b-2 border-blue-200 p-8 rounded-b-2xl shadow-xl">
                <div className="h-80 flex items-end justify-around gap-2">
                  {rainfallData.map((data, idx) => (
                    <div 
                      key={data.month} 
                      className="flex flex-col items-center flex-1 group cursor-pointer"
                    >
                      <div className="relative w-full">
                        <div
                          className="bg-gradient-to-t from-blue-600 to-blue-400 w-full rounded-t-lg transition-all duration-1000 ease-out hover:from-yellow-600 hover:to-yellow-400 shadow-lg"
                          style={{ 
                            height: `${(data.rainfall / 170) * 280}px`,
                            animationDelay: `${idx * 50}ms`
                          }}
                        />
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                          {data.rainfall}mm
                        </div>
                      </div>
                      <div className="text-sm font-medium text-gray-700 mt-3">{data.month}</div>
                    </div>
                  ))}
                </div>
                <p className="text-center mt-6 text-gray-600 font-medium">
                  Average monthly rainfall in millimeters
                </p>
              </div>
            )}
          </div>

          {/* Rainfall Seasons */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { season: 'Long Rains', months: 'March, April, May', icon: '🌧️', color: 'blue' },
              { season: 'Intermediate', months: 'June, July, August', icon: '⛅', color: 'gray' },
              { season: 'Short Rains', months: 'Oct, Nov, Dec', icon: '🌦️', color: 'indigo' }
            ].map((item, idx) => (
              <div key={idx} className={`bg-${item.color}-50 rounded-xl p-6 border border-${item.color}-200 hover:shadow-lg transition-all transform hover:-translate-y-1`}>
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.season}</h4>
                <p className="text-gray-700 text-sm">{item.months}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ecological Zones */}
        <section id="ecological-conditions" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-100 rounded-xl">
              <Mountain className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ecological Conditions</h2>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The County is divided into three major agro-ecological zones:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Upper Highland Zone', color: 'green', icon: '⛰️', coverage: '16%', description: "Covers the hills and slopes of Mt. Elgon and Cherang'any hills, lying between 2,400 and 4,299 meters above sea level." },
              { name: 'Lower Highland Zone', color: 'yellow', icon: '🏔️', coverage: '34%', description: "Covers slopes with altitudes from 1,800-2,400 meters with fertile red and brown clay soils derived from volcanic ash." },
              { name: 'Upper Midland Zone', color: 'blue', icon: '🌄', coverage: '50%', description: "Covers altitudes of 1,700-2,000 meters with well-drained deep red and brown clays suitable for agriculture." }
            ].map((zone, index) => (
              <div
                key={zone.name}
                className={`group bg-gradient-to-br from-${zone.color}-50 to-white rounded-2xl p-8 border-2 border-${zone.color}-200 hover:border-${zone.color}-400 transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  activeZone === index ? 'ring-4 ring-yellow-400' : ''
                }`}
                onClick={() => setActiveZone(activeZone === index ? null : index)}
                onMouseEnter={() => setActiveZone(index)}
                onMouseLeave={() => setActiveZone(null)}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{zone.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{zone.name}</h3>
                <div className={`inline-block px-4 py-2 bg-${zone.color}-600 text-white rounded-full text-sm font-bold mb-4`}>
                  {zone.coverage} of county
                </div>
                <p className="text-gray-700 leading-relaxed">{zone.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Population Demographics */}
        <section id="population-and-demographics" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-purple-100 rounded-xl">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Population and Demographics</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-200 shadow-lg">
              <div className="text-5xl font-bold text-purple-600 mb-2">990,341</div>
              <div className="text-gray-700 font-medium">Total Population (2019)</div>
              <div className="mt-4 flex gap-4">
                <div>
                  <div className="text-2xl font-bold text-blue-600">489,107</div>
                  <div className="text-sm text-gray-600">Males</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-600">501,206</div>
                  <div className="text-sm text-gray-600">Females</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-200 shadow-lg">
              <div className="text-5xl font-bold text-orange-600 mb-2">397</div>
              <div className="text-gray-700 font-medium">People per km²</div>
              <p className="mt-4 text-gray-600 text-sm">
                Making it one of the more densely populated rural counties in Kenya
              </p>
            </div>
          </div>

          {/* Age Distribution Table */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-4">
              <h3 className="text-xl font-bold text-white">Age Distribution</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Age Group</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Male</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Female</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {age: '0-4', male: 65326, female: 64232, total: 129558},
                    {age: '5-9', male: 71635, female: 71287, total: 142922},
                    {age: '10-14', male: 75156, female: 74192, total: 149348},
                    {age: '15-19', male: 63629, female: 60915, total: 124544},
                    {age: '20-34', male: 102597, female: 115000, total: 217597},
                    {age: '35-59', male: 86120, female: 88970, total: 175090},
                    {age: '60+', male: 24644, female: 26610, total: 51254}
                  ].map((row, index) => (
                    <tr key={row.age} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-purple-50 transition-colors`}>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{row.age}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{row.male.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{row.female.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm font-bold text-purple-700">{row.total.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-8 py-4 bg-gray-50 text-sm text-gray-600">
              Data source: 2019 Kenya Population and Housing Census
            </div>
          </div>
        </section>

        {/* Poverty Analysis */}
        <section id="poverty-analysis" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-100 rounded-xl">
              <TrendingDown className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Poverty Analysis</h2>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 border border-red-200 shadow-lg mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Trans Nzoia has a <strong className="text-red-700">monetary poverty rate of 34.1%</strong>, nearly the same as the
              national rate of 35.7%. More significantly, the county has a <strong className="text-red-700">multidimensional poverty rate of 58.7%</strong>.
            </p>
          </div>

          {/* Poverty Comparison Chart */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Poverty Rates Comparison</h4>
            <div className="space-y-6">

              {[
                { label: 'Monetary Poverty Rate', value: 34.1, color: 'red', description: '337,935 people affected' },
                { label: 'Multidimensional Poverty', value: 58.7, color: 'orange', description: '580,834 people affected' },
                { label: 'National Poverty Rate', value: 35.7, color: 'green', description: 'Kenya average' }
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">{item.label}</span>
                    <span className={`text-2xl font-bold text-${item.color}-600`}>{item.value}%</span>
                  </div>
                  <div className="relative w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-full transition-all duration-1000 ease-out flex items-center justify-end px-3`}
                      style={{ 
                        width: `${item.value}%`,
                        animationDelay: `${idx * 200}ms`
                      }}
                    >
                      <span className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.value}%
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Poverty by Age Group */}
          <div className="mt-8 bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 border border-yellow-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Poverty by Age Group</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { group: 'Children (0-17)', rate: '57.7%', detail: '5 points above national average', icon: '👶', color: 'blue' },
                { group: 'Youth (18-34)', rate: '54%', detail: 'vs 48.1% national average', icon: '🧑', color: 'green' },
                { group: 'Adults (35-59)', rate: 'High', detail: 'Driven by education & employment gaps', icon: '👨', color: 'yellow' },
                { group: 'Elderly (60+)', rate: '58.7%', detail: 'vs 55.7% national average', icon: '👴', color: 'purple' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`group bg-${item.color}-50 rounded-xl p-6 border-2 border-${item.color}-200 hover:border-${item.color}-400 hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl transform group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{item.group}</h4>
                      <div className={`text-2xl font-bold text-${item.color}-700 mb-2`}>{item.rate}</div>
                      <p className="text-sm text-gray-600">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why This Matters */}
        <section id="why-this-matters" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-yellow-100 rounded-xl">
              <Heart className="w-6 h-6 text-yellow-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why This Matters For Our Work</h2>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-50 rounded-3xl p-10 shadow-2xl border-2 border-yellow-300">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Understanding the geographic, climatic, demographic, and economic context of Trans Nzoia County
                is essential for our work at <span className="font-bold text-yellow-700">Hopeful Destiny CBO</span>. 
                These statistics and facts inform our program design, helping us target our resources where they are most needed.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {[
                  { title: 'Education & Child Protection', reason: 'High child poverty rates demand focused support' },
                  { title: 'Health & Nutrition', reason: 'Addressing multidimensional poverty indicators' },
                  { title: 'Climate Change Initiatives', reason: 'Erratic rainfall patterns affect agriculture' },
                  { title: 'Economic Empowerment', reason: 'Breaking the cycle of generational poverty' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all border border-yellow-200">
                    <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.reason}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mt-8 text-center font-medium">
                By sharing this information, we hope to provide context for our work and demonstrate why your
                support is so vital to <span className="text-yellow-700 font-bold">improving lives in Trans Nzoia County</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-white rounded-full opacity-20 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${8 + Math.random() * 12}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center">
            <Heart className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Us in Making a Difference
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your support helps us serve the communities of Trans Nzoia County
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/donate" 
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-yellow-700 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                Donate Now
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform fill-current" />
              </Link>
              <Link
                to="/about" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-800 text-white rounded-full font-bold text-lg hover:bg-yellow-900 transition-all transform hover:scale-105 border-2 border-white/30"
              >
                Learn More About Our Work
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TransNzoiaBlog;
