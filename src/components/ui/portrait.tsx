/**
 * Elegant portrait placeholder. Drop a real photo into /public/precious.jpg
 * and set `src` to render it. Until then this renders a refined monogram frame.
 */
export function Portrait({
  src,
  className = "",
  label = "Precious Josiah Udezua",
}: {
  src?: string;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-[var(--line)] ${className}`}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={label} className="h-full w-full object-cover" />
      ) : (
        <div className="relative flex h-full min-h-[420px] w-full items-center justify-center bg-gradient-to-br from-[#12141b] via-[#1b1e28] to-[#0a0b0f]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(43,89,255,0.25),transparent_55%),radial-gradient(circle_at_80%_90%,rgba(16,185,129,0.18),transparent_55%)]" />
          <div className="relative text-center">
            <div className="mx-auto grid h-28 w-28 place-items-center rounded-full border border-white/15 bg-white/5 font-serif text-4xl text-white backdrop-blur">
              PJU
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.28em] text-white/50">
              Portrait
            </p>
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5" />
    </div>
  );
}
