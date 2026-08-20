import { Award, Landmark, Microscope } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { siteMeta, timeline } from "@/content/siteContent";
import { usePageMeta } from "@/hooks/usePageMeta";

const values = [
  {
    icon: Landmark,
    title: "Cooperative-Backed Credibility",
    description:
      "The division draws strength from its parent cooperative identity, giving the brand more institutional grounding than a standalone consumer-style label.",
  },
  {
    icon: Microscope,
    title: "Plant-Led Trust",
    description:
      "The R&D plant story allows the website to speak through infrastructure, process, and seriousness rather than relying only on product slogans.",
  },
  {
    icon: Award,
    title: "Disciplined Public Claims",
    description:
      "Compliance-sensitive wording on quality and standards helps the website feel professional to hospitals, clinics, and trade buyers.",
  },
];

export default function About() {
  usePageMeta({
    title: "About | Sanjivani Pharma",
    description: "Learn about Sanjivani Pharma's R&D plant story, cooperative parentage, and quality-led manufacturing philosophy.",
  });

  return (
    <>
      <PageHero
        eyebrow="About Sanjivani Pharma"
        title="A manufacturing story built on disciplined production, practical hygiene use, and trusted local credibility."
        description="Sanjivani Hand Sanitizer is manufactured by Sahkar Maharshi Shankarrao Kolhe Sahkari Sakhar Karkhana, Kopargaon, and positioned as a practical, quality-checked product for daily hygiene and institutional use."
        image={siteMeta.plantImage}
        primaryAction={{ label: "Explore Products", href: "/products" }}
        secondaryAction={{ label: "Quality & Certifications", href: "/quality-certifications" }}
      />

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Parent Institution"
            title="Rooted in Sahkar Maharshi Shankarrao Kolhe Sahkari Sakhar Karkhana."
            description="The brand draws strength from a known manufacturing institution in Kopargaon, giving customers more confidence than a generic unbacked sanitizer listing."
          />
          <div className="mt-8 rounded-[2rem] border border-line bg-surface p-8 shadow-[0_20px_45px_-36px_rgba(8,39,59,0.18)]">
            <p className="max-w-4xl text-base leading-8 text-muted">{siteMeta.parent}</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Leadership & Legacy"
            title="Founded on cooperative values by Sahkar Maharshi Shankarrao Kolhe."
            description="The Sanjivani cooperative movement was built on the principle of strengthening local livelihoods through self-reliant institutions — a legacy that continues to guide Sanjivani Pharma today."
          />
          <div className="mt-8 grid items-center gap-8 rounded-[2rem] border border-line bg-surface p-8 shadow-[0_20px_45px_-36px_rgba(8,39,59,0.18)] lg:grid-cols-[auto_1fr] lg:gap-12 lg:p-10">
            <div className="relative mx-auto h-60 w-60 flex-shrink-0 overflow-hidden rounded-[1.75rem] border border-line sm:h-72 sm:w-72 lg:mx-0">
              <img
                src={siteMeta.founderImage}
                alt={siteMeta.founderName}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-950/60 via-brand-950/20 to-transparent" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">Founder & Visionary</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-brand-950">{siteMeta.founderName}</h3>
              <p className="mt-2 text-base font-medium text-brand-700">{siteMeta.founderTitle}</p>
              <p className="mt-6 text-base leading-8 text-muted">
                Sahkar Maharshi Shankarrao Kolhe's lifelong commitment to the cooperative movement established institutions that serve Kopargaon and the surrounding region across sugar, education, and now pharmaceuticals. The Sanjivani Pharma division carries forward the same founding ethos — disciplined production, community benefit, and products that people can trust.
              </p>
              <p className="mt-4 text-base leading-8 text-muted">
                Today, the manufacturing cooperative delivers Sanjivani Hand Sanitizer and a growing pharma portfolio with the same institutional rigor and local accountability that has defined the group for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Plant Milestones"
            title="The inauguration story should anchor public trust."
            description="Rather than hiding the R&D plant in fine print, the site brings it to the foreground as a clear proof point for decision-makers evaluating supplier seriousness."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {timeline.map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-line bg-surface p-8 shadow-[0_20px_45px_-36px_rgba(8,39,59,0.18)]">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">{item.year}</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-brand-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-8 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Quality Philosophy"
            title="Measured, factual, and procurement-friendly communication."
            description="The design and copy direction favor calm authority, factual phrasing, and careful compliance language, which is far more appropriate for hospitals and clinics than consumer-style hype."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article key={value.title} className="rounded-[2rem] border border-line bg-surface p-6 shadow-[0_20px_45px_-36px_rgba(8,39,59,0.18)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-800">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-brand-950">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
