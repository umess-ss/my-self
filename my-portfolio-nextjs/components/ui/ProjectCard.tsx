import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const sourceDisabled = project.sourceUrl === "#";

  return (
    <article className={`project-card group grid gap-8 rounded-[18px] p-5 sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:p-8 ${featured ? "project-card-featured" : ""}`}>
      <div className="flex flex-col justify-between gap-8">
        <div>
          <span className="project-category-pill inline-flex rounded-full px-3 py-1 text-xs font-semibold">
            {project.category}
          </span>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-[var(--portfolio-warm)]">
            {project.role}
          </p>
        </div>
        <div>
          <h3 className={`${featured ? "text-3xl" : "text-2xl"} font-semibold leading-tight text-[var(--portfolio-text)]`}>
            {project.title}
          </h3>
          <p className="mt-5 text-base leading-[1.75] text-[var(--portfolio-muted)]">
            {project.description}
          </p>
        </div>
      </div>

      <div className="project-study-panel">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--portfolio-warm)]">Engineering outcome</p>
        <p className="mt-3 text-base leading-[1.75] text-[var(--portfolio-text)]">{project.outcome}</p>

        <div className="mt-7 grid gap-3">
          {project.system.map((item) => (
            <div key={item} className="project-system-row">
              <span />
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.tech.slice(0, featured ? 7 : 5).map((tech) => (
            <span key={tech} className="project-tech-chip rounded-full px-2.5 py-1 text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {sourceDisabled ? (
            <span aria-disabled="true" className="project-action-disabled inline-flex cursor-not-allowed items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
              <Github size={16} />
              Source private
            </span>
          ) : (
            <Button asChild size="sm" className="project-primary-action">
              <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                Source
              </a>
            </Button>
          )}
          {!sourceDisabled ? (
            <Button asChild variant="secondary" size="sm" className="project-secondary-action">
              <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                Study Repo
                <ArrowUpRight size={16} />
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
