import React, { useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';

export const LandingSection = () => {
  const canvasRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    // Floating hearts animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const hearts = [];
    for (let i = 0; i < 15; i++) {
      hearts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3
      });
    }

    function drawHeart(x, y, size) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.bezierCurveTo(x, y - size / 2, x - size / 2, y - size / 2, x - size / 2, y);
      ctx.bezierCurveTo(x - size / 2, y + size / 4, x, y + size / 2, x, y + size);
      ctx.bezierCurveTo(x, y + size / 2, x + size / 2, y + size / 4, x + size / 2, y);
      ctx.bezierCurveTo(x + size / 2, y - size / 2, x, y - size / 2, x, y);
      ctx.closePath();
      ctx.fill();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      hearts.forEach(heart => {
        ctx.fillStyle = `rgba(255, 77, 109, ${heart.opacity})`;
        drawHeart(heart.x, heart.y, heart.size);
        
        heart.y -= heart.speed;
        if (heart.y < -50) {
          heart.y = canvas.height + 50;
          heart.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    }

    animate();

    // Particle text animation for "Avni"
    const name = nameRef.current;
    if (name) {
      const text = name.textContent;
      name.textContent = '';
      
      const letters = text.split('');
      letters.forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.className = 'particle-letter';
        span.style.animationDelay = `${i * 0.1}s`;
        name.appendChild(span);
      });
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('reasons-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="landing-section">
      <canvas ref={canvasRef} className="hearts-canvas"></canvas>
      
      <div className="landing-content">
        <h1 className="main-headline">
          Happy Valentine's Day, <span ref={nameRef} className="name-animated">Avni</span>
        </h1>
        
        <p className="subheading">This little corner of the internet is just for you.</p>
        
        <button className="cta-button" onClick={scrollToNext}>
          <Heart className="heart-icon" size={20} />
          Open My Heart
        </button>
      </div>
    </section>
  );
};

export default LandingSection;
