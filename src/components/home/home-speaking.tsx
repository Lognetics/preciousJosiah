import Link from "next/link";
import { ArrowRight, Mic } from "lucide-react";
import { speakingTopics } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";

export function HomeSpeaking() {
  return (
    <section id="speaking" className="scroll-mt-24 border-y border-[var(--line)] bg-[var(--card)]">
      <div className="container-x grid gap-12 py-24 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-royal" /> Speaking
            </span>
            <h2 className="mt-4 text-display font-semibold">
              I speak about the technologies changing how Africa builds, connects and moves money.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {speakingTopics.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[var(--fg)]/90">
                  <Mic size={15} className="mt-1 shrink-0 text-royal" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <Link href="/contact" className="btn-primary mt-9">
              Invite Me to Speak <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        {/* Replace these with real photographs from speaking engagements when available. */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-2xl border border-[var(--line)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/portrait-hero.jpg"
                alt="Precious Josiah Cheta-Udezue"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover object-top"
              />
            </div>
            <div className="relative mt-8 overflow-hidden rounded-2xl border border-[var(--line)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gallery-gown.jpg"
                alt="Precious Josiah Cheta-Udezue at an event"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
