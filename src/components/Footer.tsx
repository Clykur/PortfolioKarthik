import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="newspaper-footer" role="contentinfo">
      <span className="newspaper-footer-colophon">
        THE KARTHIK CHRONICLE · PUBLISHED IN BANGALORE, KARNATAKA
      </span>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <div>
          <p className="font-headline font-bold text-sm text-[var(--ink-primary)]">
            Karthik Naramala
          </p>
          <p className="text-[0.72rem] text-[var(--ink-muted)] font-ui">
            Software Developer &amp; Product Builder · Co-founder @ Clykur
          </p>
        </div>

        {/* Public channels */}
        <div className="flex flex-wrap items-center gap-3 font-ui text-[0.72rem] uppercase tracking-wider">
          <a
            href="https://github.com/karthiknaramala9949"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <span className="footer-pipe">|</span>
          <a
            href="https://www.linkedin.com/in/venkata-karthik-naramala-a35a7a224/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <span className="footer-pipe">|</span>
          <a
            href="https://x.com/karthik_naramala"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            X
          </a>
          <span className="footer-pipe">|</span>
          <a
            href="mailto:karthik.naramala@clykur.com"
            className="footer-link"
          >
            Email
          </a>
        </div>

        {/* Copyright & Scroll Top */}
        <div className="flex items-center gap-3 font-ui text-[0.72rem]">
          <span>&copy; 2026 Karthik Naramala</span>
          <span className="footer-pipe">|</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="footer-link inline-flex items-center gap-1 cursor-pointer"
            aria-label="Scroll to top of front page"
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
