"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import { Portrait } from "@/components/ui/portrait";

function NetworkBackdrop() {
  const reduce = useReducedMotion();
  // Deterministic pseudo-random nodes (no Math.random for SSR stability)
  const nodes = Array.from({ length: 26 }, (_, i) => ({
    x: (i * 137.5) % 100,
    y: (i * 71.3) % 100,
    r: 1 + ((i * 7) % 3),
    d: 3 + ((i * 13) % 6),
  }));

  return (
    <svg
      className="absolute inset-0 -z-10 h-full w-full opacity-[0.35]"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="edge" x1="0" x2="1">
          <stop offset="0" stopColor="#2B59FF" stopOpacity="0.5" />
          <stop offset="1" stopColor="#10B981" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {nodes.map((n, i) => {
        const m = nodes[(i + 5) % nodes.length];
        return (
          <line
            key={`l${i}`}
            x1={n.x}
            y1={n.y}
            x2={m.x}
            y2={m.y}
            stroke="url(#edge)"
            strokeWidth="0.15"
          />
        );
      })}
      {nodes.map((n, i) => (
        <motion.circle
          key={`c${i}`}
          cx={n.x}
          cy={n.y}
          r={n.r * 0.28}
          fill={i % 3 === 0 ? "#10B981" : "#2B59FF"}
          initial={reduce ? undefined : { opacity: 0.3 }}
          animate={reduce ? undefined : { opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: n.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

const line = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mesh-hero absolute inset-0 -z-10" />
      <NetworkBackdrop />
      <div className="container-x grid items-center gap-12 pb-20 pt-36 md:pt-44 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <Sparkles size={14} /> {site.role}
          </motion.span>

          <h1 className="mt-6 text-hero font-semibold">
            {["Technology Doesn't", "Change the World.", "People Do."].map((t, i) => (
              <motion.span
                key={t}
                custom={i}
                variants={line}
                initial="hidden"
                animate="show"
                className="block"
              >
                {i === 2 ? <span className="text-royal">{t}</span> : t}
              </motion.span>
            ))}
          </h1>

          <motion.p
            custom={3}
            variants={line}
            initial="hidden"
            animate="show"
            className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--muted)]"
          >
            {site.description}
          </motion.p>

          <motion.div
            custom={4}
            variants={line}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link href="/publications" className="btn-primary">
              Read My Insights <ArrowRight size={16} />
            </Link>
            <Link href="/speaking" className="btn-ghost">
              Book Me To Speak
            </Link>
          </motion.div>

          <motion.p
            custom={5}
            variants={line}
            initial="hidden"
            animate="show"
            className="mt-10 max-w-md font-serif text-lg italic text-[var(--fg)]"
          >
            “{site.philosophy}”
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <Portrait className="aspect-[4/5] w-full shadow-card" />
          <div className="glass absolute -bottom-5 -left-5 hidden rounded-2xl border border-[var(--line)] p-4 sm:block">
            <p className="text-xs text-[var(--muted)]">Focused on</p>
            <p className="font-serif text-lg">Africa's Digital Economy</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
