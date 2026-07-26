import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Ecosystem work by Precious Josiah Udezua — including Jesaih and Rabapay — building communities, products, and access across the digital economy.",
};

const projects = [
  {
    name: "Jesaih",
    tag: "Community & Ecosystem",
    image: "/images/gallery-city.jpg",
    overview:
      "A community-first initiative building Web3 literacy and belonging across African cities — turning newcomers into confident, informed participants.",
    impact: ["25+ communities activated", "Education-first onboarding", "Local-language mentorship"],
  },
  {
    name: "Rabapay",
    tag: "Fintech & Payments",
    image: "/images/gallery-yacht.jpg",
    overview:
      "Payment infrastructure focused on making digital money practical for everyday people and businesses — the invisible utility behind real transactions.",
    impact: ["Stablecoin-ready rails", "Cross-border settlement", "Merchant-first design"],
  },
  {
    name: "Ecosystem Advisory",
    tag: "Strategy & Growth",
    image: "/images/portrait-seated.jpg",
    overview:
      "Advising early-stage Web3 and fintech teams on positioning, community, and growth — helping great technology actually reach the people it's built for.",
    impact: ["15+ projects supported", "Go-to-market clarity", "Trust-led growth"],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Building the rails — and the trust that runs on them."
        intro="Selected ecosystem contributions where technology meets real adoption. Each is grounded in the same belief: utility over speculation, people over hype."
      />

      <section className="container-x space-y-8 py-16">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05}>
            <div className="card grid gap-0 overflow-hidden md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[280px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/25 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="rounded-full bg-black/25 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {p.tag}
                  </span>
                  <h3 className="mt-3 font-serif text-4xl font-semibold text-white">{p.name}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-lg leading-relaxed text-[var(--fg)]/90">{p.overview}</p>
                <ul className="mt-6 grid gap-2">
                  {p.impact.map((x) => (
                    <li key={x} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-royal" /> {x}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-ghost mt-8">
                  Discuss a collaboration <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
