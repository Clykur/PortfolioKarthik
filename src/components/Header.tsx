import { useState, useEffect } from "react";
import { FileText, ArrowUpRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Building", href: "#building" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [dateTimeString, setDateTimeString] = useState("");

  // Live ticking date and time in authentic newspaper format
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        const dateOptions: Intl.DateTimeFormatOptions = {
          month: "short",
          day: "numeric",
          year: "numeric",
        };
        const dateStr = now.toLocaleDateString("en-US", dateOptions);
        const timeOptions: Intl.DateTimeFormatOptions = {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        };
        const timeStr = now.toLocaleTimeString("en-US", timeOptions);
        setDateTimeString(`${dateStr} | ${timeStr}`);
      } else {
        const dateOptions: Intl.DateTimeFormatOptions = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        const dateStr = now.toLocaleDateString("en-US", dateOptions);
        const timeOptions: Intl.DateTimeFormatOptions = {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        };
        const timeStr = now.toLocaleTimeString("en-US", timeOptions);
        setDateTimeString(`${dateStr} | ${timeStr}`);
      }
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll listener for sticky mobile header and active section highlight
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        if (scrollY > 75) {
          setStickyVisible(true);
        } else if (scrollY < 35) {
          setStickyVisible(false);
          setMobileMenuOpen(false);
        }
      } else {
        setStickyVisible(false);
      }

      // Detect active section
      const sections = ["contact", "principles", "github", "skills", "building", "experience", "about", "work", "hero"];
      const scrollPos = window.scrollY + 180;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("hero");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-50 focus:px-3 focus:py-1.5 focus:bg-foreground focus:text-background focus:rounded focus:text-xs font-mono"
      >
        Skip to content
      </a>

      {/* Sticky Mobile Bar: Slide-in with zero jitter */}
      <div
        className={`sticky-mobile-bar ${stickyVisible ? "visible" : ""}`}
        aria-hidden={!stickyVisible}
      >
        <div className="sticky-mobile-inner">
          <span className="sticky-mobile-title">Karthik Naramala</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              id="stickyNavToggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`sticky-nav-toggle ${mobileMenuOpen ? "open" : ""}`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="hamburger-icon" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
        <nav
          className={`sticky-mobile-nav ${mobileMenuOpen ? "open" : ""}`}
          id="stickyMobileNav"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link flex items-center justify-center gap-1 font-semibold"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </nav>
      </div>

      {/* Desktop & Tablet In-Flow Masthead / Nameplate */}
      <header className="masthead" role="banner">
        <div className="masthead-content">
          <div className="masthead-brand-row">
            <h1 className="newspaper-title">Karthik Naramala</h1>
          </div>

          <div className="masthead-meta">
            <span className="masthead-meta-col-left">VOL. 01 — BANGALORE, IN</span>
            <span className="date-time">{dateTimeString || "October 2026"}</span>
            <span className="tagline">ENGINEER &amp; PRODUCT BUILDER</span>
          </div>

          <nav className="newspaper-nav" aria-label="Newspaper navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className={`nav-link ${isActive ? "active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
