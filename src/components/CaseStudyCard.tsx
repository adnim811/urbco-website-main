import type { CaseStudy } from "@/data/caseStudies";
import { domainIcons } from "@/lib/domainIcons";
import NodeNetworkViz from "@/components/visualizations/NodeNetworkViz";
import IconGridViz from "@/components/visualizations/IconGridViz";
import HouseGridViz from "@/components/visualizations/HouseGridViz";
import { ExternalLink } from "lucide-react";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const Icon = domainIcons[study.domain];
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
      <div className="flex items-center justify-between text-xs">
        <span className="inline-flex items-center gap-1.5 font-mono uppercase tracking-wide text-urb-maize">
          <Icon className="h-3.5 w-3.5" />
          {study.domain}
        </span>
        <span className="text-muted">{study.city}</span>
      </div>

      <div className="mt-3 text-xs">
        <a
          href={study.partnerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-white hover:text-urb-maize transition-colors"
        >
          {study.partner}
          <ExternalLink className="h-3 w-3" aria-hidden="true" />
        </a>
      </div>

      {study.visualization && (
        <div className="mt-4 h-32 rounded-lg border border-white/10 bg-black/20 p-3 text-urb-maize">
          {study.visualization === "node-network" && <NodeNetworkViz />}
          {study.visualization === "icon-grid" && <IconGridViz />}
          {study.visualization === "house-grid" && <HouseGridViz />}
        </div>
      )}

      <h3 className="mt-4 text-lg md:text-xl font-semibold tracking-tight text-white">{study.title}</h3>
      <p className="mt-2 text-sm md:text-base text-muted flex-1">{study.description}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {study.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
