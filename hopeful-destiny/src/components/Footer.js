// components/Footer.jsx
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/hopeful_destiny_logo_clean.png';  // <-- Add your logo import

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* LOGO + NAME */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={Logo}
                alt="Hopeful Destiny Logo"
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-yellow-700 text-xl font-bold">
                Hopeful Destiny
              </h3>
            </div>

            <p className="text-gray-400">
              Creating hopeful destiny of the communities
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-yellow-700 text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition">Thematic Areas</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-yellow-700 text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" /> Kitale, Kenya
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" /> +254 710330788
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" /> hopefuldestinyorganisation@gmail.com
              </li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div>
            <h3 className="text-yellow-700 text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-gray-400">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hopeful Destiny. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
