export interface ProjectItem {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Fullstack" | "Frontend" | "Backend" | "Mobile";
  technologies: string[];
  metrics: string;
  githubUrl: string;
  demoUrl: string;
  imageUrl: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string;
  tags: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  details: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  url: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface FeaturedSkill {
  name: string;
  level: number;
  color: string;
  strokeColor: string;
}

export const portfolioData = {
  personal: {
    name: "Cheam Norakpanha",
    heroMarqueeNames: [
      "CHEAM NORAKPANHA",
      "CHEAM NORAKPANHA",
      "CHEAM NORAKPANHA",
      "CHEAM NORAKPANHA",
    ],
    rolePrimary: "FULL-STACK",
    roleSecondary: "SOFTWARE",
    roleHighlight: "ENGINEER",
    fullRole: "Full-Stack Software Engineer",
    subRole: "SYSTEMS & CLOUD ARCHITECT",
    statusPill: "AVAILABLE FOR ROLES & ARCHITECTURE",
    bio: "Turning ideas into high-concurrency scalable solutions, cloud architectures, and crafted digital experiences.",
    location: "Phnom Penh, Cambodia",
    email: "cheam.panha168@gmail.com",
    resumeUrl: "/resume.pdf",
    avatarImage: "/norakpanha_no_bg.png",
    socials: {
      github: "https://github.com/cheamnorakpanha",
      linkedin: "https://linkedin.com/in/cheamnorakpanha",
      email: "mailto:cheam.panha168@gmail.com",
    },
  },

  navigation: [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ],

  about: {
    badge: "BACKGROUND & CAPABILITIES",
    heading: "WHO I AM &",
    headingHighlight: "HOW I BUILD",
    description:
      "Bridging technical engineering with clear communication to architect resilient, scalable systems that solve real problems.",
    highlights: [
      {
        title: "Dual Degree",
        description: "IT Engineering (RUPP) & Professional Communication (IFL).",
      },
      {
        title: "Production Focused",
        description: "Mobile app developer internship & web coordination projects.",
      },
      {
        title: "Engineering Values",
        description: "Clean architecture, high concurrency, and sub-100ms API targets.",
      },
    ],
    terminal: {
      filename: "norakpanha.config.ts",
      philosophy: "Scalable by design, simple in execution",
      openToWork: true,
      coreStack: ["React", "Next.js", "Spring Boot", "PostgreSQL"],
    },
    narrative: [
      "I am an IT Engineering graduate from the Royal University of Phnom Penh (RUPP) paired with a degree in Professional Communication from the Institute of Foreign Languages (IFL).",
      "My engineering mindset focuses on modern reactive frontends, resilient microservices backends in Spring Boot, and robust cloud data architectures with clean, maintainable code.",
    ],
  },

  skills: {
    badge: "TECHNICAL EXPERTISE",
    heading: "SKILLS &",
    headingHighlight: "PROFICIENCY",
    description:
      "Quantified proficiency across full-stack architectures, cloud backends, databases, and modern developer toolchains.",
    featured: [
      {
        name: "React / Next.js",
        level: 90,
        color: "text-[#61DAFB]",
        strokeColor: "#61DAFB",
      },
      {
        name: "Spring Boot",
        level: 88,
        color: "text-[#6DB33F]",
        strokeColor: "#6DB33F",
      },
      {
        name: "TypeScript",
        level: 85,
        color: "text-[#3178C6]",
        strokeColor: "#3178C6",
      },
    ] as FeaturedSkill[],
    categories: [
      {
        title: "Programming",
        skills: [
          { name: "Java", level: 90 },
          { name: "TypeScript", level: 85 },
          { name: "JavaScript", level: 90 },
          { name: "Dart", level: 75 },
          { name: "SQL", level: 80 },
        ],
      },
      {
        title: "Frameworks & Backend",
        skills: [
          { name: "Spring Boot", level: 88 },
          { name: "React", level: 92 },
          { name: "Next.js", level: 85 },
          { name: "Flutter", level: 70 },
          { name: "Node.js", level: 75 },
        ],
      },
      {
        title: "Databases & Cloud",
        skills: [
          { name: "PostgreSQL", level: 80 },
          { name: "MySQL", level: 85 },
          { name: "AWS S3 / EC2", level: 70 },
          { name: "Docker", level: 75 },
          { name: "REST APIs", level: 90 },
        ],
      },
      {
        title: "Soft Skills & Tools",
        skills: [
          { name: "Git & GitHub", level: 90 },
          { name: "Postman", level: 88 },
          { name: "Figma", level: 75 },
          { name: "Problem Solving", level: 92 },
          { name: "Team Collaboration", level: 88 },
        ],
      },
    ] as SkillCategory[],
  },

  projects: [
    {
      id: 1,
      number: "01",
      title: "E-Commerce Cloud Architecture",
      subtitle: "High-Throughput Microservices Platform",
      description:
        "Enterprise microservices infrastructure powered by Spring Cloud, PostgreSQL, and Next.js client with Redis caching and sub-100ms API response latency.",
      category: "Fullstack",
      technologies: ["Spring Boot", "React", "PostgreSQL", "Docker", "Redis"],
      metrics: "99.8% Uptime SLA",
      githubUrl: "https://github.com/cheamnorakpanha",
      demoUrl: "https://github.com/cheamnorakpanha",
      imageUrl:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      number: "02",
      title: "AI Prompt Optimization Hub",
      subtitle: "Realtime LLM Evaluation Platform",
      description:
        "Analytical software platform powered by OpenAI streaming APIs that simplifies prompts, evaluates version benchmarks, and visualizes token performance metrics in real-time.",
      category: "Frontend",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "OpenAI API",
        "Framer Motion",
      ],
      metrics: "45ms Stream Latency",
      githubUrl: "https://github.com/cheamnorakpanha",
      demoUrl: "https://github.com/cheamnorakpanha",
      imageUrl:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      number: "03",
      title: "Event Booking Scheduler API",
      subtitle: "High-Throughput Scheduling Server",
      description:
        "High-throughput secure scheduling server featuring token-based authentication, custom query caching pipelines, and automated email trigger workers.",
      category: "Backend",
      technologies: ["Spring Boot", "MySQL", "Postman", "Docker", "Git"],
      metrics: "1.2M Request Benchmark",
      githubUrl: "https://github.com/cheamnorakpanha",
      demoUrl: "https://github.com/cheamnorakpanha",
      imageUrl:
        "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?w=1200&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      number: "04",
      title: "Classroom Management Mobile App",
      subtitle: "Offline-First Academic Coordination",
      description:
        "A Flutter application designed for local institutions to coordinate events, stream lecture handouts, and verify attendance through localized coordinates.",
      category: "Mobile",
      technologies: ["Flutter", "Dart", "MySQL", "Figma", "REST APIs"],
      metrics: "Offline-First Sync",
      githubUrl: "https://github.com/cheamnorakpanha",
      demoUrl: "https://github.com/cheamnorakpanha",
      imageUrl:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=80",
    },
  ] as ProjectItem[],

  experience: [
    {
      company: "IT Center, Royal University of Phnom Penh",
      position: "Flutter Developer (Intern)",
      duration: "Jul 2025 – Oct 2025",
      description:
        "Collaborated on designing and developing cross-platform mobile application modules using Flutter. Conducted API integrations, widget optimizations, and interface tweaks matching strict UI/UX mockups, enhancing app responsiveness.",
      tags: ["Flutter", "Dart", "Git", "REST APIs", "Mobile UI Design"],
    },
    {
      company: "Institute of Foreign Languages (IFL)",
      position: "Media & Website Coordinator (Freelance)",
      duration: "Apr 2025 – Jun 2025",
      description:
        "Administered website updates, structured educational and event pages, and organized public media distribution pipelines. Collaborated closely with faculty heads to publish critical schedules under high-traffic events.",
      tags: ["HTML", "CSS", "Web Coordination", "Content Systems", "Figma"],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "Bachelor of IT Engineering",
      institution: "Royal University of Phnom Penh (RUPP)",
      duration: "2021 – 2025",
      details:
        "Specialized in Software Engineering, database systems design, enterprise Java development (Spring Boot), web systems, and cloud computing environments.",
    },
    {
      degree: "Bachelor of Professional Communication",
      institution: "Institute of Foreign Languages (IFL)",
      duration: "2021 – 2025",
      details:
        "Focused on professional writing, media coordination, organizational communications, leadership styles, and cross-cultural business interactions.",
    },
  ] as EducationItem[],

  certifications: [
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "Dec 2025",
      url: "https://aws.amazon.com/",
    },
    {
      title: "Spring Certified Professional",
      issuer: "VMware",
      date: "Oct 2025",
      url: "https://spring.io/",
    },
    {
      title: "Advanced Next.js Certification",
      issuer: "Vercel / Next.js",
      date: "Aug 2025",
      url: "https://vercel.com/",
    },
  ] as CertificationItem[],

  contact: {
    badge: "GET IN TOUCH",
    heading: "LET'S BUILD SOMETHING",
    headingHighlight: "EXCEPTIONAL",
    description:
      "Have an architectural challenge, opportunity, or idea you'd like to bring to life? Drop a message or connect directly.",
    email: "cheam.panha168@gmail.com",
    location: "Phnom Penh, Cambodia",
    availability: "Available for Roles & Architecture Consulting",
  },
} as const;
