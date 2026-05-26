import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, MessageSquare, X, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { reviews } from '../../data/portfolioData';

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form state
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formState, setFormState] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => {
        setIsModalOpen(false);
        setFormState('idle');
      }, 2500);
    }, 1500);
  };

  const containerV = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemV = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="reviews" ref={ref} className="relative py-28 md:py-36 overflow-hidden">
      
      {/* Ambient backgrounds */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-4 mb-6"
            >
              <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase">05.5 /</span>
              <span className="text-[11px] text-gray-text tracking-[0.2em] uppercase font-medium">Testimonials</span>
              <div className="w-12 h-px bg-gradient-to-r from-accent/25 to-transparent" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-mono font-bold text-4xl md:text-5xl xl:text-6xl uppercase leading-tight max-w-3xl"
            >
              WHAT OTHERS <br />
              <span className="neon-text">SAY ABOUT ME</span>
            </motion.h2>
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-3 border border-white/10 bg-white/5 text-white px-7 py-3.5 rounded-full font-bold text-sm hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-all duration-300 btn-shine"
          >
            <MessageSquare size={16} />
            <span>Leave a Review</span>
          </motion.button>
        </div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerV}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className={reviews && reviews.length > 0 ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "w-full"}
        >
          {(!reviews || reviews.length === 0) ? (
            <motion.div variants={itemV} className="w-full flex flex-col items-center justify-center py-24 px-6 text-center glass border border-white/5 rounded-3xl border-dashed">
              <MessageSquare size={48} className="text-white/10 mb-6" />
              <h3 className="font-mono font-bold text-2xl text-white mb-3 uppercase tracking-wide">No Transmissions <span className="neon-text">Logged</span></h3>
              <p className="text-[#a1a1aa] text-base max-w-md">There are currently no reviews on file. If we've collaborated recently, be the first to share your experience.</p>
            </motion.div>
          ) : (
            reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={itemV}
              className="group glass border border-white/5 rounded-3xl p-8 hover:border-white/15 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < review.rating ? "fill-accent text-accent" : "fill-white/10 text-transparent"}
                    />
                  ))}
                </div>
                <p className="text-[#a1a1aa] text-base md:text-lg leading-[1.8] mb-8">
                  "{review.content}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold font-mono text-sm uppercase">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold font-mono text-sm uppercase">{review.name}</h4>
                  <p className="text-gray-text text-xs tracking-wider">{review.role}</p>
                </div>
              </div>
            </motion.div>
          )))}
        </motion.div>
      </div>

      {/* ── Review Modal ── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-bg/80 backdrop-blur-md"
              onClick={() => formState === 'idle' && setIsModalOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg glass border border-white/10 rounded-3xl p-8 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            >
              {/* Close Button */}
              {formState === 'idle' && (
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 text-gray-text hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              )}

              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 size={32} className="text-accent" />
                  </motion.div>
                  <h3 className="font-mono font-bold text-2xl text-white mb-2 uppercase">Transmission <br/><span className="neon-text">Successful</span></h3>
                  <p className="text-gray-text text-sm">Thank you for your feedback. Your review has been securely logged.</p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="font-mono font-bold text-2xl text-white uppercase mb-2">Initialize <span className="neon-text">Review</span></h3>
                    <p className="text-gray-text text-sm">Share your experience collaborating with me.</p>
                  </div>

                  <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    {/* Star Rating */}
                    <div className="flex items-center gap-2 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          onClick={() => setRating(star)}
                          className="p-1 focus:outline-none"
                        >
                          <Star
                            size={24}
                            className={`transition-colors duration-200 ${
                              star <= (hoveredRating || rating)
                                ? "fill-accent text-accent drop-shadow-[0_0_8px_rgba(198,255,0,0.5)]"
                                : "fill-white/5 text-white/20"
                            }`}
                          />
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="relative animated-underline">
                        <input
                          type="text" id="r_name" required placeholder=" " disabled={formState !== 'idle'}
                          className="peer w-full bg-transparent border-b border-white/10 py-2 text-white text-sm focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
                        />
                        <label htmlFor="r_name" className="absolute left-0 top-2 text-[#6b7280] text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-accent peer-focus:text-xs peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs">
                          Name
                        </label>
                      </div>
                      <div className="relative animated-underline">
                        <input
                          type="text" id="r_role" required placeholder=" " disabled={formState !== 'idle'}
                          className="peer w-full bg-transparent border-b border-white/10 py-2 text-white text-sm focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
                        />
                        <label htmlFor="r_role" className="absolute left-0 top-2 text-[#6b7280] text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-accent peer-focus:text-xs peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs">
                          Role / Company
                        </label>
                      </div>
                    </div>

                    <div className="relative animated-underline mt-2">
                      <textarea
                        id="r_message" rows="4" required placeholder=" " disabled={formState !== 'idle'}
                        className="peer w-full bg-transparent border-b border-white/10 py-2 text-white text-sm focus:outline-none focus:border-accent transition-colors resize-none disabled:opacity-50"
                      />
                      <label htmlFor="r_message" className="absolute left-0 top-2 text-[#6b7280] text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-accent peer-focus:text-xs peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs">
                        Your Feedback
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={formState !== 'idle'}
                      className="group relative flex items-center justify-center gap-2 bg-accent text-bg px-6 py-3.5 rounded-xl font-bold text-sm hover:shadow-[0_0_30px_rgba(198,255,0,0.4)] transition-all duration-300 mt-4 disabled:opacity-70"
                    >
                      {formState === 'submitting' ? (
                        <div className="flex gap-1.5 items-center h-[20px]">
                          <span className="w-1.5 h-1.5 bg-bg rounded-full animate-bounce" style={{ animationDelay: '0ms' }}/>
                          <span className="w-1.5 h-1.5 bg-bg rounded-full animate-bounce" style={{ animationDelay: '150ms' }}/>
                          <span className="w-1.5 h-1.5 bg-bg rounded-full animate-bounce" style={{ animationDelay: '300ms' }}/>
                        </div>
                      ) : (
                        <>
                          <span>Submit Review</span>
                          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
