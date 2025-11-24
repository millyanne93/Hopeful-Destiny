import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-yellow-700">
              Hopeful Destiny
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" text="Home" />
            <NavLink to="/about" text="About" />
            <NavLink to="/programs" text="Thematic Areas" />
            <NavLink to="/blog" text="Blogs" /> 
            <NavLink to="/contact" text="Contact" />
            <button className="bg-yellow-700 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition">
              Donate
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <NavLink to="/" text="Home" mobile />
            <NavLink to="/about" text="About" mobile />
            <NavLink to="/programs" text="Thematic Areas" mobile />
            <NavLink to="/blog" text="Blogs" mobile />
            <NavLink to="/contact" text="Contact" mobile />
            <button className="w-full bg-yellow-700 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition mt-4">
              Donate
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
