"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const photos = [
  { src: "/images/gallery-gown.jpg", alt: "Precious at an evening event", span: "row-span-2" },
  { src: "/images/portrait-seated.jpg", alt: "Studio portrait of Precious", span: "" },
  { src: "/images/gallery-burj.jpg", alt: "Precious in Dubai", span: "" },
  { src: "/images/graduation-duo.jpg", alt: "Graduation at the University of Aberdeen Business School", span: "" },
  { src: "/images/gallery-yacht.jpg", alt: "Precious on the water in Dubai", span: "row-span-2" },
  { src: "/images/gallery-city.jpg", alt: "Precious in the city", span: "" },
  { src: "/images/gallery-desert.jpg", alt: "Desert safari in the UAE", span: "" },
  { src: "/images/gallery-aberdeen.jpg", alt: "A day in Aberdeen, Scotland", span: "" },
  { src: "/images/gallery-lounge.jpg", alt: "Precious at a lounge", span: "" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="border-t border-[var(--line)] bg-[var(--card)]">
      <div className="container-x py-16">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-royal" /> Gallery
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold">
            Speaking, events & moments in between.
          </h2>
        </Reveal>

        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[200px]">
          {photos.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl border border-[var(--line)] ${p.span}`}
              aria-label={`Open image: ${p.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-midnight/0 transition-colors duration-300 group-hover:bg-midnight/20" />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-midnight/90 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            <X size={20} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos[active].src}
            alt={photos[active].alt}
            className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain shadow-card"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
