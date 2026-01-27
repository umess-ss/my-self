export const personalInfo = {
  name: "Umesh Rajbanshi",
  title: "Electronics and Communication Engineer | AI & ML Enthusiast",
  email: "ums.rbc07@gmail.com",
  phone: "9816386181",
  website: "umeshrajbanshi.com.np",
  location: "Kathmandu, Nepal",
};

export const aboutStats = [
  { percentage: 90, label: "Learner", color: "purple" },
  { percentage: 80, label: "Nature Lover", color: "green" },
  { percentage: 70, label: "Social Activist", color: "orange" },
];

export const experiences = [
  {
    company: "Prixa Academy & ACEM",
    position: "AWS Cloud & Backend Operations (Training)",
    location: "Kathmandu, Nepal",
    duration: "2025",
    responsibilities: [
      "Performed hands-on configuration of core AWS services including EC2, S3, IAM, and VPC for secure infrastructure setup.",
      "Managed global cloud resources and monitored system health within the AWS Management Console.",
      "Developed scalable web applications using Django MVT architecture, focusing on REST API development and secure database management."
    ],
  },
  {
    company: "Research & Open Source (GitHub)",
    position: "Backend & MLOps Developer",
    location: "Kathmandu, Nepal",
    duration: "2024 - Present",
    responsibilities: [
      "Integrating Generative AI tools like Langchain, Crawl4ai, and Gemini to automate business intelligence and data retrieval.",
      "Containerizing deep learning models using Docker and establishing CI/CD pipelines via GitHub Actions for automated deployment.",
      "Architecting real-time systems such as the Blind Vision App, integrating YOLO and MIDAS for high-efficiency object detection and depth estimation."
    ],
  },
  {
    company: "Advanced College of Engineering & Management",
    position: "Electronics & Communication Engineering Student",
    location: "Kathmandu, Nepal",
    duration: "Jan 2022 - Present",
    responsibilities: [
      "Designing intelligent electronic systems and applying signal processing techniques to engineering problems.",
      "Conducting technical feasibility research for deep learning integration in assistive technologies.",
      "Maintaining a disciplined approach to version control and debugging across various backend and hardware-interfacing projects."
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Blind Vision App",
    type: "AI & Computer Vision",
    description: "Real-time object detection and depth estimation using YOLO and MIDAS to assist visually impaired individuals with voice-guided navigation.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    technologies: ["Python", "PyTorch", "YOLO", "MIDAS", "Deep Learning"],
    githubUrl: "https://github.com/umess-ss/Blind-Navigation-App",
  },
  {
    id: 2,
    title: "Real-time Trading Dashboard",
    type: "Backend & DevOps",
    description: "A high-performance trading dashboard focused on data accuracy, featuring containerization and automated CI/CD pipelines.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800", // New Working Link
    technologies: ["Docker", "GitHub Actions", "Lightweight Charts", "CI/CD", "Python"],
    githubUrl: "https://github.com/umess-ss/trading-dashboard",
  },
  {
    id: 3,
    title: "AI Integration Engine",
    type: "LLM & Automation",
    description: "Built a sophisticated AI engine integrating Langchain, Crawl4ai, and Gemini to automate business intelligence and enhance user engagement.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    technologies: ["Langchain", "Gemini", "Crawl4ai", "Python", "REST API"],
    githubUrl: "https://github.com/Prativa5791/e-commerce",
  },
  {
    id: 4,
    title: "E-commerce Backend Architecture",
    type: "Backend",
    description: "Robust Django-based backend for e-commerce platforms, focusing on clean code, MVT architecture, and secure database management.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
    technologies: ["Django", "REST API", "PostgreSQL", "MVT Architecture"],
    githubUrl: "https://github.com/Prativa5791/e-commerce",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Orchestrating LLMs: Building RAG Pipelines with Langchain and Gemini",
    date: "12 Jan 2026",
    tag: "Generative AI",
    excerpt: "Exploring the integration of Gemini and Langchain to create context-aware AI applications with Crawl4ai for real-time data retrieval.",
    // A high-tech abstract visualization of neural networks and AI nodes
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "MLOps Essentials: Containerizing Deep Learning Models with Docker",
    date: "05 Jan 2026",
    tag: "MLOps & DevOps",
    excerpt: "A guide on using Docker and GitHub Actions to automate the deployment of computer vision models like YOLO and MIDAS.",
    // A dark, modern representation of server racks/data centers representing DevOps
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Scaling Backend Infrastructure on AWS: From EC2 to VPC Security",
    date: "28 Dec 2025",
    tag: "Cloud Operations",
    excerpt: "Best practices for setting up secure, scalable cloud environments for production-grade backend architectures.",
    // A digital "global connection" or satellite view representing AWS cloud reach
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop",
  },
];