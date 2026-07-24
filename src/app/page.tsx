import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { Philosophy } from "@/components/home/philosophy";
import { StatsSection } from "@/components/home/stats";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PublicationCard } from "@/components/publication-card";
import { getAllPublications } from "@/lib/publications";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = getAllPublications().filter((p) => p.featured).slice(0, 3);
  const all = getAllPublications();
  const showcase = featured.length >= 3 ? featured : all.slice(0, 3);

  return (
    <>
      <Hero />
      <TrustBar />
      <Philosophy />

      {/* Mission band */}
      <section className="border-y border-[var(--line)] bg-[var(--card)]">
        <div className="container-x grid gap-10 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-royal" /> Personal Mission
            </span>
            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight md:text-4xl">
              To make innovation more accessible — across Africa and beyond.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-serif text-2xl leading-snug text-[var(--fg)] md:text-3xl">
              To accelerate digital transformation by{" "}
              <span className="text-royal">educating</span>,{" "}
              <span className="text-royal">connecting</span>, and{" "}
              <span className="text-royal">empowering</span> people through emerging
              technologies — while making innovation more accessible across Africa and
              beyond.
            </p>
          </Reveal>
        </div>
      </section>

      <StatsSection />

      {/* Thought leadership / featured */}
      <section className="container-x py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Thought Leadership"
            title="Ideas at the intersection of technology and people."
          />
          <Reveal>
            <Link href="/publications" className="btn-ghost">
              View all publications <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {showcase.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <PublicationCard p={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--line)] bg-midnight px-8 py-16 text-center text-white md:px-16 md:py-24">
          <div className="mesh-hero absolute inset-0 opacity-80" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-display font-semibold">
              Let's shape the future of finance — together.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
              Invite Precious to speak, collaborate on an ecosystem initiative, or bring
              clarity to your Web3 strategy.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Start a conversation <ArrowRight size={16} />
              </Link>
              <Link href="/newsletter" className="btn bg-white/10 text-white hover:bg-white/20">
                Subscribe to the newsletter
              </Link>
            </div>
            <p className="mt-8 font-serif text-lg italic text-white/80">
              “{site.altTagline}”
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
