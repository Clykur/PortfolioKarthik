import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border/60 text-xs font-mono text-muted-foreground">
      <div className="portfolio-wrap flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <p className="font-semibold text-foreground">Karthik Naramala</p>
          <p className="text-muted-foreground">Software Developer &amp; Product Builder</p>
        </div>

        {/* Channels */}
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <a
            href="https://github.com/karthiknaramala9949"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href="https://www.linkedin.com/in/venkata-karthik-naramala-a35a7a224/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href="https://x.com/karthik_naramala"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            X
          </a>
          <span>·</span>
          <a
            href="mailto:karthik.naramala@clykur.com"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>

        {/* Copyright & Scroll Top */}
        <div className="flex items-center gap-4 text-xs">
          <span>&copy; 2026 Karthik Naramala</span>
          <span>·</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            aria-label="Scroll to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
