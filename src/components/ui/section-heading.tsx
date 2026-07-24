import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-royal" /> {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-display font-semibold">{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
