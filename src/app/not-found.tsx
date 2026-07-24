import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[70vh] place-items-center overflow-hidden">
      <div className="mesh-hero absolute inset-0 -z-10" />
      <div className="container-x text-center">
        <p className="font-serif text-[6rem] font-semibold leading-none text-royal md:text-[9rem]">
          404
        </p>
        <h1 className="mt-4 font-serif text-3xl font-semibold">This page went off-chain.</h1>
        <p className="mx-auto mt-3 max-w-md text-[var(--muted)]">
          The page you're looking for doesn't exist — but there's plenty of thinking to explore.
        </p>
        <Link href="/" className="btn-primary mt-8">
          <ArrowLeft size={16} /> Back home
        </Link>
      </div>
    </section>
  );
}
