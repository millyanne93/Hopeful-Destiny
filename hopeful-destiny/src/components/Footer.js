// components/Footer.jsx
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-yellow-700 text-xl font-bold mb-4">Hopeful Destiny</h3>
            <p className="text-gray-400">Creating hopeful destiny of the communities</p>
          </div>
          <div>
            <h3 className="text-yellow-700 text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-white transition">Programs</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-yellow-700 text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                Kitale, Kenya
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                +254 XXX XXX XXX
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                info@hopefuldestiny.org
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-yellow-700 text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hopeful Destiny. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
