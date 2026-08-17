import React from "react";

// Deterministic pseudo-random generator so each seed always renders the same art.
function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const WIDTH = 400;
const HEIGHT = 220;

const buildCircuit = (seed) => {
  const rand = mulberry32(seed * 9301 + 49297);
  const cols = 6;
  const rows = 4;
  const cellW = WIDTH / cols;
  const cellH = HEIGHT / rows;

  const nodes = [];
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      if (rand() > 0.55) continue;
      nodes.push({
        x: c * cellW + cellW / 2 + (rand() - 0.5) * cellW * 0.4,
        y: r * cellH + cellH / 2 + (rand() - 0.5) * cellH * 0.4,
        r: rand() > 0.85 ? 4 : 2,
      });
    }
  }

  const paths = [];
  for (let i = 0; i < nodes.length - 1; i++) {
    if (rand() > 0.6) continue;
    const a = nodes[i];
    const b = nodes[i + 1];
    const midX = rand() > 0.5 ? a.x : b.x;
    paths.push(`M ${a.x} ${a.y} L ${midX} ${a.y} L ${midX} ${b.y} L ${b.x} ${b.y}`);
  }

  const ticks = [];
  for (let i = 0; i < 5; i++) {
    ticks.push({
      x: rand() * WIDTH,
      y: rand() * HEIGHT,
      len: 6 + rand() * 10,
      vertical: rand() > 0.5,
    });
  }

  return { nodes, paths, ticks };
};

const ProjectBlueprint = ({ seed = 1, label }) => {
  const { nodes, paths, ticks } = buildCircuit(seed);

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={label ? `${label} schematic` : "schematic diagram"}
    >
      <rect width={WIDTH} height={HEIGHT} fill="var(--bg-secondary)" />
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="var(--border)"
          strokeWidth="1"
          opacity="0.9"
        />
      ))}
      {ticks.map((t, i) => (
        <line
          key={i}
          x1={t.vertical ? t.x : t.x - t.len / 2}
          y1={t.vertical ? t.y - t.len / 2 : t.y}
          x2={t.vertical ? t.x : t.x + t.len / 2}
          y2={t.vertical ? t.y + t.len / 2 : t.y}
          stroke="var(--text-main-color)"
          strokeWidth="1"
          opacity="0.5"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill="none"
          stroke="var(--accent-color)"
          strokeWidth="1"
          opacity="0.85"
        />
      ))}
    </svg>
  );
};

export default ProjectBlueprint;
