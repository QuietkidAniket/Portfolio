import type { PortfolioData } from "@/types/portfolio"
export const portfolioData: PortfolioData = {
  basics: {
    name: "Aniket Kundu",
    tagline: "Competitive Programmer | Full-stack Developer",
    location: "India",
    email: "aniketkundu12072004@gmail.com",
    phone: "+91-9143254261",
    photo: "images/profile_pic.png",
  },
  resume: {
    downloadLink: "resume_august.pdf",
    summary:
      "Performance-focused developer with a passion for solving complex algorithmic problems and building scalable applications. Experienced in full-stack and ML engineering, with a strong foundation in competitive programming and deep learning.",
    sections: [
      {
        title: "Education",
        items: [
          {
            degree: "B.Tech in Computer Science Engineering",
            institute: "Vellore Institute of Technology, Chennai",
            year: "2023–2027",
            gpa: "8.7/10 (Highest SGPA: 9.21/10)",
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
          "TensorFlow",
          "PyTorch",
          "Selenium",
          "Django REST",
        ],
      },
      {
        title: "Programming Languages",
        items: ["C++", "Python", "JavaScript", "TypeScript", "Java", "R", "Verilog", "x86 Shell", "ARM", "MySQL", "C"],
      },
      {
        title: "Technologies",
        items: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Docker", "AWS", "HuggingFace", "LangChain"],
      },
      {
        title: "Coursework",
        items: [
          "Data Structures & Algorithms",
          "Design & Analysis of Algorithms",
          "Computer Architecture",
          "Operating Systems",
          "Probability & Statistics",
          "Discrete Mathematics & Graphs",
          "Machine Learning",
          "Deep Learning",
          "Natural Language Processing",
          "Complex Variables & Linear Algebra",
        ],
      },
    ],
  },
  achievements: [
    {
      title: "Zonal Rank 1, International Rank 18 - SOF NCO",
      year: "2019",
      description: "Secured Zonal Rank 1 and International Rank 18 in the National Cyber Olympiad by SOF.",
    },
    {
      title: "Codeforces Expert",
      year: "2023",
      description: "Achieved Expert rating on Codeforces: [profile](https://codeforces.com/profile/Anicetus_7).",
    },
    {
      title: "LeetCode Knight",
      year: "2023",
      description: "Earned Knight badge on LeetCode: [profile](https://leetcode.com/Anicetus_7/).",
    },
    {
      title: "CodeChef 3★",
      year: "2023",
      description: "Active competitive programmer on CodeChef: [profile](https://www.codechef.com/users/ani_23bce1965).",
    },
    {
      title: "Machine Learning Specialization - Stanford",
      year: "2023",
      description: "[Coursera Certificate](https://www.coursera.org/account/accomplishments/specialization/P6AQ3FKS7TY9)",
    },
    {
      title: "LangChain for LLM Development",
      year: "2024",
      description: "[Course Project](https://github.com/QuietkidAniket/StanfordOnline/blob/main/LangChain/)",
    },
    {
      title: "Harvard CS50W - Web Programming with Python & JavaScript",
      year: "2024",
      description: "[edX Certificate](https://courses.edx.org/certificates/1bca14165d054f91b462067024f30454)",
    },
    {
      title: "IIT Madras CS6910 - Deep Learning",
      year: "2024",
      description: "[Course Website](http://www.cse.iitm.ac.in/~miteshk/CS6910.html)",
    },
    {
      title: "Introduction to On-Device AI by Qualcomm",
      year: "2024",
      description: "[Certificate](https://learn.deeplearning.ai/accomplishments/0913f96d-147c-4f9c-a5cd-b3fbf84c909d?usp=sharing)",
    },
  ],
  experience: [
    {
      company: "SpectoV",
      role: "Machine Learning Intern",
      year: "Sep 2024 – Feb 2025",
      description:
        "Worked in the DESKAVR team on intelligent meta-humans using multi-agentic models. Built resume Q&A systems using RAG with open-source LLMs (GROQ API), automated logistics report email systems via GCP APIs, and optimized the DEFXV model for production. Mentored in SANKALP. [SpectoV](https://www.spectov.com)",
    },
    {
      company: "Chakaralaya Analytics",
      role: "Machine Learning Intern",
      year: "Jun 2024 – Aug 2024",
      description:
        "Worked under Dr. Sudarsanam S.K. (IIT Madras) on building a PyTorch-based MCDM library with GPU acceleration, pre-processing pipelines, and LLM fine-tuning for RAG. [Chakaralaya](https://www.chakaralaya.com)",
    },
  ],
  projects: [
    {
      name: "Free GPT",
      tech: ["Python", "PyTorch", "LangChain", "HuggingFace", "Mistral AI"],
      description:
        "Built a Multi-Agentic conversational system using LangChain and fine-tuned Mistral-7B-Instruct to mimic GPT-3.0. Deployed using HuggingFace inference API.",
      link: "https://github.com/QuietkidAniket/StanfordOnline/tree/main/LangChain",
    },
    {
      name: "Portfolio Website",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      description:
        "macOS-style interactive portfolio with terminal interface, window manager, and launchpad. Supports multiple commands and applications.",
      link: "https://github.com/QuietkidAniket/Portfolio",
    },
    {
      name: "Competitive Programming Solutions",
      tech: ["C++", "Python", "Algorithms"],
      description:
        "Curated repository of optimized solutions for competitive programming problems across various platforms.",
      link: "https://github.com/QuietkidAniket/codeforces",
    },
    // {
    //   name: "E-commerce Platform",
    //   tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    //   description:
    //     "Full-featured e-commerce app with payment gateway, admin dashboard, inventory management, and cart system.",
    //   link: "https://github.com/aniket/ecommerce",
    // },
  ],
  socials: {
    github: "https://github.com/QuietkidAniket",
    linkedin: "https://www.linkedin.com/in/anicetus/",
    codeforces: "https://codeforces.com/profile/Anicetus_7",
    leetcode: "https://leetcode.com/Anicetus_7/",
    codechef: "https://www.codechef.com/users/ani_23bce1965",
    atcoder: "https://atcoder.jp/users/Anicetus_7",
  },
  socialsDefaults: {
    Codeforces: { rating: "1500 (pupil)", maxRating: "1600", problemsSolved: "200", contests: "15" },
    LeetCode: { rating: "1700", maxRating: "1700", problemsSolved: "600", contests: "12" },
    CodeChef: { rating: "1600 (3★)", maxRating: "1650", problemsSolved: "150", contests: "10" },
    AtCoder: { rating: "1200 (green)", maxRating: "1250", problemsSolved: "80", contests: "5" }
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