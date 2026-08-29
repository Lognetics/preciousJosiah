import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";

export function CurrentlyBuilding() {
  return (
    <section id="raba-pay" className="container-x scroll-mt-24 py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--bg)]">
          <div className="mesh-hero absolute inset-0 opacity-60" />
          <div className="relative grid gap-10 p-8 md:grid-cols-[1fr_0.8fr] md:items-center md:p-14">
            <div>
              <span className="eyebrow">
                <span className="h-px w-6 bg-royal" /> Currently Building
              </span>
              <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">Raba Pay</h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--fg)]/90">
                Making it easier for money to move across African borders using stablecoins and
                better payment infrastructure.
              </p>
              <Link href={site.rabaPayUrl} className="btn-primary mt-8">
                Explore Raba Pay <ArrowRight size={16} />
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="relative overflow-hidden rounded-2xl border border-[var(--line)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/gallery-burj.jpg"
                  alt="Cross-border digital finance"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
