import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { social } from '../../data/portfolioData';

const links = [
  { icon: Mail,        label: 'Email',       sub: social.email,                href: `mailto:${social.email}`, color: 'group-hover:border-accent/30 group-hover:bg-accent/5 group-hover:text-accent' },
  { icon: FaGithub,    label: 'GitHub',      sub: '@ragcoder',                 href: social.github,            color: 'group-hover:border-white/20 group-hover:bg-white/5 group-hover:text-white'  },
  { icon: FaLinkedinIn,label: 'LinkedIn',    sub: 'linkedin.com/in/ragcoder',  href: social.linkedin,          color: 'group-hover:border-blue-500/30 group-hover:bg-blue-500/5 group-hover:text-blue-400' },
  { icon: FaTwitter,   label: 'Twitter / X', sub: '@ragcoder',                 href: social.twitter,           color: 'group-hover:border-sky-500/30 group-hover:bg-sky-500/5 group-hover:text-sky-400'   },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" ref={ref} className="relative py-28 md:py-44 overflow-hidden">

      {/* ── Big ambient glow ── */}
      <div className="contact-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none" />

      {/* Rotating orbit rings */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border border-dashed border-accent/5 pointer-events-none hidden lg:block"
      />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 65, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] rounded-full border border-dashed border-accent/[0.03] pointer-events-none hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase">06 /</span>
          <span className="text-[11px] text-gray-text tracking-[0.2em] uppercase font-medium">Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/25 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── LEFT: CTA copy ── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-mono text-[11px] text-gray-text tracking-[0.25em] uppercase mb-5"
            >
              Available for freelance & full-time
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15 }}
              className="font-display font-black text-[3rem] md:text-[4rem] xl:text-[4.75rem] uppercase leading-[0.88] mb-8"
            >
              LET'S
              <br />
              WORK{' '}
              <span className="neon-text">TOGETHER</span>
              <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-[#6b7280] text-base md:text-[1.05rem] leading-[1.75] max-w-md mb-10"
            >
              Whether you have a project in mind, want to collaborate, or just want to say
              hello — my inbox is always open. Let's create something amazing.
            </motion.p>

            <motion.a
              href={`mailto:${social.email}`}
              initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="group inline-flex items-center gap-3 bg-accent text-bg px-8 py-4 rounded-full font-bold text-base btn-shine hover:shadow-[0_0_40px_rgba(198,255,0,0.45)] transition-shadow duration-300"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>Start a Conversation</span>
              <motion.span
                className="w-8 h-8 rounded-full bg-bg/20 flex items-center justify-center"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowUpRight size={15} />
              </motion.span>
            </motion.a>
          </div>

          {/* ── RIGHT: Contact cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-3"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.07 }}
                className={`group flex items-center gap-4 glass border border-white/5 rounded-2xl p-4 md:p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] ${link.color}`}
                whileHover={{ x: 4 }}
              >
                <div className="w-11 h-11 rounded-xl border border-white/8 bg-white/3 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-current group-hover:scale-105">
                  <link.icon size={17} className="transition-colors duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] text-[#4b5563] tracking-wide mb-0.5 transition-colors duration-300">{link.label}</div>
                  <div className="text-white text-sm font-medium truncate transition-colors duration-300">{link.sub}</div>
                </div>
                <ArrowUpRight size={15} className="text-[#374151] group-hover:text-current group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
