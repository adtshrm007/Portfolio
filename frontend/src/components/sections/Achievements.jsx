import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Star, Target, Zap, Award } from 'lucide-react';
import { achievementsList } from '../../data/portfolioData';

const cardColors = [
  { bg: 'bg-accent/5', border: 'border-accent/15', text: 'text-accent', hoverBorder: 'group-hover:border-accent/40', shadow: 'group-hover:shadow-[0_0_30px_rgba(198,255,0,0.25)]', glowBg: 'bg-accent', icon: Trophy },
  { bg: 'bg-blue-500/5', border: 'border-blue-500/15', text: 'text-blue-400', hoverBorder: 'group-hover:border-blue-500/40', shadow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]', glowBg: 'bg-blue-500', icon: Star },
  { bg: 'bg-purple-500/5', border: 'border-purple-500/15', text: 'text-purple-400', hoverBorder: 'group-hover:border-purple-500/40', shadow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]', glowBg: 'bg-purple-500', icon: Target },
  { bg: 'bg-cyan-500/5', border: 'border-cyan-500/15', text: 'text-cyan-400', hoverBorder: 'group-hover:border-cyan-500/40', shadow: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]', glowBg: 'bg-cyan-500', icon: Zap },
  { bg: 'bg-orange-500/5', border: 'border-orange-500/15', text: 'text-orange-400', hoverBorder: 'group-hover:border-orange-500/40', shadow: 'group-hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]', glowBg: 'bg-orange-500', icon: Award },
];

function AchievementCard({ achievement, index }) {
  const cardRef = useRef(null);
  const color = cardColors[index % cardColors.length];
  const Icon = color.icon;

  const onMouseMove = (e) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--mouse-x', `${((e.clientX - r.left) / r.width) * 100}%`);
    cardRef.current.style.setProperty('--mouse-y', `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.96 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={`card-spotlight group relative glass border border-white/8 rounded-2xl p-4 transition-all duration-500 hover:-translate-y-2 cursor-none flex flex-col h-full overflow-hidden ${color.hoverBorder} ${color.shadow}`}
    >
      {/* Background glow decoration */}
      <div className={`absolute -right-12 -top-12 w-40 h-40 ${color.glowBg} opacity-5 rounded-full blur-[40px] group-hover:opacity-20 transition-opacity duration-500`} />
      
      <div className="flex items-start justify-between mb-3 relative z-10">
        {/* Number Badge */}
        <span className={`font-mono text-[9px] font-bold tracking-[0.2em] px-1.5 py-0.5 rounded border border-white/5 bg-white/[0.02] ${color.text} opacity-70 group-hover:opacity-100 transition-opacity`}>
          {String(index + 1).padStart(2, '0')}
        </span>
        
        {/* Animated Icon */}
        <div className={`w-8 h-8 rounded-lg ${color.bg} border ${color.border} flex items-center justify-center group-hover:scale-110 transition-all duration-500 relative`}>
          <div className={`absolute inset-0 rounded-lg ${color.glowBg} opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500`} />
          <Icon size={14} className={`${color.text} relative z-10 group-hover:drop-shadow-[0_0_10px_currentColor] transition-all duration-300`} />
        </div>
      </div>

      <div className="flex-1 relative z-10 flex flex-col justify-between">
        <p className="text-white/90 text-sm leading-snug font-medium group-hover:text-white transition-colors duration-300">
          {achievement}
        </p>

        <div className={`mt-3 flex items-center gap-1.5 text-[9px] font-bold tracking-[0.1em] uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ${color.text}`}>
          <span className="flex h-1.5 w-1.5 relative">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color.glowBg} opacity-60`} />
            <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${color.glowBg}`} />
          </span>
          Verified Achievement
        </div>
      </div>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500`} style={{ background: `linear-gradient(90deg, transparent, var(--tw-shadow-color), transparent)` }} />
    </motion.div>
  );
}

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" ref={ref} className="relative py-28 md:py-36 overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/[0.03] blur-[160px] pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-[500px] h-[500px] rounded-full bg-purple-500/[0.02] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* ── Header ── */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-4 mb-6"
          >
            <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase">05 /</span>
            <span className="text-[11px] text-gray-text tracking-[0.2em] uppercase font-medium">Accomplishments</span>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/25 to-transparent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-mono font-bold text-4xl md:text-5xl xl:text-6xl uppercase leading-[0.95] max-w-4xl"
          >
            I TAKE PRIDE IN MY<br />
            <span className="neon-text">ACCOMPLISHMENTS</span>
          </motion.h2>
        </div>

        {/* ── Achievements Grid ── */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {achievementsList.map((achievement, i) => (
            <AchievementCard key={i} achievement={achievement} index={i} />
          ))}
        </motion.div>
      </div>

      <div className="neon-separator mt-32 mx-6 md:mx-10" />
    </section>
  );
}
