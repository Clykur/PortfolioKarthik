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
    category: "Frontend Systems",
    items: ["React", "Next.js", "React Native", "Tailwind CSS"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Express", "REST APIs", "Edge Functions"],
  },
  {
    category: "Database & Cloud",
    items: ["PostgreSQL", "Supabase", "Cloudflare", "Docker"],
  },
  {
    category: "Tooling & Environment",
    items: ["Git", "GitHub", "Vite", "Linux"],
  },
];

export const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2 className="section-lead-title">TECHNICAL CAPABILITIES &amp; ARCHITECTURE STACK</h2>

      <div className="business-skills-grid">
        {skillsData.map((cat) => (
          <div key={cat.category} className="business-skill-card">
            <h4>{cat.category}</h4>
            <p>{cat.items.join(" • ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
