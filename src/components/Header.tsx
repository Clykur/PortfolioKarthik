import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowUpRight, Menu, X, FileText } from "lucide-react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["work", "about", "experience", "building", "skills", "github", "principles", "contact"];
      const scrollPos = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? "nav-blur border-b border-border/70 py-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            : "bg-background/60 backdrop-blur-sm py-4 sm:py-5 border-b border-transparent"
        }`}
      >
        <div className="portfolio-wrap flex items-center justify-between">
          {/* Identity */}
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, "#hero")}
            className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
          >
            <span className="w-2 h-2 rounded-full bg-primary transition-transform duration-200 group-hover:scale-125" />
            <span className="font-display">Karthik Naramala</span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-7 text-xs font-medium text-muted-foreground"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className={`transition-colors py-1 ${
                    isActive
                      ? "text-foreground font-semibold"
                      : "hover:text-foreground"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right actions: Resume link, ThemeToggle, Mobile toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-md text-xs font-medium text-foreground hover:text-primary transition-colors border border-border hover:border-primary/40 subtle-ring"
              title="Open print-ready resume"
            >
              <FileText className="w-3.5 h-3.5 text-muted-foreground" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-muted-foreground hidden sm:inline" />
            </a>

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-md text-muted-foreground hover:text-foreground subtle-ring"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-md px-6 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col space-y-2 text-sm font-medium">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className="py-1.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-border/60 flex items-center justify-between">
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-primary font-medium"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Resume</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
