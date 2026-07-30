# Precious Josiah Udezua, Personal Brand Website

An elegant, editorial, world-class personal brand website positioning **Precious Josiah Udezua** as a leading voice in Web3, stablecoins, DeFi, digital economy, community building, and Africa's innovation ecosystem.

> _Technology creates possibilities. People create impact._

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and an **MDX** content system. Apple-level minimalism, dark/light premium theme, editorial typography, glassmorphism, micro-interactions. No neon crypto aesthetics.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (fully static)
npm start          # serve the production build
```

## What's included

| Area | Details |
| --- | --- |
| **Pages** | Home, About, Insights, Publications (+ article pages), Speaking, Projects, Media, Community, Newsletter, Contact, Media Kit, Privacy, Terms, 404 |
| **Publications** | 8 featured essays as MDX in `content/publications/` with a searchable, filterable library |
| **Reading experience** | Reading progress bar, bookmark, text-to-speech (audio reader), share, print, related/suggested reading |
| **Design system** | `tailwind.config.ts` (colors, type scale, animations) + `src/app/globals.css` (editorial prose, glass, mesh gradients) |
| **Theme** | Dark/light toggle with no-flash inline script, persisted to `localStorage` |
| **Animations** | Framer Motion reveals, animated stat counters, hero blockchain network backdrop, marquee trust bar, all respect `prefers-reduced-motion` |
| **SEO** | Person / Article / Breadcrumb JSON-LD, dynamic OG image, Open Graph + Twitter cards, `sitemap.xml`, `robots.txt`, `rss.xml`, web manifest, per-page metadata, canonical URLs |
| **Accessibility** | Skip link, focus rings, semantic landmarks, reduced-motion support |

## Project structure

```
content/publications/   # MDX essays (frontmatter + body)
src/
  app/                  # App Router pages, sitemap, robots, rss, og image
  components/           # navbar, footer, home sections, publication UI, forms, seo
  lib/
    site.ts             # brand config: name, nav, topics, stats, philosophy, expertise
    publications.ts     # server-side MDX reader (fs)
    publications-shared.ts  # client-safe types & cover gradients
```

## Customising the content

- **Brand + copy** → `src/lib/site.ts` (name, taglines, socials, stats, philosophy cards, expertise).
- **Articles** → add/edit `.mdx` files in `content/publications/`. Frontmatter fields: `title`, `excerpt`, `category`, `tags`, `date`, `featured`, `cover` (`royal` \| `emerald` \| `midnight` \| `dusk` \| `amber`). Reading time is auto-calculated.
- **Portrait** → drop a photo at `public/precious.jpg` and pass `src="/precious.jpg"` to `<Portrait />` in the hero / about / media-kit. Until then a refined monogram placeholder renders.
- **Real numbers** → update `stats` in `src/lib/site.ts` (currently tasteful placeholders).

## Wiring up "backend" pieces (placeholders to connect)

These render and validate on the client; connect them to a provider when ready:

- **Newsletter** → `src/components/newsletter-form.tsx` (ConvertKit / Beehiiv / Mailchimp).
- **Contact form** → `src/components/contact-form.tsx` (Formspree / Resend / an API route).
- **Domain** → set the production URL in `src/lib/site.ts` (`url`) so SEO, sitemap, and RSS use the right host.

## Deploy

Optimised for **Vercel** (zero-config). Any Node host works via `npm run build && npm start`. The site is almost entirely static HTML.

## Roadmap (from the original brief, not yet built)

Full CMS admin dashboard, AI search / "Ask Precious AI" chat, semantic related articles, Supabase-backed auth & analytics, podcast player, events/RSVP, testimonials slider, interactive timeline & gallery. The current front-end is structured so these can be layered on incrementally.
