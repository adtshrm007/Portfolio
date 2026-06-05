import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';

const RecruiterCTA = () => {
  const strengths = [
    'Full Stack Product Engineer',
    'Production Deployment Experience',
    'AI Product Development',
    'Real-Time Systems Architecture',
    'Modern React Ecosystem',
    'System Design Enthusiast'
  ];

  return (
    <section className="w-full py-24 bg-bg relative z-10">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-accent/20 via-transparent to-transparent opacity-50" />
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-3/5 space-y-8">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                  <Briefcase className="w-4 h-4" />
                  <span>Available for Opportunities</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why Work With <span className="text-accent">Me?</span>
                </h2>
                <p className="text-gray-text text-lg">
                  I bridge the gap between design and deep engineering. I don't just write code; I architect systems that solve real business problems, scale efficiently, and provide exceptional user experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium text-white">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-2/5 flex flex-col items-center justify-center p-8 bg-black/40 rounded-2xl border border-white/5 backdrop-blur-md">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">Ready to build something extraordinary?</h3>
              
              <a
                href="#contact"
                className="w-full flex items-center justify-between px-6 py-4 bg-accent text-background font-bold rounded-xl hover:bg-accent/90 transition-colors mb-4 group"
              >
                <span>Let's Talk</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="/Aditya_Sharma_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors border border-white/10"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecruiterCTA;
