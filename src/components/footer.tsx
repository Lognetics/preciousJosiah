import Link from "next/link";
import { Linkedin, Twitter, Send, Mail, Rss } from "lucide-react";
import { nav, site } from "@/lib/site";
import { getAllPublications } from "@/lib/publications";

export function Footer() {
  const latest = getAllPublications().slice(0, 4);
  const year = 2026;

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--card)]">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-royal text-sm font-semibold text-white">
              PJ
            </span>
            <span className="font-serif text-lg">{site.shortName}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
            {site.philosophy}
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { Icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
              { Icon: Twitter, href: site.socials.twitter, label: "Twitter / X" },
              { Icon: Send, href: site.socials.telegram, label: "Telegram" },
              { Icon: Mail, href: `mailto:${site.email}`, label: "Email" },
              { Icon: Rss, href: "/rss.xml", label: "RSS" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-colors hover:border-royal hover:text-royal"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            Explore
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[var(--muted)] transition-colors hover:text-royal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            Latest Articles
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {latest.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/publications/${p.slug}`}
                  className="text-[var(--muted)] transition-colors hover:text-royal"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            Ideas Worth Thinking About
          </h4>
          <p className="mt-4 text-sm text-[var(--muted)]">
            Weekly insights on technology, finance, innovation, and leadership.
          </p>
          <Link href="/newsletter" className="btn-primary mt-4 w-full">
            Subscribe
          </Link>
        </div>
      </div>

      <div className="border-t border-[var(--line)]">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-[var(--muted)] md:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-royal">Privacy</Link>
            <Link href="/terms" className="hover:text-royal">Terms</Link>
            <Link href="/media-kit" className="hover:text-royal">Media Kit</Link>
            <Link href="/rss.xml" className="hover:text-royal">RSS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
