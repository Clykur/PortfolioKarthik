interface SkillCategory {
  category: string;
  items: string[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "React Native", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Edge Functions"],
  },
  {
    category: "Database & Cloud",
    items: ["PostgreSQL", "Supabase", "Cloudflare", "Docker"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Vite", "Linux"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-28 border-t border-border/60">
      <div className="portfolio-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Label (3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
              Skills
            </span>
          </div>

          {/* Clean Categorized Technical Capabilities (9 cols) */}
          <div className="lg:col-span-9 space-y-6 max-w-[800px]">
            <div className="space-y-6">
              {skillsData.map((cat) => (
                <div
                  key={cat.category}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 pb-5 border-b border-border/40 last:border-0 last:pb-0 items-baseline"
                >
                  <h3 className="sm:col-span-4 text-sm font-semibold text-foreground tracking-tight">
                    {cat.category}
                  </h3>
                  <p className="sm:col-span-8 text-xs sm:text-sm font-mono text-muted-foreground leading-relaxed">
                    {cat.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
