import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ProductContent } from "@/content/siteContent";

interface ProductCardProps {
  product: ProductContent;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-line bg-surface shadow-[0_24px_50px_-40px_rgba(8,39,59,0.2)]">
      <div className="flex h-72 items-center justify-center border-b border-brand-100 bg-[linear-gradient(180deg,#f7fbfd_0%,#eef5f8_100%)] p-6">
        <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
      </div>
      <div className="space-y-5 p-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand-700">Flagship Product</p>
          <h3 className="text-2xl font-semibold tracking-tight text-brand-950">{product.name}</h3>
          <p className="text-sm leading-7 text-muted">{product.shortDescription}</p>
        </div>

        <ul className="space-y-2 text-sm text-muted">
          {product.keyHighlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-600" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <Link
          to={`/products/${product.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800 transition hover:text-brand-950"
        >
          View product details
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
