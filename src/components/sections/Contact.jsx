import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { social } from '../../data/portfolioData';

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const contactLinks = [
    { icon: Mail, label: 'Email', href: `mailto:${social.email}`, value: social.email },
    { icon: FaGithub, label: 'GitHub', href: social.github, value: '@ragcoder' },
    { icon: FaLinkedinIn, label: 'LinkedIn', href: social.linkedin, value: 'linkedin.com/in/ragcoder' },
    { icon: FaTwitter, label: 'Twitter / X', href: social.twitter, value: '@ragcoder' },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-28 md:py-40 overflow-hidden">
      {/* Massive radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-accent/6 blur-[180px]" />
      </div>

      {/* Animated rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-dashed border-accent/5 pointer-events-none hidden lg:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-dashed border-accent/3 pointer-events-none hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-accent text-xs font-mono tracking-[0.3em] uppercase">06 /</span>
          <span className="text-xs text-gray-text tracking-[0.2em] uppercase font-medium">Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — CTA text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-gray-text text-sm tracking-widest uppercase mb-4 font-medium"
            >
              Available for opportunities
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display font-black text-5xl md:text-6xl xl:text-7xl uppercase leading-[0.9] mb-8"
            >
              LET'S{' '}
              <br />
              WORK{' '}
              <span className="neon-text">TOGETHER</span>
              <span className="text-accent text-6xl md:text-7xl xl:text-8xl">.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-gray-text text-base md:text-lg leading-relaxed max-w-md mb-10"
            >
              Whether you have a project in mind, want to collaborate, or just want to say
              hello — my inbox is always open. Let's create something amazing together.
            </motion.p>

            {/* Giant CTA button */}
            <motion.a
              href={`mailto:${social.email}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="group inline-flex items-center gap-3 bg-accent text-bg px-8 py-4 rounded-full font-bold text-base hover:shadow-neon transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Start a Conversation</span>
              <motion.span
                className="relative z-10 w-8 h-8 rounded-full bg-bg/20 flex items-center justify-center"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUpRight size={16} />
              </motion.span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.a>
          </div>

          {/* Right — Contact links */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="group flex items-center gap-4 glass border border-white/6 rounded-2xl p-5 hover:border-accent/25 transition-all duration-300 hover:-translate-y-0.5"
                whileHover={{ x: 4 }}
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/3 flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-200 flex-shrink-0">
                  <link.icon size={18} className="text-gray-text group-hover:text-accent transition-colors duration-200" />
                </div>

                {/* Label + value */}
                <div className="flex-1">
                  <div className="text-xs text-gray-text tracking-wide mb-0.5">{link.label}</div>
                  <div className="text-white text-sm font-medium group-hover:text-accent transition-colors duration-200">{link.value}</div>
                </div>

                <ArrowUpRight size={16} className="text-gray-text/40 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
