import { Link } from "react-router-dom";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import { products, siteMeta } from "@/content/siteContent";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Products() {
  const sanitizerProduct = products.find((product) => product.slug === "hand-sanitizer");
  const retailVariants = sanitizerProduct?.variants.filter((variant) => variant.category !== "bulk") ?? [];
  const bulkVariants = sanitizerProduct?.variants.filter((variant) => variant.category === "bulk") ?? [];

  usePageMeta({
    title: "Products | Sanjivani Pharma",
    description: "Explore Sanjivani Pharma's flagship hand sanitizer and paracetamol product pages.",
  });

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="A focused portfolio presented with stronger commercial clarity."
        description="The products section now presents the Sanjivani Hand Sanitizer range with real pack sizes and pricing, while keeping the overall product architecture ready for future additions."
        image={siteMeta.heroImage}
        primaryAction={{ label: "Contact for Supply", href: "/contact" }}
        secondaryAction={{ label: "Quality & Certifications", href: "/quality-certifications" }}
      />

      <section className="px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Portfolio Overview"
            title="Current flagship products"
            description="The sanitizer range now carries live commercial detail, while the page structure remains flexible enough for future portfolio expansion."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {sanitizerProduct ? (
            <div className="mt-14 space-y-10">
              <SectionHeading
                eyebrow="Sanitizer Range"
                title="Sanjivani Hand Sanitizer pack sizes, shown categorically."
                description="The layout below is intentionally image-ready, so each size can later carry its own product photograph without changing the catalog structure."
              />

              <div className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">Retail Sizes</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-brand-950">Ready for individual pack images</h3>
                  </div>
                  <p className="text-sm text-muted">{retailVariants.length} listed sizes</p>
                </div>
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {retailVariants.map((variant) => (
                    <article
                      key={variant.label}
                      className="overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-[0_18px_40px_-34px_rgba(8,39,59,0.18)]"
                    >
                      <div className="flex h-44 items-center justify-center border-b border-brand-100 bg-[linear-gradient(180deg,#f7fbfd_0%,#edf4f8_100%)] px-6 py-5">
                        {variant.imageSrc ? (
                          <img
                            src={variant.imageSrc}
                            alt={`${variant.label} pack`}
                            className="h-full w-full object-contain"
                            loading="lazy"
                          />
                        ) : (
                          <div className="text-center">
                            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand-700">Image Slot</p>
                            <p className="mt-3 text-lg font-semibold text-brand-950">{variant.label} pack photo will be added here</p>
                          </div>
                        )}
                      </div>
                      <div className="space-y-3 p-6">
                        <h4 className="text-2xl font-semibold tracking-tight text-brand-950">{variant.label}</h4>
                        <p className="text-sm font-medium text-brand-800">{variant.packSize}</p>
                        {variant.price ? <p className="text-sm font-semibold text-accent-600">{variant.price}</p> : null}
                        {variant.carton ? <p className="text-sm leading-7 text-muted">{variant.carton}</p> : null}
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {bulkVariants.length ? (
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">Bulk Supply</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-brand-950">Larger institutional pack options</h3>
                  </div>
                  <div className="grid gap-5 lg:grid-cols-2">
                    {bulkVariants.map((variant) => (
                      <article
                        key={variant.label}
                        className="overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-[0_18px_40px_-34px_rgba(8,39,59,0.18)]"
                      >
                        <div className="flex h-80 items-center justify-center border-b border-brand-100 bg-brand-50/60 px-8 py-6">
                          {variant.imageSrc ? (
                            <img
                              src={variant.imageSrc}
                              alt={`${variant.label} pack`}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="text-center">
                              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand-700">Bulk Pack Image Slot</p>
                              <p className="mt-3 text-lg font-semibold text-brand-950">{variant.packSize} product image will be added here</p>
                            </div>
                          )}
                        </div>
                        <div className="space-y-3 p-6">
                          <h4 className="text-2xl font-semibold tracking-tight text-brand-950">{variant.label}</h4>
                          <p className="text-sm font-medium text-brand-800">{variant.packSize}</p>
                          {variant.note ? <p className="text-sm leading-7 text-muted">{variant.note}</p> : null}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}

          <div className="mt-10 rounded-[2rem] border border-line bg-surface p-8 shadow-[0_20px_45px_-36px_rgba(8,39,59,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">Commercial Note</p>
            <p className="mt-4 max-w-4xl text-sm leading-8 text-muted">
              Public pricing is available for the sanitizer line from 90 ml through 5 litre units, and the products page is now structured so each pack size can later carry its own image. Bulk 50 litre and 100 litre supply remains available through direct enquiry.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-full border border-brand-200 bg-surface px-5 py-3 text-sm font-semibold text-brand-900 transition hover:bg-brand-50"
            >
              Discuss procurement requirements
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
