import { workAreas } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";

export function WhatIWorkOn() {
  return (
    <section className="container-x py-24">
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-6 bg-royal" /> What I Work On
        </span>
        <h2 className="mt-4 max-w-2xl text-display font-semibold">
          The two areas I spend most of my time on.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {workAreas.map((a, i) => (
          <Reveal key={a.title} delay={(i % 2) * 0.06}>
            <div className="card h-full p-8 transition-colors duration-300 hover:border-royal/40">
              <h3 className="font-serif text-2xl font-semibold">{a.title}</h3>
              <p className="mt-3 text-[var(--muted)]">{a.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
