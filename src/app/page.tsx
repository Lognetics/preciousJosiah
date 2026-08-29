import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/hero";
import { WhatIWorkOn } from "@/components/home/what-i-work-on";
import { StatsSection } from "@/components/home/stats";
import { SelectedWork } from "@/components/home/selected-work";
import { HomeSpeaking } from "@/components/home/home-speaking";
import { HomePublications } from "@/components/home/home-publications";
import { HomeAbout } from "@/components/home/home-about";
import { CurrentlyBuilding } from "@/components/home/currently-building";
import { Reveal } from "@/components/ui/reveal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIWorkOn />

      {/* Personal Mission - typography-led, deliberately understated */}
      <section className="border-y border-[var(--line)] bg-[var(--card)]">
        <div className="container-x max-w-4xl py-24">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-royal" /> Personal Mission
            </span>
            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight md:text-[2.6rem]">
              To make innovation more accessible, across Africa and beyond.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
              I want more people to understand and benefit from the technology reshaping how money
              moves, and to build it from Africa outward.
            </p>
          </Reveal>
        </div>
      </section>

      <StatsSection />
      <SelectedWork />
      <HomeSpeaking />
      <HomePublications />
      <HomeAbout />
      <CurrentlyBuilding />

      {/* Functional closing - ways to work together */}
      <section className="container-x pb-24">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-[var(--line)] p-8 md:flex-row md:items-center md:p-12">
            <div>
              <h2 className="font-serif text-2xl font-semibold md:text-3xl">
                Available for speaking, partnerships, and collaborations in fintech and digital finance.
              </h2>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Invite Me to Speak <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Get in Touch
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
