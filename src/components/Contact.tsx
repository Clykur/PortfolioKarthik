import { useState } from "react";
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
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("karthik.naramala@clykur.com");
    setCopied(true);
    showToast("Email address copied to clipboard · karthik.naramala@clykur.com");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast("Please fill in all inquiry fields.");
      return;
    }

    if (!isOnline) {
      showToast("Offline status detected. Opening email client directly.");
      window.location.href = `mailto:karthik.naramala@clykur.com?subject=Project Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
      return;
    }

    setIsSubmitting(true);

    try {
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
        showToast("Inquiry dispatched successfully. I will follow up promptly.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const mailtoUrl = `mailto:karthik.naramala@clykur.com?subject=${encodeURIComponent(
          `Project inquiry from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Hi Karthik,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
        )}`;
        window.location.href = mailtoUrl;
        showToast("Opening default email client for dispatch.");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch {
      const mailtoUrl = `mailto:karthik.naramala@clykur.com?subject=${encodeURIComponent(
        `Project inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Hi Karthik,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      )}`;
      window.location.href = mailtoUrl;
      showToast("Opening default email client for dispatch.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section" id="contact">
      <h2 className="section-lead-title">DISPATCH, CLASSIFIEDS &amp; CONTACT</h2>

      {/* Floating editorial mail toast */}
      {toastMessage && (
        <div className="mail-toast show" role="status">
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Inquiries & Resume (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-[var(--ink-primary)]">
              Have a project in mind?
            </h3>
            <p className="font-headline text-base text-[var(--ink-primary)] italic">
              Let&rsquo;s build something useful.
            </p>
            <p className="font-body text-[var(--ink-secondary)] text-[0.95rem] leading-relaxed pt-1">
              Whether you need technical product architecture, product engineering leadership, or end-to-end delivery for a web or mobile platform, I&rsquo;m always open to discussing new initiatives.
            </p>
          </div>

          {/* Email Channel with Instant Copy */}
          <div className="p-4 bg-[var(--paper-card)] border border-[var(--rule-heavy)] shadow-[2px_2px_0_var(--rule-heavy)] space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--ink-muted)] block">
              Direct Inquiries
            </span>
            <div className="flex items-center justify-between gap-2">
              <a
                href="mailto:karthik.naramala@clykur.com"
                className="font-mono text-sm font-semibold text-[var(--ink-primary)] hover:underline truncate"
              >
                karthik.naramala@clykur.com
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="read-more-btn px-2 h-7"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Channels & Network */}
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--ink-muted)] block">
              Public Channels
            </span>
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <a
                href="https://github.com/karthiknaramala9949"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link inline-flex items-center gap-1"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-[var(--rule-medium)]">·</span>
              <a
                href="https://www.linkedin.com/in/venkata-karthik-naramala-a35a7a224/"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link inline-flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-[var(--rule-medium)]">·</span>
              <a
                href="https://x.com/karthik_naramala"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link inline-flex items-center gap-1"
              >
                <span>X / Twitter</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Curriculum Vitae */}
          <div className="space-y-2 pt-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--ink-muted)] block">
              Curriculum Vitae
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="read-more-btn"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Resume</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="proposal-cta"
              >
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Inquiry Form (7 cols) */}
        <div className="lg:col-span-7 bg-[var(--paper-card)] border border-[var(--rule-heavy)] p-6 shadow-[3px_3px_0_var(--rule-heavy)]">
          <h3 className="font-headline text-lg font-bold text-[var(--ink-primary)] mb-4 pb-2 border-b border-[var(--rule-hairline)] uppercase tracking-wide">
            Dispatch Communication
          </h3>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="name" className="font-mono text-xs uppercase text-[var(--ink-muted)] block">
                Sender Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Full Name / Organization"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 text-xs font-mono bg-[var(--paper-bg)] border border-[var(--rule-heavy)] text-[var(--ink-primary)] placeholder:text-[var(--ink-light)] focus:outline-none focus:ring-1 focus:ring-[var(--ink-primary)]"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="font-mono text-xs uppercase text-[var(--ink-muted)] block">
                Return Dispatch Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="contact@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 text-xs font-mono bg-[var(--paper-bg)] border border-[var(--rule-heavy)] text-[var(--ink-primary)] placeholder:text-[var(--ink-light)] focus:outline-none focus:ring-1 focus:ring-[var(--ink-primary)]"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="font-mono text-xs uppercase text-[var(--ink-muted)] block">
                Project Scope / Technical Goals
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Outline your application requirements, timeline, or engineering initiatives..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 text-xs font-mono bg-[var(--paper-bg)] border border-[var(--rule-heavy)] text-[var(--ink-primary)] placeholder:text-[var(--ink-light)] focus:outline-none focus:ring-1 focus:ring-[var(--ink-primary)] resize-none"
              />
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="read-more-btn"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? "Dispatching..." : "Send Dispatch"}</span>
              </button>

              <a
                href="mailto:karthik.naramala@clykur.com"
                className="font-mono text-xs text-[var(--ink-muted)] hover:text-[var(--ink-primary)] inline-flex items-center gap-1"
              >
                <Mail className="w-3 h-3" />
                <span>Prefer native mail client?</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
