import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, GraduationCap } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const Experience = () => {
  const { ref, visible } = useSectionReveal();

  const experiences = [
    {
      title: "Co-founder & Software Engineer",
      company: "Clykur",
      location: "Bangalore, India",
      duration: "Present",
      type: "Founder",
      description: [
        "Co-founded Clykur — a product engineering studio shipping web and mobile products for startups and product teams.",
        "Lead end-to-end delivery: scope, architecture, build, and production rollout.",
        "Set engineering standards across React, Next.js, React Native, and Supabase.",
      ],
      technologies: ["Next.js", "React Native", "TypeScript", "Supabase", "Vercel"],
    },
    {
      title: "Mobile Engineer — CusOwn",
      company: "Clykur",
      location: "Remote",
      duration: "Present",
      type: "Product",
      description: [
        "Building CusOwn, a multi-tenant scheduling SaaS for service businesses.",
        "Architected realtime slot management, role-based access, and serverless backend on Supabase.",
        "Ship mobile-first UX with React Native, Expo, and TypeScript.",
      ],
      technologies: ["React Native", "Expo", "TypeScript", "PostgreSQL", "Docker"],
    },
    {
      title: "Data Science Intern",
      company: "YBI Foundation",
      location: "Remote",
      duration: "2024",
      type: "Internship",
      description: [
        "Completed hands-on projects in data analysis and machine learning.",
        "Worked with Pandas, NumPy, and Scikit-learn for predictive modelling.",
        "Produced data visualizations and statistical analysis reports.",
      ],
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 section-animate ${visible ? "visible" : ""}`}
      >
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm sm:text-base">
            Building ventures, shipping products, and learning along the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <Building className="h-4 w-4 text-primary" /> Experience
            </h3>
            {experiences.map((exp, index) => (
              <Card key={index} className="card-elevated hover-lift">
                <CardHeader className="p-4 sm:p-5 pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-base font-display">{exp.title}</CardTitle>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Building className="h-3 w-3" />{exp.company}</span>
                        <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{exp.location}</span>
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{exp.duration}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-[10px] shrink-0 border-primary/30 text-primary">{exp.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 pt-2">
                  <ul className="space-y-1.5 mb-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start text-xs sm:text-sm">
                        <span className="text-primary mr-2 mt-0.5 text-xs">▸</span>
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="text-[10px] px-2 py-0.5 rounded bg-secondary/80 text-foreground/70 border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-primary" /> Education
            </h3>
            <Card className="card-elevated hover-lift">
              <CardHeader className="p-4 sm:p-5 pb-2">
                <CardTitle className="text-base font-display">B.Tech — Computer Science</CardTitle>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />Andhra Pradesh, India</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />2022 – 2026</span>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-5 pt-2">
                <ul className="space-y-1.5">
                  {[
                    "Focus on software systems, mobile engineering, and databases.",
                    "Independent work on SaaS architecture and realtime systems.",
                    "Research: DCT-FP based edge detection (MATLAB).",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-xs sm:text-sm">
                      <span className="text-primary mr-2 mt-0.5 text-xs">▸</span>
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="card-elevated hover-lift">
              <CardContent className="p-4 sm:p-5">
                <h4 className="font-display text-sm font-semibold mb-3">Focus Areas</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Multi-tenant SaaS",
                    "Mobile systems",
                    "Realtime backends",
                    "Database architecture",
                    "Production deployment",
                    "UI consistency systems",
                  ].map((item) => (
                    <span key={item} className="text-xs px-2.5 py-1.5 rounded-md bg-secondary/60 text-foreground/80 border border-border text-center">
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="p-4 sm:p-5 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <p className="font-display text-sm font-semibold mb-1 text-foreground">Belief</p>
              <p className="text-xs sm:text-sm text-muted-foreground italic">
                "Reliable systems outlast clever tricks."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
