import heroImage from '../assets/Children laughing 2.jpg';

const Hero = () => {
  return (
    <section
      className="relative h-[600px] text-white flex items-center pt-20"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-5xl font-bold mb-6">Hopeful Destiny Organisation</h1>
        <p className="text-xl mb-8 max-w-2xl">
          Together we empower the community through education, child protection, and empowerment projects.
        </p>
        <button className="bg-yellow-700 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
