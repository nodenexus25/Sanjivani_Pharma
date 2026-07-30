import { BadgeCheck, ClipboardCheck, ShieldAlert } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { certifications, siteMeta } from "@/content/siteContent";
import { usePageMeta } from "@/hooks/usePageMeta";

const qualityNotes = [
  {
    icon: BadgeCheck,
    title: "GMP should be presented as evidence-backed information",
    description:
      "Institutional buyers respond better to clear, supportable quality references than to generic adjectives about excellence.",
  },
  {
    icon: ClipboardCheck,
    title: "WHO alcohol concentration language should remain precise",
    description:
      "For sanitizer messaging, the site should explain the standard in calm, factual language and avoid unqualified claims.",
  },
  {
    icon: ShieldAlert,
    title: "Compliance review remains part of launch readiness",
    description:
      "Certification numbers, manufacturing references, and final therapeutic language should only go live after approval.",
  },
];

export default function Quality() {
  usePageMeta({
    title: "Quality & Certifications | Sanjivani Pharma",
    description: "Review Sanjivani Pharma's quality positioning, sanitizer formulation notes, and future certification references.",
  });

  return (
    <>
      <PageHero
        eyebrow="Quality & Certifications"
        title="Trust is strongest when standards are explained clearly and conservatively."
        description="This section gives the website a dedicated place for GMP-oriented messaging, WHO alcohol concentration context, and future certificate references without turning serious claims into vague slogans."
        image={siteMeta.plantImage}
        primaryAction={{ label: "Contact the Team", href: "/contact" }}
        secondaryAction={{ label: "Explore Products", href: "/products" }}
      />

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Claim Discipline"
            title="Built to support factual public communication."
            description="The visual design here stays clean and restrained so the message reads as institutional trust, not marketing excess."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {qualityNotes.map((note) => {
              const Icon = note.icon;

              return (
                <article key={note.title} className="rounded-[2rem] border border-line bg-surface p-6 shadow-[0_20px_45px_-36px_rgba(8,39,59,0.18)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-800">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-brand-950">{note.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{note.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Certificate References"
            title="Ready for approved license and certification details."
            description="These blocks hold space for final public references without forcing a redesign later."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {certifications.map((certificate) => (
              <article key={certificate.title} className="rounded-[2rem] border border-line bg-surface p-6 shadow-[0_20px_45px_-36px_rgba(8,39,59,0.18)]">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">{certificate.reference}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-brand-950">{certificate.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{certificate.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
