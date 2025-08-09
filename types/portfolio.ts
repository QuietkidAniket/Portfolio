export interface PortfolioData {
  basics: {
    name: string
    tagline: string
    location: string
    email: string
    phone: string
    photo: string
  }
  resume: {
    downloadLink: string
    summary: string
    sections: {
      title: string
      items: (string | Record<string, any>)[]
    }[]
  }
  achievements: {
    title: string
    year: string
    description: string
  }[]
  experience: {
    company: string
    role: string
    year: string
    description: string
  }[]
  projects: {
    name: string
    tech: string[]
    description: string
    link: string
  }[]
  socials: {
    github: string
    linkedin: string
    codeforces: string
    leetcode: string
    codechef: string
    atcoder: string
  }
  socialsDefaults: {
    Codeforces: { rating: string; maxRating: string; problemsSolved: string; contests: string }
    LeetCode: { rating: string; maxRating: string; problemsSolved: string; contests: string }
    CodeChef: { rating: string; maxRating: string; problemsSolved: string; contests: string }
    AtCoder: { rating: string; maxRating: string; problemsSolved: string; contests: string }
  }
  cli: {
    commands: Record<string, string>
  }
}

export type AppType =
  | "resume"
  | "achievements"
  | "portfolio"
  | "experience"
  | "projects"
  | "files"
  | "terminal"
  | "about"
  | "cpstats"

export interface WindowState {
  id: string
  appType: AppType
  title: string
  isMinimized: boolean
  position: { x: number; y: number }
  size: { width: number; height: number }
  zIndex: number
}
