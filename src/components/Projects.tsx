import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ExternalLink,
  Github,
  Search,
  X,
} from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import resumeImg from "@/assets/resume-website.jpg";
import portfolioImg from "@/assets/portfolio-website.jpg";
import reactAppsImg from "@/assets/react-applications.jpg";
import bmiCalculatorImg from "@/assets/bmi-calculator.jpg";
import dataScienceImg from "@/assets/data-science-project.jpg";
import edgeDetectionImg from "@/assets/edge-detection.jpg";
import bouncingBallImg from "@/assets/bouncing-ball-game.jpg";
import workoutTrackerImg from "@/assets/workout-tracker.jpg";

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink: string;
  category: "SaaS & Mobile" | "Studio & Web" | "Systems & Data" | "Experiments";
  status: "Active Production" | "Deployed" | "Completed" | "Open Source";
}

const projectsData: ProjectItem[] = [
  {
    title: "CusOwn",
    description: "Production multi-tenant scheduling platform with realtime slot synchronization, PostgreSQL Row-Level Security, and automated client notifications.",
    image: reactAppsImg,
    technologies: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL"],
    liveLink: "https://cusown.clykur.com/",
    githubLink: "https://github.com/karthiknaramala9949",
    category: "SaaS & Mobile",
    status: "Active Production",
  },
  {
    title: "Clykur Platform",
    description: "Official web platform for Clykur product engineering studio, featuring edge rendering, performance optimizations, and modern design systems.",
    image: portfolioImg,
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
    liveLink: "https://www.clykur.com/",
    githubLink: "https://github.com/karthiknaramala9949",
    category: "Studio & Web",
    status: "Active Production",
  },
  {
    title: "React Applications Suite",
    description: "Decoupled React component library and interactive frontend tools showcasing custom hooks, component composition, and responsive state flows.",
    image: reactAppsImg,
    technologies: ["React", "JavaScript", "Custom Hooks", "State Machines"],
    githubLink: "https://github.com/karthiknaramala9949/React-Applications",
    category: "Studio & Web",
    status: "Open Source",
  },
  {
    title: "Workout Tracker",
    description: "Focused fitness logging web app to record workout sets, monitor exercise progress, and persist session history via localStorage.",
    image: workoutTrackerImg,
    technologies: ["JavaScript ES6", "HTML5", "CSS3", "LocalStorage API"],
    githubLink: "https://github.com/karthiknaramala9949/Workout_Tracker",
    category: "Studio & Web",
    status: "Open Source",
  },
  {
    title: "Bouncing Ball Physics Engine",
    description: "Realtime 2D physics simulation on HTML5 Canvas implementing elastic kinetic collisions, gravity vectors, and continuous animation loops.",
    image: bouncingBallImg,
    technologies: ["JavaScript", "HTML5 Canvas", "Physics Kinematics"],
    githubLink: "https://github.com/karthiknaramala9949/Bouncing_Ball_Game",
    category: "Experiments",
    status: "Open Source",
  },
  {
    title: "BMI Calculator & Health Analytics",
    description: "Python computation workflows and Jupyter data analysis calculating anthropometric health metrics, risk classifications, and data distributions.",
    image: bmiCalculatorImg,
    technologies: ["Python", "Jupyter", "Pandas", "NumPy"],
    githubLink: "https://github.com/karthiknaramala9949/BMI_Calculator",
    category: "Systems & Data",
    status: "Completed",
  },
  {
    title: "DCT-FP Edge Detection System",
    description: "Discrete Cosine Transform with Fractional Poisson (DCT-FP) fusion research in MATLAB for high-frequency edge detection in noisy imagery.",
    image: edgeDetectionImg,
    technologies: ["MATLAB", "Image Processing", "Signal Processing", "Algorithms"],
    githubLink: "https://github.com/karthiknaramala9949/Project_Code",
    category: "Systems & Data",
    status: "Completed",
  },
  {
    title: "Web Development Projects Suite",
    description: "Curated collection of responsive UI prototypes, semantic HTML layouts, CSS Grid architectures, and frontend design patterns.",
    image: resumeImg,
    technologies: ["HTML5", "CSS3", "Responsive Design", "Flexbox/Grid"],
    githubLink: "https://github.com/karthiknaramala9949/Web-Development-Projects",
    category: "Studio & Web",
    status: "Open Source",
  },
  {
    title: "YBI Foundation ML Workflows",
    description: "Supervised machine learning pipelines, exploratory data analysis benchmarks, and feature engineering implementations in Python.",
    image: dataScienceImg,
    technologies: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
    githubLink: "https://github.com/karthiknaramala9949/YBI-Foundation-Internship",
    category: "Systems & Data",
    status: "Completed",
  },
];

const categories = [
  "All",
  "SaaS & Mobile",
  "Studio & Web",
  "Systems & Data",
  "Experiments",
] as const;

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="card-elevated hover-lift overflow-hidden group flex flex-col h-full border border-border/80">
      {/* Thumbnail */}
      <div className="relative overflow-hidden bg-muted/30 aspect-[16/9]">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-muted/40 animate-pulse flex items-center justify-center" />
        )}
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-secondary/40 text-muted-foreground p-3 text-center">
            <span className="text-xs font-mono font-medium">{project.title}</span>
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            width={480}
            height={270}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-103 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        <Badge
          variant="secondary"
          className="absolute top-2 right-2 text-[9px] font-mono font-medium bg-background/90 text-foreground backdrop-blur-md border border-border/60 py-0"
        >
          {project.status}
        </Badge>
      </div>

      <CardHeader className="p-4 pb-1">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base font-display font-bold group-hover:text-primary transition-colors leading-tight">
            {project.title}
          </CardTitle>
          <span className="text-[10px] font-mono text-muted-foreground shrink-0">
            {project.category}
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-0 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-2.5">
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-secondary/70 text-foreground border border-border/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2 pt-2 border-t border-border/50">
          {project.liveLink && (
            <Button size="sm" className="flex-1 h-7 text-[11px] glow-primary font-medium" asChild>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live Demo of ${project.title}`}
              >
                <ExternalLink className="h-3 w-3 mr-1" /> Live Demo
              </a>
            </Button>
          )}
          <Button
            size="sm"
            variant="outline"
            className={`h-7 text-[11px] font-medium border-border hover:border-primary/40 ${
              project.liveLink ? "flex-1" : "w-full"
            }`}
            asChild
          >
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Source Code of ${project.title} on GitHub`}
            >
              <Github className="h-3 w-3 mr-1" /> Source Code
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const { ref, visible } = useSectionReveal();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.technologies.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <section id="projects" className="py-12 sm:py-16 bg-secondary/10">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 section-animate ${visible ? "visible" : ""}`}
      >
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div>
            <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider block mb-1">
              Projects &amp; Systems
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Featured <span className="text-gradient">Work</span>
            </h2>
          </div>

          {/* Search & Categories Bar */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
              <Input
                type="text"
                placeholder="Search projects or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-7 h-9 text-xs bg-background border-border font-mono"
                aria-label="Search projects by title, description or technology"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-0.5"
                  aria-label="Clear search input"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div
              className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-none"
              role="tablist"
              aria-label="Project categories"
            >
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-all border font-mono ${
                      isSelected
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          ) : (
            <div className="max-w-sm mx-auto my-8 p-6 text-center rounded-xl bg-card border border-border shadow-card animate-fade-in">
              <h3 className="font-display text-sm font-bold mb-1">No matching projects found</h3>
              <p className="text-xs text-muted-foreground mb-4">
                No results found for "{searchQuery}".
              </p>
              <Button
                onClick={handleResetFilters}
                size="sm"
                className="glow-primary text-xs font-mono h-8"
              >
                Reset Search
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
