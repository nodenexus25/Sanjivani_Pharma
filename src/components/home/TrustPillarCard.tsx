import type { LucideIcon } from "lucide-react";

interface TrustPillarCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function TrustPillarCard({ icon: Icon, title, description }: TrustPillarCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-line bg-surface p-6 shadow-[0_20px_45px_-36px_rgba(8,39,59,0.22)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-800">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-brand-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
    </article>
  );
}
