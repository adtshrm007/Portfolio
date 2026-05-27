import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiMongodb, SiVite, SiTailwindcss, SiOpenai, SiSocketdotio, SiTypescript, SiGreensock, SiNextdotjs, SiRedux, SiExpress, SiWebrtc, SiFramer, SiFirebase } from "react-icons/si";
import { social } from "../../data/portfolioData";
import heroPortrait from "../../assets/Profile Photo.png";
import Magnetic from "../ui/Magnetic";

/* ── Tech marquee items ── */
const baseMarqueeItems = [
  { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
  { name: "Express.js", icon: SiExpress, color: "text-white" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Framer Motion", icon: SiFramer, color: "text-[#0055FF]" },
  { name: "GSAP", icon: SiGreensock, color: "text-[#88CE02]" },
  { name: "Vite", icon: SiVite, color: "text-[#646CFF]" },
  { name: "Socket.io", icon: SiSocketdotio, color: "text-white" },
  { name: "WebRTC", icon: SiWebrtc, color: "text-[#333333]" },
  { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
  { name: "OpenAI", icon: SiOpenai, color: "text-white" },
];

const MARQUEE_ITEMS = [...baseMarqueeItems, ...baseMarqueeItems];

const itemV = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};
const containerV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.5 } },
};

export default function Hero() {
  const headingRef = useRef(null);

  /* GSAP character reveal & Parallax */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Character reveal
      gsap.fromTo(
        ".hero-char",
        { y: 110, opacity: 0, rotateX: -35 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.85,
          stagger: 0.018,
          ease: "power4.out",
          delay: 0.25,
        },
      );

      // Parallax blobs
      gsap.to(".parallax-bg-1", {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".parallax-bg-2", {
        y: -150,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const heroLines = [
    { text: "CODE WITH", accent: false },
    { text: "PURPOSE.", accent: true },
    { text: "BUILD WITH", accent: false },
    { text: "IMPACT.", accent: true },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center pt-20 overflow-hidden"
    >
      {/* ── Background glows ── */}
      <div className="parallax-bg-1 blob blob-green w-[600px] h-[600px] -top-60 -left-40 opacity-[0.12]" />
      <div className="parallax-bg-2 blob blob-green w-[500px] h-[500px] top-1/2 -right-60 opacity-[0.08]" />
      <div className="parallax-bg-1 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-accent/[0.03] blur-[160px] pointer-events-none" />

      {/* ── Main Content ── */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center py-14 md:py-16">
        {/* ── LEFT ── */}
        <motion.div
          variants={containerV}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          {/* Status pill */}
          <motion.div variants={itemV} className="mb-7">
            <span className="inline-flex items-center gap-2.5 border border-accent/25 bg-accent/5 text-accent text-[11px] font-semibold uppercase tracking-[0.18em] px-4 py-2 rounded-full font-mono">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
              </span>
              READY TO MAKE AN IMPACT
            </span>
          </motion.div>

          {/* ── Big heading ── */}
          <div
            ref={headingRef}
            className="font-mono font-bold text-[2.6rem] sm:text-5xl md:text-[3.25rem] xl:text-[4rem] uppercase leading-[0.88] tracking-tight mb-7"
            style={{ perspective: "800px" }}
          >
            {heroLines.map((line, li) => (
              <div key={li} className="overflow-hidden">
                {line.text.split("").map((ch, ci) => (
                  <span
                    key={ci}
                    className={`hero-char inline-block ${ch === " " ? "mr-[0.22em]" : ""} ${line.accent ? "neon-text" : "text-white"}`}
                  >
                    {ch}
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Neon accent bar */}
          <motion.div variants={itemV} className="flex items-center gap-3 mb-7">
            <div className="w-10 h-[2px] bg-accent shadow-[0_0_8px_rgba(198,255,0,0.6)]" />
            <div className="w-2 h-[2px] bg-accent/50" />
          </motion.div>

          {/* Intro text */}
          <motion.p
            variants={itemV}
            className="text-[#A1A1AA] text-base md:text-[1.05rem] leading-[1.75] max-w-[450px] mb-9"
          >
            I'm <span className="text-white font-semibold">Aditya</span>. A full-stack engineer driven by impact. I build fast, accessible, and user-centric digital products that solve real problems.
          </motion.p>

          {/* ── CTA Buttons ── */}
          <motion.div variants={itemV} className="flex flex-wrap gap-3 mb-10">
            <Magnetic>
              <motion.button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative flex items-center gap-2 bg-accent text-bg px-7 py-3.5 rounded-full font-bold text-sm tracking-wide overflow-hidden btn-shine hover:shadow-[0_0_30px_rgba(198,255,0,0.5)] transition-shadow duration-300"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <span className="relative z-10">Hire Me</span>
                <ArrowRight
                  size={15}
                  className="relative z-10 group-hover:translate-x-1 transition-transform duration-200"
                />
              </motion.button>
            </Magnetic>

            <Magnetic>
              <motion.button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center gap-2 border border-white/15 bg-white/3 text-white px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-all duration-300"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                View Projects
              </motion.button>
            </Magnetic>
          </motion.div>

          {/* ── Social row ── */}
          <motion.div variants={itemV} className="flex items-center gap-5">
            <span className="text-[10px] text-gray-text tracking-[0.2em] uppercase font-medium">
              Find me on
            </span>
            <div className="flex gap-2.5">
              {[
                { icon: FaGithub, href: social.github, label: "GitHub" },
                {
                  icon: FaLinkedinIn,
                  href: social.linkedin,
                  label: "LinkedIn",
                },
                { icon: FaXTwitter, href: social.twitter, label: "X (Twitter)" },
                { icon: Mail, href: `mailto:${social.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <Magnetic key={label}>
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-xl border border-white/8 bg-white/3 flex items-center justify-center text-gray-text hover:border-accent/50 hover:text-accent hover:bg-accent/8 transition-all duration-200"
                    whileHover={{ y: -3, scale: 1.05 }}
                  >
                    <Icon size={15} />
                  </motion.a>
                </Magnetic>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT — Portrait ── */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center items-center min-h-[460px]"
        >
          {/* Slow rotating outer ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[360px] h-[360px] md:w-[440px] md:h-[440px] rounded-full border border-dashed border-accent/15"
          />
          {/* Counter-rotating inner ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full border border-accent/10"
          />

          {/* Floating portrait */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-[270px] h-[340px] md:w-[310px] md:h-[390px]"
          >
            {/* Animated gradient border */}
            <div className="absolute -inset-[2px] rounded-[2.5rem] rounded-tr-[5.5rem] bg-gradient-to-br from-accent via-accent/30 to-transparent opacity-70 blur-[0.5px]" />

            {/* Image frame */}
            <div className="relative w-full h-full rounded-[2.5rem] rounded-tr-[5.5rem] overflow-hidden bg-card portrait-glow">
              <img
                src={heroPortrait}
                alt="Aditya — RagCoder"
                className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700"
              />
              {/* Subtle gradient overlay to blend bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent" />
            </div>

            {/* Badge — Open Source */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
              className="absolute -right-10 md:-right-12 top-10 glass rounded-2xl px-4 py-3 border border-accent/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            >
              <div className="text-accent text-xl font-bold font-mono leading-none">
                GSSoC
              </div>
              <div className="text-gray-text text-[11px] mt-0.5">
                Selected Contributor
              </div>
            </motion.div>

            {/* Badge — Projects */}
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
              className="absolute -left-10 md:-left-12 bottom-16 glass rounded-2xl px-4 py-3 border border-white/8 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            >
              <div className="text-white text-2xl font-bold font-mono leading-none">
                5+
              </div>
              <div className="text-gray-text text-[11px] mt-0.5">Projects</div>
            </motion.div>

            {/* Badge — Available */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass border border-accent/25 rounded-full px-4 py-2 flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-[11px] font-semibold whitespace-nowrap">
                Available for Work
              </span>
            </motion.div>
          </motion.div>

          {/* Corner bracket decorations */}
          <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-accent/25 rounded-tr-xl" />
          <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-accent/25 rounded-bl-xl" />
        </motion.div>
      </div>

      {/* ── Tech Marquee Ticker ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="w-full border-t border-b border-white/5 bg-white/[0.015] py-3 mb-0"
      >
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {MARQUEE_ITEMS.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2.5 px-7 text-[12px] font-mono text-gray-text tracking-widest uppercase whitespace-nowrap"
              >
                <item.icon className={`text-base ${item.color}`} />
                {item.name}
                <span className="text-accent/30 text-base leading-none">·</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-accent/50 to-transparent"
        />
        <span className="text-[10px] text-gray-text tracking-[0.2em] uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
