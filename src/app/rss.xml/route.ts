import { site } from "@/lib/site";
import { getAllPublications } from "@/lib/publications";

export const dynamic = "force-static";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const items = getAllPublications()
    .map(
      (p) => `
    <item>
      <title>${esc(p.title)}</title>
      <link>${site.url}/publications/${p.slug}</link>
      <guid>${site.url}/publications/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <category>${esc(p.category)}</category>
      <description>${esc(p.excerpt)}</description>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(site.name)} — Publications</title>
    <link>${site.url}</link>
    <description>${esc(site.description)}</description>
    <language>en</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
