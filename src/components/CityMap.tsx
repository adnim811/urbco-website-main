"use client";

import { useState } from "react";
import Image from "next/image";
import { caseStudies } from "@/data/caseStudies";
import { domainIcons } from "@/lib/domainIcons";

export default function CityMap() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-8">
      <div className="relative w-full aspect-[1054/652]">
        <Image
          src="/images/map/us-map-states.png"
          alt="Map of United States showing project locations"
          fill
          sizes="(max-width: 768px) 100vw, 1116px"
          className="object-contain select-none pointer-events-none"
          priority={false}
        />

        {caseStudies.map((study) => {
          const Icon = domainIcons[study.domain];
          const isActive = activeId === study.id;
          return (
            <button
              key={study.id}
              type="button"
              onMouseEnter={() => setActiveId(study.id)}
              onMouseLeave={() => setActiveId((id) => (id === study.id ? null : id))}
              onFocus={() => setActiveId(study.id)}
              onClick={() => setActiveId((id) => (id === study.id ? null : study.id))}
              className="group absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
              style={{ left: `${study.mapX}%`, top: `${study.mapY}%` }}
              aria-label={`${study.title} — ${study.city}`}
            >
              <span
                className={`block h-3 w-3 rounded-full bg-urb-maize ring-4 transition-all ${
                  isActive ? "ring-urb-maize/30 scale-125" : "ring-urb-maize/0"
                }`}
                style={{ boxShadow: "0 0 10px rgba(255,203,5,0.7)" }}
              />

              {isActive && (
                <div className="absolute bottom-full mb-3 w-56 -translate-x-1/2 left-1/2 rounded-xl border border-white/10 bg-background/95 backdrop-blur px-4 py-3 text-left shadow-lg shadow-black/40 z-20">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wide text-urb-maize">
                    <Icon className="h-3 w-3" />
                    {study.domain}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white leading-snug">{study.title}</div>
                  <div className="mt-1 text-xs text-muted">{study.city}</div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-xs text-muted opacity-70">
        Base map: state boundaries via Wikimedia Commons (CC BY-SA 3.0). Hover or tap a city for project details.
      </p>
    </div>
  );
}
