"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type TrainStop = {
  id: string;
  code: string;
  title: string;
  time?: string;
  location?: string;
  description: string;
  emphasis?: boolean;
};

export type TrainGroup = {
  label: string;
  stops: TrainStop[];
};

interface TrainTimelineProps {
  groups: TrainGroup[];
  className?: string;
}

function TrainIcon({ className }: { className?: string }) {
  // Top-down view of a bullet train, nose pointing in the direction of travel (down the timeline),
  // running on a short stretch of visible track (rails + ties) peeking out from either side.
  return (
    <svg viewBox="0 0 32 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {/* Rails */}
      <line x1="4" y1="0" x2="4" y2="64" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />
      <line x1="28" y1="0" x2="28" y2="64" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />
      {/* Ties, visible where the train body doesn't cover them */}
      <g stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5">
        <line x1="2" y1="4" x2="30" y2="4" />
        <line x1="2" y1="12" x2="30" y2="12" />
        <line x1="2" y1="50" x2="30" y2="50" />
        <line x1="2" y1="58" x2="30" y2="58" />
      </g>

      {/* Train body — tapered nose down, blunt tail up */}
      <path
        d="M16 61C20 61 23 55.5 23.5 47L23.5 12C23.5 6.5 20 3 16 3C12 3 8.5 6.5 8.5 12L8.5 47C9 55.5 12 61 16 61Z"
        fill="currentColor"
      />
      {/* Windshield / nose cone highlight */}
      <path d="M16 56.5C18 54.5 19.8 50 20.3 44.5L11.7 44.5C12.2 50 14 54.5 16 56.5Z" fill="#070A0F" fillOpacity="0.85" />
      {/* Center aisle stripe */}
      <rect x="14.5" y="8" width="3" height="34" rx="1.5" fill="#070A0F" fillOpacity="0.5" />
      {/* Side windows */}
      <rect x="9.5" y="9" width="4" height="5" rx="1" fill="#070A0F" />
      <rect x="18.5" y="9" width="4" height="5" rx="1" fill="#070A0F" />
      <rect x="9.5" y="18" width="4" height="5" rx="1" fill="#070A0F" />
      <rect x="18.5" y="18" width="4" height="5" rx="1" fill="#070A0F" />
      <rect x="9.5" y="27" width="4" height="5" rx="1" fill="#070A0F" />
      <rect x="18.5" y="27" width="4" height="5" rx="1" fill="#070A0F" />
    </svg>
  );
}

export default function TrainTimeline({ groups, className }: TrainTimelineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);
  const trainRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const track = trackRef.current;
      const fill = fillRef.current;
      const train = trainRef.current;
      if (!container || !track || !fill || !train) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.set(fill, { scaleY: 0, transformOrigin: "top center" });
      gsap.set(train, { y: 0 });

      const trackHeight = () => track.offsetHeight - train.offsetHeight;

      if (!reduceMotion) {
        gsap.to(fill, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.4,
          },
        });

        gsap.to(train, {
          y: () => trackHeight(),
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.4,
            invalidateOnRefresh: true,
          },
        });
      } else {
        gsap.set(fill, { scaleY: 1 });
        gsap.set(train, { y: () => trackHeight() });
      }

      const stops = gsap.utils.toArray<HTMLElement>(".train-stop");
      stops.forEach((stop) => {
        const card = stop.querySelector(".train-stop-card");
        const dot = stop.querySelector(".train-stop-dot");
        const side = stop.dataset.side;

        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 28, x: side === "left" ? -24 : side === "right" ? 24 : 0 },
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stop,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );

        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0.5, backgroundColor: "rgba(255,255,255,0.15)" },
            {
              scale: 1,
              backgroundColor: "#FFCB05",
              duration: 0.4,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: stop,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [groups]);

  let globalIndex = 0;

  return (
    <div ref={containerRef} className={className}>
      <div className="relative">
        {/* Track */}
        <div
          ref={trackRef}
          className="absolute top-0 bottom-0 left-6 md:left-1/2 w-1 md:-translate-x-1/2 rounded-full bg-white/10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(255,255,255,0.25) 0px, rgba(255,255,255,0.25) 2px, transparent 2px, transparent 14px)",
          }}
        >
          <div
            ref={fillRef}
            className="absolute inset-0 rounded-full bg-urb-maize"
            style={{ boxShadow: "0 0 16px rgba(255,203,5,0.55)" }}
          />
        </div>

        {/* Train */}
        <div
          ref={trainRef}
          className="absolute left-6 md:left-1/2 -translate-x-1/2 -translate-y-1 z-20 text-urb-maize drop-shadow-[0_0_10px_rgba(255,203,5,0.6)]"
        >
          <TrainIcon className="h-10 w-10 md:h-12 md:w-12" />
        </div>

        <div className="flex flex-col gap-10 md:gap-4 pt-2">
          {groups.map((group) => (
            <div key={group.label} className="contents">
              {/* Group / phase marker */}
              <div className="train-stop relative grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] items-center py-4" data-side="center">
                <div className="hidden md:block" />
                <div className="train-stop-dot relative z-10 h-6 w-6 md:h-7 md:w-7 rounded-full border-4 border-background bg-white/15 ml-[calc(1.5rem-0.75rem)] md:ml-0" />
                <div className="pl-8 md:pl-0 md:text-left md:col-start-3">
                  <h3 className="text-lg md:text-2xl font-semibold tracking-tight text-urb-maize uppercase">
                    {group.label}
                  </h3>
                </div>
              </div>

              {group.stops.map((stop) => {
                const side = globalIndex % 2 === 0 ? "right" : "left";
                globalIndex += 1;
                return (
                  <div
                    key={stop.id}
                    className="train-stop relative grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] items-center"
                    data-side={side}
                  >
                    {/* left column (desktop card when side=left) */}
                    <div className={`hidden md:block ${side === "left" ? "" : ""}`}>
                      {side === "left" && (
                        <div className="train-stop-card md:pr-10 md:text-right">
                          <StopCard stop={stop} align="right" />
                        </div>
                      )}
                    </div>

                    {/* dot */}
                    <div className="train-stop-dot relative z-10 h-5 w-5 rounded-full border-4 border-background bg-white/15 ml-[calc(1.5rem-0.625rem)] md:ml-0 md:justify-self-center" />

                    {/* right column (mobile always, desktop when side=right) */}
                    <div className="pl-8 md:pl-0 md:col-start-3">
                      {side === "right" ? (
                        <div className="train-stop-card md:pl-10">
                          <StopCard stop={stop} align="left" />
                        </div>
                      ) : (
                        <div className="train-stop-card md:hidden">
                          <StopCard stop={stop} align="left" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StopCard({ stop, align }: { stop: TrainStop; align: "left" | "right" }) {
  return (
    <div
      className={`rounded-2xl border p-5 md:p-6 ${
        stop.emphasis
          ? "border-urb-maize/40 bg-urb-maize/10"
          : "border-white/10 bg-white/5"
      }`}
    >
      <div className={`flex items-center gap-2 text-xs uppercase tracking-wide text-muted ${align === "right" ? "md:justify-end" : ""}`}>
        <span>{stop.code}</span>
      </div>
      <div className={`mt-1 text-lg md:text-xl font-semibold tracking-tight ${stop.emphasis ? "text-urb-maize" : ""}`}>
        {stop.title}
      </div>
      {(stop.time || stop.location) && (
        <p className="mt-1 text-sm text-muted">
          {stop.time}
          {stop.time && stop.location ? " · " : ""}
          {stop.location}
        </p>
      )}
      <p className="mt-2 text-sm md:text-base text-muted">{stop.description}</p>
    </div>
  );
}
