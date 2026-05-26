import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../data/portfolioData';
import imgUpSkillr from '../../assets/UpSkillr_Picture.png';
import imgRequesta from '../../assets/Requesta_PIcture.png';
import imgRagcoderTheme from '../../assets/Ragcoder Dark Theme PIcture.png';

const projectImages = {
  'upskillr': imgUpSkillr,
  'requesta': imgRequesta,
  'ragcoder-theme': imgRagcoderTheme,
};

/* Tag colors for variety */
const tagColors = [
  'border-blue-500/20 text-blue-400/80',
  'border-accent/20 text-accent/80',
  'border-purple-500/20 text-purple-400/80',
  'border-cyan-500/20 text-cyan-400/80',
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const img = projectImages[project.id] ?? project.image;

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
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] } },
      }}
      onMouseMove={onMouseMove}
      className="card-spotlight group relative bg-[#0d0d0d] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.7)] cursor-none flex flex-col"
    >
      {/* ── Image area ── */}
      <div className="relative h-52 overflow-hidden flex-shrink-0 bg-[#0a0a0a]">
        <img
          src={img}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-[1.06] transition-transform duration-700"
        />
        {/* Overlay */}
        <div className="project-overlay" />

        {/* Top-left: index */}
        <span className="absolute top-3.5 left-4 font-mono text-[10px] text-accent/50 tracking-[0.2em] z-10">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Top-right: live/dev badge */}
        {project.inDevelopment ? (
          <span className="absolute top-3.5 right-4 z-10 flex items-center gap-1.5 bg-black/50 backdrop-blur-md border border-orange-500/30 text-orange-400 text-[10px] font-medium px-2.5 py-1 rounded-full">
            <span className="w-1 h-1 rounded-full bg-orange-500 animate-pulse" />
            In Development
          </span>
        ) : project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3.5 right-4 z-10 flex items-center gap-1.5 bg-black/50 backdrop-blur-md border border-white/10 text-white/70 text-[10px] font-medium px-2.5 py-1 rounded-full hover:border-accent/40 hover:text-accent transition-all duration-200"
          >
            <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
            Live
          </a>
        ) : null}
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-mono font-bold text-[1.05rem] text-white group-hover:text-accent transition-colors duration-300 leading-tight">
            {project.title}
          </h3>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-8 h-8 rounded-lg border border-white/8 bg-white/3 flex items-center justify-center text-gray-text hover:border-accent/40 hover:text-accent transition-all duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={14} />
          </a>
        </div>

        {/* Description */}
        <p className="text-[#6b7280] text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag, ti) => (
            <span
              key={tag}
              className={`text-[10px] font-mono px-2.5 py-1 rounded-full border bg-white/3 ${tagColors[ti % tagColors.length]}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn w-full flex items-center justify-center gap-2 bg-accent/8 border border-accent/15 rounded-xl py-2.5 text-sm font-semibold text-accent hover:bg-accent hover:text-bg hover:shadow-[0_0_20px_rgba(198,255,0,0.35)] transition-all duration-250"
          >
            <ExternalLink size={14} className="group-hover/btn:scale-110 transition-transform" />
            View Live Demo
            <ArrowUpRight size={13} className="opacity-60 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        ) : (
          <div className="w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-2.5 text-sm font-semibold text-gray-text cursor-not-allowed select-none">
            Coming Soon
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/25 transition-all duration-500" />
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref} className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* ── Header ── */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-4 mb-6"
          >
            <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase">03 /</span>
            <span className="text-[11px] text-gray-text tracking-[0.2em] uppercase font-medium">Work</span>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/25 to-transparent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-mono font-bold text-3xl md:text-4xl xl:text-5xl uppercase leading-tight max-w-3xl"
          >
            GLIMPSE OF SOME{' '}
            <span className="neon-text">EXCITING PROJECTS</span>
          </motion.h2>
        </div>

        {/* ── Cards grid ── */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </motion.div>

        {/* ── View all CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/adtshrm007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-white/8 bg-white/3 rounded-full px-7 py-3 text-sm text-gray-text hover:border-accent/30 hover:text-accent hover:bg-accent/5 transition-all duration-250"
          >
            <FaGithub size={15} />
            See all projects on GitHub
          </a>
        </motion.div>
      </div>

      <div className="neon-separator mt-28 mx-6 md:mx-10" />
    </section>
  );
}
