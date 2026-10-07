interface Principle {
  step: string;
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    step: "01",
    title: "Understand the problem",
    description:
      "Code is an operational liability. Dig into the root operational friction, business constraints, and real user requirements before architecting solutions.",
  },
  {
    step: "02",
    title: "Build the simplest useful version",
    description:
      "Avoid premature abstraction. Engineer a robust, focused foundation with strong schema invariants and predictable data flow, then expand incrementally.",
  },
  {
    step: "03",
    title: "Ship",
    description:
      "Real software running in production beats theoretical perfection. Deploy early with automated testing, telemetry, and predictable rollbacks.",
  },
  {
    step: "04",
    title: "Learn from feedback",
    description:
      "Listen to user behavior and monitor production telemetry. Real interaction patterns reveal the actual bottlenecks that matter.",
  },
  {
    step: "05",
    title: "Iterate",
    description:
      "Refine performance, accessibility, and reliability with relentless craft. Great products are the outcome of consistent, disciplined compound improvements.",
  },
];

export const Principles = () => {
  return (
    <section id="principles" className="py-20 lg:py-28 border-t border-border/60">
      <div className="portfolio-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Label (3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
              How I Build
            </span>
          </div>

          {/* Typographic Philosophy (9 cols) */}
          <div className="lg:col-span-9 space-y-8 max-w-[800px]">
            <div className="space-y-6">
              {principles.map((item) => (
                <div
                  key={item.step}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 pb-6 border-b border-border/40 last:border-0 last:pb-0 items-baseline"
                >
                  <span className="sm:col-span-1 text-xs font-mono text-muted-foreground/80">
                    {item.step}
                  </span>
                  <div className="sm:col-span-11 space-y-1">
                    <h3 className="font-display text-base sm:text-lg font-semibold text-foreground tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
