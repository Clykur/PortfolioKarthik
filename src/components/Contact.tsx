import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Check, Copy, AlertCircle, Loader2, CheckCircle2 } from "lucide-react";
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
        if (trimmed.length > 100) return "Name must be under 100 characters";
        return undefined;
      case "email":
        if (!trimmed) return "Email address is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return "Please enter a valid email address";
        return undefined;
      case "subject":
        if (!trimmed) return "Subject is required";
        if (trimmed.length < 3) return "Subject must be at least 3 characters";
        if (trimmed.length > 150) return "Subject must be under 150 characters";
        return undefined;
      case "message":
        if (!trimmed) return "Message is required";
        if (trimmed.length < 10) return "Message must be at least 10 characters";
        if (trimmed.length > 2000) return "Message cannot exceed 2000 characters";
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
      toast.error("You are currently offline. Please check your connection and try again.");
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setIsSuccess(true);
      toast.success("Message sent successfully!", {
        description: "Thank you! I will review your message and reply shortly.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setTouched({});
    } catch {
      toast.error("Failed to send message", {
        description: "Something went wrong. Please try again or reach out directly via email.",
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
    <section id="contact" className="py-16 sm:py-24 bg-secondary/10">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 section-animate ${visible ? "visible" : ""}`}
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-medium uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
            Get In Touch
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Let's Build Something <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm sm:text-base">
            Have a project in mind, SaaS architecture question, or collaboration opportunity? Send a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {/* Form — 3 cols */}
          <Card className="card-elevated lg:col-span-3">
            <CardHeader className="p-5 sm:p-6 pb-2">
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <Send className="h-4 w-4 text-primary" /> Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 sm:p-6 pt-2">
              {isSuccess && (
                <div
                  role="status"
                  className="mb-5 p-4 rounded-lg bg-primary/10 border border-primary/20 flex items-start gap-3 animate-fade-in"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-semibold text-foreground">Message received!</p>
                    <p className="text-muted-foreground mt-0.5">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-xs font-medium">
                      Your Name <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Alex Smith"
                      required
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`h-10 text-sm ${errors.name ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-[11px] text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs font-medium">
                      Email Address <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="alex@example.com"
                      required
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`h-10 text-sm ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-[11px] text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="subject" className="text-xs font-medium">
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
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className={`h-10 text-sm ${errors.subject ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-[11px] text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="message" className="text-xs font-medium">
                      Message <span className="text-primary">*</span>
                    </Label>
                    <span className="text-[10px] text-muted-foreground font-mono">
                      {formData.message.length} / 2000
                    </span>
                  </div>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Tell me about your product, timeline, or engineering goals..."
                    rows={4}
                    required
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`text-sm resize-none ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-[11px] text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full glow-primary h-11 text-sm font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Details & Links — 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="card-elevated">
              <CardContent className="p-5 space-y-4">
                {[
                  {
                    icon: <Mail className="h-4 w-4" />,
                    label: "Email",
                    value: "karthiknaramala9949@gmail.com",
                    href: "mailto:karthiknaramala9949@gmail.com",
                    copyable: true,
                  },
                  {
                    icon: <Phone className="h-4 w-4" />,
                    label: "Phone",
                    value: "+91 99497 40776",
                    href: "tel:+919949740776",
                    copyable: true,
                  },
                  {
                    icon: <MapPin className="h-4 w-4" />,
                    label: "Location",
                    value: "Bangalore, India",
                    href: undefined,
                    copyable: false,
                  },
                ].map((info) => (
                  <div key={info.label} className="flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                        {info.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-xs sm:text-sm text-foreground hover:text-primary transition-colors truncate block"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-xs sm:text-sm text-foreground truncate">{info.value}</p>
                        )}
                      </div>
                    </div>

                    {info.copyable && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleCopy(info.value, info.label)}
                        className="h-8 w-8 text-muted-foreground hover:text-foreground shrink-0"
                        aria-label={`Copy ${info.label}`}
                        title={`Copy ${info.label}`}
                      >
                        {copiedField === info.label ? (
                          <Check className="h-3.5 w-3.5 text-primary" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </Button>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-5">
                <p className="text-xs text-muted-foreground font-medium mb-3">Connect on Socials</p>
                <div className="flex gap-2">
                  {[
                    { href: "https://github.com/karthiknaramala9949", icon: Github, label: "GitHub" },
                    { href: "https://www.linkedin.com/in/venkata-karthik-naramala-a35a7a224/", icon: Linkedin, label: "LinkedIn" },
                    { href: "mailto:karthiknaramala9949@gmail.com", icon: Mail, label: "Email" },
                  ].map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={!href.startsWith("mailto:") ? "_blank" : undefined}
                      rel={!href.startsWith("mailto:") ? "noopener noreferrer" : undefined}
                      className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-lg bg-secondary/60 hover:bg-primary/10 hover:text-primary border border-border hover:border-primary/30 transition-all text-xs font-medium"
                      aria-label={label}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="p-5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 shadow-sm">
              <p className="font-display text-sm font-semibold mb-1 text-foreground">Available for Collaborations</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Full-stack architectures, React Native apps, multi-tenant SaaS builds, and engineering leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
