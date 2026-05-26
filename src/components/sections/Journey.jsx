import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Package, Code2, Wifi, GitBranch, Brain, Layers, Monitor } from 'lucide-react';
import { journeyItems } from '../../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const iconMap = { Package, Code2, Wifi, GitBranch, Brain, Layers, Monitor };

const nodeColors = [
  { bg: 'bg-accent/10', border: 'border-accent/30', icon: 'text-accent', glow: 'rgba(198,255,0,0.25)' },
  { bg: 'bg-blue-500/10', border: 'border-blue-500/30', icon: 'text-blue-400', glow: 'rgba(59,130,246,0.2)' },
  { bg: 'bg-purple-500/10', border: 'border-purple-500/30', icon: 'text-purple-400', glow: 'rgba(168,85,247,0.2)' },
  { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', icon: 'text-cyan-400', glow: 'rgba(6,182,212,0.2)' },
  { bg: 'bg-orange-500/10', border: 'border-orange-500/30', icon: 'text-orange-400', glow: 'rgba(249,115,22,0.2)' },
];

export default function Journey() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const nodesRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Draw the timeline line exactly based on scroll progress
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            end: 'bottom 70%',
            scrub: 1, // Smooth scrubbing
          }
        }
      );

      // 2. Pop in the nodes progressively as user scrolls down
      nodesRef.current.forEach((node, i) => {
        gsap.fromTo(node,
          { opacity: 0, x: -50, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: node,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" ref={sectionRef} className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-1/4 w-[700px] h-[700px] rounded-full bg-accent/[0.03] blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* ── Header ── */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase">04 /</span>
            <span className="text-[11px] text-gray-text tracking-[0.2em] uppercase font-bold">Timeline</span>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/25 to-transparent" />
          </div>

          <h2 className="font-mono font-bold text-4xl md:text-5xl xl:text-6xl uppercase leading-tight max-w-3xl tracking-tight">
            <span className="neon-text">MY JOURNEY</span>
          </h2>
        </div>

        {/* ── Timeline ── */}
        <div className="relative max-w-2xl xl:max-w-3xl">
          {/* Vertical connector line animated by GSAP Scrub */}
          <div
            ref={lineRef}
            className="absolute left-[23px] top-4 bottom-4 w-[2px] timeline-line origin-top"
          />

          <div className="space-y-8">
            {journeyItems.map((item, i) => {
              const Icon = iconMap[item.icon] || Package;
              const colors = nodeColors[i % nodeColors.length];
              return (
                <div
                  key={item.id}
                  ref={el => nodesRef.current[i] = el}
                  className="relative flex gap-6 group"
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
                  <div className="flex-1 glass border border-white/5 rounded-3xl p-6 group-hover:border-white/10 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] cursor-none">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className={`font-mono font-bold text-white text-lg md:text-xl tracking-wide group-hover:${colors.icon.replace('text-', 'text-')} transition-colors duration-300`}>
                        {item.title}
                      </h3>
                      <span className={`text-[10px] font-mono font-bold ${colors.icon} border ${colors.border} bg-transparent px-3 py-1 rounded-full flex-shrink-0 opacity-80 shadow-sm`}>
                        {item.year}
                      </span>
                    </div>
                    <p className="text-[#6b7280] text-[0.95rem] leading-relaxed font-medium">{item.description}</p>

                    {/* Expanding bottom bar */}
                    <div
                      className={`mt-5 h-[2px] ${colors.bg.replace('/10', '/40')} w-6 group-hover:w-full transition-all duration-700`}
                      style={{ background: `linear-gradient(to right, ${colors.glow.replace('0.2)', '0.8)').replace('0.25)', '0.8)')}, transparent)` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="neon-separator mt-32 mx-6 md:mx-10" />
    </section>
  );
}
