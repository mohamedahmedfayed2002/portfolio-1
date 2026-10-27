import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personal, links, nav } from '@/data/config';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] bg-bg">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* brand */}
          <div>
            <a href="#home" className="font-mono text-lg font-semibold text-ink">
              {personal.initials}
            </a>
            <p className="mt-3 text-sm text-ink-muted max-w-xs leading-relaxed">
              DevOps Engineer passionate about cloud infrastructure, automation, and reliable systems.
            </p>
          </div>

          {/* nav */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-ink-muted mb-3">Navigation</h4>
            <ul className="grid grid-cols-2 gap-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-ink-muted hover:text-neon transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* social */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-ink-muted mb-3">Connect</h4>
            <div className="flex items-center gap-3">
              <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid place-items-center w-10 h-10 rounded-lg glass glass-hover text-ink-muted hover:text-neon">
                <Github size={18} />
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid place-items-center w-10 h-10 rounded-lg glass glass-hover text-ink-muted hover:text-electric">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${personal.email}`} aria-label="Email" className="grid place-items-center w-10 h-10 rounded-lg glass glass-hover text-ink-muted hover:text-neon">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-muted text-center sm:text-left">
            Designed & Built by{' '}
            <span className="text-ink font-medium">{personal.name}</span>
          </p>
          <div className="flex items-center gap-4">
            <p className="text-sm text-ink-muted">© {year} {personal.name}</p>
            <a
              href="#home"
              className="grid place-items-center w-9 h-9 rounded-lg glass glass-hover text-ink-muted hover:text-neon"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
