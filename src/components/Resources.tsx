import { motion } from 'framer-motion';
import { Github, FileText, Network, BarChart3, Video, ExternalLink, FolderOpen } from 'lucide-react';
import { links } from '@/data/config';
import { Reveal, SectionHeading } from './ui/Reveal';

const resources = [
  {
    title: 'GitHub Profile',
    description: 'Browse all my repositories, infrastructure code, and automation scripts.',
    icon: Github,
    href: links.githubProfile,
    accent: 'neon',
  },
  {
    title: 'Project Documentation',
    description: 'Complete documentation for each project hosted on Google Drive.',
    icon: FolderOpen,
    href: links.googleDrive,
    accent: 'electric',
  },
  {
    title: 'Architecture Diagrams',
    description: 'Visual diagrams of infrastructure, pipelines, and system design.',
    icon: Network,
    href: links.architectureDiagrams,
    accent: 'neon',
  },
  {
    title: 'Project Reports',
    description: 'Detailed reports covering implementation, testing, and results.',
    icon: BarChart3,
    href: links.projectReports,
    accent: 'electric',
  },
  {
    title: 'Demo Videos',
    description: 'Recorded walkthroughs showing projects in action.',
    icon: Video,
    href: links.demoVideos,
    accent: 'neon',
  },
];

export default function Resources() {
  return (
    <section id="resources" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="05 / Resources"
          title="GitHub & Documentation"
          subtitle="Source code, architecture diagrams, reports, and demo videos — all in one place."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resources.map((r, i) => {
            const Icon = r.icon;
            const accentClass = r.accent === 'neon' ? 'text-neon border-neon/30 bg-neon/10' : 'text-electric border-electric/30 bg-electric/10';
            return (
              <Reveal key={r.title} delay={i * 0.06}>
                <motion.a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="group glass glass-hover rounded-2xl p-6 block h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className={`grid place-items-center w-11 h-11 rounded-xl border ${accentClass}`}>
                      <Icon size={20} />
                    </span>
                    <ExternalLink size={16} className="text-ink-muted/40 group-hover:text-neon transition-colors" />
                  </div>
                  <h3 className="font-semibold text-ink group-hover:text-neon transition-colors">{r.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{r.description}</p>
                </motion.a>
              </Reveal>
            );
          })}

          {/* docs cta */}
          <Reveal delay={0.3}>
            <div className="glass rounded-2xl p-6 h-full flex flex-col justify-center bg-gradient-to-br from-neon/[0.04] to-electric/[0.04] border-neon/20">
              <FileText size={20} className="text-neon mb-3" />
              <h3 className="font-semibold">All Documentation</h3>
              <p className="mt-2 text-sm text-ink-muted">Centralized Google Drive folder with every resource.</p>
              <a
                href={links.googleDrive}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-neon hover:gap-3 transition-all"
              >
                Open Drive <ExternalLink size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
