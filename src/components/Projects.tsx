import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { selectedProjects, ProjectItem } from "@/data/projects";

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className="group flex flex-col space-y-4">
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg bg-secondary/30 border border-border/80 aspect-[16/9]">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          decoding="async"
          width={720}
          height={450}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.015] filter contrast-[1.02] ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Project Content & Typography */}
      <div className="space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          {/* Header & Category */}
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-mono text-muted-foreground shrink-0">
              {project.category}
            </span>
          </div>

          {/* Short description */}
          <p className="text-sm sm:text-[15px] text-foreground/90 font-normal leading-relaxed">
            {project.description}
          </p>

          {/* Problem & Purpose */}
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1 border-t border-border/40">
            <strong className="font-medium text-foreground/80">Purpose:</strong> {project.purpose}
          </p>
        </div>

        <div className="space-y-3 pt-2">
          {/* Tech stack */}
          <p className="text-xs font-mono text-muted-foreground/80">
            {project.technologies.join(" · ")}
          </p>

          {/* Links */}
          <div className="flex items-center gap-5 pt-1 text-xs font-medium">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live Demo of ${project.title}`}
                className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
              </a>
            )}

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Source code of ${project.title} on GitHub`}
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export const Projects = () => {
  return (
    <section id="work" className="py-24 lg:py-32 border-t border-border/60">
      <div id="projects" className="portfolio-wrap space-y-14 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-2 max-w-[700px]">
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
            Selected Work
          </span>
          <h2 className="font-display text-[clamp(1.85rem,3.2vw,2.75rem)] font-bold tracking-tight text-foreground leading-tight">
            Production Software &amp; Systems
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            A curated selection of production web applications, multi-tenant architectures, and systems engineered from idea to scale.
          </p>
        </div>

        {/* Wide 2-Column Desktop Grid (using ~95% viewport width) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
