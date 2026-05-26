import { motion } from 'framer-motion';
import { Heart, Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { social } from '../../data/portfolioData';

const socials = [
  { icon: FaGithub,    href: social.github,            label: 'GitHub'   },
  { icon: FaLinkedinIn, href: social.linkedin,          label: 'LinkedIn' },
  { icon: FaXTwitter,   href: social.twitter,            label: 'X (Twitter)'  },
  { icon: Mail,        href: `mailto:${social.email}`,  label: 'Email'    },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pb-8 pt-2 overflow-hidden">
      {/* Animated separator */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mb-8 origin-center"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-lg flex items-center gap-2"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
            </span>
            <span className="text-white">Rag</span><span className="gradient-text">Coder</span>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[11px] text-[#4b5563] text-center"
          >
            <span>Designed & Developed by </span>
            <span className="text-accent font-semibold">RagCoder</span>
            <span className="mx-2 opacity-40">·</span>
            <span>© {year} All rights reserved</span>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-xl border border-white/8 bg-white/[0.025] flex items-center justify-center text-[#6b7280] hover:border-accent/35 hover:text-accent hover:bg-accent/6 transition-all duration-200"
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <Icon size={13} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Built with line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-5 text-center"
        >
          <span className="inline-flex items-center gap-1.5 text-[10px] text-[#374151]">
            Built with <Heart size={9} className="text-accent fill-accent" /> using React, Tailwind & Framer Motion
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
