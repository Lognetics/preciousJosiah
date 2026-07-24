import { site } from "@/lib/site";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PersonSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: site.name,
        alternateName: site.shortName,
        url: site.url,
        email: site.email,
        jobTitle: "Web3 Strategist · Community Builder · Fintech Advocate",
        description: site.description,
        sameAs: [
          site.socials.linkedin,
          site.socials.twitter,
          site.socials.telegram,
        ],
        knowsAbout: [
          "Web3",
          "Blockchain",
          "Stablecoins",
          "Decentralized Finance",
          "Community Building",
          "Financial Inclusion",
          "Digital Economy",
        ],
        nationality: "Nigerian",
        worksFor: { "@type": "Organization", name: "Jesaih" },
      }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  slug,
  date,
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        datePublished: date,
        dateModified: date,
        url: `${site.url}/publications/${slug}`,
        author: { "@type": "Person", name: site.name, url: site.url },
        publisher: {
          "@type": "Person",
          name: site.name,
        },
        mainEntityOfPage: `${site.url}/publications/${slug}`,
      }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: `${site.url}${it.url}`,
        })),
      }}
    />
  );
}
