import React, { useState } from 'react';
import {
  Award,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';
import AbstractBackground from './AbstractBackground';
import ScrollReveal from './reactbits/ScrollReveal';

const categories = [
  { key: 'education', label: 'Education', icon: GraduationCap },
  { key: 'trainings', label: 'Trainings', icon: Award },
  { key: 'hardSkills', label: 'Hard Skills', icon: Code2 },
  { key: 'softSkills', label: 'Soft Skills', icon: Brain },
  { key: 'experience', label: 'Experience', icon: Rocket },
];

const educationItems = [
  {
    title: 'Bachelor of Electronics, Communication and Information Engineering',
    institution: 'Advanced College of Engineering and Management',
    meta: 'Kalanki, Kathmandu, Nepal • Tribhuvan University • Completed 2025',
    bullets: [
      'Completed engineering degree focused on electronics, communication systems, computer networks, embedded systems, and information engineering.',
      'Built strong engineering foundations in programming, signal processing, system design, and technical problem solving.',
      'Applied software engineering practices through backend, cloud, and full-stack projects.',
    ],
  },
  {
    title: '+2 Science',
    institution: 'Adarsha Secondary School',
    meta: 'Biratnagar, Nepal • Completed 2020',
    bullets: [
      'Completed higher secondary education in the Science stream.',
      'Built foundations in Physics, Chemistry, Mathematics, and Computer Science.',
      'Developed analytical and problem-solving habits for engineering studies.',
    ],
  },
  {
    title: 'SEE',
    institution: 'Adarsha Secondary School',
    meta: 'Biratnagar, Nepal',
    bullets: [
      'Completed secondary education with a strong foundation in science and mathematics.',
      'Built early interest in technology, computers, and engineering concepts.',
    ],
  },
];

const trainingItems = [
  {
    title: 'AWS Academy Graduate - Cloud Architecting',
    issuer: 'AWS Academy',
    description: 'Completed cloud architecting training with hands-on practice across AWS compute, networking, storage, monitoring, and deployment patterns.',
    tags: ['AWS', 'ECS', 'ECR', 'ALB', 'CloudWatch', 'SSM'],
  },
  {
    title: 'CloudMandap Cloud Fellowship',
    issuer: 'CloudMandap',
    description: 'Built practical cloud engineering experience through deployment workflows, infrastructure automation, containers, and CI/CD delivery.',
    tags: ['AWS', 'Docker', 'Terraform', 'CI/CD', 'GitHub Actions'],
  },
  {
    title: 'Backend, DevOps, and AI/MLOps Learning',
    issuer: 'Independent Learning',
    description: 'Expanded production backend skills through API design, automation, DevOps workflows, and AI/MLOps-oriented engineering practice.',
    tags: ['Django', 'FastAPI', 'Python', 'MLOps', 'Docker', 'AI Tools'],
  },
];

const skillGroups = [
  {
    label: 'Languages',
    icon: Code2,
    skills: ['Python', 'JavaScript', 'Go', 'SQL', 'C/C++'],
  },
  {
    label: 'Backend',
    icon: Wrench,
    skills: ['FastAPI', 'Django', 'Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'RBAC'],
  },
  {
    label: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS', 'Docker', 'Terraform', 'GitHub Actions', 'ECS', 'ECR', 'ALB', 'SSM Parameter Store', 'CloudWatch'],
  },
  {
    label: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'SQLite'],
  },
  {
    label: 'Architecture',
    icon: ShieldCheck,
    skills: ['Multi-tenant APIs', 'Microservices Basics', 'CI/CD Pipelines', 'System Design', 'API Design'],
  },
];

const softSkills = [
  { title: 'Problem Solving', icon: Sparkles },
  { title: 'Debugging', icon: Wrench },
  { title: 'Documentation', icon: CheckCircle2 },
  { title: 'Collaboration', icon: BriefcaseBusiness },
  { title: 'System Thinking', icon: Layers3 },
  { title: 'Continuous Learning', icon: Brain },
];

const experienceItems = [
  {
    role: 'Backend & Cloud Engineer',
    project: 'Restrox Restaurant Management System',
    meta: 'MERN Stack • AWS • Docker • Terraform • CI/CD',
    bullets: [
      'Built a multi-role restaurant management system with Admin, Manager, Waiter, and Chef workflows.',
      'Implemented JWT authentication, RBAC, inventory management, QR ordering, and real-time kitchen/order updates.',
      'Deployed backend infrastructure using AWS ECS Fargate, ECR, ALB, ACM, SSM Parameter Store, CloudWatch, and GitHub Actions.',
    ],
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Docker', 'AWS', 'Terraform'],
  },
  {
    role: 'Full Stack Developer',
    project: 'DAAI Fellowship Platform',
    meta: 'Learning Management System • Public Website • Admin Dashboard • Fellow Dashboard',
    bullets: [
      'Built a fellowship learning management platform with public pages, admin dashboard, and fellow dashboard.',
      'Worked on course/track flow, quiz modules, learning management features, and role-based navigation.',
      'Improved dashboard structure, frontend routing, and overall user experience for fellows and admins.',
    ],
    tags: ['FastAPI', 'React', 'MongoDB', 'Tailwind CSS', 'RBAC', 'LMS'],
  },
  {
    role: 'Go Backend Developer',
    project: 'Banking API App',
    meta: 'Golang • Backend Architecture • REST API',
    bullets: [
      'Built a banking backend application using Go with clean project structure.',
      'Practiced middleware, response helpers, config management, PostgreSQL integration, migrations, repositories, and safe DB transactions.',
      'Implemented register, login, protected routes, and account ownership concepts.',
    ],
    tags: ['Go', 'PostgreSQL', 'REST API', 'Middleware', 'JWT', 'Transactions'],
  },
  {
    role: 'Python Developer',
    project: 'Light ORM Project',
    meta: 'Python Internals • SQLite • ORM Design',
    bullets: [
      'Built a minimal ORM from scratch to understand how models, fields, descriptors, metaclasses, and queries work internally.',
      'Implemented model fields, table mapping, save/query logic, and SQLite integration.',
      'Strengthened understanding of Python OOP, descriptors, metaclasses, and database abstraction.',
    ],
    tags: ['Python', 'SQLite', 'OOP', 'Metaclasses', 'Descriptors', 'ORM'],
  },
];

const Tag = ({ children }) => (
  <span className="inline-flex max-w-full rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-100">
    {children}
  </span>
);

const PanelCard = ({ children, className = '' }) => (
  <div className={`resume-glass-card w-full max-w-full overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/45 hover:shadow-[0_24px_70px_rgba(37,99,235,0.18)] sm:rounded-[18px] sm:p-5 ${className}`}>
    {children}
  </div>
);

const EducationPanel = () => (
  <div className="relative w-full max-w-full space-y-5 pl-5 sm:pl-7">
    <div className="absolute left-[7px] top-3 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-blue-500/60 via-sky-400/25 to-transparent sm:left-[9px]" />
    {educationItems.map((item) => (
      <div key={item.title} className="relative w-full max-w-full">
        <div className="absolute -left-5 top-6 h-4 w-4 rounded-full border-[3px] border-[#FBFAFC] bg-gradient-to-br from-blue-600 to-sky-400 shadow-[0_0_26px_rgba(37,99,235,0.45)] dark:border-gray-800 sm:-left-7 sm:h-5 sm:w-5 sm:border-4" />
        <PanelCard>
          <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0 max-w-full">
              <h3 className="break-words text-lg font-bold leading-snug text-[#0F172A] dark:text-white sm:text-xl">{item.title}</h3>
              <p className="mt-1 break-words font-semibold text-blue-600 dark:text-sky-300">{item.institution}</p>
            </div>
            <span className="inline-flex max-w-full items-start gap-1.5 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold leading-relaxed text-[#475569] dark:text-blue-100">
              <MapPin size={13} className="mt-0.5 shrink-0" />
              <span className="min-w-0 break-words">{item.meta}</span>
            </span>
          </div>
          <ul className="space-y-2 text-sm leading-relaxed text-[#475569] dark:text-gray-300">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue-500" />
                <span className="min-w-0 break-words">{bullet}</span>
              </li>
            ))}
          </ul>
        </PanelCard>
      </div>
    ))}
  </div>
);

const TrainingsPanel = () => (
  <div className="grid w-full max-w-full gap-4 lg:grid-cols-3">
    {trainingItems.map((item) => (
      <PanelCard key={item.title} className="flex flex-col">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-sky-300">
          <Award size={22} />
        </div>
        <h3 className="break-words text-lg font-bold text-[#0F172A] dark:text-white">{item.title}</h3>
        <p className="mt-1 break-words text-sm font-semibold text-blue-600 dark:text-sky-300">{item.issuer}</p>
        <p className="mt-3 flex-1 break-words text-sm leading-relaxed text-[#475569] dark:text-gray-300">{item.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>
      </PanelCard>
    ))}
  </div>
);

const HardSkillsPanel = () => (
  <div className="grid w-full max-w-full gap-4 lg:grid-cols-2">
    {skillGroups.map(({ label, icon: Icon, skills }) => (
      <PanelCard key={label}>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-sky-300">
            <Icon size={20} />
          </div>
          <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">{label}</h3>
        </div>
        <div className="flex max-w-full flex-wrap gap-2">
          {skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}
        </div>
      </PanelCard>
    ))}
  </div>
);

const SoftSkillsPanel = () => (
  <div className="grid w-full max-w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {softSkills.map(({ title, icon: Icon }) => (
      <PanelCard key={title} className="min-h-32">
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-sky-300">
          <Icon size={21} />
        </div>
        <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">{title}</h3>
      </PanelCard>
    ))}
  </div>
);

const ExperiencePanel = () => (
  <div className="w-full max-w-full space-y-4">
    {experienceItems.map((item) => (
      <PanelCard key={`${item.role}-${item.project}`}>
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 max-w-full">
            <h3 className="break-words text-lg font-bold text-[#0F172A] dark:text-white sm:text-xl">{item.role}</h3>
            <p className="mt-1 break-words font-semibold text-blue-600 dark:text-sky-300">{item.project}</p>
            <p className="mt-2 break-words text-xs font-semibold uppercase tracking-[0.12em] text-[#64748B] dark:text-gray-400">{item.meta}</p>
          </div>
          <span className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-[#475569] dark:text-blue-100">
            <BriefcaseBusiness size={13} />
            Project-based
          </span>
        </div>
        <ul className="space-y-2 text-sm leading-relaxed text-[#475569] dark:text-gray-300">
          {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue-500" />
                <span className="min-w-0 break-words">{bullet}</span>
              </li>
          ))}
        </ul>
        <div className="mt-5 flex max-w-full flex-wrap gap-2">
          {item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>
      </PanelCard>
    ))}
  </div>
);

const panels = {
  education: <EducationPanel />,
  trainings: <TrainingsPanel />,
  hardSkills: <HardSkillsPanel />,
  softSkills: <SoftSkillsPanel />,
  experience: <ExperiencePanel />,
};

const Resume = () => {
  const [activeCategory, setActiveCategory] = useState('education');

  return (
    <section id="resume" className="resume-section relative w-full max-w-full overflow-hidden bg-[#FBFAFC] px-0 pt-10 pb-12 transition-colors duration-300 dark:bg-gray-900 sm:pt-12 sm:pb-16">
      <div className="resume-bg-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      <AbstractBackground variant="both" opacity={0.02} colorClass="text-sky-500 dark:text-sky-500" />

      <div className="relative z-10 mx-auto w-full max-w-[1160px] overflow-hidden px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20}>
          <div className="mb-6 max-w-full sm:mb-7">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-sky-300">
              MY RESUME
            </p>
            <h2 className="mt-4 max-w-full break-words text-3xl font-bold leading-tight text-[#0F172A] dark:text-white sm:text-4xl lg:text-5xl">
              Experience &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid w-full max-w-full min-w-0 gap-4 sm:gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          <ScrollReveal direction="left" distance={30} delay={0.05} className="min-w-0 max-w-full">
            <nav aria-label="Resume categories" className="w-full max-w-full lg:sticky lg:top-28">
              <div className="scrollbar-hide flex w-full max-w-full gap-2 overflow-x-auto whitespace-nowrap pb-3 sm:gap-3 lg:flex-col lg:overflow-visible lg:pb-0">
                {categories.map(({ key, label, icon: Icon }) => {
                  const isActive = activeCategory === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveCategory(key)}
                      className={`resume-tab group inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-2.5 text-xs font-semibold transition-all duration-300 sm:gap-3 sm:px-4 sm:py-3 sm:text-sm lg:w-full lg:rounded-2xl ${
                        isActive
                          ? 'resume-tab-active text-white'
                          : 'border-blue-400/15 bg-white/60 text-[#475569] hover:-translate-y-0.5 hover:border-blue-400/40 hover:text-blue-600 dark:bg-slate-900/40 dark:text-gray-300 dark:hover:text-sky-200'
                      }`}
                    >
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors sm:h-9 sm:w-9 ${
                        isActive ? 'bg-white/[0.18] text-white' : 'bg-blue-500/10 text-blue-600 dark:text-sky-300'
                      }`}>
                        <Icon size={16} className="sm:h-[18px] sm:w-[18px]" />
                      </span>
                      {label}
                    </button>
                  );
                })}
              </div>
            </nav>
          </ScrollReveal>

          <ScrollReveal direction="right" distance={30} delay={0.1} className="min-w-0 max-w-full">
            <div className="resume-content-panel w-full max-w-full overflow-hidden rounded-2xl p-3 sm:rounded-[28px] sm:p-6 lg:p-7">
              {panels[activeCategory]}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Resume;
