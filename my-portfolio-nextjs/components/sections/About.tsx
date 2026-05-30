const principles = [
  "Design APIs around explicit contracts, permission boundaries, and predictable failure modes.",
  "Keep infrastructure understandable: Docker, cloud services, logs, secrets, and deployment steps should be traceable.",
  "Prefer boring reliability over clever abstractions unless the abstraction pays for itself."
];

export function About() {
  return (
    <section id="about" className="about-section relative overflow-hidden py-24 transition-colors duration-300 md:py-32">
      <div className="about-bg-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--portfolio-warm)]">
              ENGINEERING PROFILE
            </p>

            <h2 className="mt-5 max-w-[31rem] text-4xl font-semibold leading-tight text-[var(--portfolio-text)] md:text-5xl">
              Backend work with production habits.
            </h2>
          </div>

          <div>
            <div className="max-w-[43rem] space-y-6 text-lg leading-[1.8] text-[var(--portfolio-muted)]">
              <p>
                I&apos;m a backend and cloud-focused engineer based in Nepal. My work sits close to the parts users rarely see but always feel: authentication, authorization, database boundaries, deployment pipelines, observability, and system behavior under real use.
              </p>
              <p>
                I&apos;ve built with FastAPI, Django, Node.js, Go, PostgreSQL, MongoDB, Docker, AWS, Terraform, and GitHub Actions. I like systems that can be explained clearly and operated confidently.
              </p>
            </div>

            <div className="mt-12 border-y border-[var(--portfolio-border)]">
              {principles.map((principle, index) => (
                <div key={principle} className="grid gap-4 border-b border-[var(--portfolio-border)] py-6 last:border-b-0 sm:grid-cols-[4rem_1fr]">
                  <span className="font-mono text-sm text-[var(--portfolio-warm)]">0{index + 1}</span>
                  <p className="max-w-[42rem] text-base leading-[1.75] text-[var(--portfolio-muted)]">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
