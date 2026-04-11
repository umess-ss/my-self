import { useState, useEffect, useCallback, useRef } from 'react';
import { projects } from '../data/PortfolioData';
import { Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from './reactbits/BlurText';
import ScrollReveal from './reactbits/ScrollReveal';
import AbstractBackground from './AbstractBackground';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer duration-300 h-full border border-gray-100 dark:border-gray-700">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
            {project.type}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span key={index} className="bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 px-2.5 py-1 rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400 px-2.5 py-1 rounded-full text-xs font-medium">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-purple-600 bg-purple-50 rounded-lg hover:bg-purple-100 hover:text-purple-700 transition-all duration-200 dark:bg-purple-900/20 dark:text-purple-400 dark:hover:bg-purple-900/40"
        >
          <Github size={16} />
          View Source
        </a>
      </div>
    </div>
  );
};

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const intervalRef = useRef(null);

  // Responsive slides count
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) setSlidesPerView(1);
      else if (window.innerWidth < 1024) setSlidesPerView(2);
      else setSlidesPerView(3);
    };
    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  const maxIndex = Math.max(0, projects.length - slidesPerView);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(goNext, 4000);
    return () => clearInterval(intervalRef.current);
  }, [goNext, isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section id="projects" className="relative min-h-screen py-20 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      <AbstractBackground variant="both" opacity={0.05} colorClass="text-purple-400 dark:text-purple-600" flip />
      <div className="container mx-auto px-4">
        {/* Header with nav buttons */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <ScrollReveal direction="up" distance={20}>
              <p className="text-purple-600 font-semibold mb-2">MY PORTFOLIO</p>
            </ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold">
              <BlurText
                text="See My Recent"
                animateBy="words"
                delay={80}
                direction="top"
              />{" "}
              <BlurText
                text="Projects"
                animateBy="words"
                delay={100}
                direction="bottom"
                className="text-purple-600"
              />
            </h2>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={goPrev}
              className="w-11 h-11 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-purple-500 hover:text-purple-600 dark:hover:border-purple-400 dark:hover:text-purple-400 transition-all duration-200 hover:shadow-md cursor-pointer outline-none focus:outline-none"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goNext}
              className="w-11 h-11 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-purple-500 hover:text-purple-600 dark:hover:border-purple-400 dark:hover:text-purple-400 transition-all duration-200 hover:shadow-md cursor-pointer outline-none focus:outline-none"
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <ScrollReveal direction="up" distance={30}>
          <div
            className="overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / slidesPerView + (6 * 4 / (typeof window !== 'undefined' ? window.innerWidth : 1024)) * 100 / slidesPerView)}%` }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ x: 0 }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / slidesPerView}% - ${(slidesPerView - 1) * 24 / slidesPerView}px)` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer outline-none focus:outline-none ${
                i === currentIndex
                  ? "w-8 bg-purple-600 dark:bg-purple-400"
                  : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-purple-300 dark:hover:bg-purple-700"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
