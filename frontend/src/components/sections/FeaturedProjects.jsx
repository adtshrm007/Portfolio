import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { caseStudies } from '../../data/portfolioData';
import ArchitectureDiagram from '../ui/ArchitectureDiagram';

const FeaturedProjects = () => {
  return (
    <section id="case-studies" className="w-full py-24 bg-bg relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Engineering <span className="text-accent">Case Studies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-text max-w-2xl"
          >
            Deep dives into production-grade systems, highlighting architecture, challenges, and real-world impact.
          </motion.p>
        </div>

        <div className="space-y-24">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row gap-12 items-start"
            >
              {/* Left Column: Content */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    <span>Featured System</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-xl text-gray-text">{project.subtitle}</p>
                </div>

                <div className="space-y-6 text-gray-text">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Overview</h4>
                    <p className="leading-relaxed">{project.overview}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">The Challenge</h4>
                    <p className="leading-relaxed">{project.challenges}</p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">Key Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">Impact</h4>
                    <p className="leading-relaxed text-white bg-white/5 border border-white/10 p-4 rounded-lg inline-block">
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Live System
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/10"
                    >
                      <FaGithub className="w-5 h-5" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Visuals & Tech */}
              <div className="w-full lg:w-1/2 space-y-8">
                {/* Image Placeholder or Actual Image */}
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Architecture Visualizer */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="text-white font-semibold mb-6">System Architecture</h4>
                  <ArchitectureDiagram nodes={project.architecture} />
                </div>

                {/* Tech Stack Tags */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-gray-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
