"use client";

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
  Wrench
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedList, AnimatedListItem, BorderGlow, ScrollReveal } from "@/components/ui/MotionEffects";

const categories = [
  { key: "education", label: "Education", icon: GraduationCap },
  { key: "trainings", label: "Trainings", icon: Award },
  { key: "hardSkills", label: "Hard Skills", icon: Code2 },
  { key: "softSkills", label: "Soft Skills", icon: Brain },
  { key: "experience", label: "Experience", icon: Rocket }
];

const educationItems = [
  {
    title: "Bachelor of Electronics, Communication and Information Engineering",
    institution: "Advanced College of Engineering and Management",
    meta: "Kalanki, Kathmandu, Nepal / Tribhuvan University / Completed 2025",
    bullets: [
      "Completed engineering degree focused on electronics, communication systems, computer networks, embedded systems, and information engineering.",
      "Built strong engineering foundations in programming, signal processing, system design, and technical problem solving.",
      "Applied software engineering practices through backend, cloud, and full-stack projects."
    ]
  },
  {
    title: "+2 Science",
    institution: "Adarsha Secondary School",
    meta: "Biratnagar, Nepal / Completed 2020",
    bullets: ["Completed higher secondary education in the Science stream.", "Built foundations in Physics, Chemistry, Mathematics, and Computer Science."]
  }
];

const trainingItems = [
  {
    title: "AWS Academy Graduate - Cloud Architecting",
    issuer: "AWS Academy",
    description: "Completed cloud architecting training with hands-on practice across AWS compute, networking, storage, monitoring, and deployment patterns.",
    tags: ["AWS", "ECS", "ECR", "ALB", "CloudWatch", "SSM"]
  },
  {
    title: "CloudMandap Cloud Fellowship",
    issuer: "CloudMandap",
    description: "Built practical cloud engineering experience through deployment workflows, infrastructure automation, containers, and CI/CD delivery.",
    tags: ["AWS", "Docker", "Terraform", "CI/CD", "GitHub Actions"]
  },
  {
    title: "Backend, DevOps, and AI/MLOps Learning",
    issuer: "Independent Learning",
    description: "Expanded production backend skills through API design, automation, DevOps workflows, and AI/MLOps-oriented engineering practice.",
    tags: ["Django", "FastAPI", "Python", "MLOps", "Docker", "AI Tools"]
  }
];

const skillGroups = [
  { label: "Languages", icon: Code2, skills: ["Python", "JavaScript", "Go", "SQL", "C/C++"] },
  { label: "Backend", icon: Wrench, skills: ["FastAPI", "Django", "Node.js", "Express.js", "REST APIs", "JWT Auth", "RBAC"] },
  { label: "Cloud & DevOps", icon: Cloud, skills: ["AWS", "Docker", "Terraform", "GitHub Actions", "ECS", "ECR", "ALB", "SSM Parameter Store", "CloudWatch"] },
  { label: "Databases", icon: Database, skills: ["PostgreSQL", "MongoDB", "SQLite"] },
  { label: "Architecture", icon: ShieldCheck, skills: ["Multi-tenant APIs", "Microservices Basics", "CI/CD Pipelines", "System Design", "API Design"] }
];

const softSkills = [
  { title: "Problem Solving", icon: Sparkles },
  { title: "Debugging", icon: Wrench },
  { title: "Documentation", icon: CheckCircle2 },
  { title: "Collaboration", icon: BriefcaseBusiness },
  { title: "System Thinking", icon: Layers3 },
  { title: "Continuous Learning", icon: Brain }
];

const experienceItems = [
  {
    role: "Backend & Cloud Engineer",
    project: "Restrox Restaurant Management System",
    meta: "MERN Stack / AWS / Docker / Terraform / CI/CD",
    bullets: [
      "Built a multi-role restaurant management system with Admin, Manager, Waiter, and Chef workflows.",
      "Implemented JWT authentication, RBAC, inventory management, QR ordering, and real-time kitchen/order updates.",
      "Deployed backend infrastructure using AWS ECS Fargate, ECR, ALB, ACM, SSM Parameter Store, CloudWatch, and GitHub Actions."
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "Docker", "AWS", "Terraform"]
  },
  {
    role: "Full Stack Developer",
    project: "DAAI Fellowship Platform",
    meta: "Learning Management System / Public Website / Admin Dashboard / Fellow Dashboard",
    bullets: [
      "Built a fellowship learning management platform with public pages, admin dashboard, and fellow dashboard.",
      "Worked on course/track flow, quiz modules, learning management features, and role-based navigation.",
      "Improved dashboard structure, frontend routing, and overall user experience for fellows and admins."
    ],
    tags: ["FastAPI", "React", "MongoDB", "Tailwind CSS", "RBAC", "LMS"]
  }
];

function PanelCard({ children }: { children: React.ReactNode }) {
  return <BorderGlow className="resume-glass-card w-full max-w-full overflow-hidden rounded-2xl p-4 transition-colors duration-300 sm:rounded-[18px] sm:p-5">{children}</BorderGlow>;
}

function EducationPanel() {
  return (
    <AnimatedList className="relative w-full max-w-full space-y-5 pl-5 sm:pl-7">
      <div className="absolute left-[7px] top-3 h-[calc(100%-1.5rem)] w-px bg-[rgba(255,219,187,0.18)] sm:left-[9px]" />
      {educationItems.map((item) => (
        <AnimatedListItem key={item.title} className="relative w-full max-w-full">
          <div className="absolute -left-5 top-6 h-4 w-4 rounded-full border-[3px] border-[var(--portfolio-bg)] bg-[var(--portfolio-warm)] sm:-left-7 sm:h-5 sm:w-5 sm:border-4" />
          <PanelCard>
            <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0 max-w-full">
                <h3 className="break-words text-lg font-bold leading-snug text-[var(--portfolio-text)] sm:text-xl">{item.title}</h3>
                <p className="mt-1 break-words font-semibold text-[var(--portfolio-warm)]">{item.institution}</p>
              </div>
              <span className="inline-flex max-w-full items-start gap-1.5 rounded-full border border-[var(--portfolio-border)] bg-[rgba(255,219,187,0.045)] px-3 py-1 text-xs font-semibold leading-relaxed text-[var(--portfolio-muted)]">
                <MapPin size={13} className="mt-0.5 shrink-0" />
                <span className="min-w-0 break-words">{item.meta}</span>
              </span>
            </div>
            <ul className="space-y-2 text-sm leading-relaxed text-[var(--portfolio-muted)]">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--portfolio-warm)]" />
                  <span className="min-w-0 break-words">{bullet}</span>
                </li>
              ))}
            </ul>
          </PanelCard>
        </AnimatedListItem>
      ))}
    </AnimatedList>
  );
}

function TrainingsPanel() {
  return (
    <AnimatedList className="grid w-full max-w-full gap-4 lg:grid-cols-3">
      {trainingItems.map((item) => (
        <AnimatedListItem key={item.title}>
        <PanelCard>
          <h3 className="text-lg font-bold text-[var(--portfolio-text)]">{item.title}</h3>
          <p className="mt-1 font-semibold text-[var(--portfolio-warm)]">{item.issuer}</p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--portfolio-muted)]">{item.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">{item.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
        </PanelCard>
        </AnimatedListItem>
      ))}
    </AnimatedList>
  );
}

function SkillsPanel() {
  return (
    <AnimatedList className="grid gap-4 md:grid-cols-2">
      {skillGroups.map(({ label, icon: Icon, skills }) => (
        <AnimatedListItem key={label}>
        <PanelCard>
          <div className="mb-4 flex items-center gap-3">
            <span className="about-stat-icon"><Icon size={18} /></span>
            <h3 className="text-lg font-bold text-[var(--portfolio-text)]">{label}</h3>
          </div>
          <div className="flex flex-wrap gap-2">{skills.map((skill) => <Badge key={skill}>{skill}</Badge>)}</div>
        </PanelCard>
        </AnimatedListItem>
      ))}
    </AnimatedList>
  );
}

function SoftSkillsPanel() {
  return (
    <AnimatedList className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {softSkills.map(({ title, icon: Icon }) => (
        <AnimatedListItem key={title}>
        <PanelCard>
          <div className="flex items-center gap-3">
            <span className="about-stat-icon"><Icon size={18} /></span>
            <h3 className="m-0 text-base font-bold text-[var(--portfolio-text)]">{title}</h3>
          </div>
        </PanelCard>
        </AnimatedListItem>
      ))}
    </AnimatedList>
  );
}

function ExperiencePanel() {
  return (
    <AnimatedList className="grid gap-4">
      {experienceItems.map((item) => (
        <AnimatedListItem key={item.project}>
        <PanelCard>
          <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-[var(--portfolio-text)]">{item.role}</h3>
              <p className="mt-1 font-semibold text-[var(--portfolio-warm)]">{item.project}</p>
            </div>
            <span className="rounded-full border border-[var(--portfolio-border)] bg-[rgba(255,219,187,0.045)] px-3 py-1 text-xs font-semibold text-[var(--portfolio-muted)]">{item.meta}</span>
          </div>
          <ul className="space-y-2 text-sm leading-relaxed text-[var(--portfolio-muted)]">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--portfolio-warm)]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">{item.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
        </PanelCard>
        </AnimatedListItem>
      ))}
    </AnimatedList>
  );
}

export function Experience({ compact = false }: { compact?: boolean }) {
  return (
    <section id="resume" className="resume-section relative overflow-hidden py-24 transition-colors duration-300 md:py-32">
      <div className="resume-bg-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4">
        <ScrollReveal className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--portfolio-warm)]">RESUME</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--portfolio-text)] md:text-5xl">
            Training, education, and applied engineering.
          </h2>
          <p className="mt-5 text-base leading-[1.8] text-[var(--portfolio-muted)] md:text-lg">
            Education, cloud training, backend projects, and the technical stack I use to build production-oriented systems.
          </p>
        </ScrollReveal>

        <Tabs defaultValue={compact ? "experience" : "education"} className="resume-content-panel grid gap-5 p-4 md:grid-cols-[260px_1fr] md:p-5">
          <TabsList className="grid gap-3 md:content-start">
            {categories.map(({ key, label, icon: Icon }) => (
              <TabsTrigger key={key} value={key} className="resume-tab flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold">
                <Icon size={18} />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="min-w-0">
            <TabsContent value="education"><EducationPanel /></TabsContent>
            <TabsContent value="trainings"><TrainingsPanel /></TabsContent>
            <TabsContent value="hardSkills"><SkillsPanel /></TabsContent>
            <TabsContent value="softSkills"><SoftSkillsPanel /></TabsContent>
            <TabsContent value="experience"><ExperiencePanel /></TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
