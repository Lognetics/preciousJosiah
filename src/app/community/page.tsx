import type { Metadata } from "next";
import { MessageCircle, GraduationCap, Network, Calendar, Handshake, BookOpen } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { NewsletterForm } from "@/components/newsletter-form";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join a community learning, building, and rising together across Web3, fintech, and the digital economy — led by Precious Josiah Udezua.",
};

const features = [
  { icon: MessageCircle, title: "Discussion", body: "Honest conversations on technology, finance, and building responsibly." },
  { icon: GraduationCap, title: "Learning", body: "Education-first resources that turn newcomers into confident participants." },
  { icon: Network, title: "Networking", body: "Connect with builders, founders, and operators across the ecosystem." },
  { icon: BookOpen, title: "Resources", body: "Guides, reports, and templates you can actually use." },
  { icon: Calendar, title: "Events", body: "Masterclasses, webinars, and meetups throughout the year." },
  { icon: Handshake, title: "Mentorship", body: "Access to guidance for those ready to move from learning to leading." },
];

const tiers = [
  { name: "Member", price: "Free", perks: ["Community access", "Public resources", "Event invites"], featured: false },
  { name: "Builder", price: "Coming soon", perks: ["Everything in Member", "Masterclasses", "Priority Q&A", "Templates library"], featured: true },
  { name: "Partner", price: "By invitation", perks: ["Everything in Builder", "Direct mentorship", "Ecosystem intros", "Co-building support"], featured: false },
];

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community"
        title="We rise faster, together."
        intro="A community built on the belief that adoption is a people problem before it is a technology problem — where members learn safely and grow quickly."
      />

      <section className="container-x py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.05}>
              <div className="card h-full p-7">
                <f.icon className="text-royal" size={22} />
                <h3 className="mt-4 font-serif text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--card)]">
        <div className="container-x py-16">
          <Reveal>
            <h2 className="text-center font-serif text-3xl font-semibold">Membership tiers</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <div
                  className={`card h-full p-8 ${
                    t.featured ? "border-royal ring-1 ring-royal/30" : ""
                  }`}
                >
                  {t.featured && (
                    <span className="mb-4 inline-block rounded-full bg-royal px-3 py-1 text-xs text-white">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-serif text-2xl font-semibold">{t.name}</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">{t.price}</p>
                  <ul className="mt-6 space-y-3 text-sm">
                    {t.perks.map((p) => (
                      <li key={p} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-royal" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl font-semibold">Be the first in.</h2>
          <p className="mx-auto mt-3 max-w-lg text-[var(--muted)]">
            Join the list and we'll let you know the moment the community doors open.
          </p>
          <div className="mt-8 flex justify-center">
            <NewsletterForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
