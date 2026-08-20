export type ProductSlug = "hand-sanitizer" | "paracetamol";

export interface ProductVariant {
  label: string;
  packSize?: string;
  note?: string;
  price?: string;
  carton?: string;
  category?: "retail" | "bulk";
  imageSrc?: string;
}

export interface ProductContent {
  slug: ProductSlug;
  name: string;
  shortDescription: string;
  heroSummary: string;
  detailedDescription?: string;
  keyHighlights: string[];
  usageOrIndication: string[];
  complianceNote: string;
  pricingMode: "public" | "enquiry";
  variants: ProductVariant[];
  image: string;
}

const createImageUrl = (
  prompt: string,
  imageSize: "square_hd" | "square" | "portrait_4_3" | "portrait_16_9" | "landscape_4_3" | "landscape_16_9",
) =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${imageSize}`;

export const siteMeta = {
  name: "Sanjivani Pharma",
  tagline: "Pure Protection, Every Drop.",
  logoImage: "/images/Sanjivani Logo.avif",
  groupLogoImage: "/images/SANJIVANI GROUP LOGO - JAN 2023.png",
  parent:
    "Manufactured by Sahkar Maharshi Shankarrao Kolhe Sahkari Sakhar Karkhana, Kopargaon.",
  description:
    "A professionally presented pharma manufacturing website focused on Sanjivani Hand Sanitizer, institutional trust, product clarity, and procurement enquiries.",
  location: "Kopargaon, Maharashtra, India",
  heroImage: "/images/products/sanitizer/All-products,.avif",
  plantImage: createImageUrl(
    "interior of a clean pharmaceutical research and development plant, stainless equipment, bright natural and studio light mix, realistic corporate website photography, India, no text, no watermark",
    "landscape_16_9",
  ),
  founderImage: "/images/founder image.png",
  founderName: "Sahkar Maharshi Shankarrao Kolhe",
  founderTitle: "Founder, The Sanjivani (Takli) Sahakari Sakhar Karkhana",
};

export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Quality", href: "/quality-certifications" },
  { label: "Contact", href: "/contact" },
];

export const trustStats = [
  { label: "R&D Plant Inaugurated", value: "7 July 2021" },
  { label: "Sanitizer Pack Sizes", value: "6 Retail Sizes" },
  { label: "Surface & Hand Use", value: "Multi-Purpose" },
  { label: "Primary Contact", value: "8411002741" },
];

export const trustPillars = [
  {
    key: "quality",
    title: "Pharma-Grade Quality",
    description:
      "Each batch undergoes rigorous quality checks before delivery to clients.",
  },
  {
    key: "protection",
    title: "Effective Protection",
    description:
      "Specially formulated ethanol-based disinfectant effective against bacteria, fungi, and viruses.",
  },
  {
    key: "skin-friendly",
    title: "Instant Dry, Non-Sticky Use",
    description:
      "Apply without water on palms and the back of hands for fast drying and a non-sticky feel.",
  },
  {
    key: "trusted",
    title: "Institutional Supply Ready",
    description:
      "Available for bulk supply, wholesale, stockists, and institutional sales.",
  },
];

export const products: ProductContent[] = [
  {
    slug: "hand-sanitizer",
    name: "Sanjivani Hand Sanitizer",
    shortDescription: "A specially formulated ethanol-based disinfectant for hand hygiene and surface disinfection.",
    heroSummary:
      "Designed for effective use against bacteria, fungi, and viruses, with instant drying, a non-sticky feel, and suitability for both hand use and disinfecting selected surfaces.",
    detailedDescription:
      "Sanjivani Hand Sanitizer is a specially formulated ethanol-based disinfectant that is effective against bacteria, fungi, and viruses. It is used without water by applying on the palm and rubbing across the back of the hands. The sanitizer dries instantly with a non-sticky feeling. It can also be used for disinfecting surfaces such as gym equipment, toilet seats, and other touch surfaces by applying on cotton or cloth and wiping the area. Manufactured by Sahkar Maharshi Shankarrao Kolhe Sahkari Sakhar Karkhana, Kopargaon, each batch undergoes rigorous quality checks before delivery to clients.",
    keyHighlights: [
      "Use without water by applying on palms and rubbing over both hands",
      "Dries instantly with a non-sticky feel",
      "Can be used on surfaces such as gym equipment and toilet seats",
      "Available for retail, wholesale, stockist, and institutional supply",
    ],
    usageOrIndication: [
      "Apply directly on the palm and rub across the back of the hands. No water is required.",
      "For disinfecting surfaces, apply on cotton or cloth and wipe the area to be disinfected.",
      "Suitable for facilities, commercial spaces, institutions, and day-to-day hygiene use.",
    ],
    complianceNote:
      "The sanitizer undergoes rigorous quality checks before delivery to clients. Any additional regulatory or certification claims should be published only after final approval.",
    pricingMode: "public",
    variants: [
      { label: "5 Litre", packSize: "5 litre", price: "Rs 2500 per unit", category: "retail", imageSrc: "/images/products/sanitizer/5-litre.avif" },
      { label: "1 Litre", packSize: "1 litre", price: "Rs 500 per unit", category: "retail", imageSrc: "/images/products/sanitizer/1-litre.avif" },
      { label: "500 ml", packSize: "500 ml", price: "Rs 250 per unit", carton: "1 box contains 48 units", category: "retail", imageSrc: "/images/products/sanitizer/500-ml.avif" },
      { label: "200 ml", packSize: "200 ml", price: "Rs 100 per unit", carton: "1 box contains 36 units", category: "retail", imageSrc: "/images/products/sanitizer/200-ml.avif" },
      { label: "180 ml", packSize: "180 ml", price: "Rs 90 per unit", carton: "1 box contains 48 units", category: "retail", imageSrc: "/images/products/sanitizer/180-ml.avif" },
      { label: "90 ml", packSize: "90 ml", price: "Rs 45 per unit", carton: "1 box contains 100 units", category: "retail", imageSrc: "/images/products/sanitizer/90-ml.avif" },
      { label: "Bulk Packs", packSize: "50 litre and 100 litre", note: "Available for institutional and wholesale supply.", category: "bulk", imageSrc: "/images/products/sanitizer/50-litre.png" },
    ],
    image: "/images/products/sanitizer/All-products,.avif",
  },
  {
    slug: "paracetamol",
    name: "Paracetamol",
    shortDescription: "A core pharma product line presented for institutional and trade discussions.",
    heroSummary:
      "Included as part of the company's broader pharmaceutical portfolio, with details ready to expand once formulation and pack information are approved for public display.",
    keyHighlights: [
      "Second flagship product line on the site",
      "Structured for future formulation and pack-size expansion",
      "Intended for professional, distributor, and procurement audiences",
      "Paired with compliance-focused public wording",
    ],
    usageOrIndication: [
      "Formulation details should be refined with final approved product documentation before launch.",
      "Pack size, strength, and availability can be switched between public display and enquiry mode.",
      "Designed to support institutional and distributor conversations without overstating claims.",
    ],
    complianceNote:
      "Final therapeutic, strength, and regulatory language should be aligned with approved labels and manufacturing documentation.",
    pricingMode: "enquiry",
    variants: [
      { label: "Blister Pack", packSize: "To be confirmed", note: "Retail-ready format if approved for public display." },
      { label: "Institutional Supply", packSize: "To be confirmed", note: "For hospital and distributor enquiry workflows." },
    ],
    image: "/images/products/sanitizer/paracetamol.png",
  },
];

export const certifications = [
  {
    title: "Rigorous Quality Check Process",
    reference: "Manufacturing quality statement",
    detail:
      "Sanjivani Hand Sanitizer undergoes rigorous quality checks before delivery to clients.",
  },
  {
    title: "Ethanol-Based Disinfectant Formulation",
    reference: "Public product formulation note",
    detail:
      "Public messaging can state that the sanitizer is specially formulated as an ethanol-based disinfectant effective against bacteria, fungi, and viruses.",
  },
  {
    title: "Additional License References",
    reference: "Add when approved",
    detail:
      "Reserve this section for future GMP, license, or certification references once they are approved for public disclosure.",
  },
];

export const timeline = [
  {
    year: "2021",
    title: "R&D Plant Inauguration",
    description:
      "The Sanjivani Pharma R&D plant was inaugurated on 7 July 2021 by Hon'ble Shri. Shekharji Gaikwad, Commissioner of Sugar.",
  },
  {
    year: "Today",
    title: "Active Sanitizer Supply",
    description:
      "Sanjivani Hand Sanitizer is supplied in multiple pack sizes, from 90 ml up to 100 litre bulk formats, with wholesale and institutional supply support.",
  },
];

export const contactDetails = {
  locationName: "The Sanjivani (Takli) Sahakari Sakhar Karkhana Ltd, Kopargaon",
  address:
    "Sahkar Maharshi Shankarrao Kolhe Sahkari Sakhar Kharkana, At. Sahajanandnagar, Post. Shingnapur, Tal. Kopargaon, Dist. Ahmednagar, Pin 423603, India",
  phone: "8411002741",
  secondaryPhone: "8411003064",
  note:
    "For product enquiries and supply discussions, contact the office numbers below or write to the company email.",
  email: "ssskltd@gmail.com",
  mapUrl:
    "https://www.google.com/maps?q=The%20Sanjivani%20(Takli)%20Sahakari%20Sakhar%20Karkhana%20Ltd%2C%20Kopargaon&output=embed",
};
