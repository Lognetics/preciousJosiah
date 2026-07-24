import type { MetadataRoute } from "next";
import { site, nav } from "@/lib/site";
import { getAllPublications } from "@/lib/publications";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = nav.map((n) => ({
    url: `${site.url}${n.href === "/" ? "" : n.href}`,
    changeFrequency: "weekly" as const,
    priority: n.href === "/" ? 1 : 0.8,
  }));

  const articleRoutes = getAllPublications().map((p) => ({
    url: `${site.url}/publications/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const extra = ["/media-kit", "/privacy", "/terms"].map((r) => ({
    url: `${site.url}${r}`,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...staticRoutes, ...articleRoutes, ...extra];
}
