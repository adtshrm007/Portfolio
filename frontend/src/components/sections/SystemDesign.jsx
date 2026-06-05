import React from 'react';
import { motion } from 'framer-motion';
import ArchitectureDiagram from '../ui/ArchitectureDiagram';

const SystemDesign = () => {
  const genericArchitecture = ['Client (React)', 'API Gateway (Node.js)', 'Auth (JWT/OAuth)', 'Business Logic', 'Database (MongoDB)', 'External Services (AI/Mail)'];

  return (
    <section id="system-design" className="w-full py-24 bg-bg relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            How I Build <span className="text-accent">Software</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-text max-w-2xl mx-auto"
          >
            My engineering philosophy focuses on scalability, security, and developer experience. I design systems that can grow with the product.
          </motion.p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-semibold text-white mb-2">Standard Application Architecture</h3>
            <p className="text-gray-text">A modular, decoupled approach ensuring resilience and maintainability.</p>
          </div>
          
          <div className="py-8">
            <ArchitectureDiagram nodes={genericArchitecture} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-lg border-b border-accent/20 pb-2">1. Frontend Layer</h4>
              <p className="text-sm text-gray-text leading-relaxed">
                Component-driven architecture using React. State management optimized for performance. Focus on core web vitals and accessible, responsive design.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-lg border-b border-accent/20 pb-2">2. API & Logic</h4>
              <p className="text-sm text-gray-text leading-relaxed">
                RESTful principles or GraphQL depending on data fetching needs. Secure authentication layers (JWT) and robust error handling middleware.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-lg border-b border-accent/20 pb-2">3. Data Layer</h4>
              <p className="text-sm text-gray-text leading-relaxed">
                Optimized schema design in MongoDB/PostgreSQL. Aggregation pipelines for complex queries. Caching strategies using Redis for high-read endpoints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemDesign;
