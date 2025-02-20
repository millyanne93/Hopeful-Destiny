import { ArrowRight } from "lucide-react";

const DonationButton = ({ text }) => {
    return (
      <button className="bg-yellow-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition flex items-center justify-center group">
        {text}
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    );
  };
  
  export default DonationButton;
