import { ArrowUpRight } from "lucide-react";
import { getAbapExperience } from "@/lib/experience";

export const About = () => {
  const abapExp = getAbapExperience();

  return (
    <section className="section" id="about">
      <h2 className="section-lead-title">EDITORIAL &amp; BACKGROUND</h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Lead Editorial Article (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="font-headline text-xl sm:text-2xl font-bold text-[var(--ink-primary)] leading-snug">
            Bridging enterprise engineering rigor with independent studio innovation.
          </h3>

          <div className="article-content space-y-3">
            <p>
              I&rsquo;m a software engineer and product builder operating at the intersection of mission-critical
              enterprise platforms and fast-moving independent venture development. Currently at <strong>Wipro</strong>,
              I engineer high-throughput business logic on <strong>ABAP on HANA</strong>, leveraging {abapExp.formattedYears} of
              specialized experience in <strong>SAP ABAP</strong>, Core Data Services (CDS) views, AMDP procedures, and database
              code pushdown optimizations.
            </p>

            <p>
              As co-founder and technical lead at <strong>Clykur</strong> (
              <a
                href="https://www.clykur.com"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link font-medium"
              >
                clykur.com
              </a>
              ), I direct technical architecture and full-lifecycle software delivery across our studio ecosystem.
              Clykur is an independent digital product studio founded to build production-grade web applications,
              multi-tenant SaaS platforms, and bespoke client architectures that solve concrete operational bottlenecks
              rather than assembling fragile hype-driven wrappers.
            </p>

            <p>
              At Clykur, our work spans both proprietary software ventures and strategic client platforms. We have
              architected and shipped systems such as <strong>CusOwn</strong>, an optimistic concurrency scheduling and
              slot reservation SaaS engineered for concurrent client booking under load; <strong>LedgerOS</strong>, an
              early-stage financial operating system; and bespoke web platforms across commerce and education. Every
              Clykur platform is anchored on sound relational schema invariants, PostgreSQL Row-Level Security,
              TypeScript predictability, and cross-platform native interfaces.
            </p>

            <p>
              The interplay between enterprise-grade data discipline from my work at Wipro and the high-velocity,
              full-lifecycle ownership demanded at Clykur shapes my engineering standard: understand the root operational
              friction, engineer the cleanest resilient foundation, and ship software that performs dependably under load.
            </p>
          </div>
        </div>

        {/* Right Column: In Brief Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="quick-news-item">
            <h4 className="quick-news-title">Studio Venture · Clykur</h4>
            <p className="mb-2">
              Co-founder &amp; Technical Lead. Leading technical architecture, database contracts, and full-stack delivery across internal SaaS ventures and client engagements.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.clykur.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold font-ui text-[var(--ink-primary)] hover:underline"
              >
                <span>Visit clykur.com</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-[var(--rule-medium)]">·</span>
              <a
                href="#building"
                className="inline-flex items-center gap-1 text-xs font-medium font-ui text-[var(--ink-muted)] hover:text-[var(--ink-primary)]"
              >
                <span>Ventures</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="quick-news-item">
            <h4 className="quick-news-title">Enterprise Role · Wipro</h4>
            <p>
              Software Engineer specializing in <strong>SAP ABAP &amp; ABAP on HANA</strong> ({abapExp.formattedYears}). Focused on Core Data Services (CDS Views), AMDP, and S/4HANA enterprise transaction pipelines.
            </p>
          </div>

          <div className="quick-news-item">
            <h4 className="quick-news-title">Clykur Engineering Stack</h4>
            <p className="font-mono text-xs text-[var(--ink-secondary)]">
              TypeScript · Next.js · React Native · Expo · PostgreSQL · Supabase RLS · Docker · Cloudflare Edge
            </p>
          </div>

          <div className="quick-news-item">
            <h4 className="quick-news-title">Location &amp; Availability</h4>
            <p>
              Based in Bangalore, India · Available worldwide for strategic technical architecture, studio partnerships, and high-impact engineering collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
