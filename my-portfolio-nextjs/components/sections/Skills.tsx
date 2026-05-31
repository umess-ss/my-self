import { LogoLoop } from "@/components/ui/LogoLoop";

const skillGroups = [
  { label: "Backend", detail: "Python, FastAPI, Django, Node.js, Express, Go, REST APIs, middleware, validation" },
  { label: "Data", detail: "PostgreSQL, MongoDB, SQLite, schema design, migrations, transactions, repositories" },
  { label: "Auth", detail: "JWT, RBAC, protected routes, account ownership, role-based dashboards, secure API access" },
  { label: "Cloud", detail: "AWS EC2, S3, Lambda, API Gateway, DynamoDB, RDS, IAM, VPC, ECS, ECR, ALB, Route 53, CloudWatch, SSM, serverless workflows, container deployment" },
  { label: "Delivery", detail: "Docker, Terraform, GitHub Actions, CI/CD, environment configuration, deployment automation" },
  { label: "AI/ML", detail: "NumPy, Pandas, EDA, scikit-learn, model evaluation, TensorFlow, PyTorch, CNNs, RNNs, transformer basics, YOLO, MiDaS, computer vision" }
];

const techLogos = [
  { title: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { title: "FastAPI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { title: "Django", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { title: "Go", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
  { title: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { title: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { title: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { title: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { title: "Amazon Web Services", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { title: "Terraform", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { title: "GitHub Actions", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" }
];

export function Skills() {
  return (
    <section id="skills" className="resume-section relative overflow-hidden py-24 transition-colors duration-300 md:py-32">
      <div className="resume-bg-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--portfolio-warm)]">CAPABILITY</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--portfolio-text)] md:text-5xl">
            The practical stack behind the work.
          </h2>
          <p className="mt-5 text-base leading-[1.8] text-[var(--portfolio-muted)] md:text-lg">
            A focused set of tools and engineering concerns I use to build backend systems that are clear, deployable, and reliable.
          </p>
        </div>
        <LogoLoop logos={techLogos} speed={120} logoHeight={62} gap={52} ariaLabel="Backend and cloud technology logos" />
        <div className="border-y border-[var(--portfolio-border)]">
          {skillGroups.map(({ label, detail }) => (
            <article key={label} className="grid gap-4 border-b border-[var(--portfolio-border)] py-6 last:border-b-0 md:grid-cols-[13rem_1fr]">
              <h3 className="text-xl font-semibold text-[var(--portfolio-text)]">{label}</h3>
              <p className="max-w-[44rem] text-base leading-[1.75] text-[var(--portfolio-muted)]">{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
