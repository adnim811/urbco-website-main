import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}

export default function SectionHeading({ eyebrow, title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-urb-maize">
        <span className="h-2 w-2 rounded-full bg-urb-maize" />
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl md:text-6xl font-semibold tracking-tight text-white">{title}</h2>
      {subtitle && <p className="mt-4 text-base md:text-lg text-muted max-w-2xl">{subtitle}</p>}
    </div>
  );
}
