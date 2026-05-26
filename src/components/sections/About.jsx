import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '../../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

function Counter({ end, suffix, trigger }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let raf;
    let start = null;
    const duration = 1800;
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [trigger, end]);
  return <>{count}{suffix}</>;
}

const TAGS = ['React', 'MERN', 'Tailwind CSS', 'GSAP', 'Socket.io', 'WebRTC', 'Node.js', 'MongoDB', 'AI Integration'];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative py-28 md:py-36">
      {/* BG glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* ── Section label ── */}
        <motion.div
          initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={fadeUp}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase">01 /</span>
          <span className="text-[11px] text-gray-text tracking-[0.2em] uppercase font-medium">About</span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/25 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-start">

          {/* ── LEFT ── */}
          <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={stagger}>
            <motion.h2
              variants={fadeUp}
              className="font-mono font-bold text-[2.5rem] md:text-5xl xl:text-[3.5rem] uppercase leading-[0.9] mb-10"
            >
              DRIVEN BY{' '}<span className="neon-text">PURPOSE.</span>
              <br />
              BUILT FOR{' '}<span className="text-white">PEOPLE.</span>
            </motion.h2>

            {/* ── Stats grid ── */}
            <motion.div variants={stagger} className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className={`stat-card rounded-2xl p-5 cursor-none flex flex-col justify-center ${stat.value === undefined ? 'items-center text-center' : ''}`}
                >
                  {stat.value !== undefined ? (
                    <>
                      <div className="font-mono font-bold text-[2.2rem] leading-none mb-1">
                        <span className="neon-text">
                          <Counter end={stat.value} suffix={stat.suffix} trigger={isInView} />
                        </span>
                      </div>
                      <div className="text-[#6b7280] text-xs tracking-wide uppercase font-medium">{stat.label}</div>
                    </>
                  ) : (
                    <div className="text-white text-sm tracking-wide uppercase font-bold neon-text">{stat.label}</div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* ── Skill chips ── */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
              {TAGS.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.04 }}
                  className="text-[11px] px-3 py-1.5 rounded-full border border-white/8 bg-white/[0.025] text-[#6b7280] hover:border-accent/35 hover:text-accent hover:bg-accent/5 transition-all duration-200 cursor-none"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT ── */}
          <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={stagger} className="space-y-5">
            {[
              <>Code is just a tool. The real magic happens when you use it to <span className="text-accent font-medium">improve lives, streamline workflows, and foster human connection.</span></>,
              <>I focus on empathy-driven development. By understanding core user needs, I build solutions that are not just technically sound—but <span className="text-white font-medium">meaningful, accessible, and truly impactful.</span></>,
            ].map((para, i) => (
              <motion.p key={i} variants={fadeUp} className="text-[#6b7280] text-base md:text-[1.05rem] leading-[1.8]">
                {para}
              </motion.p>
            ))}

            <motion.div variants={fadeUp} className="pt-2 pb-2">
              <h3 className="text-white font-semibold mb-3">Core Objectives:</h3>
              <ul className="space-y-2 text-[#6b7280] text-sm md:text-base">
                {[
                  'Empowering communities through tech',
                  'Building accessible digital experiences',
                  'Simplifying complex problems',
                  'Driving purpose-built open-source',
                  'Making a measurable difference'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#C6FF00] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-2">
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-3 text-accent text-sm font-semibold"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Initiate collaboration
                <span className="w-8 h-px bg-accent shadow-[0_0_6px_rgba(198,255,0,0.5)] group-hover:w-14 transition-all duration-400" />
                <span>→</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="neon-separator mt-28 mx-6 md:mx-10" />
    </section>
  );
}
