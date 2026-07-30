import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroAction {
  label: string;
  href: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  primaryAction,
  secondaryAction,
}: PageHeroProps) {
  return (
    <section className="px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">{eyebrow}</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-brand-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">{description}</p>
          {(primaryAction || secondaryAction) ? (
            <div className="flex flex-col gap-4 sm:flex-row">
              {primaryAction ? (
                <Link
                  to={primaryAction.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600"
                >
                  {primaryAction.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}
              {secondaryAction ? (
                <Link
                  to={secondaryAction.href}
                  className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-surface px-5 py-3 text-sm font-semibold text-brand-900 transition hover:bg-brand-50"
                >
                  {secondaryAction.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-line bg-surface p-3 shadow-[0_30px_70px_-40px_rgba(8,39,59,0.28)]">
          <img
            src={image}
            alt={title}
            className="h-full min-h-[300px] w-full rounded-[1.5rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
