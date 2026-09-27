import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Server, Cloud, Wrench } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const Skills = () => {
  const { ref, visible } = useSectionReveal();

  const skillCategories = [
    {
      title: "Mobile & Frontend",
      icon: <Smartphone className="h-5 w-5" />,
      skills: ["React Native", "Expo", "TypeScript", "Next.js", "React", "TailwindCSS"],
    },
    {
      title: "Backend & Databases",
      icon: <Server className="h-5 w-5" />,
      skills: ["Node.js", "Supabase", "PostgreSQL", "REST APIs", "GraphQL", "Redis"],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-5 w-5" />,
      skills: ["Docker", "Vercel", "GitHub Actions", "AWS", "GCP", "Nginx"],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["Git", "GitHub", "Postman", "Figma", "VS Code", "Notion"],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 section-animate ${visible ? "visible" : ""}`}
      >
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Engineering <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm sm:text-base">
            The tools and platforms I rely on to ship reliable, production-grade software.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto stagger-children">
          {skillCategories.map((category) => (
            <Card key={category.title} className="card-elevated hover-lift">
              <CardContent className="p-5">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3">
                    {category.icon}
                  </div>
                  <h3 className="font-display text-sm sm:text-base font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-chip px-2.5 py-1 text-xs bg-secondary/60 rounded-md text-foreground/80 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
