import React, { useState, useEffect, useRef } from 'react';

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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
          <span className="sparkle-icon sparkle-1" style={{ fontSize: '32px' }}>✨</span>
          <span className="sparkle-icon sparkle-2" style={{ fontSize: '24px' }}>✨</span>
          <span className="sparkle-icon sparkle-3" style={{ fontSize: '28px' }}>✨</span>
          
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
