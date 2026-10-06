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
  Layers,
  Sparkles,
} from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import {
  ProjectItem,
  PROJECT_CATEGORIES,
  projectsData,
} from "@/data/projects";

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const statusVariantMap: Record<string, string> = {
    "Active Production": "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    "Deployed": "border-blue-500/30 text-blue-400 bg-blue-500/10",
    "Open Source": "border-amber-500/30 text-amber-400 bg-amber-500/10",
    "Completed": "border-muted-foreground/30 text-muted-foreground bg-muted/40",
  };

  return (
    <Card className="card-elevated hover-lift overflow-hidden group flex flex-col h-full border border-border/80 transition-all duration-300">
      {/* Thumbnail */}
      <div className="relative overflow-hidden bg-muted/20 aspect-[16/9] border-b border-border/60">
        {!imageLoaded && !imageError && project.image && (
          <div className="absolute inset-0 bg-muted/40 animate-pulse flex items-center justify-center" />
        )}
        
        {project.image && !imageError ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            width={480}
            height={270}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-secondary/50 via-background to-muted/40 p-4 text-center">
            <Layers className="h-8 w-8 text-primary/40 mb-2 group-hover:text-primary/70 transition-colors" />
            <span className="text-xs font-mono font-semibold text-foreground/80">{project.title}</span>
            <span className="text-[10px] font-mono text-muted-foreground mt-0.5">{project.category}</span>
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-2 left-2 flex items-center gap-1.5">
          {project.featured && (
            <Badge
              variant="secondary"
              className="text-[9px] font-mono font-medium bg-primary/20 text-primary border border-primary/40 backdrop-blur-md py-0 px-1.5 flex items-center gap-1"
            >
              <Sparkles className="h-2.5 w-2.5" /> Featured
            </Badge>
          )}
        </div>

        <Badge
          variant="outline"
          className={`absolute top-2 right-2 text-[9px] font-mono font-medium backdrop-blur-md py-0 px-1.5 ${
            statusVariantMap[project.status] || "bg-background/90 text-foreground"
          }`}
        >
          {project.status}
        </Badge>
      </div>

      <CardHeader className="p-4 pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base font-display font-bold group-hover:text-primary transition-colors leading-snug">
            {project.title}
          </CardTitle>
          <span className="text-[10px] font-mono text-muted-foreground shrink-0 mt-0.5">
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
        <div className="flex items-center gap-2 pt-2.5 border-t border-border/50">
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
            className={`h-7 text-[11px] font-medium border-border hover:border-primary/40 hover:bg-secondary/50 ${
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
              <Github className="h-3 w-3 mr-1" /> {project.liveLink ? "Source" : "View on GitHub"}
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
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider block mb-1">
                Projects &amp; Systems
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Featured <span className="text-gradient">Work</span>
              </h2>
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              Showing {filteredProjects.length} of {projectsData.length} projects
            </span>
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
              {PROJECT_CATEGORIES.map((cat) => {
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
                No results found for &ldquo;{searchQuery}&rdquo;.
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
