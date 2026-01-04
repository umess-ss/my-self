import React from 'react';
import { Rocket, Code, GraduationCap, Award, Brain } from 'lucide-react';
import { experiences } from '../data/PortfolioData';

const ResumeCard = ({ icon: Icon, label, color }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-44 text-center hover:shadow-lg hover:-translate-y-2 transition-all cursor-pointer">
      <div className={`w-14 h-14 rounded-full bg-${color}-100 flex items-center justify-center mx-auto mb-4`}>
        <Icon className={`text-${color}-600`} size={28} />
      </div>
      <h3 className="font-semibold text-lg">{label}</h3>
    </div>
  );
};

const Resume = () => {
  const categories = [
    { icon: Rocket, label: 'Experience', color: 'pink' },
    { icon: GraduationCap, label: 'Education', color: 'orange' },
    { icon: Award, label: 'Trainings', color: 'blue' },
    { icon: Code, label: 'Hard Skills', color: 'orange' },
    { icon: Brain, label: 'Soft Skills', color: 'pink' },
  ];

  return (
    <section id="resume" className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <p className="text-pink-600 font-semibold text-center mb-2">MY RESUME</p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          My <span className="text-purple-600">Experience, Education, Trainings And Skills</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, index) => (
            <ResumeCard key={index} icon={cat.icon} label={cat.label} color={cat.color} />
          ))}
        </div>

        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">
              {exp.company} | {exp.position} | {exp.location} | {exp.duration}
            </h3>
            <div className="pl-4 space-y-3">
              {exp.responsibilities.map((resp, idx) => (
                <p key={idx} className="text-gray-600">✓ {resp}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resume;