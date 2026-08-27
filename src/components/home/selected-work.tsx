import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { selectedWork } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";

export function SelectedWork() {
  return (
    <section id="work" className="container-x scroll-mt-24 py-24">
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-6 bg-royal" /> Selected Work
        </span>
        <h2 className="mt-4 max-w-2xl text-display font-semibold">
          A look at what I have actually built.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {selectedWork.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.07}>
            <Link
              href={w.href}
              className="group card flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.image}
                  alt={w.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/10 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {w.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-semibold">{w.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">{w.body}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-royal">
                  {w.cta}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
