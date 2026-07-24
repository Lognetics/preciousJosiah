import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { NewsletterForm } from "@/components/newsletter-form";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Ideas Worth Thinking About — weekly insights on technology, finance, innovation, leadership, and future trends from Precious Josiah Udezua.",
};

const covers = [
  "Technology",
  "Finance",
  "Innovation",
  "Leadership",
  "Future Trends",
];

export default function NewsletterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Newsletter"
        title="Ideas worth thinking about."
        intro="A weekly letter for people who want to understand where technology, finance, and human behaviour are heading — written in plain language, free of hype."
      />

      <section className="container-x py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2">
              {covers.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[var(--muted)]"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card mt-10 p-8 text-left md:p-12">
              <h2 className="font-serif text-2xl font-semibold md:text-3xl">
                Join 12,000+ readers.
              </h2>
              <p className="mt-3 text-[var(--muted)]">
                One thoughtful email a week. No spam, no noise — just clear thinking on the
                future of finance and technology. Unsubscribe anytime.
              </p>
              <div className="mt-6">
                <NewsletterForm compact />
              </div>
              <p className="mt-4 text-xs text-[var(--muted)]">
                By subscribing you agree to receive email updates. Your data stays private.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-10 font-serif text-xl italic text-[var(--fg)]">
              “Technology creates possibilities. People create impact.”
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
