// src/components/DonationButton.js
import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const DonationButton = ({ text, variant = "primary", size = "medium" }) => {
  const baseStyles = "rounded-full font-semibold transition flex items-center justify-center group";
  
  const sizes = {
    small: "px-6 py-2 text-sm",
    medium: "px-8 py-3 text-base",
    large: "px-10 py-4 text-lg"
  };

  const variants = {
    primary: "bg-yellow-700 text-white hover:bg-yellow-600",
    secondary: "bg-white text-yellow-700 hover:bg-gray-50 border-2 border-yellow-700",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-yellow-700"
  };

  return (
    <Link 
      to="/donate"
      className={`${baseStyles} ${sizes[size]} ${variants[variant]}`}
    >
      {text}
      {variant === 'primary' ? (
        <Heart className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
      ) : (
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      )}
    </Link>
  );
};

export default DonationButton;
