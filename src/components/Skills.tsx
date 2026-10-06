import { Card, CardContent } from "@/components/ui/card";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const Skills = () => {
  const { ref, visible } = useSectionReveal();

  const stackGroups = [
    {
      category: "Frontend & Mobile",
      tag: "Client-Side",
      skills: [
        { name: "React Native", level: "Primary", highlight: true },
        { name: "Expo", level: "Ecosystem", highlight: true },
        { name: "TypeScript", level: "Core", highlight: true },
        { name: "React", level: "Core", highlight: true },
        { name: "Next.js", level: "Fullstack", highlight: false },
        { name: "TailwindCSS", level: "Styling", highlight: false },
      ],
    },
    {
      category: "Backend & Databases",
      tag: "Data & Systems",
      skills: [
        { name: "Supabase", level: "Primary BaaS", highlight: true },
        { name: "PostgreSQL", level: "Relational", highlight: true },
        { name: "Node.js", level: "Runtime", highlight: true },
        { name: "REST / GraphQL", level: "API Layer", highlight: false },
        { name: "Realtime WS", level: "Pub/Sub", highlight: true },
        { name: "Edge Functions", level: "Serverless", highlight: false },
      ],
    },
    {
      category: "Infrastructure & DevOps",
      tag: "Operations",
      skills: [
        { name: "Docker", level: "Containers", highlight: true },
        { name: "Vercel", level: "Edge Hosting", highlight: true },
        { name: "Git & Actions", level: "CI/CD", highlight: true },
        { name: "Postman", level: "Testing", highlight: false },
        { name: "Linux / Bash", level: "Environment", highlight: false },
        { name: "PostgreSQL RLS", level: "Security", highlight: true },
      ],
    },
    {
      category: "Architecture & Systems",
      tag: "Methodology",
      skills: [
        { name: "Multi-Tenant SaaS", level: "Pattern", highlight: true },
        { name: "Row-Level Security", level: "Data Safety", highlight: true },
        { name: "Optimistic State", level: "Sync", highlight: false },
        { name: "Offline-First UX", level: "Mobile", highlight: true },
        { name: "Design Systems", level: "Components", highlight: false },
        { name: "Clean Architecture", level: "Principles", highlight: false },
      ],
    },
  ];

  return (
    <section id="stack" className="py-12 sm:py-16">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 section-animate ${visible ? "visible" : ""}`}
      >
        <div className="max-w-6xl mx-auto space-y-6">
          <div>
            <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider block mb-1">
              Engineering Stack
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Technologies &amp; <span className="text-gradient">Capabilities</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stackGroups.map((group, idx) => (
              <Card
                key={idx}
                className="card-elevated hover-lift border border-border/80 flex flex-col justify-between"
              >
                <CardContent className="p-4 flex flex-col justify-between h-full space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-border/60">
                    <h3 className="font-display text-sm font-bold text-foreground">
                      {group.category}
                    </h3>
                    <span className="text-[10px] font-mono text-muted-foreground">
                      {group.tag}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 pt-1">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`p-1.5 rounded border text-left flex flex-col justify-between ${
                          skill.highlight
                            ? "bg-primary/5 border-primary/30 text-foreground"
                            : "bg-secondary/40 border-border/60 text-foreground/80"
                        }`}
                      >
                        <span className="text-[11px] font-semibold font-mono truncate">
                          {skill.name}
                        </span>
                        <span className="text-[9px] text-muted-foreground font-mono truncate">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
