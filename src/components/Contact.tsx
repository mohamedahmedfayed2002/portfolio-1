import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { personal, links } from '@/data/config';
import { Reveal, SectionHeading } from './ui/Reveal';

export default function Contact() {
  const contactItems = [
    { label: 'Email', value: personal.email, href: `mailto:${personal.email}`, icon: Mail, accent: 'neon' },
    { label: 'Phone', value: personal.phone, href: `tel:${personal.phone}`, icon: Phone, accent: 'electric' },
    { label: 'LinkedIn', value: 'Connect on LinkedIn', href: links.linkedin, icon: Linkedin, accent: 'electric' },
    { label: 'GitHub', value: 'View repositories', href: links.github, icon: Github, accent: 'neon' },
  ];

  return (
    <section id="contact" className="section-pad bg-bg-secondary/40 border-y border-white/[0.04]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="06 / Contact"
          title="Get In Touch"
          subtitle="Have an opportunity or a question? I'd love to hear from you."
        />

        <div className="mt-12 grid sm:grid-cols-2 gap-5 max-w-3xl">
          {contactItems.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.label} delay={i * 0.06}>
                <a
                  href={c.href}
                  target={c.href.startsWith('mailto') || c.href.startsWith('tel') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl glass glass-hover p-5 h-full"
                >
                  <span className={`grid place-items-center w-12 h-12 rounded-xl border ${
                    c.accent === 'neon' ? 'bg-neon/10 text-neon border-neon/20' : 'bg-electric/10 text-electric border-electric/20'
                  }`}>
                    <Icon size={22} />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-ink-muted">{c.label}</div>
                    <div className="text-sm font-medium text-ink break-all">{c.value}</div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.25}>
          <div className="mt-6 max-w-3xl rounded-2xl bg-neon/[0.04] border border-neon/15 p-5">
            <p className="text-sm text-ink-muted">
              Open to DevOps and Cloud Engineering roles (remote or on-site).
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
