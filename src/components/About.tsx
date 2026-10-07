export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 border-t border-border/60">
      <div className="portfolio-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Label / Heading Column (3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
              About
            </span>
          </div>

          {/* Editorial Content Column (9 cols) */}
          <div className="lg:col-span-9 space-y-8 max-w-[750px]">
            <div className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-foreground leading-snug">
                I build software that balances engineering rigor with thoughtful product design.
              </h2>
              <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
                I&rsquo;m a software developer and product builder focused on creating useful, well-designed software. I care about the details that make products simple to understand, fast to use, and reliable in production.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Rather than assembling disparate dependencies or chasing hype, my focus is on robust schema modeling, predictable application state, and shipping software that solves real operational bottlenecks.
              </p>
            </div>

            {/* 3 Editorial Facts — Clean typographic layout, no cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-border/50 text-xs">
              <div className="space-y-1">
                <span className="text-muted-foreground font-mono block">Location</span>
                <span className="text-foreground font-medium text-sm">Based in India</span>
                <p className="text-muted-foreground text-xs">Bangalore / Remote</p>
              </div>
              <div className="space-y-1">
                <span className="text-muted-foreground font-mono block">Current Venture</span>
                <span className="text-foreground font-medium text-sm">Building at Clykur</span>
                <p className="text-muted-foreground text-xs">Co-Founder &amp; Developer</p>
              </div>
              <div className="space-y-1">
                <span className="text-muted-foreground font-mono block">Mindset</span>
                <span className="text-foreground font-medium text-sm">Product + Engineering</span>
                <p className="text-muted-foreground text-xs">Full-cycle product delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
