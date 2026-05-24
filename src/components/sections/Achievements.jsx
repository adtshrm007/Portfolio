import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Package, Code2, Wifi, GitBranch, Brain } from 'lucide-react';
import { achievements } from '../../data/portfolioData';

const iconMap = { Package, Code2, Wifi, GitBranch, Brain };

export default function Achievements() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="achievements" ref={sectionRef} className="relative py-28 md:py-36">
      {/* Background */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/4 w-[700px] h-[700px] rounded-full bg-accent/3 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-accent text-xs font-mono tracking-[0.3em] uppercase">04 /</span>
            <span className="text-xs text-gray-text tracking-[0.2em] uppercase font-medium">Achievements</span>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-3xl md:text-4xl xl:text-5xl uppercase leading-tight max-w-3xl"
          >
            I TAKE PRIDE IN MY{' '}
            <span className="neon-text">ACCOMPLISHMENTS</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-8">
            {achievements.map((item, i) => {
              const Icon = iconMap[item.icon] || Package;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="relative flex gap-6 pl-2 group"
                >
                  {/* Timeline node */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full border border-white/10 bg-card flex items-center justify-center group-hover:border-accent/50 group-hover:shadow-neon-sm transition-all duration-300">
                    <Icon size={18} className="text-gray-text group-hover:text-accent transition-colors duration-300" />
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full border border-accent/20 scale-125 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" style={{ animationDuration: '1.5s' }} />
                  </div>

                  {/* Content card */}
                  <div className="flex-1 glass border border-white/6 rounded-2xl p-5 group-hover:border-accent/20 transition-colors duration-300 card-spotlight cursor-none">
                    {/* Year badge */}
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display font-bold text-white text-base group-hover:text-accent transition-colors duration-200">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-accent/60 border border-accent/20 px-2 py-0.5 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-gray-text text-sm leading-relaxed">{item.description}</p>

                    {/* Bottom accent */}
                    <div className="mt-4 w-8 h-px bg-accent/40 group-hover:w-full transition-all duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="neon-separator mt-28" />
    </section>
  );
}
