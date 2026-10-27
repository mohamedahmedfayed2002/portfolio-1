import { useMemo } from 'react';
import { motion } from 'framer-motion';

type Node = { id: number; x: number; y: number; delay: number };

export default function NetworkBackground() {
  const nodes = useMemo<Node[]>(() => {
    const seed = 12;
    return Array.from({ length: seed }, (_, i) => ({
      id: i,
      x: (i * 137.5) % 100,
      y: (i * 89.3) % 100,
      delay: (i * 0.7) % 4,
    }));
  }, []);

  const edges = useMemo(() => {
    const result: { a: Node; b: Node }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < 35) result.push({ a: nodes[i], b: nodes[j] });
      }
    }
    return result;
  }, [nodes]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* gradient glow */}
      <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full bg-neon/[0.06] blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full bg-electric/[0.06] blur-3xl" />

      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* edges */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        {edges.map((e, i) => (
          <line
            key={i}
            x1={`${e.a.x}%`}
            y1={`${e.a.y}%`}
            x2={`${e.b.x}%`}
            y2={`${e.b.y}%`}
            stroke="rgba(0,229,168,0.18)"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* nodes */}
      {nodes.map((n) => (
        <motion.span
          key={n.id}
          className="absolute w-1.5 h-1.5 rounded-full bg-neon"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.6, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: n.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
