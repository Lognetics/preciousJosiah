import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, Mic } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Book Precious Josiah Udezua to speak on the future of finance, stablecoins, Web3, community building, and Africa's digital economy.",
};

const topics = [
  "Future of Finance",
  "Stablecoins & Digital Money",
  "Web3 Community Building",
  "Innovation & the Digital Economy",
  "Leadership in Emerging Tech",
  "Africa's Innovation Ecosystem",
  "Financial Inclusion",
  "Youth Empowerment",
  "Behavioural Psychology in Tech",
];

const events = [
  { name: "Africa Fintech Summit", role: "Keynote — The Stablecoin Decade", year: "2025" },
  { name: "Web3 Lagos Conference", role: "Panel — Building Communities That Last", year: "2025" },
  { name: "DeFi Africa", role: "Fireside — Beyond the Hype", year: "2024" },
  { name: "Blockchain & Youth Forum", role: "Keynote — A Generation of Builders", year: "2024" },
];

export default function SpeakingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Speaking"
        title="Speaking about the future of technology."
        intro="Keynotes, panels, and fireside conversations that translate complex technology into clear, human ideas — for audiences from boardrooms to universities."
      />

      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <h2 className="font-serif text-2xl font-semibold">Signature topics</h2>
          </Reveal>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {topics.map((t, i) => (
              <Reveal key={t} delay={(i % 5) * 0.03}>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm">
                  <Mic size={14} className="text-royal" /> {t}
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h2 className="mt-12 font-serif text-2xl font-semibold">Selected engagements</h2>
          </Reveal>
          <div className="mt-6 divide-y divide-[var(--line)]">
            {events.map((e) => (
              <div key={e.name} className="flex items-center justify-between gap-4 py-4">
                <div>
                  <p className="font-medium">{e.name}</p>
                  <p className="text-sm text-[var(--muted)]">{e.role}</p>
                </div>
                <span className="text-sm text-[var(--muted)]">{e.year}</span>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="card sticky top-28 p-8">
            <h3 className="font-serif text-2xl font-semibold">Book Precious to speak</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Share your event details and preferred date. Available for keynotes, panels,
              workshops, and virtual sessions worldwide.
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
                <dd>Global · In-person & virtual</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[var(--muted)]">Languages</dt>
                <dd>English</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </section>
    </>
  );
}
