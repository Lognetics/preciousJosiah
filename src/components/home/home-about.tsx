import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function HomeAbout() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--card)]">
      <div className="container-x grid gap-12 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        {/* Photography */}
        <Reveal className="lg:sticky lg:top-28">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 overflow-hidden rounded-3xl border border-[var(--line)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/portrait-about.jpg"
                alt="Precious Josiah Cheta-Udezue"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-[var(--line)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/graduation.jpg"
                alt="Precious Josiah Cheta-Udezue, University of Aberdeen Business School"
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-[var(--line)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gallery-city.jpg"
                alt="Precious Josiah Cheta-Udezue"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-royal" /> About Precious
            </span>
            <p className="mt-5 font-serif text-2xl leading-snug md:text-3xl">
              My journey through Web3 has always been about building: building communities,
              creating opportunities, and helping people understand and participate in emerging
              technology.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-[var(--muted)]">
              <p>
                My work has grown from Web3 education and community building into broader work
                across emerging technology, digital finance and fintech.
              </p>
              <p>
                Over the years, I have worked across education, community building, ecosystem
                development, content and speaking.
              </p>
              <p>
                Today, my interests sit across Web3, digital finance, stablecoins, fintech,
                cross-border payments, financial inclusion and Africa's digital economy.
              </p>
              <p>
                I am particularly interested in the space between technology and adoption:
                whether people can understand it, trust it and actually use it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <Link href="/about" className="btn-ghost mt-9">
              More about me <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
