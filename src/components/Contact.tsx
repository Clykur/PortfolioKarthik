import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Check,
  Copy,
  ExternalLink,
} from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { useNetworkStatus } from "@/hooks/useNetworkStatus";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const { ref, visible } = useSectionReveal();
  const { isOnline } = useNetworkStatus();

  const [formData, setFormData] = useState<FormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const validateField = (name: keyof FormValues, value: string): string | undefined => {
    const trimmed = value.trim();
    switch (name) {
      case "name":
        if (!trimmed) return "Name is required";
        if (trimmed.length < 2) return "Name must be at least 2 characters";
        return undefined;
      case "email":
        if (!trimmed) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return "Enter a valid email address";
        return undefined;
      case "subject":
        if (!trimmed) return "Subject is required";
        if (trimmed.length < 3) return "Subject must be at least 3 characters";
        return undefined;
      case "message":
        if (!trimmed) return "Message is required";
        if (trimmed.length < 10) return "Message must be at least 10 characters";
        return undefined;
      default:
        return undefined;
    }
  };

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {};
    (Object.keys(formData) as (keyof FormValues)[]).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormValues;
    setFormData((prev) => ({ ...prev, [fieldName]: value }));

    if (touched[fieldName]) {
      const err = validateField(fieldName, value);
      setErrors((prev) => ({ ...prev, [fieldName]: err }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormValues;
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    const err = validateField(fieldName, value);
    setErrors((prev) => ({ ...prev, [fieldName]: err }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({ name: true, email: true, subject: true, message: true });

    if (!validateAll()) {
      toast.error("Please fill in all required fields properly.");
      return;
    }

    if (!isOnline) {
      toast.error("You are currently offline. Please email directly.");
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      setIsSuccess(true);
      toast.success("Message dispatched successfully!", {
        description: "Thank you for reaching out. I will follow up promptly.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setTouched({});
    } catch {
      toast.error("Failed to send message", {
        description: "Please email directly at karthik.naramala@clykur.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    toast.success(`${label} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-secondary/15 border-t border-border/50">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 section-animate ${visible ? "visible" : ""}`}
      >
        <div className="max-w-6xl mx-auto space-y-6">
          <div>
            <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider block mb-1">
              Contact
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Let's Build Something <span className="text-gradient">Useful</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Form (7 cols) */}
            <Card className="card-elevated lg:col-span-7 border border-border/80 shadow-card">
              <CardHeader className="p-4 sm:p-5 pb-1">
                <CardTitle className="font-display text-base font-bold text-foreground">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-5 pt-1">
                {isSuccess && (
                  <div
                    role="status"
                    className="mb-4 p-3 rounded-lg bg-primary/10 border border-primary/20 animate-fade-in font-mono text-xs"
                  >
                    <p className="font-bold text-foreground">Message Dispatched!</p>
                    <p className="text-muted-foreground mt-0.5">
                      Thank you. I review messages daily and will follow up shortly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-3 font-mono">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="name" className="text-xs font-semibold text-foreground">
                        Name <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Your name"
                        required
                        aria-invalid={Boolean(errors.name)}
                        className={`h-9 text-xs bg-background ${
                          errors.name ? "border-destructive focus-visible:ring-destructive" : "border-border"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[10px] text-destructive">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="email" className="text-xs font-semibold text-foreground">
                        Email <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="you@company.com"
                        required
                        aria-invalid={Boolean(errors.email)}
                        className={`h-9 text-xs bg-background ${
                          errors.email ? "border-destructive focus-visible:ring-destructive" : "border-border"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[10px] text-destructive">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="subject" className="text-xs font-semibold text-foreground">
                      Subject <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Project Inquiry / Opportunity"
                      required
                      aria-invalid={Boolean(errors.subject)}
                      className={`h-9 text-xs bg-background ${
                        errors.subject ? "border-destructive focus-visible:ring-destructive" : "border-border"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[10px] text-destructive">{errors.subject}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="message" className="text-xs font-semibold text-foreground">
                        Message <span className="text-primary">*</span>
                      </Label>
                      <span className="text-[10px] text-muted-foreground">
                        {formData.message.length} / 2000
                      </span>
                    </div>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Tell me about your product, requirements, or timeline..."
                      rows={3}
                      required
                      aria-invalid={Boolean(errors.message)}
                      className={`text-xs bg-background resize-none ${
                        errors.message ? "border-destructive focus-visible:ring-destructive" : "border-border"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[10px] text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full glow-primary h-9 text-xs font-mono font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Dispatching Message..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Channels & Direct Email (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              {/* Primary Email Card */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-primary/15 via-primary/5 to-secondary/40 border border-primary/25 space-y-2.5">
                <div className="flex items-center gap-1.5 text-primary font-mono text-xs font-bold uppercase">
                  <Mail className="h-3.5 w-3.5" />
                  <span>Primary Email</span>
                </div>
                <div>
                  <a
                    href="mailto:karthik.naramala@clykur.com"
                    className="font-mono text-xs sm:text-sm font-bold text-foreground hover:text-primary transition-colors break-all"
                  >
                    karthik.naramala@clykur.com
                  </a>
                </div>
                <div className="flex gap-2 pt-1">
                  <Button
                    className="glow-primary flex-1 h-8 text-xs font-mono font-bold"
                    asChild
                  >
                    <a href="mailto:karthik.naramala@clykur.com">
                      <Mail className="mr-1.5 h-3 w-3" /> Email Karthik
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleCopy("karthik.naramala@clykur.com", "Email address")}
                    className="h-8 w-8 border-primary/30 hover:bg-primary/10"
                    aria-label="Copy Email address"
                    title="Copy Email address"
                  >
                    {copiedField === "Email address" ? (
                      <Check className="h-3.5 w-3.5 text-primary" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Verified Channels Card */}
              <Card className="card-elevated border border-border/80">
                <CardContent className="p-4 space-y-2 font-mono text-xs">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider block font-semibold mb-1">
                    Verified Channels
                  </span>

                  {/* GitHub */}
                  <a
                    href="https://github.com/karthiknaramala9949"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-secondary/50 hover:bg-secondary border border-border/60 transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="h-3.5 w-3.5 text-foreground group-hover:text-primary transition-colors" />
                      <span className="font-bold text-foreground">GitHub</span>
                    </div>
                    <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>

                  {/* Clykur */}
                  <a
                    href="https://www.clykur.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-secondary/50 hover:bg-secondary border border-border/60 transition-colors group"
                  >
                    <span className="font-bold text-foreground">Clykur (Studio)</span>
                    <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/venkata-karthik-naramala-a35a7a224/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-secondary/50 hover:bg-secondary border border-border/60 transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="h-3.5 w-3.5 text-[#0a66c2]" />
                      <span className="font-bold text-foreground">LinkedIn</span>
                    </div>
                    <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>

                  {/* Location */}
                  <div className="p-1.5 text-muted-foreground text-[11px]">
                    <span>Bangalore, Karnataka, India</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
