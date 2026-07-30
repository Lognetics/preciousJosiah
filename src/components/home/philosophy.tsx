import { philosophyCards } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Philosophy() {
  return (
    <section className="container-x py-24">
      <SectionHeading
        eyebrow="Core Philosophy"
        title="Technology is the enabler. People are the point."
        intro="These values recur across every publication, technology opens the door, while education, trust, community, and access are what actually sustain adoption and growth."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {philosophyCards.map((c, i) => (
          <Reveal key={c.title} delay={(i % 4) * 0.06}>
            <div className="card group h-full p-6 transition-all duration-500 hover:-translate-y-1 hover:border-royal/40">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-royal/10 font-serif text-lg text-royal">
                {c.title[0]}
              </div>
              <h3 className="font-serif text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{c.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
