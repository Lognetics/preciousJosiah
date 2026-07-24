import { topics } from "@/lib/site";

export function TrustBar() {
  const items = [...topics, ...topics];
  return (
    <section className="border-y border-[var(--line)] bg-[var(--card)] py-6">
      <div className="mx-auto max-w-content px-6">
        <p className="mb-4 text-center text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
          Featured Topics
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {items.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="whitespace-nowrap rounded-full border border-[var(--line)] px-5 py-2 text-sm text-[var(--muted)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
