"use client";

import { useMemo, useState } from "react";
import { caseStudies, domains, type Domain } from "@/data/caseStudies";
import { domainIcons } from "@/lib/domainIcons";
import CaseStudyCard from "./CaseStudyCard";

const PAGE_SIZE = 6;

export default function ProjectsFilter() {
  const [active, setActive] = useState<Domain | "All">("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () => (active === "All" ? caseStudies : caseStudies.filter((s) => s.domain === active)),
    [active]
  );

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const selectFilter = (value: Domain | "All") => {
    setActive(value);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => selectFilter("All")}
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
              onClick={() => selectFilter(domain)}
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
        {visible.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="inline-flex items-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-muted hover:text-foreground hover:border-white/25 transition-colors"
          >
            Load more
          </button>
        </div>
      )}

      <p className="mt-8 text-xs text-muted opacity-70">
        * Placeholder case studies — real client engagements &amp; NDA-safe summaries coming soon.
      </p>
    </div>
  );
}
