import { Reveal } from "./reveal";

export function SplitFeature({
  image,
  alt,
  eyebrow,
  title,
  body,
  reverse = false,
  tint = false,
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  body: string;
  reverse?: boolean;
  tint?: boolean;
}) {
  return (
    <section className={tint ? "border-y border-[var(--line)] bg-[var(--card)]" : ""}>
      <div className="container-x py-16 md:py-20">
        <Reveal>
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className={`relative overflow-hidden rounded-3xl border border-[var(--line)] ${reverse ? "md:order-2" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={alt}
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
            <div className={reverse ? "md:order-1" : ""}>
              <span className="eyebrow">
                <span className="h-px w-6 bg-royal" /> {eyebrow}
              </span>
              <h2 className="mt-4 font-serif text-3xl font-semibold md:text-4xl">{title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">{body}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
