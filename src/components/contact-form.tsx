"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

const reasons = [
  "Speaking Request",
  "Media Enquiry",
  "Partnership",
  "Consultation",
  "General",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [reason, setReason] = useState(reasons[0]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire to your form backend (Formspree, Resend, API route…) here.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="card grid place-items-center gap-4 p-12 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald/15 text-emerald">
          <Check size={26} />
        </span>
        <h3 className="font-serif text-2xl font-semibold">Message received.</h3>
        <p className="max-w-sm text-[var(--muted)]">
          Thank you for reaching out. You'll get a reply soon — usually within a few business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="card space-y-5 p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name">
          <input required className={inputCls} placeholder="Your name" />
        </Field>
        <Field label="Email">
          <input required type="email" className={inputCls} placeholder="you@email.com" />
        </Field>
      </div>
      <Field label="Reason for reaching out">
        <div className="flex flex-wrap gap-2">
          {reasons.map((r) => (
            <button
              type="button"
              key={r}
              onClick={() => setReason(r)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                reason === r
                  ? "border-royal bg-royal text-white"
                  : "border-[var(--line)] text-[var(--muted)] hover:text-[var(--fg)]"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </Field>
      <Field label="Message">
        <textarea
          required
          rows={5}
          className={`${inputCls} resize-none`}
          placeholder="Tell me a little about what you have in mind…"
        />
      </Field>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send message <Send size={15} />
      </button>
    </form>
  );
}

const inputCls =
  "w-full rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-sm outline-none transition-colors focus:border-royal";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[var(--muted)]">{label}</span>
      {children}
    </label>
  );
}
