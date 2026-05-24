import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Monitor, Server, Layers, Atom, Brain, Zap
} from 'lucide-react';
import { skills } from '../../data/portfolioData';

const iconMap = { Monitor, Server, Layers, Atom, Brain, Zap };

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

function SkillCard({ skill, index }) {
  const Icon = iconMap[skill.icon] || Monitor;
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty('--mouse-x', `${x}%`);
    cardRef.current.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <motion.div
      ref={cardRef}
      custom={index}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      className="card-spotlight group relative bg-card border border-white/6 rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover cursor-none"
    >
      {/* Icon */}
      <div className="mb-5 w-12 h-12 rounded-xl border border-white/8 flex items-center justify-center bg-white/3 group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-300">
        <Icon size={22} className="text-gray-text group-hover:text-accent transition-colors duration-300" />
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-white text-base mb-2 group-hover:text-accent transition-colors duration-300">
        {skill.title}
      </h3>

      {/* Description */}
      <p className="text-gray-text text-sm leading-relaxed">{skill.description}</p>

      {/* Hover bottom accent bar */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Corner accent */}
      <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent group-hover:shadow-neon-sm transition-all duration-300" />
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={sectionRef} className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-accent text-xs font-mono tracking-[0.3em] uppercase">02 /</span>
            <span className="text-xs text-gray-text tracking-[0.2em] uppercase font-medium">Expertise</span>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-3xl md:text-4xl xl:text-5xl uppercase leading-tight max-w-3xl"
          >
            I SPECIALIZE IN A{' '}
            <span className="neon-text">RANGE OF SKILLS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-text mt-4 text-base max-w-xl"
          >
            From pixel-perfect frontends to production-ready backends — here's what I bring to the table.
          </motion.p>
        </div>

        {/* Skills grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skills.map((skill, i) => (
            <SkillCard key={skill.id} skill={skill} index={i} />
          ))}
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] rounded-full bg-accent/4 blur-[120px] pointer-events-none" />
      <div className="neon-separator mt-28" />
    </section>
  );
}
