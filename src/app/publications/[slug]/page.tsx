import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import {
  getAllPublications,
  getPublication,
  getPublicationSlugs,
  getRelated,
  coverGradients,
} from "@/lib/publications";
import { site } from "@/lib/site";
import { ReadingProgress } from "@/components/publications/reading-progress";
import { ArticleTools } from "@/components/publications/article-tools";
import { PublicationCard } from "@/components/publication-card";
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo/schema";

export function generateStaticParams() {
  return getPublicationSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getPublication(params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    openGraph: {
      type: "article",
      title: p.title,
      description: p.excerpt,
      publishedTime: p.date,
      url: `${site.url}/publications/${p.slug}`,
    },
    alternates: { canonical: `${site.url}/publications/${p.slug}` },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const p = getPublication(params.slug);
  if (!p) notFound();

  const related = getRelated(params.slug);
  const gradient = coverGradients[p.cover] ?? coverGradients.royal;
  const date = new Date(p.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <ReadingProgress />
      <ArticleSchema title={p.title} description={p.excerpt} slug={p.slug} date={p.date} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Publications", url: "/publications" },
          { name: p.title, url: `/publications/${p.slug}` },
        ]}
      />

      {/* Hero */}
      <article>
        <header className="relative overflow-hidden border-b border-[var(--line)]">
          <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${gradient} opacity-[0.14]`} />
          <div className="container-x pb-14 pt-32 md:pt-40">
            <nav className="mb-8 flex items-center gap-2 text-sm text-[var(--muted)]">
              <Link href="/publications" className="inline-flex items-center gap-1 hover:text-royal">
                <ArrowLeft size={14} /> Publications
              </Link>
            </nav>
            <span className="rounded-full bg-royal/10 px-3 py-1 text-xs font-medium text-royal">
              {p.category}
            </span>
            <h1 className="mt-5 max-w-4xl text-display font-semibold">{p.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
              {p.excerpt}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-[var(--muted)]">
              <span className="inline-flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-royal text-xs font-semibold text-white">
                  PJ
                </span>
                {site.name}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} /> {date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} /> {p.readingTime}
              </span>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="container-x grid gap-10 py-16 lg:grid-cols-[auto_1fr]">
          <div className="lg:sticky lg:top-28 lg:h-max">
            <ArticleTools slug={p.slug} title={p.title} />
          </div>
          <div className="mx-auto w-full max-w-reading">
            <div className="prose-editorial">
              <MDXRemote source={p.content} />
            </div>

            {/* Tags */}
            <div className="mt-12 flex flex-wrap gap-2 border-t border-[var(--line)] pt-8">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Author card */}
            <div className="card mt-8 flex items-center gap-4 p-6">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-royal font-serif text-lg text-white">
                PJ
              </span>
              <div>
                <p className="font-serif text-lg font-semibold">{site.name}</p>
                <p className="text-sm text-[var(--muted)]">
                  {site.role}. Writing at the intersection of technology, finance, and people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-[var(--line)] bg-[var(--card)]">
          <div className="container-x py-16">
            <h2 className="font-serif text-2xl font-semibold">Suggested reading</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <PublicationCard key={r.slug} p={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
