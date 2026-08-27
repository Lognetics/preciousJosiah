import { stats } from "@/lib/site";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";

export function StatsSection() {
  return (
    <section className="border-y border-[var(--line)] bg-midnight text-white">
      <div className="container-x py-20">
        <Reveal>
          <p className="eyebrow text-royal-soft">
            <span className="h-px w-6 bg-royal-soft" /> By the numbers
          </p>
          <h2 className="mt-4 max-w-2xl text-display font-semibold">
            A track record of building, teaching and connecting.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="border-l border-white/10 pl-5">
                <div className="font-serif text-4xl font-semibold md:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm text-white/60">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
