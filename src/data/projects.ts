import portfolioImg from "@/assets/portfolio-website.jpg";
import reactAppsImg from "@/assets/react-applications.jpg";
import bmiCalculatorImg from "@/assets/bmi-calculator.jpg";
import dataScienceImg from "@/assets/data-science-project.jpg";
import resumeImg from "@/assets/resume-website.jpg";
import workshopImg from "@/assets/workshop-projects.jpg";

export type ProjectCategory =
  | "SaaS & Platforms"
  | "AI & SaaS"
  | "Web Apps"
  | "Client & Studio";

export type ProjectStatus =
  | "Active Production"
  | "Deployed"
  | "Open Source";

export interface ProjectItem {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveLink?: string;
  githubLink: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured?: boolean;
}

export const PROJECT_CATEGORIES = [
  "All",
  "SaaS & Platforms",
  "AI & SaaS",
  "Web Apps",
  "Client & Studio",
] as const;

export const projectsData: ProjectItem[] = [
  {
    title: "CusOwn",
    description:
      "Production multi-tenant scheduling & booking platform with realtime slot synchronization, PostgreSQL Row-Level Security, and automated client notifications.",
    image: reactAppsImg,
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "TailwindCSS", "Zustand"],
    liveLink: "https://cusown.clykur.com",
    githubLink: "https://github.com/Clykur/CusOwn",
    category: "SaaS & Platforms",
    status: "Active Production",
    featured: true,
  },
  {
    title: "LedgerOS",
    description:
      "AI-powered financial operating system for SaaS founders and startups, featuring interactive what-if financial simulators, runway forecasting, and PDF export reports.",
    image: bmiCalculatorImg,
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Recharts", "Framer Motion", "jsPDF", "Zod"],
    liveLink: "https://ledgeros.clykur.com",
    githubLink: "https://github.com/Clykur/LedgerOS",
    category: "AI & SaaS",
    status: "Active Production",
    featured: true,
  },
  {
    title: "Neev — Phygital Library",
    description:
      "Smart library ecosystem fusing physical book tracking with digital cataloging, featuring interactive shelf-locator floor maps, RFID telemetry, and Gemini AI bookmark scanners.",
    image: workshopImg,
    technologies: ["React", "TypeScript", "Supabase", "PostgreSQL", "Google Gemini API", "TanStack Query", "TailwindCSS"],
    liveLink: "https://nev-phygital-library.vercel.app",
    githubLink: "https://github.com/Clykur/nev-phygital-library",
    category: "SaaS & Platforms",
    status: "Active Production",
    featured: true,
  },
  {
    title: "Clykur Studio Platform",
    description:
      "Official web platform for Clykur product engineering studio, featuring Google GenAI assistant integration, edge rendering, and smooth Lenis & GSAP scroll physics.",
    image: portfolioImg,
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion", "GSAP", "Google GenAI SDK", "Supabase"],
    liveLink: "https://www.clykur.com",
    githubLink: "https://github.com/Clykur/Website",
    category: "Web Apps",
    status: "Active Production",
    featured: true,
  },
  {
    title: "Drapeva",
    description:
      "Full-stack custom tailoring and fashion commerce platform organized as an npm monorepo with Next.js App Router, Express API services, Razorpay checkout, and Supabase.",
    image: reactAppsImg,
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express", "Supabase", "GSAP", "Razorpay", "TailwindCSS"],
    githubLink: "https://github.com/Clykur/drapeva",
    category: "Web Apps",
    status: "Open Source",
    featured: true,
  },
  {
    title: "CareerNova",
    description:
      "AI-assisted career acceleration platform featuring automated resume optimization, structured job discovery workflows, and AI interview prep powered by OpenAI and Supabase.",
    image: dataScienceImg,
    technologies: ["React", "Vite", "TypeScript", "Express", "Drizzle ORM", "PostgreSQL", "OpenAI API", "Supabase"],
    githubLink: "https://github.com/Clykur/CareerNova-Beta",
    category: "AI & SaaS",
    status: "Open Source",
    featured: true,
  },
  {
    title: "Trust Builder",
    description:
      "Social proof and reputation management SaaS enabling businesses to collect, verify, and embed interactive testimonial widgets and conversion badges.",
    image: reactAppsImg,
    technologies: ["React", "TypeScript", "Express", "Drizzle ORM", "Supabase", "TanStack Query", "TailwindCSS"],
    liveLink: "https://trustbuilder.clykur.com",
    githubLink: "https://github.com/Clykur/Trust-Builder",
    category: "SaaS & Platforms",
    status: "Active Production",
    featured: true,
  },
  {
    title: "GreyLabs AI",
    description:
      "Speech intelligence and automated acoustic analytics showcase for BFSI (banks & fintechs), featuring reactive audio insight previews and modern UI engineering.",
    image: dataScienceImg,
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "Framer Motion", "Lucide React"],
    liveLink: "https://greylabsai.vercel.app",
    githubLink: "https://github.com/Clykur/GreyLabs-AI",
    category: "AI & SaaS",
    status: "Deployed",
    featured: false,
  },
  {
    title: "Clykur Manufacturing",
    description:
      "Modern digital manufacturing and precision engineering portal with interactive component catalogs, CNC capability calculators, and instant quote inquiry pipelines.",
    image: workshopImg,
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion", "Lucide React", "Zod"],
    liveLink: "https://manufacturing1.clykur.com",
    githubLink: "https://github.com/Clykur/Clykur-Manufacturing",
    category: "Web Apps",
    status: "Active Production",
    featured: false,
  },
  {
    title: "NOIR Atelier",
    description:
      "Minimalist luxury streetwear and bespoke apparel e-commerce experience with interactive cart drawer, smooth fluid transitions, and responsive product showcases.",
    image: resumeImg,
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "Framer Motion", "Wouter", "Radix UI"],
    liveLink: "https://noiratelier.clykur.com",
    githubLink: "https://github.com/Clykur/NOIR-Atelier",
    category: "Client & Studio",
    status: "Active Production",
    featured: false,
  },
];
