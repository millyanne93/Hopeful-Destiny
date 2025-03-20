import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProgramCard = ({ icon, title, description, to }) => {
  return (
    <div className="p-6 border rounded-lg hover:shadow-lg transition group">
      <div className="mb-4 transform group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={to}
        className="text-yellow-700 font-semibold flex items-center group-hover:text-yellow-800"
      >
        Learn More
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ProgramCard;