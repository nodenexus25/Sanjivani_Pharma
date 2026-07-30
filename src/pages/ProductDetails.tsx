import { Link, Navigate, useParams } from "react-router-dom";
import { FileBadge2, PackageCheck, ShieldPlus } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StructuredData } from "@/components/common/StructuredData";
import { products, type ProductSlug } from "@/content/siteContent";
import { usePageMeta } from "@/hooks/usePageMeta";

const detailCards = [
  {
    icon: ShieldPlus,
    title: "Compliance-aware presentation",
    body: "Public-facing claims are structured to stay factual and ready for final approval workflows.",
  },
  {
    icon: PackageCheck,
    title: "Flexible pack-size blocks",
    body: "Variants can be published, hidden, or expanded later without changing the page structure.",
  },
  {
    icon: FileBadge2,
    title: "Procurement-ready enquiry flow",
    body: "Every product page includes a direct path to contact for institutional or distributor discussions.",
  },
];

export default function ProductDetails() {
  const params = useParams();
  const product = products.find((item) => item.slug === (params.slug as ProductSlug));
  const retailVariants = product?.variants.filter((variant) => variant.category !== "bulk") ?? [];
  const bulkVariants = product?.variants.filter((variant) => variant.category === "bulk") ?? [];

  usePageMeta({
    title: product ? `${product.name} | Sanjivani Pharma` : "Products | Sanjivani Pharma",
    description: product ? product.shortDescription : "Explore Sanjivani Pharma's flagship products.",
  });

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.shortDescription,
          brand: { "@type": "Brand", name: "Sanjivani Pharma" },
          image: product.image,
        }}
      />

      <PageHero
        eyebrow="Product Detail"
        title={product.name}
        description={product.heroSummary}
        image={product.image}
        primaryAction={{ label: "Start an Enquiry", href: "/contact" }}
        secondaryAction={{ label: "All Products", href: "/products" }}
      />

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Product Highlights"
            title="Built to communicate the essentials clearly."
            description="The structure below is designed to be practical for procurement conversations while staying careful with public wording."
          />
          {product.detailedDescription ? (
            <div className="mt-8 rounded-[1.75rem] border border-line bg-surface p-6 shadow-[0_18px_40px_-34px_rgba(8,39,59,0.18)]">
              <p className="text-sm leading-8 text-muted">{product.detailedDescription}</p>
            </div>
          ) : null}
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {product.keyHighlights.map((highlight) => (
              <article key={highlight} className="rounded-[1.75rem] border border-line bg-surface p-6 shadow-[0_18px_40px_-34px_rgba(8,39,59,0.18)]">
                <p className="text-sm leading-7 text-muted">{highlight}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-line bg-surface p-8 shadow-[0_20px_45px_-36px_rgba(8,39,59,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">Usage & Positioning</p>
            <div className="mt-5 space-y-4">
              {product.usageOrIndication.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-brand-100 bg-brand-50/55 p-5 text-sm leading-7 text-muted">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-line bg-surface p-8 shadow-[0_20px_45px_-36px_rgba(8,39,59,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">Variants & Packs</p>
            <div className="mt-5 space-y-8">
              {retailVariants.length ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Retail Sizes</p>
                    <p className="text-xs text-muted">Image-ready individual pack cards</p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {retailVariants.map((variant) => (
                      <article key={variant.label} className="overflow-hidden rounded-[1.5rem] border border-brand-100 bg-brand-50/55">
                        <div className="flex h-36 items-center justify-center border-b border-brand-100 bg-[linear-gradient(180deg,#f7fbfd_0%,#edf4f8_100%)] px-5 py-4">
                          {variant.imageSrc ? (
                            <img
                              src={variant.imageSrc}
                              alt={`${variant.label} pack`}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="text-center">
                              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">Image Slot</p>
                              <p className="mt-2 text-sm font-semibold text-brand-950">{variant.label} image will be added here</p>
                            </div>
                          )}
                        </div>
                        <div className="p-5">
                          <h3 className="text-2xl font-semibold tracking-tight text-brand-950">{variant.label}</h3>
                          <p className="mt-2 text-sm font-medium text-brand-800">{variant.packSize ?? "To be confirmed"}</p>
                          {variant.price ? <p className="mt-2 text-sm font-semibold text-accent-600">{variant.price}</p> : null}
                          {variant.carton ? <p className="mt-2 text-sm text-muted">{variant.carton}</p> : null}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ) : null}

              {bulkVariants.length ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Bulk Packs</p>
                    <p className="text-xs text-muted">Structured for institutional and wholesale images</p>
                  </div>
                  <div className="grid gap-4">
                    {bulkVariants.map((variant) => (
                      <article key={variant.label} className="overflow-hidden rounded-[1.5rem] border border-brand-100 bg-brand-50/55">
                        <div className="flex h-72 items-center justify-center border-b border-brand-100 bg-brand-100/50 px-8 py-6">
                          {variant.imageSrc ? (
                            <img
                              src={variant.imageSrc}
                              alt={`${variant.label} pack`}
                              className="h-full w-full object-contain"
                              loading="lazy"
                            />
                          ) : (
                            <div className="text-center">
                              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">Bulk Image Slot</p>
                              <p className="mt-2 text-sm font-semibold text-brand-950">{variant.packSize} image will be added here</p>
                            </div>
                          )}
                        </div>
                        <div className="p-5">
                          <h3 className="text-2xl font-semibold tracking-tight text-brand-950">{variant.label}</h3>
                          <p className="mt-2 text-sm font-medium text-brand-800">{variant.packSize ?? "To be confirmed"}</p>
                          {variant.note ? <p className="mt-3 text-sm leading-7 text-muted">{variant.note}</p> : null}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Commercial Readiness"
            title="Designed to grow with approved data."
            description="These support cards make it easier to expand the page later with approved strengths, batch references, and documentation."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {detailCards.map((card) => {
              const Icon = card.icon;

              return (
                <article key={card.title} className="rounded-[2rem] border border-line bg-surface p-6 shadow-[0_20px_45px_-36px_rgba(8,39,59,0.18)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-800">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-brand-950">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{card.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-line bg-surface p-8 shadow-[0_20px_45px_-36px_rgba(8,39,59,0.18)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">Compliance Note</p>
          <p className="mt-4 max-w-4xl text-sm leading-8 text-muted">{product.complianceNote}</p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600"
          >
            Request supply information
          </Link>
        </div>
      </section>
    </>
  );
}
