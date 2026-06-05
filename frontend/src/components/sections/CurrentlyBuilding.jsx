import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, CircleDashed, Rocket, Hammer } from 'lucide-react';
import { startupLab } from '../../data/portfolioData';

const CurrentlyBuilding = () => {
  return (
    <section id="lab" className="w-full py-24 bg-bg relative z-10">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <Hammer className="w-4 h-4" />
            <span>Startup Lab</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Currently <span className="text-accent">Building</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-text"
          >
            Always iterating, always building. Here is what's cooking in the lab.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-white/10 pb-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                {startupLab.title}
                <Rocket className="w-6 h-6 text-accent" />
              </h3>
              <p className="text-lg text-gray-text">{startupLab.subtitle}</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium text-accent mb-2">Development Progress</span>
              <div className="w-full md:w-48 h-3 bg-black/50 rounded-full overflow-hidden border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${startupLab.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  className="h-full bg-accent relative"
                >
                  <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] -translate-x-full" />
                </motion.div>
              </div>
              <span className="text-xs text-gray-text mt-2">{startupLab.progress}% Completed</span>
            </div>
          </div>

          <p className="text-gray-text mb-10 leading-relaxed max-w-2xl">
            {startupLab.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2 border-b border-white/5 pb-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" /> Completed Foundations
              </h4>
              <ul className="space-y-3">
                {startupLab.completedFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-text text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0 opacity-80" />
                    <span className="line-through opacity-80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2 border-b border-white/5 pb-2">
                <CircleDashed className="w-5 h-5 text-accent animate-spin-slow" /> Upcoming Roadmap
              </h4>
              <ul className="space-y-3">
                {startupLab.upcomingFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-white text-sm">
                    <CircleDashed className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
