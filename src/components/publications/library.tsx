"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PublicationCard } from "@/components/publication-card";
import type { Publication } from "@/lib/publications-shared";

export function PublicationsLibrary({
  publications,
  categories,
}: {
  publications: Publication[];
  categories: string[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return publications.filter((p) => {
      const inCat = category === "All" || p.category === category;
      const inQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return inCat && inQuery;
    });
  }, [publications, query, category]);

  return (
    <div className="container-x py-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search
            size={17}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search insights, topics, ideas…"
            aria-label="Search publications"
            className="w-full rounded-full border border-[var(--line)] bg-[var(--card)] py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-royal"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                category === c
                  ? "border-royal bg-royal text-white"
                  : "border-[var(--line)] text-[var(--muted)] hover:text-[var(--fg)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-8 text-sm text-[var(--muted)]">
        {filtered.length} {filtered.length === 1 ? "publication" : "publications"}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PublicationCard key={p.slug} p={p} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center text-[var(--muted)]">
          No publications match your search yet.
        </div>
      )}
    </div>
  );
}
