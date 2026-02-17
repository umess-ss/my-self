import { projects } from '../data/PortfolioData';
import { Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer duration-300">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 dark:text-white">{project.title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{project.type}</p>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 px-2 py-1 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-purple-600 bg-white border border-gray-200 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-300 hover:text-black transition-all duration-200 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-purple-400 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <Github size={18} />
          <span>View Source</span>
        </a>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <p className="text-purple-600 font-semibold text-center mb-2">MY PORTFOLIO</p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          See My Recent <span className="text-purple-600">Projects</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
