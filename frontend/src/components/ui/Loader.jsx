import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 10) + 5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(onComplete, 600); // Wait for 100% to display briefly, then trigger complete
      }
      setProgress(current);
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-bg text-white"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="font-mono font-bold text-6xl md:text-8xl tracking-tighter flex items-center">
          {progress}
          <span className="text-accent ml-2">%</span>
        </div>
        <div className="w-48 h-1 bg-white/10 rounded-full mt-6 overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-text text-sm font-mono tracking-widest uppercase opacity-50">
        Initializing...
      </div>
    </motion.div>
  );
}
