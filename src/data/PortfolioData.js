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