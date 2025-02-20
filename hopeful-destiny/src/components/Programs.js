// components/Programs.jsx
import React from 'react';
import { BookOpen, Heart, Users, Droplet, Leaf } from 'lucide-react';
import ProgramCard from './ProgramCard'; // Import your ProgramCard component

const Programs = () => {
  return (
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
  );
};

export default Programs;