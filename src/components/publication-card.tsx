import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { coverGradients, type Publication } from "@/lib/publications-shared";

export function PublicationCard({
  p,
  size = "default",
}: {
  p: Publication;
  size?: "default" | "large";
}) {
  const gradient = coverGradients[p.cover] ?? coverGradients.royal;
  const date = new Date(p.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`/publications/${p.slug}`}
      className="group card flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
    >
      <div className={`relative overflow-hidden ${size === "large" ? "aspect-[16/9]" : "aspect-[3/2]"}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.22),transparent_50%)]" />
        <div className="absolute inset-0 flex items-end p-6">
          <span className="rounded-full bg-black/25 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            {p.category}
          </span>
        </div>
        <ArrowUpRight
          className="absolute right-5 top-5 text-white/80 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
          size={22}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className={`font-serif ${size === "large" ? "text-2xl" : "text-xl"} font-semibold leading-snug`}>
          {p.title}
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
          {p.excerpt}
        </p>
        <div className="mt-5 flex items-center gap-3 text-xs text-[var(--muted)]">
          <span>{date}</span>
          <span className="h-1 w-1 rounded-full bg-current" />
          <span className="inline-flex items-center gap-1">
            <Clock size={12} /> {p.readingTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
