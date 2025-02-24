import aboutImage from '../assets/children-friends.jpg';
import Mission from './Mission';

const AboutHeader = () => (
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold mb-6">About Us</h2>
    <div className="grid md:grid-cols-2 gap-12 items-center text-left mt-12">
      <div className="relative">
        <img
          src={aboutImage}
          alt="About Us"
          className="rounded-lg shadow-xl w-full h-auto object-cover"
        />
      </div>
      <div>
        <Mission />
      </div>
    </div>
  </div>
);

export default AboutHeader;
