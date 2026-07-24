import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <section className="container-x py-16">
        <div className="prose-editorial mx-auto max-w-reading">
          <p>
            This website respects your privacy. Personal information you choose to share —
            such as your email address when subscribing to the newsletter or your details
            when using the contact form — is used solely to respond to you and to send the
            content you requested.
          </p>
          <h2>What we collect</h2>
          <p>
            We collect only what you provide directly (name, email, message) and standard,
            privacy-respecting analytics about how pages are used. We do not sell your data.
          </p>
          <h2>Your choices</h2>
          <p>
            You can unsubscribe from emails at any time, and you may request access to or
            deletion of your data by contacting us. Cookies used for theme preference and
            analytics can be cleared from your browser at any time.
          </p>
          <p className="text-sm text-[var(--muted)]">
            This is placeholder text — replace with your finalised policy before launch.
          </p>
        </div>
      </section>
    </>
  );
}
