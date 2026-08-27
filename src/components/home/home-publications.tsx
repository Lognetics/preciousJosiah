import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getAllPublications } from "@/lib/publications";
import { Reveal } from "@/components/ui/reveal";

export function HomePublications() {
  const all = getAllPublications();
  const featured = all.filter((p) => p.featured);
  const list = (featured.length >= 4 ? featured : all).slice(0, 4);

  return (
    <section className="container-x py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-royal" /> Ideas & Perspectives
          </span>
          <h2 className="mt-4 max-w-2xl text-display font-semibold">
            Writing about Web3, digital finance, fintech and Africa's digital economy.
          </h2>
        </Reveal>
        <Reveal>
          <Link href="/publications" className="btn-ghost">
            View All Publications <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>

      <div className="mt-12 border-t border-[var(--line)]">
        {list.map((p, i) => {
          const date = new Date(p.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          return (
            <Reveal key={p.slug} delay={(i % 2) * 0.05}>
              <Link
                href={`/publications/${p.slug}`}
                className="group grid gap-2 border-b border-[var(--line)] py-8 transition-colors md:grid-cols-[160px_1fr_auto] md:items-baseline md:gap-8"
              >
                <span className="text-sm text-[var(--muted)]">{date}</span>
                <div>
                  <h3 className="font-serif text-2xl font-semibold leading-snug transition-colors group-hover:text-royal">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[var(--muted)]">{p.excerpt}</p>
                </div>
                <span className="mt-2 inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium text-royal md:mt-0">
                  Read Article
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
