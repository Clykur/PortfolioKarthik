import cusownImg from "@/assets/cusown-dashboard.jpg";
import ledgerosImg from "@/assets/ledgeros-dashboard.jpg";
import clykurStudioImg from "@/assets/clykur-studio-platform.jpg";
import neevLibraryImg from "@/assets/neev-digital-library.jpg";
import drapevaSareeImg from "@/assets/drapeva-saree-platform.jpg";
import careernovaImg from "@/assets/careernova-dashboard.jpg";

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  purpose: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  featured?: boolean;
}

export const selectedProjects: ProjectItem[] = [
  {
    title: "CusOwn",
    category: "Slot Booking Platform",
    description: "Production multi-tenant slot booking & scheduling infrastructure with realtime availability synchronization.",
    purpose: "Eliminates double-booking race conditions under high concurrent demand using optimistic concurrency control, PostgreSQL Row-Level Security, and automated multi-channel client alerts.",
    image: cusownImg,
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Zustand"],
    liveLink: "https://cusown.clykur.com",
    githubLink: "https://github.com/Clykur/CusOwn",
    featured: true,
  },
  {
    title: "LedgerOS",
    category: "AI Financial Systems",
    description: "AI-powered financial operating system for startup founders and early-stage ventures.",
    purpose: "Replaces fragmented spreadsheets with predictive burn-rate telemetry, interactive what-if financial modeling simulators, and verifiable PDF investor reports.",
    image: ledgerosImg,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts", "Framer Motion", "jsPDF"],
    liveLink: "https://ledgeros.clykur.com",
    githubLink: "https://github.com/Clykur/LedgerOS",
    featured: true,
  },
  {
    title: "Clykur Studio Platform",
    category: "Company Studio Platform",
    description: "Official company website and client portal for Clykur, an AI-native digital product engineering studio.",
    purpose: "Engineered for sub-second edge response times with Google GenAI assistant integration, structured project intake pipelines, and fluid GPU-accelerated interaction physics.",
    image: clykurStudioImg,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Google GenAI SDK", "Supabase"],
    liveLink: "https://www.clykur.com",
    githubLink: "https://github.com/Clykur/Website",
    featured: false,
  },
  {
    title: "Drapeva",
    category: "Saree E-Commerce Platform",
    description: "Direct-to-consumer premium Indian saree and ethnic wear digital storefront.",
    purpose: "Engineered as an e-commerce platform showcasing authentic handloom weaves (Kanjivaram, Banarasi, Chanderi) with high-res fabric detail previews, Razorpay checkout, and monorepo order processing.",
    image: drapevaSareeImg,
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express", "Supabase", "Razorpay"],
    liveLink: "https://drapeva.in",
    githubLink: "https://github.com/Clykur/drapeva",
    featured: false,
  },
  {
    title: "Neev",
    category: "Digital Library Platform",
    description: "Modern digital library discovery, cataloging, and reading management platform.",
    purpose: "Streamlines digital book borrowing and exploration with catalog search across academic and literature collections, reading progress tracking, and Gemini AI book analysis.",
    image: neevLibraryImg,
    technologies: ["React", "TypeScript", "Supabase", "PostgreSQL", "Google Gemini API", "TanStack Query"],
    liveLink: "https://nev-phygital-library.vercel.app",
    githubLink: "https://github.com/Clykur/nev-phygital-library",
    featured: false,
  },
  {
    title: "CareerNova",
    category: "AI Talent Systems",
    description: "AI-assisted career acceleration platform with structured discovery and preparation.",
    purpose: "Streamlines technical recruitment preparation through LLM-assisted resume optimization, ATS structural analysis, and interactive technical interview simulations.",
    image: careernovaImg,
    technologies: ["React", "Vite", "TypeScript", "Express", "Drizzle ORM", "PostgreSQL", "OpenAI API"],
    githubLink: "https://github.com/Clykur/CareerNova-Beta",
    featured: false,
  },
];
