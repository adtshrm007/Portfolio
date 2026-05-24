import { motion } from 'framer-motion';
import { Heart, Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { social } from '../../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { icon: FaGithub, href: social.github, label: 'GitHub' },
    { icon: FaLinkedinIn, href: social.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, href: social.twitter, label: 'Twitter' },
    { icon: Mail, href: `mailto:${social.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative pt-1 pb-10">
      {/* Animated separator */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent mb-10 origin-left"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="font-display font-bold text-lg">
            <span className="text-white">Rag</span>
            <span className="neon-text">Coder</span>
            <span className="text-accent text-xl">.</span>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-gray-text">
            <span>Designed & Developed by </span>
            <span className="text-accent font-semibold">RagCoder</span>
            <span className="mx-2">·</span>
            <span>© {year} All rights reserved</span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {links.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-text hover:border-accent/40 hover:text-accent transition-all duration-200"
                whileHover={{ y: -2, scale: 1.1 }}
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Built with love tag */}
        <div className="mt-6 text-center">
          <span className="text-xs text-gray-text/40 inline-flex items-center gap-1.5">
            Built with <Heart size={10} className="text-accent fill-accent" /> using React, Tailwind & Framer Motion
          </span>
        </div>
      </div>
    </footer>
  );
}
