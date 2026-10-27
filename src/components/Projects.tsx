import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/projects';
import { Reveal, SectionHeading } from './ui/Reveal';

const projectImages = [
  'https://images.unsplash.com/photo-1605379399642-870262d3d027?w=800&h=500&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
  'https://images.unsplash.com/photo-1551288049-49bd6b0f24fd?w=800&h=500&fit=crop',
  'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=500&fit=crop',
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="03 / Projects"
          title="Featured Projects"
          subtitle="Hands-on work across containerization, CI/CD, monitoring, and performance engineering."
        />

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                className="group glass glass-hover rounded-2xl overflow-hidden h-full flex flex-col"
              >
                {/* image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={projectImages[i % projectImages.length]}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
                  <span className="absolute top-4 left-4 font-mono text-xs text-neon bg-bg/70 backdrop-blur-sm border border-neon/30 rounded-md px-2 py-1">
                    {String(p.id).padStart(2, '0')}
                  </span>
                </div>

                {/* body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold group-hover:text-neon transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{p.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-neon/[0.06] border border-neon/15 px-2.5 py-1 text-xs font-mono text-neon"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap gap-2 mt-auto">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-neon transition-colors"
                    >
                      <Github size={15} /> Code
                    </a>
                    <a
                      href={p.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-electric transition-colors"
                    >
                      <BookOpen size={15} /> Docs
                    </a>
                    {p.liveDemo ? (
                      <a
                        href={p.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-neon transition-colors"
                      >
                        <ExternalLink size={15} /> Demo
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted/40">
                        <ArrowUpRight size={15} /> Demo soon
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
