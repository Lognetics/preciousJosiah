import type { Metadata } from "next";
import { Mail, Linkedin, Twitter, Send } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Precious Josiah Udezua — for speaking requests, media enquiries, partnerships, and consultations.",
};

export default function ContactPage() {
  const channels = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Linkedin, label: "LinkedIn", value: "in/preciousjosiah", href: site.socials.linkedin },
    { icon: Twitter, label: "Twitter / X", value: "@preciousjosiah", href: site.socials.twitter },
    { icon: Send, label: "Telegram", value: "@preciousjosiah", href: site.socials.telegram },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's start a conversation."
        intro="Whether it's a keynote, a collaboration, a media feature, or a strategy conversation — I'd love to hear from you."
      />

      <section className="container-x grid gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-3xl border border-[var(--line)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/portrait-hero.jpg"
                alt="Precious Josiah Udezua"
                className="aspect-[16/10] w-full object-cover object-top"
              />
            </div>
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="card flex items-center gap-4 p-5 transition-colors hover:border-royal/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-royal/10 text-royal">
                  <c.icon size={18} />
                </span>
                <div>
                  <p className="text-sm text-[var(--muted)]">{c.label}</p>
                  <p className="font-medium">{c.value}</p>
                </div>
              </a>
            ))}
            <div className="card p-6">
              <h3 className="font-serif text-lg font-semibold">Response time</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Most enquiries receive a reply within a few business days. For time-sensitive
                media requests, mention your deadline.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
