import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const year = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/60 font-mono text-xs">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Col 1: Identity */}
          <div className="space-y-2">
            <span className="font-display text-sm font-bold text-foreground block">
              Karthik Naramala
            </span>
            <p className="text-muted-foreground text-[11px] leading-relaxed font-sans">
              Co-founder @ Clykur. Software engineer building production mobile and web systems with React Native, TypeScript, Supabase &amp; PostgreSQL.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2">
            <h4 className="text-[11px] uppercase tracking-wider text-foreground font-bold">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-1 text-[11px]">
              {[
                { label: "About", href: "#about" },
                { label: "Building", href: "#building" },
                { label: "Stack", href: "#stack" },
                { label: "Projects", href: "#projects" },
                { label: "GitHub", href: "#github" },
                { label: "Clykur", href: "#clykur" },
                { label: "Principles", href: "#principles" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors py-0.5 truncate"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Ecosystem */}
          <div className="space-y-2">
            <h4 className="text-[11px] uppercase tracking-wider text-foreground font-bold">
              Ecosystem
            </h4>
            <div className="space-y-1 text-[11px]">
              <a
                href="https://www.clykur.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors block"
              >
                Clykur.com (Studio)
              </a>
              <a
                href="https://cusown.clykur.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors block"
              >
                CusOwn (Booking SaaS)
              </a>
              <a
                href="https://github.com/karthiknaramala9949"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors block"
              >
                GitHub Repositories
              </a>
            </div>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-2">
            <h4 className="text-[11px] uppercase tracking-wider text-foreground font-bold">
              Direct Contact
            </h4>
            <div className="space-y-1 text-[11px] text-muted-foreground font-mono">
              <a
                href="mailto:karthik.naramala@clykur.com"
                className="text-foreground hover:text-primary transition-colors block truncate font-semibold"
              >
                karthik.naramala@clykur.com
              </a>
              <p>Bangalore, India</p>
            </div>
            <div className="flex gap-1.5 pt-1">
              {[
                {
                  href: "https://github.com/karthiknaramala9949",
                  icon: Github,
                  label: "GitHub Profile",
                },
                {
                  href: "https://www.linkedin.com/in/venkata-karthik-naramala-a35a7a224/",
                  icon: Linkedin,
                  label: "LinkedIn Profile",
                },
                {
                  href: "mailto:karthik.naramala@clykur.com",
                  icon: Mail,
                  label: "Send Email",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={!href.startsWith("mailto:") ? "_blank" : undefined}
                  rel={!href.startsWith("mailto:") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="p-1.5 rounded bg-secondary/60 hover:bg-primary/10 hover:text-primary border border-border/70 transition-all"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-4 border-t border-border/50 gap-2 text-muted-foreground text-[10px] max-w-6xl mx-auto">
          <p>© {year} Karthik Naramala. Built with React &amp; TypeScript. Canonical: karthiknaramala.clykur.com</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-primary transition-colors font-mono"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="h-3 w-3" /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
