import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const TransNzoiaBlog = () => {
  // State for scroll progress
  const [scrollProgress, setScrollProgress] = useState(0);
  // State for section visibility
  const [visibleSections, setVisibleSections] = useState({});
  // State for the climate data visualization
  const [showRainfallData, setShowRainfallData] = useState(false);
  // State for expanded sections
  const [expandedSections, setExpandedSections] = useState({});

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Check which sections are visible
      const sections = document.querySelectorAll('h2');
      const visibleSectionsUpdate = {};
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = 
          rect.top <= window.innerHeight / 2 && 
          rect.bottom >= window.innerHeight / 2;
        
        if (isVisible) {
          visibleSectionsUpdate[section.textContent] = true;
        }
      });
      
      setVisibleSections(visibleSectionsUpdate);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle expanded sections
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Climate data for visualization
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

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Helmet>
        <title>Understanding Trans Nzoia County | Hopeful Destiny CBO</title>
        <meta name="description" content="Learn about Trans Nzoia County in Kenya, the region Hopeful Destiny CBO serves, including its geography, climate, population, and more." />
      </Helmet>

      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-indigo-600 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Table of contents sidebar - visible on large screens */}
      <div className="hidden lg:block fixed left-4 top-1/4 bg-white p-4 rounded-lg shadow-md max-w-xs">
        <h3 className="font-bold text-lg mb-3">Contents</h3>
        <ul className="space-y-2">
          {['Position and Size', 'Climatic Conditions', 'Ecological Conditions', 'Population and Demographics', 'Poverty Analysis', 'Why This Matters For Our Work'].map((section) => (
            <li key={section} className="transition-all duration-300">
              <a 
                href={`#${section.toLowerCase().replace(/\s+/g, '-')}`} 
                className={`block py-1 px-2 rounded ${visibleSections[section] ? 'bg-indigo-100 text-indigo-800 font-medium' : 'text-gray-600 hover:text-indigo-600'}`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Understanding Trans Nzoia County: The Region We Serve
          </h1>
          <p className="text-lg text-gray-500">
            Published on April 8, 2025
          </p>
          <div className="mt-6">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 mr-2">
              Regional Information
            </span>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              Community Context
            </span>
          </div>
        </div>

        <div className="prose prose-lg prose-indigo mx-auto text-gray-800">
          <p className="lead text-xl">
            Hopeful Destiny Organization primarily serves the communities of Trans Nzoia County in Kenya.
            Understanding the geographical, climatic and demographic context of this region is crucial to
            appreciating the challenges and opportunities we face in our work.
          </p>

          <h2 id="position-and-size" className="text-2xl font-bold mt-10 mb-4 scroll-mt-16">Position and Size</h2>
          <div className="relative">
            <p>
              Trans Nzoia County is situated in the North Rift of the former Rift Valley province. It covers an
              area of 2,495.6 square kilometers. The County lies approximately between latitudes 00° 52´ and 10° 18´
              north of the equator and longitudes 34° 38´ and 35° 23´ east of the Great Meridian.
            </p>
            
            {/* Interactive map visualization (simplified) */}
            <div className="my-6 bg-blue-50 p-4 rounded-lg border border-blue-200 transition-all duration-500 transform hover:scale-105">
              <div className="flex justify-center items-center h-64 bg-blue-100 rounded relative overflow-hidden">
                <div className="absolute w-full h-full bg-blue-200 opacity-50" style={{clipPath: 'polygon(30% 10%, 70% 10%, 90% 50%, 70% 90%, 30% 90%, 10% 50%)'}}></div>
                <h3 className="text-xl font-bold text-blue-800 z-10">Trans Nzoia County</h3>
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute text-xs font-bold text-red-700 top-1/4 left-1/4 ml-5">Kitale</div>
              </div>
              <p className="text-sm text-center mt-2 text-blue-600">Interactive: Hover over the map to zoom slightly</p>
            </div>
            
            <p>
              The county borders the Republic of Uganda to the West, Bungoma and Kakamega Counties to the South,
              West Pokot County to the East, and Elgeyo Marakwet and Uasin Gishu Counties to the South East.
            </p>
          </div>

          <div className="my-8 bg-gray-50 p-6 rounded-lg transition-all duration-300 cursor-pointer hover:shadow-md" onClick={() => toggleSection('subcounties')}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold mb-3">Political and Administrative Areas</h3>
              <span className="text-indigo-600">
                {expandedSections['subcounties'] ? '−' : '+'}
              </span>
            </div>
            
            <div className={`transition-all duration-500 overflow-hidden ${expandedSections['subcounties'] ? 'max-h-96' : 'max-h-20'}`}>
              <p>
                Trans Nzoia County has five subcounties:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Cherangany</li>
                <li>Kwanza</li>
                <li>Endebes</li>
                <li>Saboti</li>
                <li>Kiminini</li>
              </ul>
              <p className="mt-2">
                The county headquarters is located in Kitale.
              </p>
              {!expandedSections['subcounties'] && (
                <p className="text-indigo-600 italic text-sm">Click to expand for more details...</p>
              )}
            </div>
          </div>

          <h2 id="climatic-conditions" className="text-2xl font-bold mt-10 mb-4 scroll-mt-16">Climatic Conditions</h2>
          <p>
            The County has a cool and temperate climate with mean maximum (day time)
            temperatures ranging between 23.4°C and 29.2°C and mean minimum (night time)
            temperatures ranging between 11.0°C and 13.5°C. The maximum and minimum extreme
            temperatures are recorded in February (about 34.2°C) and January (about 6.5°C)
            respectively.
          </p>
          
          {/* Interactive climate visualization */}
          <div className="my-6">
            <button 
              onClick={() => setShowRainfallData(!showRainfallData)}
              className="w-full py-2 px-4 bg-indigo-50 text-indigo-700 rounded-t-lg border border-indigo-200 hover:bg-indigo-100 transition-colors duration-300 flex justify-between items-center"
            >
              <span>View Monthly Rainfall Distribution</span>
              <span>{showRainfallData ? '−' : '+'}</span>
            </button>
            
            {showRainfallData && (
              <div className="border border-t-0 border-indigo-200 p-4 rounded-b-lg bg-white transition-all duration-500">
                <div className="h-64 flex items-end justify-around">
                  {rainfallData.map((data) => (
                    <div key={data.month} className="flex flex-col items-center w-8">
                      <div 
                        className="bg-blue-500 w-full rounded-t-sm transition-all duration-1000 ease-out" 
                        style={{ height: `${data.rainfall / 2}px` }}
                      />
                      <div className="text-xs mt-1">{data.month}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-center mt-4 text-gray-600">
                  Average monthly rainfall in millimeters for Trans Nzoia County
                </p>
              </div>
            )}
          </div>
          
          <p>
            The mean monthly relative humidity is 67%, ranging from a maximum of
            97% in July and a minimum of 35% in January. The mean wind speed within the county
            is 66.79 km/h or 36.06 knots.
          </p>
          <p>
            The County receives annual rainfall ranging from 1000mm to 1700mm, with western parts receiving
            the highest rainfall. The annual rainfall is distributed into three major seasons:
          </p>
          <ul className="list-disc pl-6 my-4">
            <li><strong>Long rainfall season:</strong> March, April, May (MAM)</li>
            <li><strong>Intermediate Season:</strong> June-July-August (JJA)</li>
            <li><strong>Short rainfall season:</strong> October-November-December (OND)</li>
          </ul>
          <p>
            In recent years, drought, dry spells, and floods have increased in frequency and complexity,
            likely exacerbated by climate change.
          </p>

          <h2 id="ecological-conditions" className="text-2xl font-bold mt-10 mb-4 scroll-mt-16">Ecological Conditions</h2>
          <p>
            The County is divided into three major agro-ecological zones:
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            {['Upper Highland Zone', 'Lower Highland Zone', 'Upper Midland Zone'].map((zone, index) => {
              const colors = ['green', 'yellow', 'blue'];
              const color = colors[index];
              
              return (
                <div 
                  key={zone}
                  className={`bg-${color}-50 p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer`}
                  onClick={() => toggleSection(zone)}
                >
                  <h3 className="text-xl font-semibold mb-3">{zone}</h3>
                  <p className={`text-sm transition-all duration-500 ${expandedSections[zone] ? 'line-clamp-none' : 'line-clamp-3'}`}>
                    {index === 0 && "Covers the hills and slopes of Mt. Elgon, Cherang'any hills, and the boundary zone towards West Pokot County. Lies between 2,400 and 4,299 meters above sea level and constitutes about 16% of the County land area."}
                    {index === 1 && "Covers slopes of Mt Elgon and Cherang'any Hills with altitudes from 1,800-2,400 meters above sea level. Covers 34% of the county area with fertile red and brown clay soils derived from volcanic ash."}
                    {index === 2 && "Covers approximately 50% of the county area between altitudes of 1,700 and 2,000 meters above sea level. Features well-drained deep red and brown clays suitable for various agricultural activities."}
                  </p>
                  {!expandedSections[zone] && (
                    <p className={`text-${color}-600 italic text-xs mt-2`}>Click to read more...</p>
                  )}
                </div>
              );
            })}
          </div>

          <h2 id="population-and-demographics" className="text-2xl font-bold mt-10 mb-4 scroll-mt-16">Population and Demographics</h2>
          <p>
            According to the 2019 Census, Trans Nzoia County had a population of 990,341 people,
            including 489,107 males and 501,206 females.
          </p>
          <p>
            The population density was 397 people per square kilometer, making it one of the more
            densely populated rural counties in Kenya.
          </p>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Age Distribution</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Age Cohort</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Male</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Female</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Total</th>
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
                    <tr key={row.age} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-2 text-sm text-gray-900">{row.age}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{row.male.toLocaleString()}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{row.female.toLocaleString()}</td>
                      <td className="px-4 py-2 text-sm text-gray-900 font-medium">{row.total.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-2">Data source: 2019 Kenya Population and Housing Census</p>
          </div>

          <h2 id="poverty-analysis" className="text-2xl font-bold mt-10 mb-4 scroll-mt-16">Poverty Analysis</h2>
          <p>
            Trans Nzoia has a monetary poverty rate of 34.1%, which is nearly the same as the
            national rate of 35.7%. Approximately 337,935 people in the county are monetarily poor.
          </p>

          {/* Interactive chart for poverty comparison */}
          <div className="my-6 p-4 bg-white rounded-lg shadow-md">
            <h4 className="text-lg font-medium mb-3">Poverty Rates Comparison</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Monetary Poverty Rate</span>
                  <span>34.1%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-red-500 h-4 rounded-full" style={{ width: "34.1%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Multidimensional Poverty Rate</span>
                  <span>58.7%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-indigo-600 h-4 rounded-full" style={{ width: "58.7%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>National Poverty Rate</span>
                  <span>35.7%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-green-500 h-4 rounded-full" style={{ width: "35.7%" }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <p>
            More significantly, the county has a multidimensional poverty rate of 58.7%, which is
            24 percentage points higher than the monetary poverty rate. This means a total of 580,834
            people are multidimensionally poor, experiencing deprivation across multiple aspects of life.
          </p>

          <div className="my-8 bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:bg-gray-100">
            <h3 className="text-xl font-semibold mb-3">Poverty by Age Group</h3>
            <ul className="list-disc pl-6">
              <li className="mb-2 hover:text-indigo-700 transition-colors duration-300"><strong>Children (0-17):</strong> 57.7% are multidimensionally poor, 5 percentage points higher than the national average</li>
              <li className="mb-2 hover:text-indigo-700 transition-colors duration-300"><strong>Youth (18-34):</strong> 54% are multidimensionally poor compared to a national average of 48.1%</li>
              <li className="mb-2 hover:text-indigo-700 transition-colors duration-300"><strong>Adults (35-59):</strong> High levels of multidimensional poverty driven by education, economic activity, sanitation and housing</li>
              <li className="hover:text-indigo-700 transition-colors duration-300"><strong>Elderly (60+):</strong> 58.7% are multidimensionally poor compared to a national average of 55.7%</li>
            </ul>
          </div>

          <h2 id="why-this-matters-for-our-work" className="text-2xl font-bold mt-10 mb-4 scroll-mt-16">Why This Matters For Our Work</h2>
          <p>
            Understanding the geographic, climatic, demographic, and economic context of Trans Nzoia County
            is essential for our work at Hopeful Destiny CBO. These statistics and facts inform our program
            design, helping us target our resources where they are most needed.
          </p>
          <p>
            The high rates of multidimensional poverty, especially among children and youth, highlight the
            importance of our focus on education, child protection, health and nutrition, food security, and
            water and sanitation projects. Our climate change initiatives are also critically important given
            the county's dependence on agriculture and vulnerability to changing weather patterns.
          </p>
          <p>
            By sharing this information, we hope to provide context for our work and demonstrate why your
            support is so vital to improving lives in Trans Nzoia County.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-12 w-12 rounded-full" src="/api/placeholder/80/80" alt="Hopeful Destiny CBO Logo" />
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold text-gray-900">Hopeful Destiny CBO</h4>
              <p className="text-gray-600">
                Supporting children, youth and women through sponsorship and empowerment projects in Trans Nzoia County.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/donate" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105">
              Donate Now
            </a>
            <a href="/about" className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300">
              Learn More About Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransNzoiaBlog;
