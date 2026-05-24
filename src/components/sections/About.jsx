import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '../../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// Native animated counter — avoids react-countup ESM compat issues
function AnimatedCounter({ end, suffix = '', duration = 2000, trigger }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTime = null;
    let rafId;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [trigger, end, duration]);

  return <>{count}{suffix}</>;
}

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={sectionRef} className="relative py-28 md:py-36">
      {/* Background glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top label */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-accent text-xs font-mono tracking-[0.3em] uppercase">01 /</span>
          <span className="text-xs text-gray-text tracking-[0.2em] uppercase font-medium">About Me</span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Label block */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display font-black text-4xl md:text-5xl xl:text-6xl uppercase leading-tight mb-8"
            >
              Driven By{' '}
              <span className="neon-text">Code.</span>
              <br />
              Fueled By{' '}
              <span className="text-white">Craft.</span>
            </motion.h2>

            {/* Animated counters */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="glass border border-white/6 rounded-2xl p-5 card-spotlight group hover:border-accent/20 transition-colors duration-300"
                >
                  <div className="font-display font-black text-3xl md:text-4xl text-accent leading-none mb-1">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2000}
                      trigger={isInView}
                    />
                  </div>
                  <div className="text-gray-text text-xs tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Description */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={stagger}
            className="space-y-6"
          >
            <motion.p variants={fadeUp} className="text-gray-text text-base md:text-lg leading-relaxed">
              I'm <span className="text-white font-semibold">Aditya</span>, a full-stack developer
              specializing in the <span className="text-accent font-medium">MERN stack</span> —
              crafting everything from pixel-perfect frontends to scalable backend APIs.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-text text-base md:text-lg leading-relaxed">
              My journey started with a curiosity about how websites work, and evolved into a
              passion for building <span className="text-white font-medium">immersive, real-time
              applications</span> that blend beautiful design with powerful engineering.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-text text-base md:text-lg leading-relaxed">
              I integrate <span className="text-accent font-medium">AI capabilities</span> into
              modern web apps, from intelligent chatbots to LLM-powered features. I'm deeply
              committed to <span className="text-white font-medium">open-source</span> learning and
              sharing knowledge with the developer community.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-text text-base md:text-lg leading-relaxed">
              As a <span className="text-white font-medium">freelancer</span>, I've collaborated
              with startups and creative agencies to deliver products that leave lasting impressions —
              from initial concept to production deployment.
            </motion.p>

            {/* Skill tags */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-2">
              {['React', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind', 'GSAP', 'OpenAI', 'Socket.io', 'Figma', 'Next.js'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/3 text-gray-text hover:border-accent/40 hover:text-accent transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 text-accent text-sm font-semibold mt-4 hover:gap-4 transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                Let's build something great
                <span className="w-8 h-px bg-accent group-hover:w-12 transition-all duration-300" />
                <span className="text-lg leading-none">→</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="neon-separator mt-28" />
    </section>
  );
}
