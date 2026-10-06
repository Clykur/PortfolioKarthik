import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  User,
} from "lucide-react";
import heroImage from "@/assets/karthik-professional.png";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-[100dvh] flex items-center justify-center pt-16 sm:pt-20 pb-10 sm:pb-12"
    >
      <div className="container mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Main Info (7 Cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            {/* Status Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 border border-border text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-muted-foreground">Available for engineering &amp; product roles</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Karthik Naramala
              </h1>
              <p className="font-display text-xl sm:text-2xl lg:text-3xl text-gradient font-bold tracking-tight mt-1.5">
                Software Engineer · Product Builder
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              I build production software from idea to deployment. Co-founder at{" "}
              <a
                href="https://www.clykur.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-semibold hover:text-primary transition-colors underline decoration-primary/40 underline-offset-4 inline-flex items-center"
              >
                Clykur <ExternalLink className="h-3 w-3 ml-1" />
              </a>
              , engineering multi-tenant SaaS platforms, high-throughput Supabase architectures, and mobile applications with React Native &amp; TypeScript.
            </p>

            {/* Stack Tags */}
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              <span className="text-xs font-mono text-muted-foreground mr-1">Focus:</span>
              {["React Native", "TypeScript", "Supabase", "PostgreSQL", "Expo", "Node.js", "Docker"].map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-secondary/70 text-foreground border border-border/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <Button
                onClick={() => scrollToSection("#projects")}
                size="sm"
                className="glow-primary text-xs h-9 px-4 font-medium"
              >
                Explore Projects
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="h-9 px-3.5 text-xs border-border hover:border-primary/40 hover:bg-secondary/60"
                asChild
              >
                <a
                  href="https://github.com/karthiknaramala9949"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Karthik Naramala GitHub Profile"
                >
                  <Github className="mr-1.5 h-3.5 w-3.5" />
                  GitHub
                </a>
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="h-9 px-3.5 text-xs border-border hover:border-primary/40 hover:bg-secondary/60"
                asChild
              >
                <a
                  href="https://www.clykur.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Clykur Company Website"
                >
                  Clykur
                </a>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="h-9 px-3 text-xs text-muted-foreground hover:text-foreground"
                asChild
              >
                <a
                  href="mailto:karthik.naramala@clykur.com?subject=Resume%20Request%20-%20Karthik%20Naramala"
                  aria-label="Request Resume"
                >
                  Request Resume
                </a>
              </Button>
            </div>

            {/* Channels Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 text-xs text-muted-foreground border-t border-border/50">
              <a
                href="mailto:karthik.naramala@clykur.com"
                className="inline-flex items-center gap-1.5 hover:text-primary transition-colors font-mono"
              >
                <Mail className="h-3.5 w-3.5 text-primary" />
                <span>karthik.naramala@clykur.com</span>
              </a>
              <span className="hidden sm:inline text-border">|</span>
              <a
                href="https://www.linkedin.com/in/venkata-karthik-naramala-a35a7a224/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5 text-[#0a66c2]" />
                <span>LinkedIn</span>
              </a>
              <span className="hidden sm:inline text-border">|</span>
              <span className="text-muted-foreground">Bangalore, India</span>
            </div>
          </div>

          {/* Developer Card with Active Role & Project Details (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-slide-up">
            <div className="w-full max-w-[320px]">
              <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
                {/* Terminal Bar Top */}
                <div className="terminal-header px-3.5 py-2 flex items-center justify-between border-b border-border/80">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    karthik@clykur:~$ status
                  </span>
                  <span className="w-2" />
                </div>

                {/* Portrait — Clean & Clearly Visible without any shadow overlay */}
                <div className="relative bg-muted/20 aspect-[4/4.6] flex items-center justify-center overflow-hidden">
                  {!imageLoaded && !imageError && (
                    <div className="absolute inset-0 bg-muted/40 animate-pulse flex items-center justify-center">
                      <User className="h-10 w-10 text-muted-foreground/30 animate-pulse" />
                    </div>
                  )}

                  {imageError ? (
                    <div className="flex flex-col items-center justify-center p-6 text-center text-muted-foreground">
                      <User className="h-12 w-12 mb-1 text-primary" />
                      <span className="font-display font-semibold text-sm text-foreground">Karthik Naramala</span>
                      <span className="text-xs text-muted-foreground">Co-founder @ Clykur</span>
                    </div>
                  ) : (
                    <img
                      src={heroImage}
                      alt="Karthik Naramala — Co-founder @ Clykur & Software Engineer"
                      width={320}
                      height={368}
                      loading="eager"
                      decoding="async"
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                      className={`w-full h-full object-cover object-top ${
                        imageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  )}
                </div>

                {/* Active Role & Project Info */}
                <div className="p-3.5 bg-card border-t border-border/80 font-mono text-xs space-y-1.5">
                  <div className="flex justify-between items-center text-muted-foreground">
                    <span>current_role:</span>
                    <span className="text-foreground font-semibold">Co-founder @ Clykur</span>
                  </div>
                  <div className="flex justify-between items-center text-muted-foreground">
                    <span>active_project:</span>
                    <span className="text-primary font-semibold">CusOwn (SaaS)</span>
                  </div>
                  <div className="flex justify-between items-center text-muted-foreground">
                    <span>systems_focus:</span>
                    <span className="text-foreground">Realtime &amp; Mobile Arch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
