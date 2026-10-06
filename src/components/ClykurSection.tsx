import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const ClykurSection = () => {
  const { ref, visible } = useSectionReveal();

  const clykurPillars = [
    {
      title: "Product Engineering",
      desc: "Taking ambitious concepts from whiteboard architectures to robust, production mobile & web software.",
    },
    {
      title: "AI-Native Systems",
      desc: "Integrating intelligent pipelines, LLM-assisted tools, and realtime data channels into client applications.",
    },
    {
      title: "Reliable Infrastructure",
      desc: "Establishing strict database constraints, edge routing, Row-Level Security, and automated releases.",
    },
  ];

  return (
    <section id="clykur" className="py-12 sm:py-16 bg-secondary/15 border-y border-border/50">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 section-animate ${visible ? "visible" : ""}`}
      >
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider block mb-1">
                Studio &amp; Venture
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Building with <span className="text-gradient">Clykur</span>
              </h2>
            </div>

            <Button className="glow-primary text-xs font-mono h-8 px-3.5 self-start sm:self-auto" asChild>
              <a
                href="https://www.clykur.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Clykur Studio"
              >
                Visit Clykur.com <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </Button>
          </div>

          {/* Spotlight Card */}
          <Card className="card-elevated border border-border shadow-card overflow-hidden">
            <CardContent className="p-5 sm:p-6 space-y-4">
              <div className="grid sm:grid-cols-3 gap-3">
                {clykurPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-secondary/40 border border-border/60 space-y-1"
                  >
                    <h3 className="font-display text-xs sm:text-sm font-bold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] text-muted-foreground leading-normal">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-lg bg-secondary/30 border border-border/70 font-mono text-xs text-muted-foreground leading-relaxed space-y-1">
                <span className="text-foreground font-semibold block text-xs">
                  Role &amp; Responsibilities:
                </span>
                <p className="text-[11px] text-muted-foreground">
                  As co-founder, I lead technical scoping, mobile client architecture (React Native / Expo), multi-tenant backend foundations on Supabase &amp; PostgreSQL, and production release cycles.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ClykurSection;
