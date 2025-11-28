import { Users, Target, Heart, Shield } from "lucide-react";
import { Link } from 'react-router-dom';

const Leadership = () => {
  const teamFocus = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Leadership",
      description: "Our dedicated team focuses on strategic planning and program development to maximize community impact."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community Engagement",
      description: "Working directly with communities to understand their needs and co-create sustainable solutions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Governance & Accountability",
      description: "Ensuring transparent operations and responsible stewardship of resources for maximum community benefit."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A dedicated group of community leaders committed to creating positive change in Trans Nzoia County
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {teamFocus.map((focus, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 border-2 border-yellow-200 hover:border-yellow-400 transition-all transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-xl"
          >
            <div className="inline-flex p-4 bg-yellow-100 rounded-xl mb-6 group-hover:scale-110 transition-transform">
              <div className="text-yellow-600">{focus.icon}</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{focus.title}</h3>
            <p className="text-gray-700 leading-relaxed">{focus.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-8 border border-yellow-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Mission</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We're building a strong leadership team to expand our impact. Interested in joining our board or volunteering in a leadership role?
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-700 transition-all transform hover:scale-105"
          >
            Contact Us About Leadership Roles
          </Link>
        </div>
      </div>
    </div> 
  );
};

export default Leadership;
