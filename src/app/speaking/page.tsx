import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, Mic } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { speakingTopics } from "@/lib/site";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Precious Josiah Cheta-Udezue speaks about cross-border payments, stablecoins, digital finance, Web3 and Africa's digital economy.",
};

export default function SpeakingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Speaking"
        title="I speak about the technologies changing how Africa builds, connects and moves money."
        intro="Talks and conversations that make Web3, digital finance and fintech clear and practical, for audiences from boardrooms to universities and community events."
      />

      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <h2 className="font-serif text-2xl font-semibold">Speaking topics</h2>
          </Reveal>
          <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {speakingTopics.map((t, i) => (
              <Reveal key={t} delay={(i % 4) * 0.03}>
                <span className="flex items-start gap-2.5 rounded-xl border border-[var(--line)] px-4 py-3 text-sm">
                  <Mic size={15} className="mt-0.5 shrink-0 text-royal" /> {t}
                </span>
              </Reveal>
            ))}
          </div>

          {/*
            To add credibility, list real past engagements here (event, role, year).
            Left out for now so nothing is claimed that cannot be substantiated.
          */}
          <Reveal>
            <div className="mt-12 rounded-2xl border border-dashed border-[var(--line)] p-6 text-sm text-[var(--muted)]">
              Selected past engagements and talk recordings will be added here. Have footage or a
              photo from an event I spoke at?{" "}
              <Link href="/contact" className="text-royal link-underline">
                Send it over
              </Link>
              .
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="card sticky top-28 overflow-hidden">
            <div className="relative">
              {/* Replace with a real photograph from a speaking engagement when available. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/portrait-hero.jpg"
                alt="Precious Josiah Cheta-Udezue"
                className="aspect-[16/10] w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] to-transparent" />
            </div>
            <div className="p-8 pt-2">
              <h3 className="font-serif text-2xl font-semibold">Invite me to speak</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                Share your event details and preferred date. Available for keynotes, panels,
                workshops and virtual sessions.
              </p>
              <Link href="/contact" className="btn-primary mt-6 w-full">
                Request availability <ArrowRight size={16} />
              </Link>
              <div className="mt-4 grid gap-2">
                <a href="/media-kit" className="btn-ghost w-full">
                  <Download size={15} /> Download media kit
                </a>
                <a href="/media-kit" className="btn-ghost w-full">
                  <Download size={15} /> Download bio & headshots
                </a>
              </div>
              <dl className="mt-8 space-y-3 border-t border-[var(--line)] pt-6 text-sm">
                <div className="flex justify-between">
                  <dt className="text-[var(--muted)]">Formats</dt>
                  <dd>Keynote · Panel · Workshop</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[var(--muted)]">Availability</dt>
                  <dd>In-person & virtual</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[var(--muted)]">Languages</dt>
                  <dd>English</dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
