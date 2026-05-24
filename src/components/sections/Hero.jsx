import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowRight, ExternalLink, Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { social } from '../../data/portfolioData';

export default function Hero() {
  const headingRef = useRef(null);
  const tagRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-char',
        { y: 120, opacity: 0, rotateX: -40 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.02,
          ease: 'power4.out',
          delay: 0.3,
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const heroWords = ['CODING WITH', 'PASSION,', 'CREATING WITH', 'PURPOSE'];

  const splitToChars = (words) =>
    words.map((word, wi) => (
      <span key={wi} className="inline-block overflow-hidden leading-tight">
        {word.split('').map((char, ci) => (
          <span
            key={ci}
            className={`hero-char inline-block ${char === ' ' ? 'mr-2' : ''} ${
              word === 'PASSION,' || word === 'PURPOSE'
                ? 'text-accent'
                : 'text-white'
            }`}
          >
            {char}
          </span>
        ))}
        <br />
      </span>
    ));

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Floating blob backgrounds */}
      <div className="blob blob-green w-[500px] h-[500px] -top-40 -left-40 animate-blob-1 opacity-10" />
      <div className="blob blob-green w-[400px] h-[400px] top-1/2 -right-40 animate-blob-2 opacity-8" />

      {/* Radial glow center */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-16">
        {/* LEFT SIDE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          {/* Hello tag */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 text-accent text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Hello There 👋
            </span>
          </motion.div>

          {/* Main heading */}
          <div
            ref={headingRef}
            className="font-display font-black text-5xl md:text-6xl xl:text-7xl uppercase leading-[0.9] tracking-tight mb-6 perspective-1000"
          >
            {splitToChars(heroWords)}
          </div>

          {/* Separator */}
          <motion.div variants={itemVariants} className="w-16 h-0.5 bg-accent mb-6" />

          {/* Intro paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-gray-text text-base md:text-lg leading-relaxed max-w-lg mb-10"
          >
            Hi! I'm{' '}
            <span className="text-white font-semibold">Aditya</span> — a creative and
            driven web developer with{' '}
            <span className="text-accent font-medium">2 years of experience</span>{' '}
            building modern digital experiences and visually immersive applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 bg-accent text-bg px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:shadow-neon transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Hire Me</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>

            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:border-accent/50 hover:text-accent transition-all duration-300"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink size={15} className="group-hover:scale-110 transition-transform" />
              View Projects
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-5">
            <span className="text-xs text-gray-text tracking-widest uppercase">Connect</span>
            <div className="flex gap-3">
              {[
                { icon: FaGithub, href: social.github, label: 'GitHub' },
                { icon: FaLinkedinIn, href: social.linkedin, label: 'LinkedIn' },
                { icon: FaTwitter, href: social.twitter, label: 'Twitter' },
                { icon: Mail, href: `mailto:${social.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-text hover:border-accent hover:text-accent hover:shadow-neon-sm transition-all duration-200"
                  whileHover={{ y: -2 }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE — Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center items-center"
        >
          {/* Rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full border border-dashed border-accent/20"
          />

          {/* Outer glow ring */}
          <div className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full animate-glow-pulse" />

          {/* Portrait container */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-[260px] h-[320px] md:w-[320px] md:h-[400px]"
          >
            {/* Neon border shape */}
            <div className="absolute -inset-[3px] rounded-[2rem] rounded-tr-[5rem] bg-gradient-to-br from-accent via-accent/50 to-transparent opacity-80 blur-[1px]" />
            <div className="relative w-full h-full rounded-[2rem] rounded-tr-[5rem] overflow-hidden bg-card border border-accent/20">
              <img
                src="/images/hero.png"
                alt="Aditya — RagCoder"
                className="w-full h-full object-cover object-center"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge — experience */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -right-8 top-10 glass border border-accent/20 rounded-2xl px-4 py-3 shadow-card"
            >
              <div className="text-accent text-2xl font-black font-display">2+</div>
              <div className="text-gray-text text-xs">Years Exp.</div>
            </motion.div>

            {/* Floating badge — projects */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -left-8 bottom-14 glass border border-white/10 rounded-2xl px-4 py-3 shadow-card"
            >
              <div className="text-white text-2xl font-black font-display">15+</div>
              <div className="text-gray-text text-xs">Projects</div>
            </motion.div>

            {/* Floating badge — available */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass border border-accent/30 rounded-full px-4 py-2 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-semibold whitespace-nowrap">Available for Work</span>
            </motion.div>
          </motion.div>

          {/* Corner decorations */}
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-accent/30 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-accent/30 rounded-bl-lg" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-text tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-accent/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
