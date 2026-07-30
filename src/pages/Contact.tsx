import { Building2, Mail, MapPinned, Phone } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/common/SectionHeading";
import { contactDetails, siteMeta } from "@/content/siteContent";
import { usePageMeta } from "@/hooks/usePageMeta";

const contactCards = [
  { icon: Building2, label: "Bulk & Institutional Orders", value: "For bulk supply, wholesale, stockists, and institutional sales, contact the team directly." },
  { icon: Phone, label: "Phone", value: contactDetails.phone },
  { icon: Phone, label: "Alternate Phone", value: contactDetails.secondaryPhone },
  { icon: Mail, label: "Email", value: contactDetails.email },
  { icon: MapPinned, label: "Location", value: `${contactDetails.locationName}\n${contactDetails.address}` },
];

export default function Contact() {
  usePageMeta({
    title: "Contact | Sanjivani Pharma",
    description: "Contact Sanjivani Pharma for institutional procurement, distribution, or bulk product enquiries.",
  });

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="A direct contact path for retail, wholesale, and institutional sanitizer orders."
        description="Use the published phone and email details for supply discussions, or send an enquiry through the on-site contact form."
        image={siteMeta.heroImage}
      />

      <section className="px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Reach the Team"
              title="Built for real procurement conversations."
              description="The page now uses the supplied business contact details and a simpler enquiry form so the pathway is direct and practical."
            />
            <div className="grid gap-4">
              {contactCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article key={card.label} className="rounded-[1.75rem] border border-line bg-surface p-6 shadow-[0_18px_40px_-34px_rgba(8,39,59,0.18)]">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-800">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">{card.label}</p>
                        <p className="mt-3 text-sm leading-7 text-muted">{card.value}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-line bg-surface p-3 shadow-[0_18px_40px_-34px_rgba(8,39,59,0.18)]">
              <iframe
                title={contactDetails.locationName}
                src={contactDetails.mapUrl}
                className="h-[320px] w-full rounded-[1.5rem] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
