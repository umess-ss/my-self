import React from 'react';
import { aboutStats } from '../data/PortfolioData';
import ScrollReveal from './reactbits/ScrollReveal';
import AbstractBackground from './AbstractBackground';

const ProgressCircle = ({ percentage, label, color }) => {
  const strokeColors = {
    purple: "#a855f7",
    green: "#22c55e",
    orange: "#f97316",
  };

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="text-center flex-1 min-w-0 flex flex-col items-center">
      <div className="relative w-20 h-20 md:w-28 md:h-28 mb-2">
        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
          <circle
            cx="50" cy="50" r={radius}
            stroke="#e5e7eb" strokeWidth="6" fill="transparent"
            className="dark:stroke-gray-700 transition-colors duration-300"
          />
          <circle
            cx="50" cy="50" r={radius}
            stroke={strokeColors[color] || "#6b7280"}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm md:text-xl font-bold">{percentage}%</span>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 font-medium text-[10px] md:text-sm truncate w-full px-1">
        {label}
      </p>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      <AbstractBackground variant="waves" opacity={0.05} colorClass="text-purple-300 dark:text-purple-700" flip />
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up" distance={20}>
          <p className="text-purple-600 font-semibold text-center mb-2">ABOUT ME</p>
        </ScrollReveal>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Who Is{" "}
          <span className="text-purple-600">Umesh Rajbanshi</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <ScrollReveal direction="left" distance={60} delay={0.1}>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600"
              alt="About"
              className="w-full rounded-lg shadow-lg mb-6 md:mb-0"
            />
          </ScrollReveal>

          <ScrollReveal direction="right" distance={60} delay={0.2}>
            <div>
              {/* Quote block */}
              <div className="relative mb-8">
                <span className="absolute -top-4 -left-2 text-7xl leading-none text-purple-300 dark:text-purple-700 font-serif select-none">"</span>
                <blockquote className="relative z-10 pl-6 pr-2 pt-4 italic text-gray-600 dark:text-gray-300 leading-relaxed text-lg border-l-4 border-purple-400 dark:border-purple-600">
                  I am a passionate and detail-oriented Electronics and Communication Engineer with a solid foundation in backend architecture and
                  a growing focus on AWS Cloud Operations. With a disciplined approach to debugging and error handling, I specialize in crafting robust,
                  scalable software solutions and maintaining high standards through CI/CD workflows and containerization. My expertise extends into AI and Deep Learning,
                  where I have experience integrating cutting-edge tools like Langchain, Crawl4ai, and Gemini into real-world engineering projects.
                  From optimizing system stability to building advanced computer vision applications like Blind Vision, my commitment to technical excellence has led to measurable successes in enhancing system reliability and project performance.
                </blockquote>
                <span className="block text-right text-7xl leading-none text-purple-300 dark:text-purple-700 font-serif select-none -mt-4">"</span>
                <p className="text-right text-sm font-semibold text-purple-600 dark:text-purple-400 mt-1 pr-2">— Umesh Rajbanshi</p>
              </div>

              <div className="flex flex-nowrap justify-between items-center gap-2 md:gap-8 mt-8">
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
