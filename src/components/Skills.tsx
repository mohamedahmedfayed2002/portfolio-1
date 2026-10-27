import { motion } from 'framer-motion';
import {
  Terminal,
  Container,
  GitBranch,
  Cloud,
  Activity,
  Cog,
  Network,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { skillCategories } from '@/data/skills';
import { Reveal, SectionHeading } from './ui/Reveal';

const iconMap: Record<string, LucideIcon> = {
  terminal: Terminal,
  container: Container,
  gitBranch: GitBranch,
  cloud: Cloud,
  activity: Activity,
  cog: Cog,
  network: Network,
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-bg-secondary/40 border-y border-white/[0.04]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="02 / Skills"
          title="Technical Skills"
          subtitle="The tools and technologies I use to build, automate, and monitor infrastructure."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Terminal;
            return (
              <Reveal key={cat.title} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group glass glass-hover rounded-2xl p-6 h-full"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="grid place-items-center w-11 h-11 rounded-xl bg-neon/10 text-neon border border-neon/20 group-hover:shadow-glow transition-shadow">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-semibold text-ink">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 text-sm text-ink-muted font-mono transition-colors group-hover:border-neon/20 group-hover:text-ink"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
