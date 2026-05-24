import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.35 }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href) => {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[9990] transition-all duration-500 ${
        scrolled ? 'glass-nav shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-[72px]">

        {/* ── Logo ── */}
        <motion.a
          href="#home"
          onClick={e => { e.preventDefault(); scrollTo('#home'); }}
          className="font-display font-bold text-xl tracking-tight flex items-center gap-2"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent shadow-[0_0_8px_#C6FF00]" />
          </span>
          <span className="text-white">Rag</span><span className="gradient-text">Coder</span>
        </motion.a>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-1 bg-white/3 border border-white/6 rounded-full px-2 py-1.5 backdrop-blur-sm">
          {navLinks.map(link => {
            const isActive = active === link.href.replace('#', '');
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-bg' : 'text-gray-text hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* ── CTA + Hamburger ── */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => scrollTo('#contact')}
            className="hidden md:inline-flex items-center gap-2 bg-accent text-bg px-5 py-2 rounded-full text-sm font-bold tracking-wide btn-shine hover:shadow-[0_0_24px_rgba(198,255,0,0.45)] transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.button>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-text hover:text-white hover:border-white/20 transition-colors"
          >
            <AnimatePresence mode="wait">
              {menuOpen
                ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={18} /></motion.span>
                : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={18} /></motion.span>
              }
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass-nav border-t border-white/5 overflow-hidden"
          >
            <nav className="flex flex-col px-5 py-3 gap-0.5">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left py-3 px-3 rounded-xl text-sm font-medium transition-all ${
                    active === link.href.replace('#', '')
                      ? 'text-accent bg-accent/6 border border-accent/15'
                      : 'text-gray-text hover:text-white hover:bg-white/3'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }}
                onClick={() => scrollTo('#contact')}
                className="mt-2 bg-accent text-bg py-3 rounded-full text-sm font-bold btn-shine"
              >
                Hire Me
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
