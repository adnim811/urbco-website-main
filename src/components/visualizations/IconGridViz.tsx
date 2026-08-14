import { Sun, Recycle, Droplet, Leaf, Zap, Wind, Bike, TreePine } from "lucide-react";

const cells = [
  { icon: Sun, label: "Solar", pct: 82 },
  { icon: Recycle, label: "Recycling", pct: 64 },
  { icon: Droplet, label: "Water", pct: 71 },
  { icon: Leaf, label: "Green space", pct: 58 },
  { icon: Zap, label: "EV charging", pct: 45 },
  { icon: Wind, label: "Wind", pct: 33 },
  { icon: Bike, label: "Bike infra.", pct: 69 },
  { icon: TreePine, label: "Tree canopy", pct: 77 },
];

export default function IconGridViz() {
  return (
    <div className="grid grid-cols-4 gap-2 w-full h-full">
      {cells.map(({ icon: Icon, label, pct }) => (
        <div
          key={label}
          title={label}
          className="flex flex-col items-center justify-center gap-1 rounded-lg border border-white/10 bg-white/5 py-2"
        >
          <Icon className="h-4 w-4" />
          <span className="text-[10px] font-mono text-current">{pct}%</span>
        </div>
      ))}
    </div>
  );
}
