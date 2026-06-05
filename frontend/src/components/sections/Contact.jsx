import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ArrowUpRight, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { social } from "../../data/portfolioData";
import { useState } from "react";
import { sendMessage } from "../../utils/sendMessage";
const links = [
  {
    icon: Mail,
    label: "Email",
    sub: social.email,
    href: `mailto:${social.email}`,
    color:
      "group-hover:border-accent/30 group-hover:bg-accent/5 group-hover:text-accent",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    sub: "@ragcoder",
    href: social.github,
    color:
      "group-hover:border-white/20 group-hover:bg-white/5 group-hover:text-white",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    sub: "linkedin.com/in/ragcoder",
    href: social.linkedin,
    color:
      "group-hover:border-blue-500/30 group-hover:bg-blue-500/5 group-hover:text-blue-400",
  },
  {
    icon: FaXTwitter,
    label: "X (Twitter)",
    sub: "@ragcoder",
    href: social.twitter,
    color:
      "group-hover:border-white/30 group-hover:bg-white/5 group-hover:text-white",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSendMessage(e) {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    setIsSubmitting(true);
    const res = await sendMessage({ name, email, message });
    console.log(res);
    setIsSubmitting(false);

    if (res) {
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } else {
      alert("Failed to send message. Please try again.");
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 md:py-44 overflow-hidden"
    >
      {/* ── Big ambient glow ── */}
      <div className="contact-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none" />

      {/* Rotating orbit rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border border-dashed border-accent/5 pointer-events-none hidden lg:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] rounded-full border border-dashed border-accent/[0.03] pointer-events-none hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase">
            06 /
          </span>
          <span className="text-[11px] text-gray-text tracking-[0.2em] uppercase font-medium">
            Contact
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/25 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── LEFT: CTA copy ── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-mono text-[11px] text-gray-text tracking-[0.25em] uppercase mb-5"
            >
              Let's Build Something Amazing
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15 }}
              className="font-mono font-bold text-[3rem] md:text-[4rem] xl:text-[4.75rem] uppercase leading-[0.88] mb-8"
            >
              HIRE
              <br />
              <span className="neon-text">ENGINEERING</span>
              <br />
              <span className="text-accent">TALENT.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mb-10 space-y-4"
            >
              <p className="text-[#6b7280] text-base md:text-[1.05rem] leading-[1.75] max-w-md">
                Currently open for new opportunities. I am actively looking to bring my engineering expertise to teams building ambitious products.
              </p>
              
              <div>
                <p className="text-white text-sm font-semibold mb-2">Available For:</p>
                <ul className="text-[#6b7280] text-sm space-y-1">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Internships</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Freelance Projects</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Full-Time Opportunities</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Open Source Collaboration</li>
                </ul>
              </div>
            </motion.div>

            <motion.a
              href={`mailto:${social.email}`}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="group inline-flex items-center gap-3 bg-accent text-bg px-8 py-4 rounded-full font-bold text-base btn-shine hover:shadow-[0_0_40px_rgba(198,255,0,0.45)] transition-shadow duration-300 mb-12"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>Initialize Transmission</span>
              <motion.span
                className="w-8 h-8 rounded-full bg-bg/20 flex items-center justify-center"
                animate={{ x: [0, 3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowUpRight size={15} />
              </motion.span>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <span className="text-xs text-gray-text tracking-[0.2em] uppercase font-medium mr-2">
                Or connect via
              </span>
              {links
                .filter((l) => l.label !== "Email")
                .map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl border border-white/8 bg-white/3 flex items-center justify-center text-gray-text hover:border-accent/40 hover:text-accent hover:bg-accent/8 transition-all duration-300 hover:-translate-y-1"
                    aria-label={link.label}
                  >
                    <link.icon size={16} />
                  </a>
                ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass border border-white/5 rounded-3xl p-8 md:p-10"
          >
            <form
              className="flex flex-col gap-8"
              onSubmit={handleSendMessage}
            >
              {/* Name */}
              <div className="relative animated-underline">
                <input
                  type="text"
                  id="name"
                  value={name}
                  required
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-white/10 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors"
                  onChange={(e) => setName(e.target.value)}
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-3 text-[#6b7280] text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-accent peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Your Name
                </label>
              </div>

              {/* Email */}
              <div className="relative animated-underline">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-white/10 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-3 text-[#6b7280] text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-accent peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Email Address
                </label>
              </div>

              {/* Message */}
              <div className="relative animated-underline">
                <textarea
                  id="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-white/10 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-3 text-[#6b7280] text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-accent peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Your Message
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`group relative flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 mt-2 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : "btn-shine hover:border-accent/40 hover:text-accent hover:bg-accent/5"
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Transmitting...
                  </>
                ) : isSubmitted ? (
                  "Message Sent!"
                ) : (
                  "Execute Transmission"
                )}
              </motion.button>
              {isSubmitted && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-accent text-sm text-center font-mono mt-2"
                >
                  Thank you! I will contact you as soon as possible.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
