import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Building", href: "#building", id: "building" },
  { label: "Stack", href: "#stack", id: "stack" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "GitHub", href: "#github", id: "github" },
  { label: "Clykur", href: "#clykur", id: "clykur" },
  { label: "Principles", href: "#principles", id: "principles" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-3 focus:py-1.5 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-md focus:outline-none text-xs font-mono"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled ? "nav-blur border-b border-border shadow-sm" : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Main Navigation"
          className="container mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between"
        >
          {/* Brand Block — Simple, Clean, No decorative box */}
          <div className="flex flex-col justify-center">
            <button
              onClick={() => scrollToSection("#about")}
              className="text-left font-display text-sm sm:text-base font-bold text-foreground hover:text-primary transition-colors leading-tight"
            >
              Karthik Naramala
            </button>
            <div className="text-[11px] text-muted-foreground leading-tight">
              <span>Co-founder @ </span>
              <a
                href="https://www.clykur.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary font-medium transition-colors hover:underline"
              >
                Clykur
              </a>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5 bg-secondary/50 px-2 py-1 rounded-full border border-border/60">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-150 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden sm:flex items-center gap-2">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("#contact")}
              size="sm"
              className="glow-primary text-xs h-8 px-3.5 font-medium"
            >
              Contact
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-1.5">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1.5 text-foreground rounded-md hover:bg-secondary border border-border/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="lg:hidden nav-blur border-b border-border bg-background/95 backdrop-blur-xl animate-fade-in"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
              <div className="grid grid-cols-2 gap-1 py-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className={`text-left px-3 py-2 text-xs font-medium rounded-md transition-colors flex items-center justify-between ${
                        isActive
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/70"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </button>
                  );
                })}
              </div>
              <div className="pt-2 mt-1 border-t border-border/60">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  size="sm"
                  className="w-full glow-primary h-8 text-xs font-medium"
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
