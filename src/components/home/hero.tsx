"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

const fade = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#08090d] text-white">
      {/* Static dark background image */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/portrait-hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[50%_24%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(43,89,255,0.45) 0%, rgba(10,11,15,0.15) 46%, rgba(16,185,129,0.32) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(6,7,10,0.92) 0%, rgba(6,7,10,0.72) 34%, rgba(6,7,10,0.36) 64%, rgba(6,7,10,0.12) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,7,10,0.72) 0%, transparent 22%, transparent 64%, rgba(6,7,10,0.9) 100%)",
          }}
        />
      </div>

      <div className="container-x relative flex min-h-[88vh] flex-col justify-center pb-24 pt-36 md:min-h-[90vh] md:pt-44">
        <div className="max-w-2xl">
          <motion.span
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-royal-soft"
          >
            <Sparkles size={14} /> {site.role}
          </motion.span>

          <motion.h1
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-6 text-hero font-semibold text-white"
          >
            Building at the intersection of Africa and{" "}
            <span className="text-royal-soft">the future of money.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/75"
          >
            {site.heroSub}
          </motion.p>

          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-9"
          >
            <Link href="#work" className="btn-primary">
              Explore My Work <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
