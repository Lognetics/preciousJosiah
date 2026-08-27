import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { NewsletterForm } from "@/components/newsletter-form";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Ideas Worth Thinking About, weekly insights on technology, finance, innovation, leadership, and future trends from Precious Josiah Udezua.",
};

const covers = [
  "Web3",
  "Digital Finance",
  "Stablecoins",
  "Fintech",
  "Africa's Digital Economy",
];

export default function NewsletterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Newsletter"
        title="Ideas worth thinking about."
        intro="A weekly letter for people who want to understand where technology, finance, and human behaviour are heading, written in plain language, free of hype."
      />

      <section className="container-x py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-[var(--line)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/portrait-seated.jpg"
                alt="Precious Josiah Udezua"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="glass absolute bottom-4 left-4 right-4 rounded-2xl border border-[var(--line)] p-4">
                <p className="font-serif text-lg">
                  Writing on Web3, digital finance and Africa's digital economy.
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="flex flex-wrap gap-2">
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
              <div className="card mt-6 p-8 md:p-10">
                <h2 className="font-serif text-2xl font-semibold md:text-3xl">
                  Occasional writing, straight to your inbox.
                </h2>
                <p className="mt-3 text-[var(--muted)]">
                  Clear, practical notes on Web3, digital finance and fintech, with no spam and no
                  noise. Unsubscribe anytime.
                </p>
                <div className="mt-6">
                  <NewsletterForm compact />
                </div>
                <p className="mt-4 text-xs text-[var(--muted)]">
                  By subscribing you agree to receive email updates. Your data stays private.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
