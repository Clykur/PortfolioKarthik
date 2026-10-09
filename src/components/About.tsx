export const About = () => {
  return (
    <section className="section" id="about">
      <h2 className="section-lead-title">EDITORIAL &amp; BACKGROUND</h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Lead Editorial Article (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="font-headline text-xl sm:text-2xl font-bold text-[var(--ink-primary)] leading-snug">
            I build software that balances engineering rigor with thoughtful product design.
          </h3>

          <div className="article-content space-y-3">
            <p>
              I&rsquo;m a software developer and product builder focused on creating useful, well-designed software.
              I care about the details that make products simple to understand, fast to use, and reliable in production.
            </p>
            <p>
              Rather than assembling disparate dependencies or chasing hype, my focus is on robust schema modeling,
              predictable application state, and shipping software that solves real operational bottlenecks.
            </p>
          </div>
        </div>

        {/* Right Column: In Brief Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="quick-news-item">
            <h4 className="quick-news-title">Location &amp; Availability</h4>
            <p>
              Based in India · Bangalore / Remote. Open to technical architecture, product engineering, and founding engineer collaborations worldwide.
            </p>
          </div>

          <div className="quick-news-item">
            <h4 className="quick-news-title">Current Venture</h4>
            <p>
              Building at Clykur · Co-Founder &amp; Developer. Operating across client and studio products from specification to deployment.
            </p>
          </div>

          <div className="quick-news-item">
            <h4 className="quick-news-title">Engineering Mindset</h4>
            <p>
              Product + Engineering · Full-cycle product delivery from schema invariants and API contracts to responsive user interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
