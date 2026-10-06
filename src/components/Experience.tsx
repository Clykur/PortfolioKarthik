import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const Experience = () => {
  const { ref, visible } = useSectionReveal();

  const experiences = [
    {
      title: "Co-founder & Software Engineer",
      company: "Clykur",
      location: "Bangalore, India",
      duration: "Present",
      type: "Venture",
      description: [
        "Co-founded Clykur — a product engineering studio shipping web and mobile systems.",
        "Architected multi-tenant SaaS foundations, database schemas, and edge routing layers.",
        "Set production standards across React Native, TypeScript, Next.js, and Supabase.",
      ],
      technologies: ["React Native", "TypeScript", "Next.js", "Supabase", "PostgreSQL", "Docker"],
    },
    {
      title: "Mobile & Systems Engineer — CusOwn",
      company: "Clykur Suite",
      location: "Bangalore, India",
      duration: "Present",
      type: "Product",
      description: [
        "Architecting CusOwn, a production multi-tenant scheduling & booking platform.",
        "Designed realtime slot reservation logic, PostgreSQL Row-Level Security, and automated alerts.",
        "Engineered fluid, offline-resilient mobile experiences using React Native and Expo.",
      ],
      technologies: ["React Native", "Expo", "TypeScript", "PostgreSQL", "Supabase Realtime"],
    },
    {
      title: "Data Science Intern",
      company: "YBI Foundation",
      location: "Remote",
      duration: "2024",
      type: "Internship",
      description: [
        "Completed machine learning workflows and exploratory data analysis pipelines in Python.",
        "Implemented statistical data analysis, regression modeling, and performance evaluation.",
        "Authored structured data processing scripts with Pandas, NumPy, and Scikit-learn.",
      ],
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Jupyter"],
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 bg-secondary/10 border-t border-border/50">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 section-animate ${visible ? "visible" : ""}`}
      >
        <div className="max-w-6xl mx-auto space-y-6">
          <div>
            <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider block mb-1">
              Background &amp; Track
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Experience &amp; <span className="text-gradient">Education</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Work Track (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              <h3 className="font-display text-sm font-bold text-foreground">
                Professional Track
              </h3>
              {experiences.map((exp, index) => (
                <Card key={index} className="card-elevated hover-lift border border-border/80">
                  <CardHeader className="p-4 pb-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <CardTitle className="text-sm font-display font-bold text-foreground">
                          {exp.title}
                        </CardTitle>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5 text-[11px] text-muted-foreground font-mono">
                          <span className="font-semibold text-foreground/90">{exp.company}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                          <span>•</span>
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-[10px] font-mono shrink-0 border-primary/30 text-primary py-0">
                        {exp.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-1 space-y-2">
                    <ul className="space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start text-xs leading-normal">
                          <span className="text-primary mr-1.5 mt-0.5 text-xs">▸</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1 pt-1 border-t border-border/40">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-secondary/80 text-foreground border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Education (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <h3 className="font-display text-sm font-bold text-foreground">
                Education &amp; Competencies
              </h3>

              <Card className="card-elevated hover-lift border border-border/80">
                <CardHeader className="p-4 pb-1.5">
                  <CardTitle className="text-sm font-display font-bold">
                    B.Tech — Computer Science &amp; Engineering
                  </CardTitle>
                  <div className="flex items-center gap-2 mt-0.5 text-[11px] text-muted-foreground font-mono">
                    <span>Andhra Pradesh, India</span>
                    <span>•</span>
                    <span>2022 – 2026</span>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-1">
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-1.5 mt-0.5 text-xs">▸</span>
                      <span>Core: Distributed Systems, Database Management, Data Structures, Networks.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-1.5 mt-0.5 text-xs">▸</span>
                      <span>Research: DCT-FP image fusion algorithms for edge detection in MATLAB.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-1.5 mt-0.5 text-xs">▸</span>
                      <span>Focus: Multi-tenant SaaS architectures, mobile systems, and Supabase backends.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-elevated border border-border/80">
                <CardContent className="p-4 space-y-2">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary block">
                    Core Focus
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      "Multi-Tenant SaaS",
                      "Mobile Systems",
                      "Supabase Realtime",
                      "PostgreSQL RLS",
                      "Edge Deployments",
                      "Clean Architecture",
                    ].map((item) => (
                      <div
                        key={item}
                        className="text-[11px] font-mono p-1.5 rounded bg-secondary/50 text-foreground border border-border/60 text-center"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
