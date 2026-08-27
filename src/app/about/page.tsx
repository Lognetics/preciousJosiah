import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Portrait } from "@/components/ui/portrait";
import { Reveal } from "@/components/ui/reveal";
import { workAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Precious Josiah Cheta-Udezue is a Web3 and fintech builder, educator and ecosystem contributor working across digital finance, stablecoins and Africa's digital economy.",
};

const paragraphs = [
  "My work has grown from Web3 education and community building into broader work across emerging technology, digital finance and fintech.",
  "Over the years, I have worked across education, community building, ecosystem development, content and speaking.",
  "Today, my interests sit across Web3, digital finance, stablecoins, fintech, cross-border payments, financial inclusion and Africa's digital economy.",
  "I am particularly interested in the space between technology and adoption: whether people can understand it, trust it and actually use it.",
];

const progression = ["Web3", "Education", "Community", "Ecosystem", "Fintech", "Digital Finance"];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Precious"
        title="Building, teaching and connecting across emerging technology."
        intro="My journey through Web3 has always been about building: building communities, creating opportunities, and helping people understand and participate in emerging technology."
      />

      <section className="container-x grid gap-12 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal className="lg:sticky lg:top-28">
          <Portrait src="/images/portrait-about.jpg" className="aspect-[4/5] w-full" />
        </Reveal>

        <div>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--fg)]/90">
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          {/* Progression - how the work has evolved */}
          <Reveal delay={0.1}>
            <div className="mt-10 border-t border-[var(--line)] pt-8">
              <span className="eyebrow">
                <span className="h-px w-6 bg-royal" /> The path so far
              </span>
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                {progression.map((step, i) => (
                  <span key={step} className="flex items-center gap-3">
                    <span className="font-serif text-lg">{step}</span>
                    {i < progression.length - 1 && (
                      <ArrowRight size={15} className="text-royal" />
                    )}
                  </span>
                ))}
              </div>
              <p className="mt-4 max-w-xl text-[var(--muted)]">
                My fintech work is an evolution of what I have been doing for years, not a
                departure from it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Education / journey image band */}
      <section className="container-x pb-8">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-[var(--line)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/graduation.jpg"
                alt="Precious Josiah Cheta-Udezue at the University of Aberdeen Business School"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="eyebrow">
                <span className="h-px w-6 bg-royal" /> Education
              </span>
              <h2 className="mt-4 font-serif text-3xl font-semibold">
                Grounded in business, driven by people.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
                A graduate of the University of Aberdeen Business School, I pair formal training
                in business and strategy with years of hands-on community building. It shapes how
                I translate complex technology into something people can actually understand and use.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Areas of focus */}
      <section className="border-t border-[var(--line)] bg-[var(--card)]">
        <div className="container-x py-20">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-royal" /> What I Work On
            </span>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl font-semibold md:text-4xl">
              Where my work sits today.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {workAreas.map((a, i) => (
              <Reveal key={a.title} delay={(i % 2) * 0.05}>
                <div className="card h-full p-6">
                  <h3 className="font-serif text-xl font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 flex flex-wrap gap-3">
              <Link href="/publications" className="btn-primary">
                Read My Writing <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Get in Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
