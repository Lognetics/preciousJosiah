import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { PublicationsLibrary } from "@/components/publications/library";
import { getAllPublications, getCategories } from "@/lib/publications";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "A searchable knowledge center on Web3, stablecoins, DeFi, communities, leadership, and Africa's innovation ecosystem — by Precious Josiah Udezua.",
};

export default function PublicationsPage() {
  const publications = getAllPublications();
  const categories = getCategories();

  return (
    <>
      <PageHeader
        eyebrow="Publications Library"
        title="Ideas worth thinking about."
        intro="A growing library of essays on technology, finance, community, and the human side of innovation. Every piece favours practical utility over speculation."
      />
      <PublicationsLibrary publications={publications} categories={categories} />
    </>
  );
}
