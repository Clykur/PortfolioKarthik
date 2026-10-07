interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  achievements: string[];
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: "2024 — Present",
    company: "Clykur",
    role: "Co-Founder / Software Developer",
    location: "Bangalore, India",
    summary:
      "Co-founded Clykur, a digital product engineering studio. Leading technical architecture across client and studio products from specification to deployment.",
    achievements: [
      "Architected production web and mobile systems utilizing React Native, Next.js, Supabase, and PostgreSQL.",
      "Established multi-tenant schema models, Row-Level Security policies, and low-latency API contracts.",
      "Engineered full deployment pipelines with automated previews, containerization via Docker, and continuous integration.",
    ],
    tech: ["TypeScript", "React Native", "Next.js", "Supabase", "PostgreSQL", "Docker"],
  },
  {
    period: "2024 — Present",
    company: "CusOwn",
    role: "Mobile & Systems Engineer",
    location: "Bangalore, India",
    summary:
      "Engineering CusOwn, a production scheduling and booking SaaS engineered for service business operations.",
    achievements: [
      "Engineered an optimistic concurrency slot reservation engine eliminating double-booking collisions under high concurrent load.",
      "Implemented resilient offline-first mobile synchronization leveraging Supabase Realtime and local persistent stores.",
      "Designed automated transactional notification triggers across email and SMS workflows.",
    ],
    tech: ["React Native", "Expo", "TypeScript", "PostgreSQL", "Supabase Realtime"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 border-t border-border/60">
      <div className="portfolio-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Section Header (3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
              Experience
            </span>
          </div>

          {/* Editorial Timeline (9 cols) */}
          <div className="lg:col-span-9 space-y-12 max-w-[800px]">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="space-y-4 pb-10 border-b border-border/40 last:border-0 last:pb-0"
              >
                {/* Header row: Dates, Role, Company */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-semibold tracking-tight text-foreground">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mt-0.5">
                      <span className="text-foreground font-semibold">{exp.company}</span>
                      <span>·</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground shrink-0 mt-1 sm:mt-0">
                    {exp.period}
                  </span>
                </div>

                {/* Summary */}
                <p className="text-sm text-foreground/85 leading-relaxed">
                  {exp.summary}
                </p>

                {/* 2-4 Meaningful achievements */}
                <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground list-disc list-inside marker:text-primary/70">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tech list */}
                <p className="text-xs font-mono text-muted-foreground/80 pt-1">
                  {exp.tech.join(" · ")}
                </p>
              </div>
            ))}

            {/* Education Note */}
            <div className="pt-8 border-t border-border/40 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
                Education
              </span>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                <div>
                  <span className="font-semibold text-foreground text-sm sm:text-base">
                    B.Tech in Computer Science &amp; Engineering
                  </span>
                  <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
                    Focus on distributed systems, relational database engines, algorithms, and networked software.
                  </p>
                </div>
                <span className="font-mono text-muted-foreground shrink-0 mt-1 sm:mt-0">
                  2022 — 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
