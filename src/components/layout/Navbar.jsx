import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Menu, X, Home, User, Zap, FolderOpen, Trophy, Mail, ArrowUpRight, Navigation
} from 'lucide-react';
import { navLinks } from '../../data/portfolioData';

/* ── Icon map keyed by link label ── */
const NAV_ICONS = {
  Home:         Home,
  About:        User,
  Skills:       Zap,
  Projects:     FolderOpen,
  Journey:      Navigation,
  Achievements: Trophy,
  Contact:      Mail,
};

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('home');
  const [hovered, setHovered]     = useState(null);
  const logoRef                   = useRef(null);

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Active section tracker ── */
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.35 }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* ── Scroll progress (for the thin accent line) ── */
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  /* ── Close menu on resize ── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollTo = (href) => {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── Scroll Progress Bar ── */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] z-[9995] origin-left"
        style={{
          width: scaleX,
          background: 'linear-gradient(90deg, #C6FF00, #8dce00)',
          boxShadow: '0 0 10px rgba(198,255,0,0.7)',
        }}
      />

      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[9990] transition-all duration-500 ${
          scrolled ? 'navbar-scrolled' : 'bg-transparent'
        }`}
      >
        {/* ── Subtle top accent line ── */}
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute top-0 left-0 right-0 h-px origin-left"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(198,255,0,0.5), transparent)' }}
          />
        )}

        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-[68px] md:h-[72px]">

          {/* ── Logo ── */}
          <motion.a
            ref={logoRef}
            href="#home"
            onClick={e => { e.preventDefault(); scrollTo('#home'); }}
            className="font-display font-bold text-xl tracking-tight flex items-center gap-2.5 group"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            {/* animated dot */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent shadow-[0_0_10px_#C6FF00,0_0_20px_rgba(198,255,0,0.4)]" />
            </span>

            {/* wordmark */}
            <span className="flex items-baseline gap-0 relative">
              <span className="text-white tracking-tight">Rag</span>
              <span className="gradient-text tracking-tight">Coder</span>
              {/* blinking cursor */}
              <motion.span
                className="ml-0.5 inline-block w-[2px] h-[1em] bg-accent align-middle"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'steps(1)' }}
              />
            </span>
          </motion.a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-1 relative">
            {/* track background */}
            <div className="absolute inset-0 rounded-full bg-[#111111]/80 border border-white/[0.04] backdrop-blur-md -z-10 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />

            <div className="flex items-center gap-0.5 px-2 py-1.5">
              {navLinks.map(link => {
                const id       = link.href.replace('#', '');
                const isActive = active === id;
                const Icon     = NAV_ICONS[link.label] || Home;

                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    onMouseEnter={() => setHovered(id)}
                    onMouseLeave={() => setHovered(null)}
                    className={`relative px-3.5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-1.5 ${
                      isActive ? 'text-accent drop-shadow-[0_0_8px_rgba(198,255,0,0.8)]' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {/* glowing dot indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-glow"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#C6FF00,0_0_15px_rgba(198,255,0,0.6)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {/* hover ghost */}
                    {hovered === id && !isActive && (
                      <motion.span
                        layoutId="nav-hover-ghost"
                        className="absolute inset-0 rounded-full bg-white/5"
                        transition={{ duration: 0.15 }}
                      />
                    )}

                    <span className="relative z-10 flex items-center gap-1.5">
                      <Icon size={13} strokeWidth={2.2} />
                      <span>{link.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* ── CTA + Hamburger ── */}
          <div className="flex items-center gap-3">
            {/* Hire Me button */}
            <motion.button
              onClick={() => scrollTo('#contact')}
              className="hidden md:inline-flex items-center gap-2 bg-accent text-bg px-5 py-2 rounded-full text-sm font-bold tracking-wide btn-shine hover:shadow-[0_0_28px_rgba(198,255,0,0.5)] transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
            >
              <span>Hire Me</span>
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </motion.button>

            {/* Hamburger */}
            <motion.button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(v => !v)}
              className="md:hidden relative w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.93 }}
            >
              {/* subtle hover bg */}
              <span className="absolute inset-0 bg-white/0 hover:bg-white/5 transition-colors rounded-xl" />
              <AnimatePresence mode="wait">
                {menuOpen
                  ? <motion.span key="x"  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}  transition={{ duration: 0.18 }}><X    size={18} /></motion.span>
                  : <motion.span key="m"  initial={{ rotate: 90,  opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}><Menu size={18} /></motion.span>
                }
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden mobile-menu-glass border-t border-white/[0.06]"
            >
              <nav className="flex flex-col px-4 py-4 gap-1">
                {navLinks.map((link, i) => {
                  const id       = link.href.replace('#', '');
                  const isActive = active === id;
                  const Icon     = NAV_ICONS[link.label] || Home;

                  return (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.045, ease: [0.22, 1, 0.36, 1] }}
                      onClick={() => scrollTo(link.href)}
                      className={`text-left py-3 px-4 rounded-xl text-sm font-medium transition-all flex items-center gap-3 group ${
                        isActive
                          ? 'text-accent bg-accent/8 border border-accent/20'
                          : 'text-gray-400 hover:text-white hover:bg-white/[0.04] border border-transparent'
                      }`}
                    >
                      {/* icon badge */}
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive ? 'bg-accent/15' : 'bg-white/5 group-hover:bg-white/8'
                      }`}>
                        <Icon size={13} strokeWidth={2.2} className={isActive ? 'text-accent' : ''} />
                      </span>
                      <span>{link.label}</span>
                      {isActive && (
                        <motion.span
                          layoutId="mobile-active-dot"
                          className="ml-auto w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px_#C6FF00]"
                        />
                      )}
                    </motion.button>
                  );
                })}

                {/* divider */}
                <div className="my-1 h-px bg-white/[0.06]" />

                {/* CTA */}
                <motion.button
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.045 + 0.05 }}
                  onClick={() => scrollTo('#contact')}
                  className="bg-accent text-bg py-3 rounded-xl text-sm font-bold btn-shine flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(198,255,0,0.4)] transition-shadow"
                >
                  <span>Hire Me</span>
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
