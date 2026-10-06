import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import reactAppsImg from "@/assets/react-applications.jpg";

const CurrentlyBuilding = () => {
  const { ref, visible } = useSectionReveal();

  const highlights = [
    {
      title: "Multi-tenant Isolation",
      desc: "PostgreSQL Row-Level Security (RLS) policies ensuring strict organizational data partitioning.",
    },
    {
      title: "Realtime Slot Engine",
      desc: "Supabase Realtime channels with optimistic concurrency to prevent double bookings.",
    },
    {
      title: "Mobile Client UX",
      desc: "Native-grade fluid gestures and offline-first cache built with React Native & Expo.",
    },
    {
      title: "Granular RBAC",
      desc: "Role-based staff management, schedule rules, and customer self-service workflows.",
    },
  ];

  return (
    <section id="building" className="py-12 sm:py-16 bg-secondary/15 border-y border-border/50">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 section-animate ${visible ? "visible" : ""}`}
      >
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Section Header */}
          <div>
            <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider block mb-1">
              Currently Building
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Active System <span className="text-gradient">Spotlight</span>
            </h2>
          </div>

          {/* Spotlight Card */}
          <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
            {/* Header bar */}
            <div className="p-4 sm:p-5 border-b border-border/70 flex flex-wrap items-center justify-between gap-3 bg-muted/20">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                    CusOwn
                  </h3>
                  <Badge variant="outline" className="text-[10px] font-mono border-primary/40 text-primary py-0">
                    Production SaaS
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                  Multi-tenant Booking &amp; Scheduling Infrastructure
                </p>
              </div>

              <Button size="sm" className="glow-primary text-xs h-8 px-3.5" asChild>
                <a
                  href="https://cusown.clykur.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit CusOwn Platform"
                >
                  Live Platform <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </Button>
            </div>

            {/* Content grid */}
            <div className="grid lg:grid-cols-12 gap-6 p-5 sm:p-6">
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <h4 className="font-mono text-[11px] text-primary uppercase tracking-wider mb-1">
                    Scope &amp; Purpose
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                    A unified multi-tenant scheduling engine for appointment-driven businesses. Eliminates calendar fragmentation, manual booking friction, and slot race conditions with realtime synchronization and automated notifications.
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-[11px] text-primary uppercase tracking-wider mb-2">
                    Architecture Highlights
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-secondary/40 border border-border/60"
                      >
                        <h5 className="font-display text-xs font-semibold text-foreground mb-1">
                          {item.title}
                        </h5>
                        <p className="text-[11px] text-muted-foreground leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Specs */}
                <div>
                  <h4 className="font-mono text-[11px] text-primary uppercase tracking-wider mb-1.5">
                    Stack &amp; Constraints
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "React Native",
                      "Expo",
                      "TypeScript",
                      "Supabase Realtime",
                      "PostgreSQL RLS",
                      "Edge Functions",
                      "Docker",
                      "Vercel",
                    ].map((spec) => (
                      <span
                        key={spec}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-secondary/60 text-foreground border border-border/60"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
                <div className="relative rounded-lg overflow-hidden border border-border bg-muted/40 aspect-[16/10]">
                  <img
                    src={reactAppsImg}
                    alt="CusOwn Booking Interface"
                    width={500}
                    height={312}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 text-white backdrop-blur-md border border-white/20">
                    cusown.clykur.com
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-secondary/40 border border-border/70 font-mono text-[11px] space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Platform</span>
                    <span className="text-foreground font-medium">iOS · Android · Web</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Concurrency</span>
                    <span className="text-foreground font-medium">Optimistic Lock + WS</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Deployment</span>
                    <span className="text-emerald-500 font-semibold">Live Production</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
