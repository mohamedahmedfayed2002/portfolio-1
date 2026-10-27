import { GraduationCap, Server } from 'lucide-react';
import { personal } from '@/data/config';
import { Reveal, SectionHeading } from './ui/Reveal';

const stats = [
  { label: 'Graduated', value: '2024' },
  { label: 'Focus', value: 'DevOps' },
  { label: 'Open to', value: 'Remote / On-site' },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="01 / About"
          title="About Me"
          subtitle="A snapshot of who I am and what drives my work in DevOps and cloud infrastructure."
        />

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          {/* bio card */}
          <Reveal className="lg:col-span-3" delay={0.05}>
            <div className="glass glass-hover rounded-2xl p-7 md:p-9 h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-neon/10 text-neon border border-neon/30">
                  <Server size={18} />
                </span>
                <h3 className="text-lg font-semibold">Profile</h3>
              </div>
              <div className="space-y-4 text-ink-muted leading-relaxed">
                {personal.about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-lg bg-white/[0.03] border border-white/[0.06] px-4 py-2">
                    <div className="text-[11px] uppercase tracking-wider text-ink-muted">{s.label}</div>
                    <div className="text-sm font-semibold text-ink">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* education + location */}
          <Reveal className="lg:col-span-2" delay={0.1}>
            <div className="grid gap-6 h-full">
              <div className="glass glass-hover rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid place-items-center w-10 h-10 rounded-lg bg-electric/10 text-electric border border-electric/30">
                    <GraduationCap size={18} />
                  </span>
                  <h3 className="text-lg font-semibold">Education</h3>
                </div>
                <p className="text-ink font-medium">{personal.education.degree}</p>
                <p className="text-ink-muted text-sm mt-1">{personal.education.institution}</p>
                <p className="text-neon font-mono text-sm mt-2">Graduated {personal.education.year}</p>
              </div>
              <div className="glass glass-hover rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid place-items-center w-10 h-10 rounded-lg bg-neon/10 text-neon border border-neon/30">
                    <GraduationCap size={18} />
                  </span>
                  <h3 className="text-lg font-semibold">Availability</h3>
                </div>
                <p className="text-ink-muted text-sm">
                  Open to DevOps and Cloud Engineering roles (remote or on-site).
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
