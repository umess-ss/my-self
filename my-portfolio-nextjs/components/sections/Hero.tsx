import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const systemNotes = [
  "API design",
  "Authentication & RBAC",
  "PostgreSQL / MongoDB",
  "Dockerized delivery",
  "AWS deployments",
  "CI/CD pipelines"
];

const focusItems = [
  { label: "Backend", value: "Python, FastAPI, Go, Node.js" },
  { label: "Cloud", value: "Docker, AWS ECS, Terraform" },
  { label: "Systems", value: "ORM internals, auth, deployment flow" }
];

export function Hero() {
  return (
    <section id="home" className="hero-section relative flex min-h-screen items-center overflow-hidden pb-20 pt-32 transition-colors duration-300 md:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="portfolio-hero-bg absolute inset-0" />
        <div className="portfolio-hero-grid absolute inset-0" />
      </div>

      <div className="hero-container mx-auto px-4">
        <div className="hero-grid grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_1px_420px] lg:gap-12">
          <div className="hero-left-content max-w-[39.5rem] text-left">
<p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.28em] text-[var(--portfolio-text)]">
  Hello, I&apos;m
</p>

<h1 className="mb-6 max-w-[30rem] text-[clamp(2.15rem,4vw,3.35rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-[var(--portfolio-text)] md:whitespace-nowrap">
  Umesh Rajbanshi
</h1>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--portfolio-warm)]">
              Backend Developer | Cloud Engineer
            </p>
            <div className="mb-9 max-w-[37rem]">
              <p className="text-lg leading-[1.75] text-[var(--portfolio-muted)] md:text-xl">
                I build backend systems with authentication, role-based access, databases, Docker, and AWS deployment. My work includes restaurant POS systems, LMS platforms, banking APIs, and serverless cloud applications.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild className="site-primary-action px-8 py-3.5">
                <Link href="/projects">
                  Study the Work
                  <ArrowUpRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="secondary" className="site-secondary-action px-8 py-3.5">
                <a href="/myCV.pdf" download="umesh_cv.pdf">Download CV</a>
              </Button>
              <Button asChild variant="ghost" className="px-4 py-2 font-medium text-[var(--portfolio-muted)] transition-colors hover:text-[var(--portfolio-warm)]">
                <a href="https://github.com/umess-ss" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                  View GitHub
                </a>
              </Button>
            </div>

            <div className="mt-12 border-t border-[var(--portfolio-border)] pt-6">
  <div className="grid max-w-[42rem] gap-x-12 gap-y-4 sm:grid-cols-2">
    {systemNotes.map((note) => (
      <div
        key={note}
        className="flex items-center gap-3 text-sm font-medium text-[var(--portfolio-muted)]"
      >
        <span className="h-px w-5 shrink-0 bg-[var(--portfolio-muted)] opacity-50" />
        <span>{note}</span>
      </div>
    ))}
  </div>
</div>
            
          </div>

          <div className="middle-divider hidden lg:block" aria-hidden="true" />

          <div className="overflow-visible">
            <div className="flex justify-center overflow-visible lg:justify-start">
              <div className="hero-portrait-shell group relative grid place-items-center overflow-visible">
                <div className="hero-portrait-frame absolute -inset-2 rounded-[2rem]" />
                <Image
                  src="/images/home.jpeg"
                  alt="Umesh Rajbanshi - Backend and Cloud Engineer"
                  width={384}
                  height={384}
                  priority
                  className="hero-portrait-image relative z-10 h-[21rem] w-full max-w-[21rem] rounded-[1.55rem] object-cover object-[50%_38%] transition-all duration-700 ease-out md:h-[27rem] md:max-w-[23rem]"
                />
                <div className="hero-focus-card relative z-10 mt-5">
                  <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[var(--portfolio-warm)]">Current focus</p>
                  <dl>
                    {focusItems.map((item) => (
                      <div key={item.label}>
                        <dt>{item.label}</dt>
                        <dd>{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
