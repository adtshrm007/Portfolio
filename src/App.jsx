import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// UI
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';

// Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

export default function App() {
  // Smooth scroll polyfill init
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <AnimatePresence>
      <div className="relative min-h-screen bg-bg text-white overflow-x-hidden">
        {/* Fixed global elements */}
        <CustomCursor />
        <ScrollProgress />

        {/* Animated dot grid background */}
        <div className="animated-grid" />

        {/* Noise texture overlay */}
        <div className="noise-overlay" />

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <Testimonials />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
