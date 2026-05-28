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
import ScrollReveal from './reactbits/ScrollReveal';
import AbstractBackground from './AbstractBackground';

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
    <div className={`project-visual relative flex items-center justify-center overflow-hidden rounded-[18px] ${featured ? 'h-36' : 'h-28'}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_24%,rgba(255,255,255,0.22),transparent_28%),linear-gradient(135deg,rgba(37,99,235,0.92),rgba(14,165,233,0.58))]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:22px_22px] opacity-35" />
      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/25 bg-white/14 text-white shadow-[0_18px_60px_rgba(2,6,23,0.25)] backdrop-blur-md">
        <Icon size={featured ? 34 : 30} strokeWidth={1.8} />
      </div>
    </div>
  );
});

const ProjectCard = memo(function ProjectCard({ project, featured = false }) {
  const sourceDisabled = project.sourceUrl === '#';

  return (
    <article className={`project-card group flex h-full flex-col rounded-2xl p-5 ${featured ? 'project-card-featured' : ''}`}>
      <div className="relative">
        <ProjectVisual iconType={project.iconType} featured={featured} />
        <span className="absolute right-3 top-3 rounded-full border border-blue-300/25 bg-white/90 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm dark:bg-slate-950/82 dark:text-blue-100">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <h3 className={`${featured ? 'text-xl' : 'text-lg'} font-semibold leading-snug text-[#0F172A] dark:text-white`}>
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-[1.7] text-[#475569] dark:text-gray-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-full border border-blue-400/18 bg-blue-500/[0.07] px-2.5 py-1 text-xs font-medium text-blue-700 dark:text-blue-100">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {sourceDisabled ? (
            <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-slate-300/70 px-4 py-2 text-sm font-semibold text-slate-400 dark:border-slate-700 dark:text-slate-500">
              <Github size={16} />
              View Source
            </span>
          ) : (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-blue-500/30"
            >
              <Github size={16} />
              View Source
            </a>
          )}
          {featured && (
            sourceDisabled ? (
              <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-blue-400/25 px-4 py-2 text-sm font-semibold text-blue-700 opacity-60 dark:text-blue-100">
                View Details
                <ArrowUpRight size={16} />
              </span>
            ) : (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 px-4 py-2 text-sm font-semibold text-blue-700 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/10 dark:text-blue-100"
              >
                View Details
                <ArrowUpRight size={16} />
              </a>
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
        <ScrollReveal direction="up" distance={20}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-sky-300">
              MY PORTFOLIO
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0F172A] dark:text-white md:text-5xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] dark:text-gray-300 md:text-lg">
              A collection of backend, cloud, AI, and full-stack projects I’ve built while learning production-grade engineering.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={18} delay={0.05}>
          <div className="mt-8 flex gap-3 overflow-x-auto pb-3 sm:flex-wrap sm:justify-center sm:overflow-visible">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`project-filter-pill shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'project-filter-pill-active text-white'
                      : 'border-blue-400/20 bg-white/65 text-[#475569] hover:border-blue-400/50 hover:text-blue-600 dark:bg-slate-900/42 dark:text-gray-300 dark:hover:text-sky-200'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {featuredProjects.length > 0 && (
          <ScrollReveal direction="up" distance={30} delay={0.08}>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured />
              ))}
            </div>
          </ScrollReveal>
        )}

        {regularProjects.length > 0 && (
          <ScrollReveal direction="up" distance={30} delay={0.12}>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {regularProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </ScrollReveal>
        )}

        {filteredProjects.length === 0 && (
          <p className="mt-12 text-center text-[#64748B] dark:text-gray-400">
            No projects found for this category.
          </p>
        )}

        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/umess-ss"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-white/70 px-6 py-3 font-semibold text-blue-700 shadow-lg shadow-blue-500/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-500/10 dark:bg-slate-900/50 dark:text-blue-100"
          >
            <Github size={18} />
            View More on GitHub
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
