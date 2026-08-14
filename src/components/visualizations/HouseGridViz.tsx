import { Home } from "lucide-react";

const TOTAL = 24;
// Scattered subset of sites flagged as strong candidates
const highlighted = new Set([2, 5, 9, 11, 14, 18, 21]);

export default function HouseGridViz() {
  return (
    <div className="grid grid-cols-6 gap-1.5 w-full h-full place-items-center">
      {Array.from({ length: TOTAL }).map((_, i) => {
        const isHot = highlighted.has(i);
        return (
          <Home
            key={i}
            className={
              isHot
                ? "h-4 w-4 text-urb-maize animate-pulse drop-shadow-[0_0_5px_rgba(255,203,5,0.8)]"
                : "h-4 w-4 text-current opacity-20"
            }
          />
        );
      })}
    </div>
  );
}
