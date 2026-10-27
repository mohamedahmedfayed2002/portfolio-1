import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Terminal } from 'lucide-react';
import { nav, personal, links } from '@/data/config';
import { useScrollSpy } from './ui/Reveal';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(nav.map((n) => n.href.replace('#', '')));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-white/[0.06]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2 font-mono text-lg font-semibold tracking-tight group"
        >
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-neon/10 text-neon border border-neon/30 group-hover:shadow-glow transition-shadow">
            <Terminal size={16} />
          </span>
          <span className="text-ink group-hover:text-neon transition-colors">
            {personal.initials}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {nav.map((item) => {
            const isActive = active === item.href.replace('#', '');
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? 'text-neon' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-lg bg-neon/10 border border-neon/20"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={links.cv}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-neon/10 hover:bg-neon/20 text-neon border border-neon/30 px-4 py-2 text-sm font-semibold transition-all hover:shadow-glow"
          >
            <Download size={16} />
            <span>Download CV</span>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center w-10 h-10 rounded-lg glass text-ink"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-bg-secondary/95 backdrop-blur-md border-b border-white/[0.06]"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-lg text-ink-muted hover:text-neon hover:bg-neon/5 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={links.cv}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-lg bg-neon/10 text-neon border border-neon/30 px-4 py-3 text-sm font-semibold"
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
