"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

// Background slideshow images + the caption that slides in with each. Edit freely.
const slides = [
  { src: "/images/portrait-hero.jpg", caption: "Web3 & digital finance" },
  { src: "/images/portrait-seated.jpg", caption: "Community & ecosystem building" },
  { src: "/images/portrait-about.jpg", caption: "Education & content" },
  { src: "/images/gallery-gown.jpg", caption: "Speaking & industry conversations" },
  { src: "/images/portrait-full.jpg", caption: "Cross-border payments & stablecoins" },
];

function HeroBackdrop() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || slides.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Crossfading images */}
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

      {/* Legibility scrims (theme-aware via var(--bg)) */}
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

      {/* Rotating caption + slide indicators */}
      <div className="absolute bottom-6 right-6 z-10 flex flex-col items-end gap-3 text-right">
        <div className="h-7 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-lg text-[var(--fg)] md:text-xl"
            >
              {slides[index].caption}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="flex gap-2">
          {slides.map((s, i) => (
            <span
              key={s.src}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-6 bg-royal" : "w-1.5 bg-[var(--muted)]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const line = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 + i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroBackdrop />
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

          <h1 className="mt-6 text-hero font-semibold">
            <motion.span custom={0} variants={line} initial="hidden" animate="show" className="block">
              Building at the intersection of
            </motion.span>
            <motion.span custom={1} variants={line} initial="hidden" animate="show" className="block text-royal">
              Africa, Web3 and digital finance.
            </motion.span>
          </h1>

          <motion.p
            custom={2}
            variants={line}
            initial="hidden"
            animate="show"
            className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--muted)]"
          >
            {site.heroSub}
          </motion.p>

          <motion.div
            custom={3}
            variants={line}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link href="#work" className="btn-primary">
              Explore My Work <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Invite Me to Speak
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
