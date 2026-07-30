import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function NotFound() {
  usePageMeta({
    title: "Page Not Found | Sanjivani Pharma",
    description: "The requested Sanjivani Pharma page could not be found.",
  });

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-line bg-surface p-10 text-center shadow-[0_20px_45px_-36px_rgba(8,39,59,0.18)]">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-950">This page is not available.</h1>
        <p className="mt-4 text-sm leading-7 text-muted">
          The route may have changed while the new Sanjivani Pharma website was being structured.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600"
        >
          Return to home
        </Link>
      </div>
    </section>
  );
}
