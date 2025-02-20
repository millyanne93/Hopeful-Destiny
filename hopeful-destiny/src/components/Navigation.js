// components/Navigation.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavLink from './NavLink';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-yellow-700">Hopeful Destiny</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#" text="Home" />
            <NavLink href="#about" text="About" />
            <NavLink href="#programs" text="Programs" />
            <NavLink href="#contact" text="Contact" />
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
            <NavLink href="#" text="Home" mobile />
            <NavLink href="#about" text="About" mobile />
            <NavLink href="#programs" text="Programs" mobile />
            <NavLink href="#contact" text="Contact" mobile />
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