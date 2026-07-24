import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Publication } from "./publications-shared";

export type { Publication } from "./publications-shared";
export { coverGradients } from "./publications-shared";

const CONTENT_DIR = path.join(process.cwd(), "content", "publications");

export function getPublicationSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getPublication(slug: string): Publication | null {
  const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const mdPath = path.join(CONTENT_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    category: data.category ?? "Technology",
    tags: data.tags ?? [],
    date: data.date ?? "2025-01-01",
    featured: Boolean(data.featured),
    cover: data.cover ?? "royal",
    readingTime: stats.text,
    content,
  };
}

export function getAllPublications(): Publication[] {
  return getPublicationSlugs()
    .map((slug) => getPublication(slug))
    .filter((p): p is Publication => Boolean(p))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getCategories(): string[] {
  const set = new Set(getAllPublications().map((p) => p.category));
  return ["All", ...Array.from(set)];
}

export function getRelated(slug: string, limit = 3): Publication[] {
  const current = getPublication(slug);
  if (!current) return [];
  return getAllPublications()
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      p,
      score:
        (p.category === current.category ? 2 : 0) +
        p.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.p);
}
