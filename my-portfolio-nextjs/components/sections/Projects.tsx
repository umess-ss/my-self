"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { projectFilters, projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/button";

type ProjectsProps = {
  limit?: number;
};

export function Projects({ limit }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    const filtered = activeFilter === "All" ? projects : projects.filter((project) => project.filters.includes(activeFilter));
    return limit ? filtered.slice(0, limit) : filtered;
  }, [activeFilter, limit]);

  const featuredProjects = filteredProjects.filter((project) => project.featured);
  const regularProjects = filteredProjects.filter((project) => !project.featured);

  return (
    <section id="projects" className="projects-section relative overflow-hidden py-24 transition-colors duration-300 md:py-32">
      <div className="projects-bg-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--portfolio-warm)]">
            SELECTED SYSTEMS
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--portfolio-text)] md:text-6xl">
            Project work with backend depth.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-[1.8] text-[var(--portfolio-muted)] md:text-lg">
            Not just screenshots. These are systems shaped around APIs, auth, role boundaries, databases, cloud delivery, and operational thinking.
          </p>
        </div>

        {!limit ? (
          <div className="mt-10 flex gap-2.5 overflow-x-auto border-y border-[var(--portfolio-border)] py-4 sm:flex-wrap sm:overflow-visible">
            {projectFilters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`project-filter-pill shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "project-filter-pill-active"
                      : "border-[var(--portfolio-border)] bg-transparent text-[var(--portfolio-muted)] hover:border-[rgba(255,219,187,0.28)] hover:text-[var(--portfolio-text)]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        ) : null}

        {featuredProjects.length > 0 ? (
          <div className="mt-12 grid gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        ) : null}

        {regularProjects.length > 0 ? (
          <div className="mt-6 grid gap-6">
            {regularProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : null}

        <div className="mt-12 flex justify-center">
          <Button asChild className="project-more-action px-6 py-3">
            {limit ? (
              <Link href="/projects">
                <Github size={18} />
                View All Projects
                <ArrowUpRight size={18} />
              </Link>
            ) : (
              <a href="https://github.com/umess-ss" target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                View More on GitHub
                <ArrowUpRight size={18} />
              </a>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
