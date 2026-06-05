import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Server, Monitor, Brain, Mail, Cloud, Cpu } from 'lucide-react';

const getIconForNode = (name) => {
  const n = name.toLowerCase();
  if (n.includes('react') || n.includes('frontend')) return <Monitor className="w-5 h-5" />;
  if (n.includes('express') || n.includes('api') || n.includes('node')) return <Server className="w-5 h-5" />;
  if (n.includes('mongo') || n.includes('database')) return <Database className="w-5 h-5" />;
  if (n.includes('gemini') || n.includes('ai')) return <Brain className="w-5 h-5" />;
  if (n.includes('mail') || n.includes('notification')) return <Mail className="w-5 h-5" />;
  if (n.includes('aws') || n.includes('cloud')) return <Cloud className="w-5 h-5" />;
  return <Cpu className="w-5 h-5" />;
};

const ArchitectureDiagram = ({ nodes = [] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      className="flex flex-col md:flex-row items-center justify-center gap-4 py-8 overflow-x-auto w-full"
    >
      {nodes.map((node, index) => (
        <React.Fragment key={index}>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-3 relative group"
          >
            <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-accent shadow-[0_0_15px_rgba(var(--accent-rgb),0.2)] group-hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.5)] group-hover:-translate-y-1 transition-all duration-300">
              {getIconForNode(node)}
            </div>
            <span className="text-xs font-medium text-gray-text text-center max-w-[100px] leading-tight">
              {node}
            </span>
          </motion.div>
          {index < nodes.length - 1 && (
            <motion.div variants={itemVariants} className="hidden md:flex items-center justify-center text-white/30 h-16">
              <ArrowRight className="w-5 h-5 animate-pulse" />
            </motion.div>
          )}
          {index < nodes.length - 1 && (
            <motion.div variants={itemVariants} className="md:hidden flex items-center justify-center text-white/30">
              <div className="w-[1px] h-6 bg-gradient-to-b from-white/30 to-transparent" />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default ArchitectureDiagram;
