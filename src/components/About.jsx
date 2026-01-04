import React from 'react';
import { aboutStats } from '../data/PortfolioData';

const ProgressCircle = ({ percentage, label, color }) => {
  return (
    <div className="text-center">
      <div className={`w-28 h-28 rounded-full border-8 border-${color}-500 flex items-center justify-center mb-2`}>
        <span className="text-3xl font-bold">{percentage}%</span>
      </div>
      <p className="text-gray-500">{label}</p>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4">
        <p className="text-purple-600 font-semibold text-center mb-2">ABOUT ME</p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Who Is <span className="text-purple-600">Umesh Rajbanshi</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600"
            alt="About"
            className="w-full rounded-lg shadow-lg"
          />
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              I am a passionate and detail-oriented Full Stack Developer with over three years of
              experience crafting innovative web applications and delivering robust software
              solutions. My expertise spans both front-end and back-end technologies. Also I have
              experience of integrating cutting-edge AI tools like Langchain, Crawl4ai and gemini
              into real world project. My commitment to delivering high-quality, scalable solutions
              has led to measurable successes, such as optimizing business processes and
              enhancing user engagement.
            </p>
            <div className="flex justify-center gap-8 mt-8">
              {aboutStats.map((stat, index) => (
                <ProgressCircle
                  key={index}
                  percentage={stat.percentage}
                  label={stat.label}
                  color={stat.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
