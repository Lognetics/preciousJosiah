import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Use" />
      <section className="container-x py-16">
        <div className="prose-editorial mx-auto max-w-reading">
          <p>
            By using this website you agree to these terms. All content, including articles,
            essays, and media, is provided for informational and educational purposes only and
            does not constitute financial, investment, or legal advice.
          </p>
          <h2>Intellectual property</h2>
          <p>
            The writing and original materials on this site are the intellectual property of
            Precious Josiah Udezua. You may share and cite with attribution; you may not
            republish in full without permission.
          </p>
          <h2>No warranties</h2>
          <p>
            Content is provided “as is.” While care is taken for accuracy, no guarantee is made,
            and you are responsible for your own decisions, particularly regarding financial
            technologies.
          </p>
          <p className="text-sm text-[var(--muted)]">
            This is placeholder text, replace with your finalised terms before launch.
          </p>
        </div>
      </section>
    </>
  );
}
