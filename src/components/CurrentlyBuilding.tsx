import { ArrowUpRight } from "lucide-react";

export const CurrentlyBuilding = () => {
  return (
    <section id="building" className="py-16 lg:py-24 border-t border-border/60">
      <div className="portfolio-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Label (3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
              Currently Building
            </span>
          </div>

          {/* Details (9 cols) */}
          <div className="lg:col-span-9 space-y-8 max-w-[800px]">
            {/* Primary Studio: Clykur */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-8 border-b border-border/40">
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    Clykur
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono text-muted-foreground bg-secondary/80 border border-border/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Company Site
                  </span>
                </div>
                <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                  My product and engineering studio focused on building real software. Shipping production web applications, multi-tenant architectures, and bespoke digital platforms for founders and businesses.
                </p>
              </div>

              <a
                href="https://www.clykur.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline shrink-0 pt-1"
              >
                <span>Visit Clykur</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
              </a>
            </div>

            {/* Active SaaS Venture: CusOwn */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-2">
                  <h4 className="font-display text-lg sm:text-xl font-bold tracking-tight text-foreground">
                    CusOwn
                  </h4>
                  <span className="text-xs text-muted-foreground font-mono">
                    · Slot Booking Platform
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Production multi-tenant slot booking and appointment scheduling platform with realtime slot orchestration, PostgreSQL Row-Level Security, and offline-first client architecture.
                </p>
              </div>

              <a
                href="https://cusown.clykur.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline shrink-0 pt-1"
              >
                <span>Visit CusOwn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
