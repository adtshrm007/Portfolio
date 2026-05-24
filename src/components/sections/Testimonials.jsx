import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '../../data/portfolioData';

const avatarColors = {
  SM: { bg: '#1a2a0a', border: '#C6FF00', text: '#C6FF00' },
  JC: { bg: '#0a1a2a', border: '#60a5fa', text: '#60a5fa' },
  PS: { bg: '#1a0a2a', border: '#c084fc', text: '#c084fc' },
};

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-accent text-xs font-mono tracking-[0.3em] uppercase">05 /</span>
            <span className="text-xs text-gray-text tracking-[0.2em] uppercase font-medium">Testimonials</span>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-3xl md:text-4xl xl:text-5xl uppercase leading-tight"
          >
            DON'T JUST TAKE{' '}
            <span className="neon-text">MY WORD</span> FOR IT.
          </motion.h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const colors = avatarColors[t.avatar] || avatarColors.SM;
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group glass border border-white/6 rounded-3xl p-7 hover:border-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover relative overflow-hidden card-spotlight cursor-none"
              >
                {/* Quote icon */}
                <div className="mb-6">
                  <Quote size={28} className="text-accent/30 group-hover:text-accent/50 transition-colors duration-300" fill="currentColor" />
                </div>

                {/* Quote text */}
                <p className="text-gray-text text-sm leading-relaxed mb-8 relative z-10">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold border transition-all duration-300 group-hover:shadow-neon-sm"
                    style={{
                      backgroundColor: colors.bg,
                      borderColor: colors.border + '40',
                      color: colors.text,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{t.name}</div>
                    <div className="text-gray-text text-xs">{t.role}</div>
                  </div>
                </div>

                {/* Left accent border */}
                <div
                  className="absolute left-0 top-8 bottom-8 w-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to bottom, transparent, ${colors.border}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="neon-separator mt-28" />
    </section>
  );
}
