import { ArrowUpRight } from "lucide-react";

export const CurrentlyBuilding = () => {
  return (
    <section className="section" id="building">
      <h2 className="section-lead-title">INDEPENDENT VENTURES &amp; CURRENT SYSTEMS</h2>

      <div className="business-stream">
        <article className="business-item" id="clykur-venture">
          <div className="business-item-header">
            <h3 className="business-headline">
              Clykur — Digital Product Studio
            </h3>
            <span className="business-meta">
              Founder &amp; Engineering Lead · Active Digital Studio
            </span>
          </div>

          <p className="business-content">
            My product and engineering studio focused on building real software. Shipping production web applications,
            multi-tenant architectures, and bespoke digital platforms for founders and businesses.
          </p>

          <div className="pt-3">
            <a
              href="https://www.clykur.com"
              target="_blank"
              rel="noopener noreferrer"
              className="read-more-btn"
            >
              <span>Visit Clykur</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </article>

        <article className="business-item" id="cusown-venture">
          <div className="business-item-header">
            <h3 className="business-headline">
              CusOwn — Scheduling &amp; Slot Infrastructure
            </h3>
            <span className="business-meta">
              Production SaaS · Slot Booking Platform
            </span>
          </div>

          <p className="business-content">
            Production multi-tenant slot booking and appointment scheduling platform with realtime slot orchestration,
            PostgreSQL Row-Level Security, and offline-first client architecture.
          </p>

          <div className="pt-3">
            <a
              href="https://cusown.clykur.com"
              target="_blank"
              rel="noopener noreferrer"
              className="read-more-btn"
            >
              <span>Visit CusOwn Platform</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
