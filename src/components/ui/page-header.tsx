import { Reveal } from "./reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)]">
      <div className="mesh-hero absolute inset-0 -z-10 opacity-70" />
      <div className="container-x pb-16 pt-32 md:pb-24 md:pt-40">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-royal" /> {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-5 max-w-4xl text-display font-semibold">{title}</h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
