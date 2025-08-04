import type { PortfolioData } from "@/types/portfolio"

export const portfolioData: PortfolioData = {
  basics: {
    name: "Aniket Kundu",
    tagline: "Competitive Programmer | Full-stack Developer",
    location: "India",
    email: "aniket@example.com",
    phone: "+91-1234567890",
    photo: "/placeholder.svg?height=128&width=128",
  },
  resume: {
    downloadLink: "https://example.com/resume.pdf",
    summary:
      "Passionate about building performance-oriented applications and solving complex algorithmic problems. Experienced in full-stack development with a strong foundation in competitive programming.",
    sections: [
      {
        title: "Education",
        items: [
          {
            degree: "B.Tech Computer Science Engineering",
            institute: "XYZ University",
            year: "2021–2025",
            gpa: "8.5/10",
          },
        ],
      },
      {
        title: "Skills",
        items: [
          "C++",
          "Python",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "Docker",
          "SQL",
          "MongoDB",
          "Git",
          "Linux",
        ],
      },
      {
        title: "Programming Languages",
        items: ["C++", "Python", "JavaScript", "TypeScript", "Java", "Go"],
      },
      {
        title: "Technologies",
        items: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Docker", "AWS"],
      },
    ],
  },
  achievements: [
    {
      title: "ACM ICPC Regionalist",
      year: "2024",
      description:
        "Qualified for the regional round of ACM ICPC, demonstrating strong problem-solving skills and algorithmic thinking.",
    },
    {
      title: "Codeforces Expert",
      year: "2023",
      description:
        "Achieved Expert rating (1600+) on Codeforces through consistent performance in competitive programming contests.",
    },
    {
      title: "LeetCode Knight",
      year: "2023",
      description: "Solved 500+ problems on LeetCode and achieved Knight badge for consistent problem-solving.",
    },
    {
      title: "Hackathon Winner",
      year: "2023",
      description: "Won first place in university hackathon for developing an innovative web application.",
    },
  ],
  experience: [
    {
      company: "Google Summer of Code",
      role: "Open Source Contributor",
      year: "2024",
      description:
        "Worked on improving the performance of a popular open-source library, contributing to core algorithms and documentation.",
    },
    {
      company: "TechCorp Solutions",
      role: "Software Development Intern",
      year: "2023",
      description:
        "Developed and maintained web applications using React and Node.js, collaborated with senior developers on production systems.",
    },
    {
      company: "StartupXYZ",
      role: "Frontend Developer",
      year: "2022",
      description:
        "Built responsive user interfaces and implemented modern web technologies to enhance user experience.",
    },
  ],
  projects: [
    {
      name: "Portfolio Website",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      description: "This macOS-style interactive portfolio website with functional terminal and window management.",
      link: "https://github.com/aniket/portfolio",
    },
    {
      name: "Algorithm Visualizer",
      tech: ["React", "D3.js", "TypeScript"],
      description:
        "Interactive web application for visualizing sorting and graph algorithms with step-by-step animations.",
      link: "https://github.com/aniket/algo-visualizer",
    },
    {
      name: "Task Management API",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      description: "RESTful API for task management with user authentication, CRUD operations, and real-time updates.",
      link: "https://github.com/aniket/task-api",
    },
    {
      name: "Competitive Programming Solutions",
      tech: ["C++", "Python", "Algorithms"],
      description: "Collection of optimized solutions for competitive programming problems from various platforms.",
      link: "https://github.com/aniket/cp-solutions",
    },
    {
      name: "E-commerce Platform",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      description:
        "Full-stack e-commerce application with payment integration, inventory management, and admin dashboard.",
      link: "https://github.com/aniket/ecommerce",
    },
    {
      name: "Chat Application",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      description: "Real-time chat application with multiple rooms, file sharing, and user authentication.",
      link: "https://github.com/aniket/chat-app",
    },
  ],
  socials: {
    github: "https://github.com/aniket",
    linkedin: "https://linkedin.com/in/aniket",
    codeforces: "https://codeforces.com/profile/Anicetus_7",
    leetcode: "https://leetcode.com/Anicetus_7",
  },
  cli: {
    commands: {
      resume: "Displays resume information",
      achievements: "Lists all achievements and awards",
      projects: "Shows project portfolio",
      experience: "Displays work experience",
      socials: "Shows social media links",
      neofetch: "Shows colorful system-like summary",
      help: "Lists all available commands",
      clear: "Clears the terminal screen",
      about: "Shows about information",
      ls: "Lists available sections",
      whoami: "Displays current user",
    },
  },
}
