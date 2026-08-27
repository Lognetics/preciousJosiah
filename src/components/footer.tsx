import Link from "next/link";
import { Linkedin, Twitter, Send, Mail, Rss } from "lucide-react";
import { nav, site } from "@/lib/site";
import { getAllPublications } from "@/lib/publications";
import { Logo } from "./ui/logo";

export function Footer() {
  const latest = getAllPublications().slice(0, 4);
  const year = 2026;

  return (
    <footer className="bg-midnight text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            {site.footerNote}
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
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-royal-soft hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
            Explore
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/60 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
            Latest Articles
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {latest.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/publications/${p.slug}`}
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
            Ideas Worth Thinking About
          </h4>
          <p className="mt-4 text-sm text-white/60">
            Weekly insights on technology, finance, innovation, and leadership.
          </p>
          <Link href="/newsletter" className="btn-primary mt-4 w-full">
            Subscribe
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 md:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/media-kit" className="hover:text-white">Media Kit</Link>
            <Link href="/rss.xml" className="hover:text-white">RSS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
