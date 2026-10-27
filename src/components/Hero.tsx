import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personal, links } from '@/data/config';
import NetworkBackground from './NetworkBackground';
import TerminalWindow from './TerminalWindow';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <NetworkBackground />
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        {/* Left: text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-neon opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon" />
            </span>
            <span className="text-xs font-mono text-ink-muted">Available for opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
          >
            {personal.name.split(' ')[0]}{' '}
            <span className="text-gradient">{personal.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-3 font-mono text-neon text-base md:text-lg"
          >
            {personal.title}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-6 text-2xl md:text-3xl font-semibold leading-snug max-w-xl"
          >
            {personal.headline.split('\n').map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-5 text-ink-muted max-w-xl leading-relaxed"
          >
            {personal.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-neon text-bg font-semibold px-5 py-3 transition-all hover:shadow-glow hover:-translate-y-0.5"
            >
              Explore My Projects
              <ArrowRight size={18} />
            </a>
            <a
              href={links.cv}
              className="inline-flex items-center gap-2 rounded-lg glass glass-hover text-ink font-semibold px-5 py-3"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-ink-muted hover:text-neon transition-colors">
              <Github size={20} />
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink-muted hover:text-electric transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${personal.email}`} aria-label="Email" className="text-ink-muted hover:text-neon transition-colors">
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right: profile + terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative flex flex-col items-center gap-6"
        >
          <div className="relative animate-float">
            <div className="absolute -inset-3 rounded-full bg-neon/20 blur-2xl animate-pulse-glow" />
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-neon/40 shadow-glow-lg">
              <img
                src="https://images.unsplash.com/photo-1633337692234-ffe9c1f7a8b1?w=400&h=400&fit=crop"
                alt="Mohamed Ahmed"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
          <TerminalWindow />
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-ink-muted">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="block w-px h-8 bg-gradient-to-b from-neon to-transparent"
        />
      </div>
    </section>
  );
}
