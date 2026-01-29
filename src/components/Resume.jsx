import React, { useState } from 'react'; // Added useState
import { Rocket, Code, GraduationCap, Award, Brain } from 'lucide-react';
import { experiences } from '../data/PortfolioData';

const ResumeCard = ({ icon: Icon, label, color, isActive, onClick }) => {
  // Better handling for Tailwind classes
  const colorMap = {
    pink: isActive ? "bg-pink-600 text-white" : "bg-pink-100 text-pink-600",
    orange: isActive ? "bg-orange-600 text-white" : "bg-orange-100 text-orange-600",
    blue: isActive ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600",
  };

  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-lg shadow-md p-6 w-44 text-center hover:shadow-lg hover:-translate-y-2 transition-all cursor-pointer border-2 ${isActive ? 'border-purple-500' : 'border-transparent'}`}
    >
      <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${colorMap[color]}`}>
        <Icon size={28} />
      </div>
      <h3 className="font-semibold text-lg">{label}</h3>
    </div>
  );
};

const Resume = () => {
  // 1. Set the default category to show
  const [activeCategory, setActiveCategory] = useState('Experience');

  const categories = [
    { icon: Rocket, label: 'Experience', color: 'pink' },
    { icon: GraduationCap, label: 'Education', color: 'orange' },
    { icon: Award, label: 'Trainings', color: 'blue' },
    { icon: Code, label: 'Hard Skills', color: 'orange' },
    { icon: Brain, label: 'Soft Skills', color: 'pink' },
  ];

  // 2. Filter the data based on state
  const filteredData = experiences.filter(item => item.category === activeCategory);

  return (
    <section id="resume" className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <p className="text-pink-600 font-semibold text-center mb-2">MY RESUME</p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          My <span className="text-purple-600">Experience & Skills</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, index) => (
            <ResumeCard 
              key={index} 
              icon={cat.icon} 
              label={cat.label} 
              color={cat.color}
              isActive={activeCategory === cat.label} // Pass active state
              onClick={() => setActiveCategory(cat.label)} // Change state on click
            />
          ))}
        </div>

        {/* 3. Render only filtered results */}
        <div className="max-w-4xl mx-auto">
          {filteredData.length > 0 ? (
            filteredData.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 mb-6 animate-fadeIn">
                <h3 className="text-xl font-semibold text-pink-600 mb-2">
                  {exp.position}
                </h3>
                <p className="text-gray-500 mb-4 font-medium">
                  {exp.company} {exp.location && `| ${exp.location}`} | {exp.duration}
                </p>
                <div className="pl-4 space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <p key={idx} className="text-gray-600">✓ {resp}</p>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No entries found for this category.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;