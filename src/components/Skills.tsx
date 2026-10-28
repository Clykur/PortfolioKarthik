interface SkillCategory {
  category: string;
  items: string[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Languages & Enterprise",
    items: ["SAP ABAP", "ABAP on HANA", "TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Enterprise Systems",
    items: ["SAP S/4HANA", "CDS Views", "AMDP", "Data Pushdown", "SAP NetWeaver"],
  },
  {
    category: "Frontend & Mobile",
    items: ["React", "Next.js", "React Native", "Expo", "Tailwind CSS"],
  },
  {
    category: "Backend & Databases",
    items: ["SAP HANA", "PostgreSQL", "Supabase", "Node.js", "REST APIs"],
  },
  {
    category: "DevOps & Tooling",
    items: ["Git", "GitHub", "Docker", "Vite", "Linux", "Cloudflare"],
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
