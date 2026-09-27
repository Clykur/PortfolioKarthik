import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ExternalLink, Github, Search, X, FolderGit2, SearchX } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import resumeImg from "@/assets/resume-website.jpg";
import portfolioImg from "@/assets/portfolio-website.jpg";
import reactAppsImg from "@/assets/react-applications.jpg";
import bmiCalculatorImg from "@/assets/bmi-calculator.jpg";
import dataScienceImg from "@/assets/data-science-project.jpg";
import edgeDetectionImg from "@/assets/edge-detection.jpg";
import bouncingBallImg from "@/assets/bouncing-ball-game.jpg";
import workoutTrackerImg from "@/assets/workout-tracker.jpg";

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink: string;
  category: string;
  filterTag: "SaaS" | "Venture" | "Systems" | "Web" | "Game" | "Python" | "Research";
}

const projectsData: ProjectItem[] = [
  {
    title: "CusOwn",
    description: "Production SaaS — multi-tenant booking & scheduling platform with realtime slot management, analytics, and role-based access.",
    image: reactAppsImg,
    technologies: ["React Native", "TypeScript", "Supabase", "PostgreSQL"],
    liveLink: "https://cusown.clykur.com/",
    githubLink: "https://github.com/karthiknaramala9949",
    category: "SaaS · Flagship",
    filterTag: "SaaS",
  },
  {
    title: "Clykur",
    description: "Product engineering studio — shipping web & mobile products for startups and product teams with clear scope and steady delivery.",
    image: portfolioImg,
    technologies: ["Next.js", "TypeScript", "Vercel"],
    liveLink: "https://clykur.com/",
    githubLink: "https://github.com/karthiknaramala9949",
    category: "Venture",
    filterTag: "Venture",
  },
  {
    title: "Booking System Architecture",
    description: "Realtime slot orchestration, multi-tenant database design, and serverless backend powering CusOwn's reliability at scale.",
    image: dataScienceImg,
    technologies: ["Supabase", "PostgreSQL", "Edge Functions"],
    githubLink: "https://github.com/karthiknaramala9949",
    category: "Systems",
    filterTag: "Systems",
  },
  {
    title: "Online Resume",
    description: "Clean, semantic, responsive online resume showcasing experience, skills, and education.",
    image: resumeImg,
    technologies: ["HTML", "CSS"],
    githubLink: "https://github.com/karthiknaramala9949/resume",
    category: "Web",
    filterTag: "Web",
  },
  {
    title: "Workout Tracker",
    description: "Fitness web app to log workouts, monitor exercise progress, and track routines over time.",
    image: workoutTrackerImg,
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/karthiknaramala9949/Workout_Tracker",
    category: "Web",
    filterTag: "Web",
  },
  {
    title: "Bouncing Ball Game",
    description: "Interactive JavaScript arcade game with physics-based mechanics and score tracking on Canvas.",
    image: bouncingBallImg,
    technologies: ["JavaScript", "Canvas"],
    githubLink: "https://github.com/karthiknaramala9949/Bouncing_Ball_Game",
    category: "Game",
    filterTag: "Game",
  },
  {
    title: "BMI Calculator",
    description: "Body Mass Index calculator built in Jupyter with data analysis and health recommendations.",
    image: bmiCalculatorImg,
    technologies: ["Python", "Jupyter"],
    githubLink: "https://github.com/karthiknaramala9949/BMI_Calculator",
    category: "Python",
    filterTag: "Python",
  },
  {
    title: "DCT-FP Edge Detection",
    description: "Image processing research using DCT-FP fusion algorithms for enhanced edge detection in MATLAB.",
    image: edgeDetectionImg,
    technologies: ["MATLAB", "Image Processing"],
    githubLink: "https://github.com/karthiknaramala9949/Project_Code",
    category: "Research",
    filterTag: "Research",
  },
];

const categories = ["All", "SaaS", "Venture", "Systems", "Web", "Game", "Python", "Research"] as const;

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="card-elevated hover-lift overflow-hidden group flex flex-col h-full">
      <div className="relative overflow-hidden bg-muted/30 aspect-[16/10]">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-muted/60 animate-pulse flex items-center justify-center" />
        )}
        {imageError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-secondary/40 text-muted-foreground p-4 text-center">
            <FolderGit2 className="h-8 w-8 text-primary/60 mb-1" />
            <span className="text-xs font-medium">{project.title}</span>
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            width={640}
            height={400}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
        <Badge
          variant="secondary"
          className="absolute top-2.5 right-2.5 text-[10px] font-medium bg-background/90 text-foreground backdrop-blur-md border border-border/50 shadow-sm"
        >
          {project.category}
        </Badge>
      </div>

      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-base font-display font-semibold leading-snug group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-4 pt-0 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-muted-foreground text-xs sm:text-sm mb-3.5 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2 py-0.5 rounded bg-secondary/80 text-foreground/80 font-mono border border-border/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-2 pt-2 border-t border-border/40">
          {project.liveLink && (
            <Button size="sm" className="flex-1 h-8 text-xs glow-primary" asChild>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3 mr-1.5" /> Live
              </a>
            </Button>
          )}
          <Button
            size="sm"
            variant="outline"
            className={`h-8 text-xs ${project.liveLink ? "flex-1" : "w-full"}`}
            asChild
          >
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="h-3 w-3 mr-1.5" /> Source
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
        selectedCategory === "All" || project.filterTag === selectedCategory;
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
    <section id="projects" className="py-16 sm:py-24 bg-secondary/10">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 section-animate ${visible ? "visible" : ""}`}
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-medium uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
            Portfolio Showcase
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm sm:text-base">
            Real production SaaS, mobile applications, system architectures & research code.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="max-w-4xl mx-auto mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                type="text"
                placeholder="Search projects or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-8 h-9 text-xs sm:text-sm bg-background/80 border-border"
                aria-label="Search projects by title, description or technology"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-0.5"
                  aria-label="Clear search query"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Results Count */}
            <div className="text-xs text-muted-foreground whitespace-nowrap self-end sm:self-center">
              Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span> of{" "}
              {projectsData.length} projects
            </div>
          </div>

          {/* Category Filter Pills */}
          <div
            className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none"
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
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 border ${
                    isSelected
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-background/80 text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid OR Empty State */}
        {filteredProjects.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
          /* Dedicated No Search Results State */
          <div className="max-w-md mx-auto my-12 p-8 text-center rounded-2xl bg-card border border-border shadow-sm animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <SearchX className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold mb-2">No matching projects found</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-6 leading-relaxed">
              {searchQuery ? (
                <>
                  No results found for <span className="font-semibold text-foreground">"{searchQuery}"</span>
                  {selectedCategory !== "All" && ` in category "${selectedCategory}"`}.
                </>
              ) : (
                <>No projects found in category "{selectedCategory}".</>
              )}
              <br />
              Try searching for a different skill or reset all filters.
            </p>
            <Button onClick={handleResetFilters} size="sm" variant="default" className="glow-primary text-xs">
              <X className="h-3.5 w-3.5 mr-1.5" />
              Reset Search & Filters
            </Button>
          </div>
        )}

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="h-11 text-sm border-border hover:border-primary/50" asChild>
            <a href="https://github.com/karthiknaramala9949" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All Repositories on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
