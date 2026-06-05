import React from 'react';
import { motion } from 'framer-motion';
import { metrics } from '../../data/portfolioData';
import AnimatedCounter from '../ui/AnimatedCounter';

const EngineeringMetrics = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="metrics" className="w-full py-16 bg-bg relative z-10 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2 flex">
                <AnimatedCounter end={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-sm text-gray-text text-center font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EngineeringMetrics;
