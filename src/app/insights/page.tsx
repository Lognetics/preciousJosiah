import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { SplitFeature } from "@/components/ui/split-feature";
import { PublicationCard } from "@/components/publication-card";
import { getAllPublications } from "@/lib/publications";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Thought leadership from Precious Josiah Udezua across community building, stablecoins, DeFi, leadership, and the future of finance.",
};

const themes = [
  { title: "Community Building", body: "Why trust networks outlast every hype cycle." },
  { title: "Stablecoins", body: "The quiet technology reshaping how the world moves money." },
  { title: "Future of Finance", body: "Where digital rails meet real human needs." },
  { title: "Digital Inclusion", body: "Access as a right, designed for the next billion." },
  { title: "Growth Marketing", body: "Applied psychology, honestly practised." },
  { title: "Behavioural Psychology", body: "The nervous system behind every metric." },
  { title: "DeFi", body: "Permissionless finance, beyond the theatrics." },
  { title: "Leadership", body: "Service over status; ecosystems over ego." },
  { title: "Innovation", body: "Meaningful when it removes friction from real lives." },
  { title: "Africa", body: "A generation moving from spectators to protagonists." },
  { title: "Product Strategy", body: "Why great projects still need to be understood." },
  { title: "Technology", body: "An enabler — never the destination." },
];

export default function InsightsPage() {
  const featured = getAllPublications().slice(0, 3);
  return (
    <>
      <PageHeader
        eyebrow="Thought Leadership"
        title="Recurring ideas, examined honestly."
        intro="The themes that run through every publication — technology as an enabler, and people as the point."
      />

      <section className="container-x py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((t, i) => (
            <Reveal key={t.title} delay={(i % 3) * 0.05}>
              <Link
                href="/publications"
                className="card group flex h-full flex-col justify-between p-7 transition-all duration-500 hover:-translate-y-1 hover:border-royal/40"
              >
                <div>
                  <h3 className="font-serif text-2xl font-semibold">{t.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{t.body}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-sm text-royal">
                  Read the essays
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <SplitFeature
        image="/images/portrait-full.jpg"
        alt="Precious Josiah Udezua"
        eyebrow="The Through-Line"
        title="One idea runs through all of it."
        body="Across community building, stablecoins, DeFi, and leadership, the argument never changes: technology is the enabler, and people — their trust, literacy, and access — are what turn possibility into lasting impact."
        tint
      />

      <section className="border-t border-[var(--line)] bg-[var(--bg)]">
        <div className="container-x py-16">
          <h2 className="font-serif text-2xl font-semibold">Latest publications</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featured.map((p) => (
              <PublicationCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
