import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import DonationButton from './DonationButton';
import Logo from '../assets/hopeful_destiny_logo_clean.png';  // <-- Import your logo

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({ to, text, mobile }) => (
    <Link
      to={to}
      className={`${
        mobile
          ? 'block py-2 px-4 text-gray-800 hover:bg-yellow-50'
          : 'text-gray-800 hover:text-yellow-700'
      }`}
      onClick={() => setIsMenuOpen(false)}
    >
      {text}
    </Link>
  );

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* LEFT SIDE: LOGO + NAME */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                alt="Hopeful Destiny Logo"
                className="w-10 h-10 object-contain"  // adjust size as needed
              />
              <span className="ml-2 text-2xl font-bold text-yellow-700">
                Hopeful Destiny
              </span>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" text="Home" />
            <NavLink to="/about" text="About" />
            <NavLink to="/programs" text="Thematic Areas" />
            <NavLink to="/blog" text="Blogs" />
            <NavLink to="/contact" text="Contact" />
            <DonationButton text="Donate" size="small" />
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <NavLink to="/" text="Home" mobile />
            <NavLink to="/about" text="About" mobile />
            <NavLink to="/programs" text="Thematic Areas" mobile />
            <NavLink to="/blog" text="Blogs" mobile />
            <NavLink to="/contact" text="Contact" mobile />
            <div className="px-4 py-2">
              <DonationButton text="Donate Now" size="medium" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
