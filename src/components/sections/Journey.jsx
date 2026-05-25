import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Package, Code2, Wifi, GitBranch, Brain, Layers, Monitor } from 'lucide-react';
import { journeyItems } from '../../data/portfolioData';

const iconMap = { Package, Code2, Wifi, GitBranch, Brain, Layers, Monitor };

const nodeColors = [
  { bg: 'bg-accent/10', border: 'border-accent/30', icon: 'text-accent', glow: 'rgba(198,255,0,0.25)' },
  { bg: 'bg-blue-500/10', border: 'border-blue-500/30', icon: 'text-blue-400', glow: 'rgba(59,130,246,0.2)' },
  { bg: 'bg-purple-500/10', border: 'border-purple-500/30', icon: 'text-purple-400', glow: 'rgba(168,85,247,0.2)' },
  { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', icon: 'text-cyan-400', glow: 'rgba(6,182,212,0.2)' },
  { bg: 'bg-orange-500/10', border: 'border-orange-500/30', icon: 'text-orange-400', glow: 'rgba(249,115,22,0.2)' },
];

export default function Journey() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="journey" ref={ref} className="relative py-28 md:py-36">
      <div className="absolute left-1/2 -translate-x-1/2 top-1/4 w-[700px] h-[700px] rounded-full bg-accent/[0.03] blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* ── Header ── */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-4 mb-6"
          >
            <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase">04 /</span>
            <span className="text-[11px] text-gray-text tracking-[0.2em] uppercase font-medium">Timeline</span>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/25 to-transparent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-3xl md:text-4xl xl:text-5xl uppercase leading-tight max-w-3xl"
          >
            <span className="neon-text">MY JOURNEY</span>
          </motion.h2>
        </div>

        {/* ── Timeline ── */}
        <div className="relative max-w-2xl xl:max-w-3xl">
          {/* Vertical connector line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="absolute left-[23px] top-4 bottom-4 w-px timeline-line origin-top"
          />

          <div className="space-y-6">
            {journeyItems.map((item, i) => {
              const Icon = iconMap[item.icon] || Package;
              const colors = nodeColors[i % nodeColors.length];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -36 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                  className="relative flex gap-5 group"
                >
                  {/* ── Node ── */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full ${colors.bg} border ${colors.border} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                      style={{ boxShadow: `0 0 0 0 ${colors.glow}` }}
                    >
                      <Icon size={18} className={`${colors.icon} transition-colors duration-300`} />
                    </div>
                    {/* Pulse ring on hover */}
                    <div
                      className={`absolute inset-0 rounded-full border ${colors.border} opacity-0 group-hover:opacity-100 group-hover:scale-[1.5] transition-all duration-500`}
                    />
                  </div>

                  {/* ── Content ── */}
                  <div className="flex-1 glass border border-white/5 rounded-2xl p-5 group-hover:border-white/10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] cursor-none">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className={`font-display font-bold text-white text-sm md:text-base group-hover:${colors.icon.replace('text-', 'text-')} transition-colors duration-300`}>
                        {item.title}
                      </h3>
                      <span className={`text-[10px] font-mono ${colors.icon} border ${colors.border} bg-transparent px-2 py-0.5 rounded-full flex-shrink-0 opacity-70`}>
                        {item.year}
                      </span>
                    </div>
                    <p className="text-[#6b7280] text-sm leading-relaxed">{item.description}</p>

                    {/* Expanding bottom bar */}
                    <div
                      className={`mt-4 h-px ${colors.bg.replace('/10', '/40')} w-6 group-hover:w-full transition-all duration-600`}
                      style={{ background: `linear-gradient(to right, ${colors.glow.replace('0.2)', '0.5)').replace('0.25)', '0.6)')}, transparent)` }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="neon-separator mt-28 mx-6 md:mx-10" />
    </section>
  );
}
