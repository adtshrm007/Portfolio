import React, { useEffect, useState, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

const AnimatedCounter = ({ end, suffix = '', duration = 2.5, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, end, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (value) => {
          setDisplayValue(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
};

export default AnimatedCounter;
