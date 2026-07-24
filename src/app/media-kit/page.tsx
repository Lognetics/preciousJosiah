import type { Metadata } from "next";
import { Download } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Portrait } from "@/components/ui/portrait";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Media Kit",
  description: "Bio, headshots, and brand assets for featuring Precious Josiah Udezua.",
};

const bios = [
  {
    label: "Short bio",
    text: `${site.name} is a Web3 strategist, community builder, and fintech advocate shaping conversations around blockchain, digital finance, and Africa's innovation ecosystem.`,
  },
  {
    label: "Medium bio",
    text: `${site.name} is a Web3 strategist, community builder, fintech advocate, and thought leader. His work sits at the intersection of technology, finance, human behaviour, and leadership — with a consistent focus on making innovation accessible across Africa and beyond. He writes and speaks widely on stablecoins, DeFi, community building, and financial inclusion.`,
  },
];

export default function MediaKitPage() {
  return (
    <>
      <PageHeader
        eyebrow="Media Kit"
        title="Everything you need to feature Precious."
        intro="Approved bios, headshots, and brand details for events, articles, and interviews. Replace the placeholder assets with final files before launch."
      />

      <section className="container-x grid gap-12 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal>
          <Portrait className="aspect-[4/5] w-full" />
          <a href="#" className="btn-primary mt-4 w-full">
            <Download size={15} /> Download headshots
          </a>
        </Reveal>

        <div className="space-y-8">
          {bios.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.06}>
              <div className="card p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-serif text-lg font-semibold">{b.label}</h3>
                  <span className="text-xs text-[var(--muted)]">{b.text.split(" ").length} words</span>
                </div>
                <p className="leading-relaxed text-[var(--fg)]/90">{b.text}</p>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className="card p-6">
              <h3 className="font-serif text-lg font-semibold">Brand details</h3>
              <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-[var(--muted)]">Full name</dt>
                  <dd>{site.name}</dd>
                </div>
                <div>
                  <dt className="text-[var(--muted)]">Title</dt>
                  <dd>{site.role}</dd>
                </div>
                <div>
                  <dt className="text-[var(--muted)]">Primary accent</dt>
                  <dd>Royal Blue #2B59FF</dd>
                </div>
                <div>
                  <dt className="text-[var(--muted)]">Secondary accent</dt>
                  <dd>Emerald #10B981</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
