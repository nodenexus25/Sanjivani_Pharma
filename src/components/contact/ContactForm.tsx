import { useMemo, useState, type FormEvent } from "react";
import { contactDetails } from "@/content/siteContent";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const enquiryEmail = useMemo(
    () => (contactDetails.email.includes("@") ? contactDetails.email : ""),
    [],
  );

  const handleChange = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.website) {
      setStatus("success");
      setError("");
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim()) {
      setStatus("error");
      setError("Please complete the required fields before sending your enquiry.");
      return;
    }

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

    if (!isEmailValid) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    if (!enquiryEmail) {
      setStatus("success");
      setError("");
      return;
    }

    const subject = encodeURIComponent(`Sanjivani Pharma enquiry - ${form.subject}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || "Not provided"}`,
        `Subject: ${form.subject}`,
        "",
        form.message || "No additional message provided.",
      ].join("\n"),
    );

    window.location.href = `mailto:${enquiryEmail}?subject=${subject}&body=${body}`;
    setStatus("success");
    setError("");
  };

  return (
    <form className="space-y-5 rounded-[2rem] border border-line bg-surface p-6 shadow-[0_24px_50px_-40px_rgba(8,39,59,0.18)]" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-muted">
          <span>Full Name *</span>
          <input
            value={form.name}
            onChange={(event) => handleChange("name", event.target.value)}
            className="w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-ink outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />
        </label>
        <label className="space-y-2 text-sm text-muted">
          <span>Email *</span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => handleChange("email", event.target.value)}
            className="w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-ink outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />
        </label>
        <label className="space-y-2 text-sm text-muted">
          <span>Phone</span>
          <input
            value={form.phone}
            onChange={(event) => handleChange("phone", event.target.value)}
            className="w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-ink outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />
        </label>
        <label className="space-y-2 text-sm text-muted">
          <span>Subject *</span>
          <input
            value={form.subject}
            onChange={(event) => handleChange("subject", event.target.value)}
            className="w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-ink outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />
        </label>
      </div>

      <label className="hidden">
        Website
        <input value={form.website} onChange={(event) => handleChange("website", event.target.value)} tabIndex={-1} />
      </label>

      <label className="space-y-2 text-sm text-muted">
        <span>Message</span>
        <textarea
          rows={6}
          value={form.message}
          onChange={(event) => handleChange("message", event.target.value)}
          className="w-full rounded-[1.5rem] border border-line bg-canvas px-4 py-3 text-ink outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600"
        >
          Send enquiry
        </button>
        <p className="text-xs leading-6 text-muted">
          {enquiryEmail
            ? "Submitting opens the configured enquiry email workflow."
            : "Email delivery can be enabled here if an alternate recipient address is needed later."}
        </p>
      </div>

      {status === "error" ? <p className="text-sm text-red-600">{error}</p> : null}
      {status === "success" ? (
        <p className="text-sm text-brand-700">
          Thank you. Your enquiry details have been prepared for the Sanjivani Pharma contact workflow.
        </p>
      ) : null}
    </form>
  );
}
