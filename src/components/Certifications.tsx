import { Award, GraduationCap, FileCheck } from 'lucide-react';
import { personal } from '@/data/config';
import { Reveal, SectionHeading } from './ui/Reveal';

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad bg-bg-secondary/40 border-y border-white/[0.04]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="04 / Credentials"
          title="Certifications & Education"
          subtitle="Formal education and professional certifications. Placeholders are shown where certificates are pending."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {/* Education */}
          <Reveal delay={0.05}>
            <div className="glass glass-hover rounded-2xl p-7 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-5">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-electric/10 text-electric border border-electric/30">
                  <GraduationCap size={20} />
                </span>
                <div>
                  <h3 className="font-semibold text-lg">{personal.education.degree}</h3>
                  <p className="text-sm text-ink-muted">{personal.education.institution}</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-mono text-neon">Graduated {personal.education.year}</span>
                <span className="text-ink-muted">Faculty of Computers and Information</span>
              </div>
            </div>
          </Reveal>

          {/* Certifications placeholder */}
          <Reveal delay={0.1}>
            <div className="glass glass-hover rounded-2xl p-7 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-5">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-neon/10 text-neon border border-neon/30">
                  <Award size={20} />
                </span>
                <h3 className="font-semibold text-lg">Certifications</h3>
              </div>
              <div className="space-y-3">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="flex items-center gap-3 rounded-lg bg-white/[0.02] border border-dashed border-white/[0.1] px-4 py-3"
                  >
                    <FileCheck size={16} className="text-ink-muted/60" />
                    <span className="text-sm text-ink-muted">
                      Certificate placeholder {n} — add your certification here
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-ink-muted/70 font-mono">
                Update src/data/config.ts and this section with your earned certifications.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
