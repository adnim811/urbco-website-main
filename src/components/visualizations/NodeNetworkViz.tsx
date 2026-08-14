const nodes = [
  { id: "a", x: 34, y: 104 },
  { id: "b", x: 92, y: 38 },
  { id: "c", x: 158, y: 88 },
  { id: "d", x: 226, y: 28 },
  { id: "e", x: 262, y: 100 },
  { id: "f", x: 148, y: 138 },
];

const edges: { from: string; to: string; label?: string }[] = [
  { from: "a", to: "b", label: "0.6 mi" },
  { from: "b", to: "c" },
  { from: "c", to: "d", label: "0.9 mi" },
  { from: "d", to: "e" },
  { from: "c", to: "f", label: "0.4 mi" },
  { from: "f", to: "a" },
  { from: "e", to: "f" },
];

function findNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export default function NodeNetworkViz() {
  return (
    <svg viewBox="0 0 296 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {edges.map((edge, i) => {
        const from = findNode(edge.from);
        const to = findNode(edge.to);
        const midX = (from.x + to.x) / 2;
        const midY = (from.y + to.y) / 2;
        return (
          <g key={i}>
            <line
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="currentColor"
              strokeOpacity={0.25}
              strokeWidth={1.5}
            />
            {edge.label && (
              <text
                x={midX}
                y={midY - 5}
                textAnchor="middle"
                fontSize="9"
                fontFamily="var(--font-geist-mono), monospace"
                fill="currentColor"
                fillOpacity={0.55}
              >
                {edge.label}
              </text>
            )}
          </g>
        );
      })}
      {nodes.map((node) => (
        <g key={node.id}>
          <circle cx={node.x} cy={node.y} r={7} fill="currentColor" fillOpacity={0.15} />
          <circle cx={node.x} cy={node.y} r={4} fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}
