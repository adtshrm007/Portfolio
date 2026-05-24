import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Server, Layers, Atom, Brain, Zap } from 'lucide-react';
import { skills } from '../../data/portfolioData';

const iconMap = { Monitor, Server, Layers, Atom, Brain, Zap };

/* Icon background gradients per card */
const iconGradients = [
  'from-blue-500/15 to-blue-500/5',
  'from-green-500/15 to-green-500/5',
  'from-purple-500/15 to-purple-500/5',
  'from-cyan-500/15 to-cyan-500/5',
  'from-accent/15 to-accent/5',
  'from-orange-500/15 to-orange-500/5',
];
const iconColors = [
  'text-blue-400 group-hover:text-blue-300',
  'text-green-400 group-hover:text-green-300',
  'text-purple-400 group-hover:text-purple-300',
  'text-cyan-400 group-hover:text-cyan-300',
  'text-accent group-hover:text-accent',
  'text-orange-400 group-hover:text-orange-300',
];
const hoverBorders = [
  'hover:border-blue-500/25',
  'hover:border-green-500/25',
  'hover:border-purple-500/25',
  'hover:border-cyan-500/25',
  'hover:border-accent/25',
  'hover:border-orange-500/25',
];

function SkillCard({ skill, index }) {
  const Icon = iconMap[skill.icon] || Monitor;
  const cardRef = useRef(null);

  const onMouseMove = (e) => {
    const r = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--mouse-x', `${((e.clientX - r.left) / r.width) * 100}%`);
    cardRef.current.style.setProperty('--mouse-y', `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <motion.div
      ref={cardRef}
      custom={index}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.96 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] } },
      }}
      onMouseMove={onMouseMove}
      className={`card-spotlight gradient-border group relative bg-[#0e0e0e] border border-white/5 rounded-[1.25rem] p-6 transition-all duration-350 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] cursor-none ${hoverBorders[index % hoverBorders.length]}`}
    >
      {/* Number tag */}
      <div className="skill-number mb-5">{String(index + 1).padStart(2, '0')}</div>

      {/* Icon */}
      <div className={`mb-5 w-12 h-12 rounded-xl bg-gradient-to-br ${iconGradients[index % iconGradients.length]} border border-white/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-white/10`}>
        <Icon size={20} className={`${iconColors[index % iconColors.length]} transition-colors duration-300`} />
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-white text-[0.95rem] mb-2.5 group-hover:text-accent transition-colors duration-300">
        {skill.title}
      </h3>

      {/* Description */}
      <p className="text-[#6b7280] text-sm leading-relaxed">
        {skill.description}
      </p>

      {/* Bottom animated bar */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/30 transition-all duration-500" />
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref} className="relative py-28 md:py-36">
      {/* BG glow */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* ── Header ── */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-4 mb-6"
          >
            <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase">02 /</span>
            <span className="text-[11px] text-gray-text tracking-[0.2em] uppercase font-medium">Expertise</span>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/25 to-transparent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-3xl md:text-4xl xl:text-5xl uppercase leading-tight"
          >
            I SPECIALIZE IN A{' '}
            <span className="neon-text">RANGE OF SKILLS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-text mt-4 text-sm max-w-lg"
          >
            From pixel-perfect frontends to scalable backends — here's what I bring to the table.
          </motion.p>
        </div>

        {/* ── Grid ── */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skills.map((skill, i) => <SkillCard key={skill.id} skill={skill} index={i} />)}
        </motion.div>
      </div>

      <div className="neon-separator mt-28 mx-6 md:mx-10" />
    </section>
  );
}
