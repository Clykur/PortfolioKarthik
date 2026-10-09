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
    <section className="section" id="experience">
      <h2 className="section-lead-title">COMMERCIAL &amp; FOUNDING EXPERIENCE</h2>

      <div className="business-stream">
        <div className="business-section">
          {experiences.map((exp) => (
            <article className="business-item" key={exp.company} id={exp.company.toLowerCase()}>
              <div className="business-item-header">
                <h3 className="business-headline">
                  {exp.role} — {exp.company}
                </h3>
                <span className="business-meta">
                  {exp.period} · {exp.location} | Full-cycle Production Delivery
                </span>
              </div>

              <p className="business-content">
                {exp.summary}
              </p>

              <ul className="business-bullet-list">
                {exp.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="pt-2">
                <span className="font-mono text-[0.72rem] text-[var(--ink-muted)]">
                  Stack: {exp.tech.join(" · ")}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Education Section */}
        <div className="business-section">
          <h3 className="subsection-title">Education</h3>
          <div className="business-education-card">
            <h4 className="business-headline">
              Bachelor of Technology in Computer Science &amp; Engineering
            </h4>
            <span className="education-meta">
              2022 — 2026 | Undergraduate Degree
            </span>
            <p className="business-content">
              Focus on distributed systems, relational database engines, algorithms, and networked software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
