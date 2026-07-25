import type { Metadata } from "next";
import { Play, Mic2, Newspaper, Video } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Gallery } from "@/components/gallery";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Interviews, podcasts, videos, and features with Precious Josiah Udezua on Web3, stablecoins, and Africa's digital economy.",
};

const categories = [
  { icon: Mic2, label: "Podcasts", count: "Guest appearances & conversations" },
  { icon: Video, label: "Videos & Keynotes", count: "Talks, panels, explainers" },
  { icon: Newspaper, label: "Features & Press", count: "Articles and news coverage" },
  { icon: Play, label: "AMAs & Sessions", count: "Community Q&As" },
];

const items = [
  { type: "Podcast", title: "The Stablecoin Decade", outlet: "Future of Money Podcast", gradient: "from-[#1E3AAF] to-[#5B7CFF]" },
  { type: "Keynote", title: "A Generation of Builders", outlet: "Blockchain & Youth Forum", gradient: "from-[#065F46] to-[#34D399]" },
  { type: "Interview", title: "Why Community Beats Hype", outlet: "Web3 Africa Weekly", gradient: "from-[#3B2F8F] to-[#2B59FF]" },
  { type: "Panel", title: "Beyond the Hype: DeFi's Real Users", outlet: "DeFi Africa", gradient: "from-[#0A0B0F] to-[#2B3040]" },
  { type: "Feature", title: "Voices Shaping African Fintech", outlet: "Innovation Review", gradient: "from-[#7C3A12] to-[#F59E0B]" },
  { type: "AMA", title: "Ask Me Anything: Stablecoins", outlet: "Community Session", gradient: "from-[#065F46] to-[#10B981]" },
];

export default function MediaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Media"
        title="Conversations, keynotes, and coverage."
        intro="A hub of interviews, podcasts, talks, and features — the ongoing public conversation around technology, finance, and people."
      />

      <section className="container-x py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.05}>
              <div className="card p-6">
                <c.icon className="text-royal" size={22} />
                <h3 className="mt-4 font-serif text-lg font-semibold">{c.label}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{c.count}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((m, i) => (
            <Reveal key={m.title} delay={(i % 3) * 0.06}>
              <div className="card group overflow-hidden">
                <div className={`relative aspect-video bg-gradient-to-br ${m.gradient}`}>
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-white/20 backdrop-blur transition-transform duration-500 group-hover:scale-110">
                      <Play size={20} className="translate-x-0.5 text-white" fill="white" />
                    </span>
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-black/25 px-3 py-1 text-xs text-white backdrop-blur">
                    {m.type}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold leading-snug">{m.title}</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">{m.outlet}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[var(--muted)]">
          Media enquiry? <a href="/contact" className="text-royal link-underline">Get in touch →</a>
        </p>
      </section>

      <Gallery />
    </>
  );
}
