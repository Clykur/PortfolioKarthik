import { useState } from "react";
import { ArrowUpRight, Github, ChevronDown, ChevronUp } from "lucide-react";
import { selectedProjects, ProjectItem } from "@/data/projects";

export const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});

  const toggleProject = (title: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <section className="section projects" id="work">
      <div id="projects">
        <h2 className="section-lead-title">SELECTED WORK &amp; PRODUCTION SYSTEMS</h2>
        <p className="font-body text-[var(--ink-secondary)] text-[0.98rem] mb-6">
          A curated selection of production web applications, multi-tenant architectures, and systems engineered from idea to scale.
        </p>

        <div className="space-y-6">
          {selectedProjects.map((project: ProjectItem) => {
            const isExpanded = !!expandedProjects[project.title];
            const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

            return (
              <article className="project-card" id={slug} key={project.title}>
                <div className="project-header">
                  <h3 className="project-title">{project.title} — {project.category}</h3>
                  <div className="project-meta">
                    <span className="project-type">{project.category}</span>
                    <span className="project-status">
                      {project.liveLink ? "Live Platform" : "Production System"}
                    </span>
                    <span className="font-mono text-[0.7rem] text-[var(--ink-muted)]">
                      {project.technologies.slice(0, 3).join(" • ")}
                    </span>
                  </div>
                </div>

                {/* Screenshot image framed in broadsheet newsprint style */}
                <div className="project-image-preview">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    decoding="async"
                    width={1100}
                    height={600}
                    className="w-full h-auto object-cover object-top filter contrast-[1.02]"
                  />
                </div>

                <div className="project-framework">
                  <p>
                    <strong>Overview:</strong> {project.description}
                  </p>
                  <p>
                    <strong>Problem &amp; Purpose:</strong> {project.purpose}
                  </p>
                  <p>
                    <strong>Technologies:</strong>{" "}
                    <span className="font-mono text-[0.85rem] text-[var(--ink-primary)]">
                      {project.technologies.join(" · ")}
                    </span>
                  </p>
                </div>

                {/* Actions Bar */}
                <div className="project-actions">
                  <button
                    type="button"
                    onClick={() => toggleProject(project.title)}
                    className="read-more-btn"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? "Hide Architecture" : "Technical Architecture"}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="read-more-btn"
                      aria-label={`Live Demo of ${project.title}`}
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="read-more-btn"
                      aria-label={`Source code of ${project.title} on GitHub`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>
                  )}
                </div>

                {/* Expandable Technical Details Drawer */}
                <div className={`proposal-full ${isExpanded ? "expanded" : ""}`}>
                  <div className="project-info-grid">
                    <div className="project-info-item">
                      <h4 className="info-label">Domain</h4>
                      <p>{project.category}</p>
                    </div>
                    <div className="project-info-item">
                      <h4 className="info-label">Primary Stack</h4>
                      <p>{project.technologies[0]} &amp; {project.technologies[1] || "TypeScript"}</p>
                    </div>
                    <div className="project-info-item">
                      <h4 className="info-label">Core Engine</h4>
                      <p>{project.technologies.includes("PostgreSQL") ? "PostgreSQL & Supabase" : "Modular Client & Server"}</p>
                    </div>
                    <div className="project-info-item">
                      <h4 className="info-label">Deployment</h4>
                      <p>{project.liveLink ? "Cloud Production" : "Monorepo Artifact"}</p>
                    </div>
                  </div>

                  <h4 className="subsection-headline">Technical Highlights &amp; Invariants</h4>
                  <ul className="proposal-list">
                    <li>
                      <strong>System Purpose:</strong> {project.purpose}
                    </li>
                    <li>
                      <strong>Production Stack:</strong> {project.technologies.join(", ")}.
                    </li>
                    <li>
                      <strong>Verification &amp; Delivery:</strong> Complete typed contracts, defensive schema boundaries, and responsive client interfaces.
                    </li>
                  </ul>

                  <div className="proposal-actions-close">
                    <button
                      type="button"
                      onClick={() => toggleProject(project.title)}
                      className="read-less-btn"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
