import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Portrait } from "@/components/ui/portrait";
import { Reveal } from "@/components/ui/reveal";
import { philosophyCards, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "The journey, mission, and beliefs of Precious Josiah Udezua — a Web3 strategist and community builder shaping Africa's digital economy.",
};

const sections = [
  {
    title: "Who He Is",
    body: "Precious Josiah Udezua is a Web3 strategist, community builder, fintech advocate, and educator whose work sits at the intersection of technology, finance, human behaviour, and leadership. He is less interested in the mechanics of blockchains than in what they make possible for people who have been historically excluded from the systems that shape modern life.",
  },
  {
    title: "His Journey",
    body: "He came to Web3 not as a speculator but as a builder — drawn by a simple conviction that the most powerful technologies are the ones that quietly expand human agency. Over years spent building communities across African cities, running growth campaigns, and advising early-stage projects, a consistent lesson emerged: technology sets the stage, but people write the story.",
  },
  {
    title: "Mission",
    body: "To accelerate digital transformation by educating, connecting, and empowering people through emerging technologies — while making innovation more accessible across Africa and beyond. He measures progress not in market cycles, but in the number of people given real access, real understanding, and real opportunity.",
  },
  {
    title: "Vision",
    body: "A digital economy where financial access is a right rather than a privilege, where Africa's youth are protagonists rather than spectators, and where trust — not hype — is the currency that decides which innovations endure.",
  },
  {
    title: "What Drives Him",
    body: "A stubborn optimism about people, paired with impatience for systems that fail them. He believes the future of finance will be built by those who refuse to choose between ambition and empathy — and he intends to help build it responsibly.",
  },
];

const beliefs = [
  "Adoption is a literacy problem before it is a technology problem.",
  "Trust is the scarcest resource in digital finance — and the most durable advantage.",
  "The best products disappear into people's lives; they don't demand to be understood.",
  "Inclusion that stops at the door is decoration. Inclusion that reaches the roadmap is power.",
  "Communities are measured in trust, not headcount.",
  "Technology creates possibilities. People create impact.",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Meet Precious"
        title="Technology sets the stage. People write the story."
        intro={site.description}
      />

      <section className="container-x grid gap-12 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal className="lg:sticky lg:top-28">
          <Portrait className="aspect-[4/5] w-full" />
          <div className="card mt-4 p-5">
            <p className="font-serif text-lg italic">“{site.philosophy}”</p>
          </div>
        </Reveal>

        <div className="space-y-12">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div>
                <span className="eyebrow">
                  <span className="h-px w-6 bg-royal" /> {s.title}
                </span>
                <p className="mt-4 text-lg leading-relaxed text-[var(--fg)]/90">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Core beliefs */}
      <section className="border-y border-[var(--line)] bg-[var(--card)]">
        <div className="container-x py-20">
          <Reveal>
            <h2 className="max-w-2xl font-serif text-3xl font-semibold md:text-4xl">
              Core beliefs that recur across every publication.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {beliefs.map((b, i) => (
              <Reveal key={b} delay={(i % 2) * 0.06}>
                <div className="flex gap-4">
                  <span className="font-serif text-2xl text-royal">0{i + 1}</span>
                  <p className="text-lg leading-relaxed">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy cards */}
      <section className="container-x py-20">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-royal" /> Professional Philosophy
          </span>
          <h2 className="mt-4 max-w-2xl text-display font-semibold">
            The values behind the work.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {philosophyCards.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 0.05}>
              <div className="card h-full p-6">
                <h3 className="font-serif text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-12">
            <Link href="/publications" className="btn-primary">
              Explore the writing <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
