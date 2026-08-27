"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

// Each slide has its own image + text. Edit / reorder freely.
const slides = [
  {
    src: "/images/portrait-hero.jpg",
    heading: "Building at the intersection of Africa, Web3 and digital finance.",
    text: "Web3 & fintech builder, educator and ecosystem contributor working across blockchain, stablecoins and Africa's innovation ecosystem.",
  },
  {
    src: "/images/portrait-seated.jpg",
    heading: "Web3 and community building.",
    text: "Years spent building and supporting Web3 communities and ecosystems, and helping more people take part in emerging technology.",
  },
  {
    src: "/images/portrait-about.jpg",
    heading: "Education and content.",
    text: "Making emerging technology easier to understand, so more people can participate in Web3 and digital finance.",
  },
  {
    src: "/images/gallery-gown.jpg",
    heading: "Speaking and industry conversations.",
    text: "On cross-border payments, stablecoins, Web3 and Africa's digital economy, for audiences from boardrooms to universities.",
  },
  {
    src: "/images/portrait-full.jpg",
    heading: "Currently building Raba Pay.",
    text: "Better ways for money to move across borders: fintech, stablecoins, digital finance and cross-border payments.",
  },
];

export function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || slides.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [reduce]);

  const active = slides[index];

  return (
    <section className="relative overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        {slides.map((slide, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={slide.src}
            src={slide.src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover object-[50%_28%] transition-opacity duration-[1400ms] ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--bg) 0%, var(--bg) 30%, color-mix(in srgb, var(--bg) 62%, transparent) 55%, color-mix(in srgb, var(--bg) 20%, transparent) 80%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--bg) 0%, transparent 18%, transparent 62%, var(--bg) 100%)",
          }}
        />
      </div>

      <div className="container-x flex min-h-[88vh] flex-col justify-center pb-24 pt-36 md:min-h-[92vh] md:pt-44">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <Sparkles size={14} /> {site.role}
          </motion.span>

          {/* Per-slide text */}
          <div className="mt-6 min-h-[15rem] sm:min-h-[14rem] md:min-h-[17rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-display font-semibold">
                  {index === 0 ? (
                    <>
                      Building at the intersection of{" "}
                      <span className="text-royal">Africa, Web3 and digital finance.</span>
                    </>
                  ) : (
                    active.heading
                  )}
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
                  {active.text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="#work" className="btn-primary">
              Explore My Work <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Invite Me to Speak
            </Link>
          </div>

          {/* Clickable slide indicators */}
          <div className="mt-10 flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s.src}
                onClick={() => setIndex(i)}
                aria-label={`Show slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-7 bg-royal" : "w-2.5 bg-[var(--muted)]/40 hover:bg-[var(--muted)]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
