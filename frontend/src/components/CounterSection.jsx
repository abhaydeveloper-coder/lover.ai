import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

export const CounterSection = () => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          animateCounter();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  const animateCounter = () => {
    let current = 0;
    const target = 100;
    const increment = 2;
    const duration = 2000;
    const steps = duration / (target / increment);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, steps);
  };

  return (
    <section ref={sectionRef} className="counter-section">
      <div className="section-container">
        <div className="counter-content">
          <Sparkles className="sparkle-icon sparkle-1" size={32} />
          <Sparkles className="sparkle-icon sparkle-2" size={24} />
          <Sparkles className="sparkle-icon sparkle-3" size={28} />
          
          <h2 className="counter-title">Reasons I Love You</h2>
          
          <div className="counter-display">
            <span className="counter-number">{count}</span>
            <span className="counter-plus">+</span>
          </div>
          
          <p className="counter-subtitle">And counting forever, Avni...</p>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
