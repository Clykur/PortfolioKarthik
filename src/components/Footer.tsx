import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const year = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="font-display text-lg font-bold text-gradient mb-3">Karthik Naramala</div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xs">
              Co-founder @ Clykur. Software engineer & SaaS builder shipping production-grade mobile and web systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-semibold mb-3">Quick Links</h3>
            <div className="grid grid-cols-2 gap-1.5">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                  className="text-left text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors py-0.5"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold mb-3">Contact</h3>
            <div className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
              <p>karthiknaramala9949@gmail.com</p>
              <p>Bangalore, India</p>
            </div>
            <div className="flex gap-2 mt-3">
              {[
                { href: "https://github.com/karthiknaramala9949", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/venkata-karthik-naramala-a35a7a224/", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:karthiknaramala9949@gmail.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="p-2 rounded-md bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-all">
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-6 border-t border-border gap-3">
          <p className="text-[11px] text-muted-foreground">© {year} Karthik Naramala. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowUp className="h-3 w-3" /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
