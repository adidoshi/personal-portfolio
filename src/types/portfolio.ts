export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: "ai" | "frontend" | "backend" | "backendAI" | "infra" | "tools";
  level: "expert" | "proficient" | "familiar";
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlight: boolean;
  aiInsight?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  tech: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface AboutFact {
  label: string;
  value: string;
}

export interface ThinkingPrinciple {
  title: string;
  body: string;
  icon: string;
}

export type Theme = "light" | "dark";
