import { useState } from "react";
import heroImage from "@/assets/karthik-professional.png";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[640px] flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-10 overflow-hidden"
    >
      {/* Spacer to balance fixed navigation */}
      <div className="w-full h-1" aria-hidden="true" />

      {/* Main Hero Content - exactly aligned to portfolio-wrap page margins */}
      <div className="portfolio-wrap my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center w-full">
          {/* Main Editorial Copy (7-8 columns on desktop across the 90% width) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6 sm:space-y-7">

            {/* Identity & Role */}
            <div className="space-y-2">
              <h1 className="font-display text-[clamp(2.75rem,5.5vw,5rem)] font-bold tracking-tight text-foreground leading-[1.04]">
                Karthik Naramala
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-normal tracking-tight">
                Software Developer &amp; Product Builder
              </p>
            </div>

            {/* Core Description - Expansive yet readable */}
            <p className="text-base sm:text-lg lg:text-[19px] text-foreground/85 leading-relaxed max-w-[700px] font-normal">
              I build thoughtful digital products, from interfaces to production-ready web applications. Co-founder at{" "}
              <a
                href="https://www.clykur.com"
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link font-medium text-foreground inline-flex items-center gap-0.5"
              >
                Clykur
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
              </a>
              , engineering scalable architectures with TypeScript, React Native, and Supabase.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                type="button"
                onClick={() => scrollTo("#work")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors subtle-ring"
              >
                <span>View Work</span>
                <ArrowDown className="w-3.5 h-3.5 text-background/70" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-medium text-foreground border border-border hover:border-foreground/40 hover:bg-secondary/40 transition-colors subtle-ring"
              >
                <span>Contact</span>
              </button>
            </div>

            {/* Secondary Direct Channels */}
            <div className="pt-2 flex flex-wrap items-center gap-5 sm:gap-6 text-xs text-muted-foreground font-mono">
              <a
                href="https://github.com/karthiknaramala9949"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-border">·</span>
              <a
                href="https://www.linkedin.com/in/venkata-karthik-naramala-a35a7a224/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-border">·</span>
              <a
                href="https://x.com/karthik_naramala"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
                title="X / Twitter"
              >
                <span>X</span>
              </a>
              <span className="text-border">·</span>
              <a
                href="mailto:karthik.naramala@clykur.com"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
                title="Email direct"
              >
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span>karthik.naramala@clykur.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Professional Portrait (4-5 columns across 90% width) */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-start lg:justify-end items-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] aspect-[3/3.7] rounded-xl overflow-hidden bg-secondary/40 border border-border/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <img
                src={heroImage}
                alt="Karthik Naramala — Software Developer & Product Builder"
                width={400}
                height={493}
                loading="eager"
                decoding="async"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover object-top filter grayscale contrast-[1.05] transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
