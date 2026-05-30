export type Project = {
  id: string;
  title: string;
  category: string;
  filters: string[];
  description: string;
  tech: string[];
  role: string;
  outcome: string;
  system: string[];
  sourceUrl: string;
  iconType: "backend" | "cloud" | "ai" | "go" | "mobile" | "fullstack" | "frontend" | "devops";
  featured?: boolean;
};

export const projectFilters = ["All", "Backend", "Cloud/DevOps", "AI/ML", "Full Stack", "Mobile", "Go"];

export const projects: Project[] = [
  {
    id: "restrox",
    title: "Restrox Restaurant Management System",
    category: "Backend & Cloud",
    filters: ["Backend", "Cloud/DevOps"],
    description:
      "Production-style restaurant management system with role-based workflows, QR ordering, inventory management, and real-time kitchen/order updates.",
    tech: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "Docker", "AWS ECS", "ECR", "ALB", "SSM", "CloudWatch", "Terraform", "GitHub Actions"],
    role: "Backend architecture, cloud deployment, infrastructure automation",
    outcome: "A production-shaped restaurant platform with authenticated roles, live operational updates, and deployable AWS infrastructure.",
    system: ["JWT auth and role permissions", "Real-time kitchen/order events", "Containerized service delivery", "ECS Fargate, ALB, ECR, SSM, CloudWatch", "Terraform and GitHub Actions pipeline"],
    sourceUrl: "https://github.com/umess-ss/restrox-resturant",
    iconType: "cloud",
    featured: true
  },
  {
    id: "daai",
    title: "DAAI Fellowship Platform",
    category: "Full Stack / LMS",
    filters: ["Full Stack", "Backend"],
    description:
      "Fellowship learning management platform with public website, admin dashboard, fellow dashboard, quiz modules, course/track flow, and role-based navigation.",
    tech: ["FastAPI", "React", "MongoDB", "Tailwind CSS", "RBAC", "LMS"],
    role: "Full-stack product engineering across public, admin, and fellow workflows",
    outcome: "A learning platform structured around role-based access, course progress, quizzes, and dashboard workflows.",
    system: ["FastAPI backend patterns", "Admin and fellow dashboard flows", "Role-based navigation", "Quiz and learning track modules", "MongoDB-backed application data"],
    sourceUrl: "#",
    iconType: "fullstack",
    featured: true
  },
  {
    id: "banking-api",
    title: "Banking API App",
    category: "Go Backend",
    filters: ["Go", "Backend"],
    description:
      "Banking backend application built with Go to practice clean project structure, middleware, response helpers, PostgreSQL repositories, migrations, safe DB transactions, register/login, protected routes, and account ownership.",
    tech: ["Go", "PostgreSQL", "REST API", "Middleware", "JWT", "Transactions"],
    role: "Backend API design and data ownership modeling",
    outcome: "A Go API exercise focused on correctness: protected routes, safe transactions, repository boundaries, and account ownership.",
    system: ["Register/login and JWT middleware", "PostgreSQL repositories", "Database migrations", "Safe transaction handling", "Account ownership checks"],
    sourceUrl: "#",
    iconType: "go",
    featured: true
  },
  {
    id: "light-orm",
    title: "Light ORM",
    category: "Python Internals",
    filters: ["Backend"],
    description:
      "Minimal ORM built from scratch to understand Python descriptors, metaclasses, model fields, table mapping, SQLite integration, and query logic.",
    tech: ["Python", "SQLite", "OOP", "Descriptors", "Metaclasses", "ORM"],
    role: "Backend internals research and Python architecture",
    outcome: "A compact ORM that turns Python model declarations into table metadata, SQL operations, and persisted SQLite records.",
    system: ["Descriptor-based fields", "Metaclass model registration", "SQL query generation", "Object-to-row mapping", "SQLite persistence"],
    sourceUrl: "https://github.com/umess-ss/light-orm",
    iconType: "backend"
  },
  {
    id: "emotion-detection",
    title: "Emotion Detection",
    category: "AI / ML",
    filters: ["AI/ML"],
    description: "Python-based emotion detection project exploring machine learning and computer vision workflows.",
    tech: ["Python", "AI/ML", "Computer Vision"],
    role: "ML workflow experimentation",
    outcome: "A focused computer vision project exploring emotion classification and practical ML pipeline structure.",
    system: ["Image processing workflow", "Model experimentation", "Python inference path"],
    sourceUrl: "https://github.com/umess-ss/emotion-detection",
    iconType: "ai"
  },
  {
    id: "blind-navigation",
    title: "Blind Navigation Assistant App",
    category: "AI / Mobile",
    filters: ["AI/ML", "Mobile"],
    description:
      "Assistive navigation app for visually impaired users, focused on indoor navigation and AI-assisted object/depth awareness.",
    tech: ["Kotlin", "Android", "YOLO", "MIDAS", "Computer Vision"],
    role: "AI-assisted navigation system design",
    outcome: "An assistive application concept combining object detection, depth estimation, and voice-guided user support.",
    system: ["YOLO object detection", "MIDAS depth estimation", "Android application flow", "Voice-guided navigation cues"],
    sourceUrl: "https://github.com/umess-ss/Blind-Navigation-Assistant-App",
    iconType: "mobile"
  },
  {
    id: "trading-dashboard",
    title: "Trading Dashboard",
    category: "Backend / DevOps",
    filters: ["Backend", "Cloud/DevOps"],
    description: "Trading dashboard project focused on backend foundation, Docker-based workflow, and CI/CD pipeline practice.",
    tech: ["Python", "Docker", "GitHub Actions", "Backend"],
    role: "Backend and DevOps practice",
    outcome: "A dashboard-oriented backend project used to practice repeatable container workflows and automated checks.",
    system: ["Docker development flow", "GitHub Actions automation", "Backend service organization"],
    sourceUrl: "https://github.com/umess-ss/trading-dashboard",
    iconType: "devops"
  },
  {
    id: "hamroawaj",
    title: "HamroAwaj - Smart City Platform",
    category: "Full Stack / Hackathon",
    filters: ["Full Stack", "Backend"],
    description: "Civic complaint platform where citizens report city-related problems and authorities can track and respond to issues.",
    tech: ["TypeScript", "React", "Django", "Tailwind CSS"],
    role: "Hackathon full-stack contributor",
    outcome: "A civic reporting workflow connecting citizens and authorities around issue submission, tracking, and response.",
    system: ["Django API foundation", "React issue workflows", "Authority-facing tracking", "Hackathon delivery constraints"],
    sourceUrl: "https://github.com/umess-ss/protobytes-2.0-team--BEI-BEAST-",
    iconType: "fullstack"
  },
  {
    id: "bigdata-hadoop",
    title: "Big Data Docker Hadoop",
    category: "Data Engineering / DevOps",
    filters: ["Cloud/DevOps"],
    description: "Big data environment setup using Docker and Hadoop ecosystem concepts.",
    tech: ["Docker", "Hadoop", "Makefile", "Big Data"],
    role: "Data engineering environment setup",
    outcome: "A Docker-based Hadoop environment for learning distributed data tooling and repeatable local setup.",
    system: ["Docker orchestration", "Hadoop ecosystem setup", "Makefile automation"],
    sourceUrl: "https://github.com/umess-ss/bigdata-docker-hadoop",
    iconType: "devops"
  },
  {
    id: "expense-tracker",
    title: "Django Expense Tracker",
    category: "Backend",
    filters: ["Backend"],
    description: "Backend-focused expense management system for tracking user expenses.",
    tech: ["Django", "Backend", "REST API"],
    role: "Django backend implementation",
    outcome: "A practical expense management backend focused on core CRUD flows and server-side structure.",
    system: ["Django application structure", "Expense CRUD workflows", "REST API foundation"],
    sourceUrl: "https://github.com/umess-ss/django-expense-tracker",
    iconType: "backend"
  },
  {
    id: "saas-content-planner",
    title: "SaaS Content Planner",
    category: "Full Stack",
    filters: ["Full Stack"],
    description: "SaaS-style content planning project exploring dashboard and productivity workflows.",
    tech: ["TypeScript", "SaaS", "Dashboard"],
    role: "Product workflow exploration",
    outcome: "A dashboard-style planning app used to explore SaaS workflow organization and interface structure.",
    system: ["Dashboard layout", "Planning workflow model", "TypeScript frontend structure"],
    sourceUrl: "https://github.com/umess-ss/saas-content-planner",
    iconType: "fullstack"
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    category: "Frontend / Personal Brand",
    filters: ["Full Stack"],
    description: "Personal developer portfolio website showcasing projects, resume, skills, and cloud/backend engineering journey.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Portfolio"],
    role: "Personal brand and frontend delivery",
    outcome: "A portfolio surface for presenting backend/cloud work, project context, and professional contact paths.",
    system: ["React interface", "Responsive layout", "Project and resume content model"],
    sourceUrl: "https://github.com/umess-ss/my-self",
    iconType: "frontend"
  }
];
