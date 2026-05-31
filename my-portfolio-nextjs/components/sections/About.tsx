const focusAreas = [
  {
    title: "Backend Systems",
    description:
      "I build APIs, authentication flows, role-based access control, database-backed features, and structured backend modules using Django, FastAPI, Node.js, and Go."
  },
  {
    title: "Cloud & Deployment",
    description:
      "I work with Docker, AWS, GitHub Actions, Terraform, logs, secrets, and deployment workflows to move projects beyond local development."
  },
  {
    title: "AI/ML Engineering",
    description:
      "I have built AI/ML-based projects involving computer vision, deep learning, YOLO object detection, MiDaS depth estimation, and voice-guided assistive navigation."
  }
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
                I&apos;m an Electronics, Communication and Information Engineering graduate from Advanced College of Engineering and Management, focused on backend engineering, cloud systems, and AI-driven applications.
              </p>
              <p>
                I build backend systems using Django, FastAPI, Node.js, Go, PostgreSQL, MongoDB, Docker, AWS, and GitHub Actions. My project work spans REST APIs, authentication, role-based access control, database design, cloud deployment, serverless workflows, and AI/ML systems involving computer vision, deep learning, YOLO, MiDaS, and voice-guided navigation.
              </p>
              <p>
                I am currently working as a backend trainee, contributing to API design, authorization flows, database structure, documentation, and backend project planning. My goal is to build systems that are clear, reliable, and practical enough for real-world use.
              </p>
            </div>

            <div className="mt-12 border-y border-[var(--portfolio-border)]">
              {focusAreas.map((area, index) => (
                <div key={area.title} className="grid gap-4 border-b border-[var(--portfolio-border)] py-6 last:border-b-0 sm:grid-cols-[4rem_1fr]">
                  <span className="font-mono text-sm text-[var(--portfolio-warm)]">0{index + 1}</span>
                  <div className="max-w-[42rem]">
                    <h3 className="text-lg font-semibold text-[var(--portfolio-text)]">{area.title}</h3>
                    <p className="mt-2 text-base leading-[1.75] text-[var(--portfolio-muted)]">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
