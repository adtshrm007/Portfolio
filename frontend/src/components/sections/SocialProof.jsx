import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Star, MessageSquare, X, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { socialProof } from '../../data/portfolioData';
import { getReviews, addReview } from '../../utils/reviewService';

const SocialProof = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fetchedReviews, setFetchedReviews] = useState([]);
  
  // Fetch reviews
  useEffect(() => {
    const fetchReviews = async () => {
      const res = await getReviews();
      if (res && res.success) {
        setFetchedReviews(res.data);
      }
    };
    fetchReviews();
  }, []);
  
  // Form state
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [content, setContent] = useState('');
  const [formState, setFormState] = useState('idle'); // idle, submitting, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !role || !content) return;
    
    setFormState('submitting');
    const res = await addReview({ name, role, content, rating });
    
    if (res && res.success) {
      setFetchedReviews((prev) => [res.data, ...prev]);
      setFormState('success');
      setTimeout(() => {
        setIsModalOpen(false);
        setFormState('idle');
        setName('');
        setRole('');
        setContent('');
        setRating(5);
      }, 2500);
    } else {
      setFormState('idle');
      alert("Failed to submit review. Please try again.");
    }
  };

  return (
    <section id="trust" className="w-full py-24 bg-bg relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
            >
              Engineering <span className="text-accent">Trust</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-text max-w-2xl"
            >
              Proven track record of delivering reliable, scalable, and high-quality software solutions.
            </motion.p>
          </div>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-2 border border-white/10 bg-white/5 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-all duration-300"
          >
            <MessageSquare size={16} />
            <span>Leave a Review</span>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Static Social Proof */}
          {socialProof.map((proof, index) => (
            <motion.div
              key={proof.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none" />
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg text-white mb-8 italic leading-relaxed">
                "{proof.content}"
              </p>
              <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
                <div>
                  <h4 className="font-semibold text-white">{proof.name}</h4>
                  <p className="text-sm text-gray-text">{proof.role}</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">{proof.metric}</span>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Dynamic Reviews */}
          {fetchedReviews.map((review, index) => (
            <motion.div
              key={review._id || index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (socialProof.length + index) * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col relative overflow-hidden group hover:border-white/20 transition-all"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? "fill-accent text-accent" : "fill-white/10 text-transparent"}`}
                  />
                ))}
              </div>
              <p className="text-lg text-white mb-8 italic leading-relaxed">
                "{review.content}"
              </p>
              <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold text-sm uppercase">
                  {review.name?.charAt(0) || '?'}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{review.name || 'Anonymous'}</h4>
                  <p className="text-sm text-gray-text">{review.role || 'Client'}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => formState === 'idle' && setIsModalOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-lg bg-bg border border-white/10 rounded-3xl p-8 overflow-hidden z-10"
            >
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
                  <h3 className="font-bold text-2xl text-white mb-2 uppercase">Review <span className="text-accent">Submitted</span></h3>
                  <p className="text-gray-text text-sm">Thank you for your feedback!</p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="font-bold text-2xl text-white mb-2">Leave a <span className="text-accent">Review</span></h3>
                    <p className="text-gray-text text-sm">Share your experience collaborating with me.</p>
                  </div>

                  <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
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
                                ? "fill-accent text-accent drop-shadow-[0_0_8px_rgba(var(--accent-rgb),0.5)]"
                                : "fill-white/5 text-white/20"
                            }`}
                          />
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="relative">
                        <input
                          type="text" required disabled={formState !== 'idle'}
                          value={name} onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full bg-transparent border-b border-white/10 py-2 text-white text-sm focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
                        />
                      </div>
                      <div className="relative">
                        <input
                          type="text" required disabled={formState !== 'idle'}
                          value={role} onChange={(e) => setRole(e.target.value)}
                          placeholder="Role / Company"
                          className="w-full bg-transparent border-b border-white/10 py-2 text-white text-sm focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div className="relative mt-2">
                      <textarea
                        rows="4" required disabled={formState !== 'idle'}
                        value={content} onChange={(e) => setContent(e.target.value)}
                        placeholder="Your Feedback"
                        className="w-full bg-transparent border-b border-white/10 py-2 text-white text-sm focus:outline-none focus:border-accent transition-colors resize-none disabled:opacity-50"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formState !== 'idle'}
                      className="flex items-center justify-center gap-2 bg-accent text-background px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-accent/90 transition-all duration-300 mt-4 disabled:opacity-70"
                    >
                      {formState === 'submitting' ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit Review</span>
                          <ArrowUpRight size={16} />
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
};

export default SocialProof;
