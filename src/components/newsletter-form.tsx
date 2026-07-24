"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    // Wire to your ESP (ConvertKit, Beehiiv, Mailchimp…) here.
    setDone(true);
  };

  if (done) {
    return (
      <div className="flex items-center gap-3 rounded-full border border-emerald/40 bg-emerald/10 px-5 py-3 text-sm text-emerald">
        <Check size={16} /> You're on the list. Ideas incoming.
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className={`flex w-full gap-2 ${compact ? "" : "max-w-md"}`}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        aria-label="Email address"
        className="w-full rounded-full border border-[var(--line)] bg-[var(--card)] px-5 py-3 text-sm outline-none transition-colors focus:border-royal"
      />
      <button type="submit" className="btn-primary shrink-0">
        Subscribe <ArrowRight size={15} />
      </button>
    </form>
  );
}
