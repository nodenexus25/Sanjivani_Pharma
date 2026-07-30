interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-brand-950 sm:text-4xl">{title}</h2>
      <p className="text-base leading-8 text-muted">{description}</p>
    </div>
  );
}
