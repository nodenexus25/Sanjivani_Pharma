import { Building2, Droplets, Factory, HandHeart, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StructuredData } from "@/components/common/StructuredData";
import { ProductCard } from "@/components/products/ProductCard";
import { TrustPillarCard } from "@/components/home/TrustPillarCard";
import { products, siteMeta, timeline, trustPillars, trustStats } from "@/content/siteContent";
import { usePageMeta } from "@/hooks/usePageMeta";

const pillarIcons = [ShieldCheck, Droplets, HandHeart, Building2];

export default function Home() {
  usePageMeta({
    title: "Sanjivani Pharma",
    description:
      "Explore Sanjivani Pharma's institutional product portfolio, plant credibility, and quality-led pharma presentation.",
  });

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteMeta.name,
          slogan: siteMeta.tagline,
          description: siteMeta.parent,
          logo: siteMeta.logoImage,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kopargaon",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
        }}
      />

      <section className="px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand-800">
              Pharma Manufacturing Presence
            </div>
            <div className="space-y-6">
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-brand-950 sm:text-5xl lg:text-7xl">
                Trusted sanitizer manufacturing for institutions, trade buyers, and daily hygiene use.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Sanjivani Hand Sanitizer is a specially formulated ethanol-based disinfectant manufactured by Sahkar
                Maharshi Shankarrao Kolhe Sahkari Sakhar Karkhana, Kopargaon. It is designed for effective hygiene,
                instant drying, and institutional supply across multiple pack sizes.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600"
              >
                View Products
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-surface px-5 py-3 text-sm font-semibold text-brand-900 transition hover:bg-brand-50"
              >
                Contact Procurement
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {trustStats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] border border-line bg-surface p-5 shadow-[0_20px_45px_-36px_rgba(8,39,59,0.18)]">
                  <p className="break-words text-xl font-semibold leading-snug text-brand-950 sm:text-2xl">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-[2rem] border border-line bg-surface p-3 shadow-[0_30px_70px_-40px_rgba(8,39,59,0.24)]">
              <img
                src={siteMeta.heroImage}
                alt="Sanjivani Pharma research and manufacturing facility"
                className="h-[420px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-line bg-surface p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">Brand Line</p>
                <p className="mt-3 text-2xl font-semibold text-brand-950">{siteMeta.tagline}</p>
              </div>
              <div className="rounded-[1.5rem] border border-line bg-surface p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">Institutional Focus</p>
                <p className="mt-3 text-sm leading-7 text-muted">Hospitals, clinics, distributors, stockists, and bulk buyers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Flagship Portfolio"
            title="Focused products, presented with procurement clarity."
            description="The product section now carries the actual Sanjivani Hand Sanitizer range with published pack sizes and pricing, while keeping room for broader pharma portfolio growth."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Trust signals shaped for healthcare-facing buyers."
            description="Each message block is framed as a verifiable positioning cue rather than loose brand language, helping the site feel more institutional and less promotional."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {trustPillars.map((pillar, index) => (
              <TrustPillarCard
                key={pillar.key}
                icon={pillarIcons[index]}
                title={pillar.title}
                description={pillar.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-line bg-surface p-3 shadow-[0_20px_45px_-36px_rgba(8,39,59,0.18)]">
            <img src={siteMeta.plantImage} alt="Sanjivani Pharma R&D plant" className="h-full min-h-[320px] w-full rounded-[1.5rem] object-cover" />
          </div>
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Institutional Credibility"
              title="A real plant story is the strongest brand asset on the site."
              description="The 7 July 2021 inauguration and cooperative parentage establish legitimacy that a generic sanitizer landing page cannot communicate."
            />
            <div className="space-y-4">
              {timeline.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-line bg-surface p-5">
                  <div className="flex items-center gap-3">
                    <Factory className="h-5 w-5 text-brand-700" />
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">{item.year}</p>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex rounded-full border border-brand-200 bg-surface px-5 py-3 text-sm font-semibold text-brand-900 transition hover:bg-brand-50">
              Read the full story
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-brand-200 bg-[linear-gradient(135deg,#e9f3f8_0%,#ffffff_100%)] p-8 shadow-[0_30px_70px_-42px_rgba(8,39,59,0.22)] lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">Bulk & Institutional Orders</p>
              <h2 className="text-3xl font-semibold tracking-tight text-brand-950 sm:text-4xl">Ready to support procurement conversations with published sanitizer pack sizes and direct contact access.</h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600"
            >
              Start an enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
