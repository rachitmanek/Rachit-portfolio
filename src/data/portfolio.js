import avatar from "../assets/img.jpeg";

export const portfolioData = {
  // Personal Information
  personal: {
    name: "Rachit Manek",
    title: "Full Stack Developer",
    tagline: "Backend-focused developer building scalable web applications",
    bio: "Passionate Full Stack Developer with experience in FastAPI, Node.js, React.js, PostgreSQL, and microservice-based application development. Skilled in building scalable backend systems, RESTful APIs, and modern responsive web applications.",
    avatar: avatar,
    resume: "https://drive.google.com/file/d/1uxmvPpD-MmOx_iiT8y_5gaTxyoEjZIEp/view?usp=sharing",
    location: "Ahmedabad, Gujarat",
    email: "rachit.manek3@gmail.com",
    phone: "+91-6353874346",
    availability: "Open to opportunities",
  },

  // Social Links
  social: {
    github: "https://github.com/rachitmanek",
    linkedin: "https://www.linkedin.com/in/rachit-manek-877358253/",
  },

  // Navigation Links
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ],

  // Skills
  skills: [
    { name: "Python", level: 90, category: "Languages" },
    { name: "JavaScript", level: 85, category: "Languages" },
    { name: "SQL", level: 80, category: "Languages" },

    { name: "React.js", level: 85, category: "Frontend" },
    { name: "Tailwind CSS", level: 80, category: "Frontend" },

    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Express.js", level: 80, category: "Backend" },
    { name: "FastAPI", level: 90, category: "Backend" },

    { name: "MongoDB", level: 80, category: "Database" },
    { name: "PostgreSQL", level: 85, category: "Database" },

    { name: "Docker", level: 70, category: "DevOps" },
    { name: "MQTT", level: 75, category: "Tools" },
    { name: "AWS S3", level: 65, category: "Cloud" },
    { name: "Git & GitHub", level: 85, category: "Tools" },
    { name: "Postman", level: 80, category: "Tools" },
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "Smart Hospital Management",
      description:
        "A SaaS-based smart hospital management system built using FastAPI, ReactJS, and PostgreSQL for centralized hospital operations, IoT device management, and real-time telemetry monitoring.",
      image:"https://file.aiquickdraw.com/imgcompressed/img/compressed_c29612cbacab5b6e21593d4119c7d707.webp",
      technologies: [
        "FastAPI",
        "ReactJS",
        "PostgreSQL",
        "MQTT",
        "IoT",
      ],
      liveUrl: "",
      githubUrl: "",
      featured: true,
    },

    {
      id: 2,
      title: "RB Hardware",
      description:
        "A live MERN-stack e-commerce platform developed for hardware inventory management, customer orders, and interactions with an integrated AI-powered helpdesk system.",
      image:
        "https://res.cloudinary.com/ddxe0b0kf/image/upload/v1720876353/kctpqz4endnkue8lgsz6.jpg",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "AI Chatbot",
      ],
      liveUrl: "",
      githubUrl: "",
      featured: true,
    },

    {
      id: 3,
      title: "Cricket Score Manager",
      description:
        "Backend-focused Node.js application designed to manage cricket match data including runs, wickets, boundaries, and score operations using RESTful APIs.",
      image:
        "https://res.cloudinary.com/ddxe0b0kf/image/upload/v1767383000/Gemini_Generated_Image_i05w8fi05w8fi05w_rq1gxx.png",
      technologies: [
        "Node.js",
        "Express.js",
        "REST API",
        "CRUD Operations",
      ],
      liveUrl: "",
      githubUrl: "",
      featured: false,
    },
  ],

  // Work Experience
  experience: [
    {
      id: 1,
      company: "Moschip Technologies",
      role: "Fullstack Intern",
      duration: "Dec 2025 - May 2026",
      location: "India",
      description:
        "Worked on scalable backend and frontend application development using FastAPI, PostgreSQL, ReactJS, and MQTT-based real-time communication systems.",
      highlights: [
        "Developed RESTful APIs using Python FastAPI",
        "Managed PostgreSQL database operations and optimization",
        "Built responsive React interfaces and MQTT integrations",
      ],
    },

    {
      id: 2,
      company: "Global Garner",
      role: "Backend Developer",
      duration: "May 2024 - Jun 2024",
      location: "India",
      description:
        "Worked on backend application development using Node.js and Express.js with focus on scalable APIs and server-side architecture.",
      highlights: [
        "Developed scalable server-side APIs using Node.js and Express.js",
        "Worked with RESTful API design and backend architecture",
        "Improved database handling and backend development skills",
      ],
    },
  ],

  // Education
  education: [
    {
      id: 1,
      institution:
        "Charotar University of Science and Technology (CHARUSAT)",
      degree:
        "Bachelor of Technology in Computer Science and Engineering",
      duration: "2022 - 2026",
      location: "Changa, Gujarat",
      description:
        "Pursuing Computer Science and Engineering with focus on backend systems, scalable applications, and modern web technologies.",
      grade: "CGPA: 8.52/10",
    },
    {
      id: 2,
      institution:
        "Shakti Higher Secondary School",
      degree:
        "Higher Secondary(12th Grade)-Science",
      duration: "2022",
      location: "Rajkot, Gujarat",
      description:
        "Completed higher secondary education with Science stream focusing on Physics, Chemistry, and Mathematics.",
      grade: "PR : 88.13",
    }
  ],

  // Certifications
  certifications: [
    {
      id: 1,
      title: "Introduction to Prompt Engineering for Generative AI",
      issuer: "LinkedIn Learning",
      date: "Feb 2026",
      credentialUrl: "",
      skills: ["Prompt Engineering", "Generative AI", "LLMs"],
    },

    {
      id: 2,
      title: "Cloud Developing",
      issuer: "AWS Academy",
      date: "Mar 2025",
      credentialUrl: "",
      skills: ["AWS", "Cloud Development", "Cloud Architecture"],
    },
  ],
};

export default portfolioData;