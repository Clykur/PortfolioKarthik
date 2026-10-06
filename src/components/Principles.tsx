import { Card, CardContent } from "@/components/ui/card";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const principles = [
  {
    num: "01",
    title: "Solve Real Problems First",
    detail: "Code is a liability; solving user friction reliably is the only metric that matters.",
  },
  {
    num: "02",
    title: "Reliability Over Hype",
    detail: "Battle-tested foundations (PostgreSQL, TypeScript, strong schemas) outlive ephemeral trends.",
  },
  {
    num: "03",
    title: "Performance is a Feature",
    detail: "Low latency, instant queries, and lean bundles directly drive user trust and retention.",
  },
  {
    num: "04",
    title: "Good UX is Engineering",
    detail: "Fluid micro-interactions, zero layout shifts, and predictable state transitions define quality.",
  },
  {
    num: "05",
    title: "Simple Beats Clever",
    detail: "Readable, maintainable code with clear boundaries beats overly complex abstractions.",
  },
  {
    num: "06",
    title: "Ship & Iterate Rapidly",
    detail: "Real production feedback from live users is worth more than months of unvalidated speculation.",
  },
  {
    num: "07",
    title: "Data Integrity is Sacred",
    detail: "Enforce invariants at the database level with strict constraints, foreign keys, and RLS.",
  },
  {
    num: "08",
    title: "Build for Scalable Growth",
    detail: "Decouple modules cleanly so the system can scale effortlessly without massive rewrites.",
  },
];

const Principles = () => {
  const { ref, visible } = useSectionReveal();

  return (
    <section id="principles" className="py-12 sm:py-16">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 section-animate ${visible ? "visible" : ""}`}
      >
        <div className="max-w-6xl mx-auto space-y-6">
          <div>
            <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider block mb-1">
              Engineering Mindset
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Core <span className="text-gradient">Principles</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {principles.map((p) => (
              <Card
                key={p.num}
                className="card-elevated hover-lift border border-border/80 flex flex-col justify-between"
              >
                <CardContent className="p-4 flex flex-col justify-between h-full space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-primary px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20">
                      {p.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xs font-bold text-foreground mb-1 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      {p.detail}
                    </p>
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

export default Principles;
