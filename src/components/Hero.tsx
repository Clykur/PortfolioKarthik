import heroImage from "@/assets/karthik-professional.png";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section front-page" id="hero">
      <div className="article centerpiece">
        {/* Headline & Hierarchy */}
        <h2 className="article-headline">
          Building Thoughtful Digital Products &amp; Production-Ready Web Applications
        </h2>

        {/* Editorial Byline & Dateline */}
        <div className="article-meta">
          <span className="byline">By Karthik Naramala</span>
          <span className="dateline">Bangalore, India · Available Worldwide</span>
          <span className="byline text-xs font-mono font-normal">Co-Founder @ Clykur</span>
        </div>

        {/* Content Body with Classical Floated Portrait & Drop-Cap */}
        <div className="article-content">
          <div className="profile-photo-container">
            <img
              src={heroImage}
              alt="Karthik Naramala"
              className="profile-photo"
              width={180}
              height={222}
              loading="eager"
            />
            <p className="photo-caption">Karthik Naramala</p>
          </div>

          <p className="drop-cap">
            I build thoughtful digital products, from interfaces to production-ready web applications. Co-founder at{" "}
            <a
              href="https://www.clykur.com"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link font-medium"
            >
              Clykur
            </a>
            , engineering scalable architectures with TypeScript, React Native, and Supabase.
          </p>

          <p>
            Rather than assembling disparate dependencies or chasing hype, my focus is on robust schema modeling,
            predictable application state, and shipping software that solves real operational bottlenecks. I care
            about the details that make products simple to understand, fast to use, and reliable in production.
          </p>

          <p>
            Operating across the entire product lifecycle—from user workflow architecture to high-concurrency database
            design and responsive interfaces—I build scalable web and mobile software. From architecting the
            multi-tenant slot booking infrastructure for{" "}
            <a href="#work" onClick={(e) => { e.preventDefault(); scrollTo("#work"); }} className="external-link">
              CusOwn
            </a>{" "}
            to building early-stage founder financial systems with{" "}
            <a href="#work" onClick={(e) => { e.preventDefault(); scrollTo("#work"); }} className="external-link">
              LedgerOS
            </a>
            , I prioritize clean architectural boundaries and dependable uptime.
          </p>

          {/* Action Callouts */}
          <div className="flex flex-wrap items-center gap-3 pt-3 pb-2">
            <button
              type="button"
              onClick={() => scrollTo("#work")}
              className="read-more-btn"
            >
              <span>View Work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="proposal-cta"
            >
              <span>Contact &amp; Dispatch</span>
            </button>

            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="read-more-btn"
            >
              <span>View Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Secondary Direct Channels */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--ink-muted)]">
            <a
              href="https://github.com/karthiknaramala9949"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/venkata-karthik-naramala-a35a7a224/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/karthik_naramala"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              title="X / Twitter Profile"
              aria-label="X"
            >
              <span className="font-bold text-xs">𝕏</span>
            </a>
            <a
              href="mailto:karthik.naramala@clykur.com"
              className="inline-flex items-center gap-1.5 external-link font-medium"
              title="Email direct"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>karthik.naramala@clykur.com</span>
            </a>
          </div>

          {/* Selected Work Preview Grid */}
          <div className="selected-work-container">
            <h3 className="subsection-title">Selected Engineering Work</h3>
            <div className="selected-work-grid">
              <article className="selected-work-item">
                <div className="selected-work-header">
                  <h4 className="selected-work-title">
                    <a
                      href="#work"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo("#work");
                      }}
                      className="work-link"
                    >
                      CusOwn
                    </a>
                  </h4>
                  <span className="selected-work-tag">Slot Booking Platform</span>
                </div>
                <p>
                  Production multi-tenant slot booking &amp; scheduling infrastructure with realtime availability synchronization and concurrency control.
                </p>
              </article>

              <article className="selected-work-item">
                <div className="selected-work-header">
                  <h4 className="selected-work-title">
                    <a
                      href="#work"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo("#work");
                      }}
                      className="work-link"
                    >
                      LedgerOS
                    </a>
                  </h4>
                  <span className="selected-work-tag">AI Financial Systems</span>
                </div>
                <p>
                  AI-powered financial operating system replacing fragmented spreadsheets with predictive burn-rate telemetry and interactive simulators.
                </p>
              </article>

              <article className="selected-work-item">
                <div className="selected-work-header">
                  <h4 className="selected-work-title">
                    <a
                      href="#work"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo("#work");
                      }}
                      className="work-link"
                    >
                      Clykur Studio Platform
                    </a>
                  </h4>
                  <span className="selected-work-tag">Studio Platform</span>
                </div>
                <p>
                  Official company platform and client portal for Clykur, engineered for edge performance and structured project intake.
                </p>
              </article>

              <article className="selected-work-item">
                <div className="selected-work-header">
                  <h4 className="selected-work-title">
                    <a
                      href="#work"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo("#work");
                      }}
                      className="work-link"
                    >
                      Drapeva
                    </a>
                  </h4>
                  <span className="selected-work-tag">E-Commerce Platform</span>
                </div>
                <p>
                  Direct-to-consumer premium Indian saree and ethnic wear storefront showcasing handloom weaves with Razorpay checkout.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
