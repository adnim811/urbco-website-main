"use client";

import { useMemo, useState } from "react";
import { caseStudies, domains, type Domain } from "@/data/caseStudies";
import { domainIcons } from "@/lib/domainIcons";
import CaseStudyCard from "./CaseStudyCard";

export default function ProjectsFilter() {
  const [active, setActive] = useState<Domain | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? caseStudies : caseStudies.filter((s) => s.domain === active)),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setActive("All")}
          className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            active === "All"
              ? "bg-urb-maize text-urb-blue"
              : "border border-white/15 text-muted hover:text-foreground"
          }`}
        >
          All Work
        </button>
        {domains.map((domain) => {
          const Icon = domainIcons[domain];
          const isActive = active === domain;
          return (
            <button
              key={domain}
              onClick={() => setActive(domain)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-urb-maize text-urb-blue"
                  : "border border-white/15 text-muted hover:text-foreground"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {domain}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>

      <p className="mt-8 text-xs text-muted opacity-70">
        * Placeholder case studies — real client engagements &amp; NDA-safe summaries coming soon.
      </p>
    </div>
  );
}
