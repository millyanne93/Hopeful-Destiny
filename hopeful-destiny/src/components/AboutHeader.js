import aboutImage from '../assets/Children Friends.jpg';
import Mission from './Mission';

const AboutHeader = () => (
  <div className="pt-20 pb-12">
    <h2 className="text-4xl font-bold mb-6 text-center">About Us</h2>
    <div className="grid md:grid-cols-2 gap-12 items-start mt-12 bg-gray-50 py-8 px-4 rounded-lg">
      {/* Mission text on the left */}
      <div className="order-2 md:order-1">
        <Mission alignment="left" removeSection={true} />
      </div>
      
      {/* Image on the right */}
      <div className="relative order-1 md:order-2">
        <img
          src={aboutImage}
          alt="About Us"
          className="rounded-lg shadow-xl w-full h-auto object-cover"
        />
      </div>
    </div>
  </div>
);

export default AboutHeader;
