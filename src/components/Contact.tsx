import { useState } from "react";
import { toast } from "sonner";
import { ArrowUpRight, Check, Copy, FileText, Mail, Send } from "lucide-react";
import { useNetworkStatus } from "@/hooks/useNetworkStatus";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const { isOnline } = useNetworkStatus();
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("karthik.naramala@clykur.com");
    setCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!isOnline) {
      toast.error("You are currently offline. Please email directly.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Connect to production form webhook with graceful fallback
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f99540b6-ea50-488f-9a48-a00639e449c4",
          subject: `Portfolio Inquiry from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Karthik Naramala Portfolio",
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        toast.success("Message dispatched successfully. I will follow up promptly.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Fallback: trigger user's native email client
        const mailtoUrl = `mailto:karthik.naramala@clykur.com?subject=${encodeURIComponent(
          `Project inquiry from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Hi Karthik,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
        )}`;
        window.location.href = mailtoUrl;
        toast.success("Opening email client to deliver message.");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch {
      const mailtoUrl = `mailto:karthik.naramala@clykur.com?subject=${encodeURIComponent(
        `Project inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Hi Karthik,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      )}`;
      window.location.href = mailtoUrl;
      toast.success("Opening email client to deliver message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 border-t border-border/60">
      <div className="portfolio-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct channels and Resume (5 cols) */}
          <div className="lg:col-span-5 space-y-7">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
                Contact
              </span>
              <h2 className="font-display text-[clamp(1.85rem,3vw,2.5rem)] font-bold tracking-tight text-foreground leading-tight">
                Have a project in mind?
              </h2>
              <p className="text-base sm:text-lg text-foreground/80 font-normal">
                Let&rsquo;s build something useful.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                Whether you need technical product architecture, product engineering leadership, or end-to-end delivery for a web or mobile platform, I&rsquo;m always open to discussing new initiatives.
              </p>
            </div>

            {/* Email with copy button */}
            <div className="pt-1 space-y-2">
              <span className="text-xs font-mono text-muted-foreground block">Email</span>
              <div className="flex items-center gap-2">
                <a
                  href="mailto:karthik.naramala@clykur.com"
                  className="text-base font-semibold text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  karthik.naramala@clykur.com
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors subtle-ring"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-primary" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Channels */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-muted-foreground block">Network</span>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
                <a
                  href="https://github.com/karthiknaramala9949"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                </a>
                <span>·</span>
                <a
                  href="https://www.linkedin.com/in/venkata-karthik-naramala-a35a7a224/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                </a>
                <span>·</span>
                <a
                  href="https://x.com/karthik_naramala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                >
                  <span>X</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                </a>
              </div>
            </div>

            {/* Resume Access Buttons */}
            <div className="pt-2 border-t border-border/40 space-y-2">
              <span className="text-xs font-mono text-muted-foreground block">Curriculum Vitae</span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs font-medium text-foreground border border-border hover:border-foreground/30 hover:bg-secondary/40 transition-colors subtle-ring"
                >
                  <FileText className="w-3.5 h-3.5 text-muted-foreground" />
                  <span>View Resume</span>
                  <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
                </a>
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean 3-field form (7 cols) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} noValidate className="space-y-4 max-w-xl">
              <div className="space-y-1">
                <label htmlFor="name" className="text-xs font-mono text-muted-foreground block">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2.5 rounded text-xs bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/40 font-mono"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-xs font-mono text-muted-foreground block">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2.5 rounded text-xs bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/40 font-mono"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-mono text-muted-foreground block">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Describe your project, timeline, or engineering goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2.5 rounded text-xs bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/40 resize-none font-mono"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-medium bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50 transition-colors subtle-ring"
                >
                  <Send className="w-3.5 h-3.5 text-background/80" />
                  <span>{isSubmitting ? "Dispatching..." : "Send Message"}</span>
                </button>

                <a
                  href="mailto:karthik.naramala@clykur.com"
                  className="text-xs font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3 h-3 text-primary" />
                  <span>Prefer direct email?</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
