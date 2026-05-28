import { memo, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  Github,
  Layers3,
  Server,
  Smartphone,
  TerminalSquare,
} from 'lucide-react';
import AbstractBackground from './AbstractBackground';
import AnimatedButton from './motion/AnimatedButton';
import Reveal from './motion/Reveal';

const filters = ['All', 'Backend', 'Cloud/DevOps', 'AI/ML', 'Full Stack', 'Mobile', 'Go'];

const projectIconMap = {
  backend: Server,
  cloud: Cloud,
  ai: BrainCircuit,
  go: TerminalSquare,
  mobile: Smartphone,
  fullstack: Layers3,
  frontend: Code2,
  devops: Cloud,
};

const projects = [
  {
    id: 'restrox',
    title: 'Restrox Restaurant Management System',
    category: 'Backend & Cloud',
    filters: ['Backend', 'Cloud/DevOps'],
    description: 'Production-style restaurant management system with role-based workflows, QR ordering, inventory management, and real-time kitchen/order updates.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Docker', 'AWS ECS', 'ECR', 'ALB', 'SSM', 'CloudWatch', 'Terraform', 'GitHub Actions'],
    sourceUrl: 'https://github.com/umess-ss/restrox-resturant',
    iconType: 'cloud',
    featured: true,
  },
  {
    id: 'daai',
    title: 'DAAI Fellowship Platform',
    category: 'Full Stack / LMS',
    filters: ['Full Stack', 'Backend'],
    description: 'Fellowship learning management platform with public website, admin dashboard, fellow dashboard, quiz modules, course/track flow, and role-based navigation.',
    tech: ['FastAPI', 'React', 'MongoDB', 'Tailwind CSS', 'RBAC', 'LMS'],
    sourceUrl: '#',
    iconType: 'fullstack',
    featured: true,
  },
  {
    id: 'banking-api',
    title: 'Banking API App',
    category: 'Go Backend',
    filters: ['Go', 'Backend'],
    description: 'Banking backend application built with Go to practice clean project structure, middleware, response helpers, PostgreSQL repositories, migrations, safe DB transactions, register/login, protected routes, and account ownership.',
    tech: ['Go', 'PostgreSQL', 'REST API', 'Middleware', 'JWT', 'Transactions'],
    sourceUrl: '#',
    iconType: 'go',
    featured: true,
  },
  {
    id: 'light-orm',
    title: 'Light ORM',
    category: 'Python Internals',
    filters: ['Backend'],
    description: 'Minimal ORM built from scratch to understand Python descriptors, metaclasses, model fields, table mapping, SQLite integration, and query logic.',
    tech: ['Python', 'SQLite', 'OOP', 'Descriptors', 'Metaclasses', 'ORM'],
    sourceUrl: 'https://github.com/umess-ss/light-orm',
    iconType: 'backend',
  },
  {
    id: 'emotion-detection',
    title: 'Emotion Detection',
    category: 'AI / ML',
    filters: ['AI/ML'],
    description: 'Python-based emotion detection project exploring machine learning/computer vision workflows.',
    tech: ['Python', 'AI/ML', 'Computer Vision'],
    sourceUrl: 'https://github.com/umess-ss/emotion-detection',
    iconType: 'ai',
  },
  {
    id: 'blind-navigation',
    title: 'Blind Navigation Assistant App',
    category: 'AI / Mobile',
    filters: ['AI/ML', 'Mobile'],
    description: 'Assistive navigation app for visually impaired users, focused on indoor navigation and AI-assisted object/depth awareness.',
    tech: ['Kotlin', 'Android', 'YOLO', 'MIDAS', 'Computer Vision'],
    sourceUrl: 'https://github.com/umess-ss/Blind-Navigation-Assistant-App',
    iconType: 'mobile',
  },
  {
    id: 'trading-dashboard',
    title: 'Trading Dashboard',
    category: 'Backend / DevOps',
    filters: ['Backend', 'Cloud/DevOps'],
    description: 'Trading dashboard project focused on backend foundation, Docker-based workflow, and CI/CD pipeline practice.',
    tech: ['Python', 'Docker', 'GitHub Actions', 'Backend'],
    sourceUrl: 'https://github.com/umess-ss/trading-dashboard',
    iconType: 'devops',
  },
  {
    id: 'hamroawaj',
    title: 'HamroAwaj - Smart City Platform',
    category: 'Full Stack / Hackathon',
    filters: ['Full Stack', 'Backend'],
    description: 'Civic complaint platform where citizens report city-related problems and authorities can track and respond to issues.',
    tech: ['TypeScript', 'React', 'Django', 'Tailwind CSS'],
    sourceUrl: 'https://github.com/umess-ss/protobytes-2.0-team--BEI-BEAST-',
    iconType: 'fullstack',
  },
  {
    id: 'bigdata-hadoop',
    title: 'Big Data Docker Hadoop',
    category: 'Data Engineering / DevOps',
    filters: ['Cloud/DevOps'],
    description: 'Big data environment setup using Docker and Hadoop ecosystem concepts.',
    tech: ['Docker', 'Hadoop', 'Makefile', 'Big Data'],
    sourceUrl: 'https://github.com/umess-ss/bigdata-docker-hadoop',
    iconType: 'devops',
  },
  {
    id: 'expense-tracker',
    title: 'Django Expense Tracker',
    category: 'Backend',
    filters: ['Backend'],
    description: 'Backend-focused expense management system for tracking user expenses.',
    tech: ['Django', 'Backend', 'REST API'],
    sourceUrl: 'https://github.com/umess-ss/django-expense-tracker',
    iconType: 'backend',
  },
  {
    id: 'saas-content-planner',
    title: 'SaaS Content Planner',
    category: 'Full Stack',
    filters: ['Full Stack'],
    description: 'SaaS-style content planning project exploring dashboard/productivity workflows.',
    tech: ['TypeScript', 'SaaS', 'Dashboard'],
    sourceUrl: 'https://github.com/umess-ss/saas-content-planner',
    iconType: 'fullstack',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    category: 'Frontend / Personal Brand',
    filters: ['Full Stack'],
    description: 'Personal developer portfolio website showcasing projects, resume, skills, and cloud/backend engineering journey.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Portfolio'],
    sourceUrl: 'https://github.com/umess-ss/my-self',
    iconType: 'frontend',
  },
];

const ProjectVisual = memo(function ProjectVisual({ iconType, featured }) {
  const Icon = projectIconMap[iconType] || Server;

  return (
    <div className={`project-visual relative flex items-center justify-center overflow-hidden rounded-2xl ${featured ? 'h-32' : 'h-24'}`}>
      <div className="project-visual-grid absolute inset-0" aria-hidden="true" />
      <div className="project-visual-icon relative flex items-center justify-center">
        <Icon size={featured ? 30 : 26} strokeWidth={1.8} />
      </div>
    </div>
  );
});

const ProjectCard = memo(function ProjectCard({ project, featured = false }) {
  const sourceDisabled = project.sourceUrl === '#';

  return (
    <article className={`project-card group flex h-full flex-col rounded-[18px] p-4 sm:p-5 ${featured ? 'project-card-featured' : ''}`}>
      <div className="relative">
        <ProjectVisual iconType={project.iconType} featured={featured} />
        <span className="project-category-pill absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <h3 className={`${featured ? 'text-[1.18rem]' : 'text-[1.05rem]'} font-bold leading-snug text-[#0F172A] dark:text-white`}>
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-[1.65] text-[#475569] dark:text-gray-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span key={tech} className="project-tech-chip rounded-full px-2.5 py-1 text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {sourceDisabled ? (
            <span className="project-action-disabled inline-flex cursor-not-allowed items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
              <Github size={16} />
              View Source
            </span>
          ) : (
            <AnimatedButton
              as="a"
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-primary-action inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300"
            >
              <Github size={16} />
              View Source
            </AnimatedButton>
          )}
          {featured && (
            sourceDisabled ? (
              <span className="project-secondary-action-disabled inline-flex cursor-not-allowed items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
                View Details
                <ArrowUpRight size={16} />
              </span>
            ) : (
              <AnimatedButton
                as="a"
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-secondary-action inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300"
              >
                View Details
                <ArrowUpRight size={16} />
              </AnimatedButton>
            )
          )}
        </div>
      </div>
    </article>
  );
});

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.filters.includes(activeFilter));
  }, [activeFilter]);

  const featuredProjects = filteredProjects.filter((project) => project.featured);
  const regularProjects = filteredProjects.filter((project) => !project.featured);

  return (
    <section id="projects" className="projects-section relative overflow-hidden bg-[#FBFAFC] py-20 dark:bg-gray-900 transition-colors duration-300">
      <div className="projects-bg-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      <AbstractBackground variant="both" opacity={0.022} colorClass="text-sky-500 dark:text-sky-500" flip />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-sky-300">
              MY PORTFOLIO
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0F172A] dark:text-white md:text-5xl">
              Featured{" "}
              <span className="text-blue-600 dark:text-sky-300">
                Projects
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] dark:text-gray-300 md:text-lg">
              A collection of backend, cloud, AI, and full-stack projects I’ve built while learning production-grade engineering.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05} distance={14}>
          <div className="mt-8 flex gap-2.5 overflow-x-auto pb-3 sm:flex-wrap sm:justify-center sm:overflow-visible">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <AnimatedButton
                  key={filter}
                  as="button"
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`project-filter-pill shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'project-filter-pill-active text-white'
                      : 'border-blue-400/18 bg-white/60 text-[#475569] hover:border-blue-400/38 hover:text-blue-600 dark:bg-slate-900/36 dark:text-gray-300 dark:hover:text-sky-200'
                  }`}
                >
                  {filter}
                </AnimatedButton>
              );
            })}
          </div>
        </Reveal>

        {featuredProjects.length > 0 && (
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        )}

        {regularProjects.length > 0 && (
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {regularProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {filteredProjects.length === 0 && (
          <p className="mt-12 text-center text-[#64748B] dark:text-gray-400">
            No projects found for this category.
          </p>
        )}

        <div className="mt-12 flex justify-center">
          <AnimatedButton
            as="a"
            href="https://github.com/umess-ss"
            target="_blank"
            rel="noopener noreferrer"
            className="project-more-action inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300"
          >
            <Github size={18} />
            View More on GitHub
            <ArrowUpRight size={18} />
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
