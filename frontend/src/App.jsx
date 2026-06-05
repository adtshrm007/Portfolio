import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// UI
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import Loader from './components/ui/Loader';

// Sections
import Hero from './components/sections/Hero';
import EngineeringMetrics from './components/sections/EngineeringMetrics';
import FeaturedProjects from './components/sections/FeaturedProjects';
import SystemDesign from './components/sections/SystemDesign';
import CurrentlyBuilding from './components/sections/CurrentlyBuilding';
import SkillsMatrix from './components/sections/SkillsMatrix';
import Projects from './components/sections/Projects';
import SocialProof from './components/sections/SocialProof';
import RecruiterCTA from './components/sections/RecruiterCTA';
import Contact from './components/sections/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Smooth scroll polyfill init
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Loader key="loader" onComplete={() => setIsLoading(false)} />
      ) : (
        <div key="main-app" className="relative min-h-screen bg-bg text-white overflow-x-hidden">
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
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <Navbar />

            <main>
              <Hero />
              <EngineeringMetrics />
              <FeaturedProjects />
              <SystemDesign />
              <CurrentlyBuilding />
              <SkillsMatrix />
              <Projects />
              <SocialProof />
              <RecruiterCTA />
              <Contact />
            </main>

            <Footer />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
