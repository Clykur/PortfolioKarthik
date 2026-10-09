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
    <section className="section" id="principles">
      <h2 className="section-lead-title">HOW I BUILD · EDITORIAL PRINCIPLES</h2>

      <div className="space-y-4">
        {principles.map((item) => (
          <article
            key={item.step}
            className="pb-4 border-b border-[var(--rule-hairline)] last:border-b-0 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline"
          >
            <span className="md:col-span-1 font-mono text-sm font-bold text-[var(--ink-muted)]">
              {item.step}
            </span>
            <div className="md:col-span-11 space-y-1">
              <h3 className="font-headline text-base sm:text-lg font-bold text-[var(--ink-primary)]">
                {item.title}
              </h3>
              <p className="font-body text-[var(--ink-secondary)] text-[0.95rem] leading-relaxed">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Principles;
