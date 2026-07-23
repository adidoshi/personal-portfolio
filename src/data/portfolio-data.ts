import type {
  AboutFact,
  Experience,
  NavLink,
  Project,
  Skill,
  ThinkingPrinciple,
} from "@/types/portfolio";

export const NAV_LINKS: NavLink[] = [
  { label: "Thinking", href: "#thinking" },
  { label: "Process", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS: Skill[] = [
  // Frontend
  {
    name: "JavaScript",
    icon: "IoLogoJavascript",
    category: "frontend",
    level: "expert",
  },
  { name: "React", icon: "SiReact", category: "frontend", level: "expert" },
  {
    name: "TypeScript",
    icon: "SiTypescript",
    category: "frontend",
    level: "expert",
  },
  {
    name: "Next.js",
    icon: "SiNextdotjs",
    category: "frontend",
    level: "expert",
  },
  {
    name: "Tailwind CSS",
    icon: "SiTailwindcss",
    category: "frontend",
    level: "expert",
  },
  {
    name: "Tanstack Query",
    icon: "SiTanstackquery",
    category: "frontend",
    level: "expert",
  },
  {
    name: "Zustand",
    icon: "SiZustand",
    category: "frontend",
    level: "expert",
  },
  {
    name: "Testing",
    icon: "SiJest",
    category: "frontend",
    level: "expert",
  },
  // Backend & AI
  {
    name: "Express.js",
    icon: "SiExpress",
    category: "backendAI",
    level: "proficient",
  },
  {
    name: "MongoDB",
    icon: "SiMongodb",
    category: "backendAI",
    level: "proficient",
  },
  {
    name: "Claude",
    icon: "ClaudeIcon",
    category: "backendAI",
    level: "proficient",
  },
  {
    name: "OpenAI API",
    icon: "SiOpenai",
    category: "backendAI",
    level: "proficient",
  },

  // Tools
  { name: "GitHub", icon: "SiGithub", category: "tools", level: "expert" },
  { name: "Git", icon: "LiaGit", category: "tools", level: "expert" },
  { name: "CI/CD", icon: "CICDIcon", category: "tools", level: "proficient" },
  { name: "Vite", icon: "ViteLogo", category: "tools", level: "proficient" },
];

export const PROJECTS: Project[] = [
  {
    id: "data-mesh",
    title: "ChatlyBook - Voice AI Conversation",
    tagline: "Turn static PDFs into interactive, voice-driven assistants",
    description:
      "Lets readers upload a PDF, convert it into searchable text segments, and speak with an AI voice assistant that answers using the actual contents of the book. It combines PDF parsing & chunk-based retrieval.",
    image: "/assets/images/chatlybook-cover-webp.webp",
    tags: [
      "Next.js",
      "Clerk Auth, Sub & Billing",
      "VAPI Voice AI",
      "Vercel deploy & Blob",
    ],
    liveUrl: "https://chatlybook.vercel.app/",
    githubUrl: "https://github.com/adidoshi/chatlybook",
    highlight: true,
    aiInsight:
      "Instead of a single long prompt, breaks it into overlapping segments and retrieves only the most relevant context, ensuring faster & grounded responses.",
  },
  {
    id: "ai-analytics",
    title: "Edgerift Metrics - Trading Journal & AI analytics",
    tagline: "Track your trades. Decode your behavior.",
    description:
      "Built a trading analytics dashboard featuring interactive charts, and structured journaling. Also includes user auth with Zustand state management, protected routes, log trade details with Tanstack react form & theme switcher.",
    image: "/assets/images/edgerift-metrics-preview.png",
    tags: [
      "React",
      "TypeScript",
      "Tanstack Query",
      "MongoDB",
      "Recharts",
      "TurboRepo",
    ],
    liveUrl: "https://edgerift-metrics.vercel.app/",
    githubUrl: "https://github.com/adidoshi/edgerift-metrics",
    highlight: true,
    aiInsight:
      "It dynamically analyzes trade data and generates AI-driven reports to help traders identify patterns, mistakes, and areas for improvement.",
  },
  {
    id: "edge-platform",
    title: "Conservo - Highlight & Summarize Webpages",
    tagline: "Capture, understand & access anytime",
    description:
      "A simple and powerful chrome browser extension that lets you highlight text on any webpage, save it, revisit anytime and manage list. Data is stored in the extension storage for quick retrieval.",
    image: "/assets/images/chrome-ext-preview.png",
    tags: [
      "Selection API",
      "Content scripts",
      "Tailwind",
      "OpenAI API",
      "Extension storage",
    ],
    liveUrl:
      "https://chromewebstore.google.com/detail/conservo-highlight-summar/dhbajapmhgknjidnacekgoihfdfmckpl",
    githubUrl: "https://github.com/adidoshi/website-highlight-saver-ext",
    highlight: false,
    aiInsight:
      "Generates a concise summary of the highlighted content which becomes easy for users to digest the insights. ",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Spearhead Solutions",
    role: "Frontend Developer",
    period: "2024 - 2026",
    location: "Pune, IN, Remote",
    summary:
      "Joined as a founding engineer to build LMS for financial markets, contributing to architecture decisions, feature development & releases.",
    achievements: [
      "Developed secure role-based routing and authorization flows for students and mentors.",
      "Integrated Razorpay payment checkout flow on client side for course purchases.",
      "Executed Vimeo SDK for live video webinar and automated post session recording storage to cloud.",
      "Implemented a quiz and assessment engine with real-time countdown timers, dynamic scoring, and automated email notifications for winners.",
      "Built a trade journaling and analytics dashboard with mentors access protected review.",
    ],
    tech: ["React", "TypeScript", "Redux-Toolkit", "Tailwind CSS", "Vimeo SDK"],
  },
  {
    company: "Wednesday Solutions",
    role: "Software Engineer - Frontend",
    period: "2022 - 2023",
    location: "Pune, India",
    summary:
      "Developed user-facing features for a vertical SaaS marketplace product with React used by thousands of customers.",
    achievements: [
      "Built reusable UI components with Ant Design, enabling a scalable and consistent platform revamp.",
      "Integrating zoom SDK to enable in-app video conferencing.",
      "Improved page load performance using code-splitting, lazy loading, and render optimizations.",
      "Implemented event tracking with Google Analytics to monitor user interactions and behavior.",
      "Built native runtime Android/IOS apps from existing web application using CapacitorJS.",
    ],
    tech: [
      "React",
      "Redux-Saga",
      "JavaScript",
      "CSS",
      "React-hook-form",
      "GraphQL",
    ],
  },
];

export const ABOUT_FACTS: AboutFact[] = [
  { label: "AI Frameworks Used", value: "8+" },
  { label: "Systems Designed", value: "20+" },
  { label: "Engineers Mentored", value: "15+" },
  { label: "Years Shipping", value: "6+" },
];

export const THINKING_PRINCIPLES: ThinkingPrinciple[] = [
  {
    title: "AI as Co-Pilot, Not Autopilot",
    body: "I build systems where AI amplifies human judgment rather than replaces it. Every LLM integration I design preserves a human feedback loop and clear escalation paths.",
    icon: "🧠",
  },
  {
    title: "Clarity Before Code",
    body: "Before writing a single line, I map data flows, failure modes, and scaling vectors. The best code is the code that solves the right problem at the right layer.",
    icon: "🗺️",
  },
  {
    title: "Product Thinking in Every PR",
    body: "Technical decisions are product decisions in disguise. I keep the user outcome visible throughout architecture choices — latency, reliability, and explainability all serve someone.",
    icon: "🎯",
  },
];
