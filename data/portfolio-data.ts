import type { PortfolioData } from "@/types/portfolio"
export const portfolioData: PortfolioData = {
  basics: {
    name: "Aniket Kundu",
    tagline: "ICPC Regionalist | Expert @ Codeforces | Distributed Systems | Knight @ Leetcode | CS @ VIT 2027",
    location: "India",
    email: "aniketkundu12072004@gmail.com",
    phone: "+91-9143254261",
    photo: "images/profile_pic.jpg",
  },
  resume: {
    downloadLink: "resume_july.pdf",
    summary:
      "Interested in distributed Systems and High performance Computing.",
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
          "Docker",
          "MongoDB",
          "Linux",
          "Git",
          "Python",
          "SQL",
          "Selenium",
          "Django REST",
        ],
      },
      {
        title: "Programming Languages",
        items: ["C++", "Python", "Java", "Oracle MySQL", "C"],
      },
      {
        title: "Technologies",
        items: [ "MongoDB", "Docker", "AWS", "HuggingFace", "LangChain"],
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
      year: "2025",
      description: "Achieved Expert rating on Codeforces: [profile](https://codeforces.com/profile/Anicetus_7).",
    },
    {
      title: "ICPC Regionalist 2025",
      year: "2025",
      description: "International Collegiate Programming Contest Asia-West Amritapuri Regionals Rank 160 out of 309 teams",
    },
    {
      title: "LeetCode Knight",
      year: "2025",
      description: "Earned Knight badge on LeetCode: [profile](https://leetcode.com/Anicetus_7/).",
    },
    {
      title: "CodeChef 4★",
      year: "2025",
      description: "Active competitive programmer on CodeChef: [profile](https://www.codechef.com/users/Anicetus_7).",
    },
    {
      title: "Machine Learning Specialization - Stanford",
      year: "2024",
      description: "[Coursera Certificate](https://www.coursera.org/account/accomplishments/specialization/P6AQ3FKS7TY9)",
    },
    {
      title: "LangChain for LLM Development",
      year: "2024",
      description: "[Course Project](https://github.com/QuietkidAniket/StanfordOnline/blob/main/LangChain/)",
    },
    {
      title: "Harvard CS50W - Web Programming with Python & JavaScript",
      year: "2022",
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
      role: "AI/Backend Engineer (Initial Team)",
      year: "Sep 2024 – Feb 2025",
      description:
        "Worked in the DESKAVR team on intelligent meta-humans using multi-agentic models. Built resume Q&A systems using RAG with open-source LLMs (GROQ API), automated logistics report email systems via GCP APIs, and optimized the DEFXV model for production. Mentored in SANKALP. [SpectoV](https://www.spectov.com)",
    },
    {
      company: "Chakaralaya Analytics",
      role: "Software Engineer Intern",
      year: "Jun 2024 – Aug 2024",
      description:
        "Worked under Dr. Sudarsanam S.K. (IIT Madras) on building a PyTorch-based MCDM library with GPU acceleration, pre-processing pipelines, and LLM fine-tuning for RAG. [Chakaralaya](https://www.chakaralaya.com)",
    },
  ],
  projects: [
    {
      name: "DistW",
      tech: ["Modern C++", "Distributed Systems", "CMAKE", "Monaco ui"],
      description:
        "A collaborative IDE featuring hierarchical locking for granular distributed workflow\
          • Architected a real-time collaborative IDE workspace in C++20, utilizing uWebSockets for asynchronous\
            I/O multiplexing to handle high-frequency keystroke broadcasts and low-latency state synchronization across\
            remote teams.\
          • Engineered a Hierarchical Distributed Lock Manager (HDLM) using a Trie-based prefix tree to solve\
            collaborative edit collisions. This enforces pessimistic concurrency (granular file/folder locks) to guarantee\
            atomic data integrity without the memory bloat of CRDTs (Conflict-free Replication Data Types).\
          • Developed a Delta Engine powered by a vectorized line buffer to achieve amortized O(1) line-level\
            insertions, enabling bandwidth-efficient text synchronization and Google Docs-style real-time multiplayer\
            cursor tracking.\
          • Built a pre-warmed Docker execution sandbox to safely compile and run untrusted user code. Achieved\
            sub-300ms cold starts while using an Admin Dashboard to enforce strict resource caps (CPU/RAM/PIDs)\
            to prevent malicious host exhaustion.\
          • Implemented a multi-threaded Reaper Daemon to prevent memory leaks and zombie processes by\
            auto-purging disconnected user sessions and dormant containers, enabling the server to scale efficiently to\
            1,000+ concurrent connections.",
      link: "https://github.com/QuietkidAniket/DistW.git"
    },
    {
      name: "AeroHedge",
      tech: ["C++", "Distributed I/O", "Lock Free Concurrency"],
      description:
        "A Zero-Allocation Option Hedging Engine with Algorithmic Simulation\n \
          • Architected a deterministic, high-frequency options trading engine in Modern C++20, enforcing strict\n \
          zero-allocation (heap-bypass) policies and branchless polynomial mathematics on the critical path to achieve\n \
          sub-microsecond tick-to-trade execution.\n \
        • Designed a lock-free concurrency model using SPSC ring buffers with strict atomic memory ordering\n \
          (acquire/release), bypassing OS kernel scheduler context switches. Eradicated hardware false sharing via\n\
          explicit 64-byte L1 cache-line alignment across explicitly pinned CPU cores.\n \
        • Engineered a high-throughput distributed network layer utilizing Zero-Copy UDP multicast deserialization\n \
          directly into optimally packed memory structs. Implemented a non-blocking TCP IPv4 gateway utilizing\n \
          user-space spin-polling to aggressively manage exchange backpressure without yielding the CPU.\n \
        • Built an out-of-band UDP fire-and-forget pipeline bridged to an asynchronous Python/WebSocket server,\n \
          streaming nanosecond-precision RDTSC (Read Time-Stamp Counter) hardware metrics to a UI without\n \
          degrading core determinism.\n ",
      link: "https://github.com/QuietkidAniket/AeroHedge.git"
    {
      name: "Competitive Programming Solutions",
      tech: ["C++", "Algorithms"],
      description:
        "Curated repository of optimized solutions for competitive programming problems across various platforms.",
      link: "https://github.com/QuietkidAniket/codeforces",
    },
    
    },
    {
      name: "Portfolio Website",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      description:
        "macOS-style interactive portfolio with terminal interface, window manager, and launchpad. Supports multiple commands and applications.",
      link: "https://github.com/QuietkidAniket/Portfolio",
    }
    
  ],
  socials: {
    github: "https://github.com/QuietkidAniket",
    linkedin: "https://www.linkedin.com/in/anicetus/",
    codeforces: "https://codeforces.com/profile/Anicetus_7",
    leetcode: "https://leetcode.com/Anicetus_7/",
    codechef: "https://www.codechef.com/users/anicetus_7",
    atcoder: "https://atcoder.jp/users/Anicetus_7",
  },
  socialsDefaults: {
    Codeforces: { rating: "1601 (Expert)", maxRating: "1601", problemsSolved: "400+", contests: "20+" },
    LeetCode: { rating: "2059", maxRating: "2059", problemsSolved: "600+", contests: "31" },
    // CodeChef: { rating: "1600 (3★)", maxRating: "1650", problemsSolved: "70+", contests: "10" },
    // AtCoder: { rating: "191 (green)", maxRating: "200", problemsSolved: "30+", contests: "5" }
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
