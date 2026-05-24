import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../data/portfolioData';

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ProjectCard({ project, index }) {
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
      className="card-spotlight group bg-card border border-white/6 rounded-3xl overflow-hidden hover:border-accent/25 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] cursor-none"
    >
      {/* Project image */}
      <div className="relative h-52 md:h-56 overflow-hidden bg-gray-dark">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

        {/* Hover reveal overlay */}
        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Project index */}
        <div className="absolute top-4 left-4 font-mono text-xs text-accent/60 tracking-widest">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Card content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-text text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-white/4 border border-white/8 text-gray-text font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex-1 flex items-center justify-center gap-2 border border-white/10 rounded-xl py-2.5 text-sm text-gray-text hover:border-accent/40 hover:text-accent transition-all duration-200"
          >
            <FaGithub size={15} className="group-hover/btn:scale-110 transition-transform" />
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex-1 flex items-center justify-center gap-2 bg-accent/10 border border-accent/20 rounded-xl py-2.5 text-sm text-accent hover:bg-accent hover:text-bg hover:shadow-neon-sm transition-all duration-200"
          >
            <ExternalLink size={15} className="group-hover/btn:scale-110 transition-transform" />
            Live Demo
          </a>
        </div>
      </div>

      {/* Bottom neon line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={sectionRef} className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-accent text-xs font-mono tracking-[0.3em] uppercase">03 /</span>
            <span className="text-xs text-gray-text tracking-[0.2em] uppercase font-medium">Projects</span>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-3xl md:text-4xl xl:text-5xl uppercase leading-tight max-w-3xl"
          >
            HERE'S A GLIMPSE OF{' '}
            <br />
            <span className="neon-text">EXCITING PROJECTS</span> I'VE DONE
          </motion.h2>
        </div>

        {/* Projects grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* View more CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/ragcoder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/10 rounded-full px-7 py-3 text-sm text-gray-text hover:border-accent/40 hover:text-accent transition-all duration-200"
          >
            <FaGithub size={16} />
            View all on GitHub
          </a>
        </motion.div>
      </div>

      <div className="neon-separator mt-28" />
    </section>
  );
}
