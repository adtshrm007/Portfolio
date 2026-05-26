import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Monitor, Server, Layers, Atom, Brain, Zap } from 'lucide-react';
import { skills } from '../../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const iconMap = { Monitor, Server, Layers, Atom, Brain, Zap };

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
  'hover:border-blue-500/40',
  'hover:border-green-500/40',
  'hover:border-purple-500/40',
  'hover:border-cyan-500/40',
  'hover:border-accent/40',
  'hover:border-orange-500/40',
];

export default function Skills() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Staggered 3D flip-up entrance for all skill cards
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 80, rotateX: -15, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-28 md:py-36" style={{ perspective: '1000px' }}>
      {/* BG glow */}
      <div className="absolute right-0 top-1/3 w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* ── Header ── */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase">02 /</span>
            <span className="text-[11px] text-gray-text tracking-[0.2em] uppercase font-bold">Expertise</span>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/25 to-transparent" />
          </div>

          <h2 className="font-mono font-bold text-4xl md:text-5xl xl:text-6xl uppercase leading-[0.95] tracking-tight">
            I SPECIALIZE IN A<br />
            <span className="neon-text">RANGE OF SKILLS</span>
          </h2>

          <p className="text-gray-text mt-6 text-[0.95rem] max-w-lg font-medium leading-relaxed">
            From pixel-perfect frontends to scalable backends — here's what I bring to the table to build immersive digital experiences.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Monitor;
            return (
              <div
                key={skill.id}
                ref={el => cardsRef.current[index] = el}
                className={`card-spotlight gradient-border group relative glass border border-white/10 rounded-[1.5rem] p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_50px_rgba(0,0,0,0.6)] cursor-none ${hoverBorders[index % hoverBorders.length]}`}
              >
                {/* Number tag */}
                <div className="skill-number mb-6 text-white/40 group-hover:text-white/80 transition-colors font-bold tracking-[0.2em]">{String(index + 1).padStart(2, '0')}</div>

                {/* Icon */}
                <div className={`mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${iconGradients[index % iconGradients.length]} border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-white/10 shadow-lg`}>
                  <Icon size={24} className={`${iconColors[index % iconColors.length]} group-hover:drop-shadow-[0_0_8px_currentColor] transition-all duration-300`} />
                </div>

                {/* Title */}
                <h3 className="font-mono font-bold text-white text-xl mb-3 tracking-wide group-hover:text-accent transition-colors duration-300">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-gray-text/90 text-sm leading-relaxed font-medium group-hover:text-white/80 transition-colors duration-300">
                  {skill.description}
                </p>

                {/* Bottom animated bar */}
                <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/40 transition-all duration-700 shadow-sm" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="neon-separator mt-32 mx-6 md:mx-10" />
    </section>
  );
}
