import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight, User } from "lucide-react";
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
    <section id="about" className="min-h-[100dvh] flex items-center pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Text Content — takes 3 cols */}
          <div className="lg:col-span-3 animate-fade-in text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Co-founder @ Clykur
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-5">
              Karthik Naramala
              <br />
              <span className="text-gradient text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem]">
                Software Engineer & SaaS Builder
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Software engineer & SaaS builder shipping production-grade mobile and web systems.
              Currently building <span className="text-foreground font-semibold">CusOwn</span> — a multi-tenant
              scheduling platform — with React Native, TypeScript & Supabase.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("#projects")}
                className="glow-primary text-sm h-11 px-6 shadow-md"
                size="lg"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-border hover:border-primary/50 hover:bg-primary/5 text-sm h-11 px-6"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1x06uu7jw01Bmyqr_OS2T2L6Jcza4X_5l/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Karthik Naramala Resume PDF"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 justify-center lg:justify-start animate-fade-in-delay">
              {[
                { href: "https://github.com/karthiknaramala9949", icon: Github, label: "GitHub Profile" },
                { href: "https://www.linkedin.com/in/venkata-karthik-naramala-a35a7a224/", icon: Linkedin, label: "LinkedIn Profile" },
                { href: "mailto:karthiknaramala9949@gmail.com", icon: Mail, label: "Send Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={!href.startsWith("mailto:") ? "_blank" : undefined}
                  rel={!href.startsWith("mailto:") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  title={label}
                  className="p-2.5 rounded-lg bg-secondary/60 hover:bg-primary/10 hover:text-primary border border-border/60 hover:border-primary/30 transition-all duration-200 shadow-sm"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Hero Image — takes 2 cols */}
          <div className="lg:col-span-2 animate-slide-up flex justify-center">
            <div className="relative w-52 sm:w-60 md:w-68 lg:w-80">
              {/* Ambient Glow behind image */}
              <div className="absolute inset-0 rounded-2xl bg-primary/15 blur-2xl scale-110 pointer-events-none" />
              
              <div className="relative overflow-hidden rounded-2xl border border-primary/20 shadow-xl bg-card aspect-[4/5] flex items-center justify-center">
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 bg-muted/60 animate-pulse flex items-center justify-center">
                    <User className="h-12 w-12 text-muted-foreground/40 animate-pulse" />
                  </div>
                )}
                
                {imageError ? (
                  <div className="flex flex-col items-center justify-center p-6 text-center text-muted-foreground">
                    <User className="h-16 w-16 mb-2 text-primary/60" />
                    <span className="text-xs font-medium">Karthik Naramala</span>
                  </div>
                ) : (
                  <img
                    src={heroImage}
                    alt="Karthik Naramala — Co-founder & Software Engineer"
                    width={320}
                    height={400}
                    loading="eager"
                    decoding="async"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    className={`w-full h-full object-cover transition-all duration-500 hover:scale-105 ${
                      imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
