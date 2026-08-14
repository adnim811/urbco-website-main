import type { LucideIcon } from "lucide-react";

export type Major = {
  label: string;
  heading: string;
  description: string;
  icon: LucideIcon;
};

export default function MajorCard({ major }: { major: Major }) {
  const Icon = major.icon;
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wide text-urb-maize">
        <Icon className="h-3.5 w-3.5" />
        {major.label}
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">{major.heading}</h3>
      <p className="mt-3 text-sm text-muted">{major.description}</p>
    </div>
  );
}
