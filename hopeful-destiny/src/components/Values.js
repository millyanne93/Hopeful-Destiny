import React from 'react';
import ValueCard from './ValueCard';
import { Shield, Handshake, Compass } from 'lucide-react';

const Values = () => {
  const values = [
    {
      title: 'Dignity',
      description: 'We respect and value every individual we serve.',
      Icon: Shield,
    },
    {
      title: 'Partnership',
      description: 'We believe in collaborative efforts for greater impact.',
      Icon: Handshake,
    },
    {
      title: 'Transparency',
      description: 'We maintain integrity in all our operations.',
      Icon: Compass,
    },
  ];

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              title={value.title}
              description={value.description}
              Icon={value.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
