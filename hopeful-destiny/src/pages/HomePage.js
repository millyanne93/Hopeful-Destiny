import React, { useState } from 'react';
import { 
  Heart, 
  Users, 
  BookOpen, 
  Droplet, 
  Leaf, 
  ArrowRight, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Linkedin,
  ChevronUp,
  ChevronDown,
  Instagram
} from 'lucide-react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedPrograms, setExpandedPrograms] = useState({});
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const fullAboutContent = `
    Hopeful Destiny CBO is a non-political and non-profit organization in Kitale, Kenya, dedicated to supporting children, youth, and women through sponsorship and empowerment projects. Our organization was founded with the vision of creating lasting change in communities through sustainable development initiatives. We work closely with local leaders and community members to identify needs and implement effective solutions that promote long-term growth and independence.
  `;
  
  const shortAboutContent = fullAboutContent.slice(0, 150) + "..."; 

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-yellow-700">Hopeful Destiny</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#" text="Home" />
              <NavLink href="#about" text="About" />
              <NavLink href="#programs" text="Programs" />
              <NavLink href="#contact" text="Contact" />
              <button className="bg-yellow-700 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition">
                Donate
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
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

      {/* Hero Section */}
      <section className="relative h-[600px] bg-blue-900 text-white flex items-center pt-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold mb-6">Hopeful Destiny Organisation</h1>
          <p className="text-xl mb-8 max-w-2xl">Together we empower the community through education, child protection, and empowerment projects.</p>
          <button className="bg-yellow-700 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
            Donate Now
          </button>
        </div>
      </section>

      {/* Mission Section with Animation */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isAboutExpanded ? fullAboutContent : shortAboutContent}
            </p>
            <button 
              onClick={() => setIsAboutExpanded(!isAboutExpanded)}
              className="mt-4 text-yellow-700 font-semibold flex items-center mx-auto hover:text-yellow-800"
            >
              {isAboutExpanded ? (
                <>Read Less <ChevronUp className="w-4 h-4 ml-2" /></>
              ) : (
                <>Read More <ChevronDown className="w-4 h-4 ml-2" /></>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard 
              icon={<BookOpen className="w-12 h-12 text-yellow-600" />}
              title="Education & Child Protection"
              description="Supporting children with school fees, uniforms, books and learning items."
            />
            <ProgramCard 
              icon={<Heart className="w-12 h-12 text-yellow-600" />}
              title="Health & Nutrition"
              description="Supporting health and nutrition programs, community training."
            />
            <ProgramCard 
              icon={<Users className="w-12 h-12 text-yellow-600" />}
              title="Food Security & Livelihoods"
              description="Supporting table banking, youth empowerment, and food security."
            />
            <ProgramCard 
              icon={<Droplet className="w-12 h-12 text-yellow-600" />}
              title="Water & Sanitation"
              description="Supporting clean water supply and hygiene promotion practices."
            />
            <ProgramCard 
              icon={<Leaf className="w-12 h-12 text-yellow-600" />}
              title="Climate Change"
              description="Tree planting, adaptation measures, and research support."
            />
          </div>
        </div>
      </section>

      {/* Values Section with Hover Effects */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <ValueCard title="Dignity" />
            <ValueCard title="Partnership" />
            <ValueCard title="Transparency" />
          </div>
        </div>
      </section>

      {/* Donation Section with Enhanced UI */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Support Our Course</h2>
            <p className="text-gray-600 mb-8">Donate through our PayBill or Bank Account to make a difference.</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <DonationButton text="Pay Bill" />
              <DonationButton text="Bank Transfer" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
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
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
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
    </div>
  );
};

const NavLink = ({ href, text, mobile }) => {
  return (
    <a
      href={href}
      className={`${
        mobile 
          ? 'block py-2 text-gray-800 hover:text-yellow-600 transition'
          : 'text-gray-800 hover:text-yellow-600 transition'
      }`}
    >
      {text}
    </a>
  );
};

const ProgramCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 border rounded-lg hover:shadow-lg transition group">
      <div className="mb-4 transform group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-yellow-700 font-semibold flex items-center group-hover:text-yellow-800">
        Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

const ValueCard = ({ title }) => {
  return (
    <div className="p-6 hover:bg-yellow-700 transition-colors rounded-lg">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="w-12 h-1 bg-yellow-500 mx-auto mb-4"></div>
    </div>
  );
};

const DonationButton = ({ text }) => {
  return (
    <button className="bg-yellow-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition flex items-center justify-center group">
      {text}
      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
    </button>
  );
};

export default HomePage;
