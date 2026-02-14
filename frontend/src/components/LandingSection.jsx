import React, { useEffect, useRef } from 'react';

export const LandingSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Minimal floating hearts animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const hearts = [];
    for (let i = 0; i < 8; i++) {
      hearts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 15 + 8,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.3 + 0.1
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
        ctx.fillStyle = `rgba(255, 181, 197, ${heart.opacity})`;
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
    <section className="landing-section-elegant">
      <canvas ref={canvasRef} className="hearts-canvas"></canvas>
      
      <div className="landing-content-elegant">
        <div className="heart-icon-hero">💘</div>
        
        <h1 className="hero-title">
          <span className="title-normal">For </span>
          <span className="title-highlight">Avni,</span>
          <br />
          <span className="title-highlight">my greatest adventure</span>
        </h1>
        
        <p className="hero-subtitle">
          This universe of us — built line by line, heartbeat by heartbeat
        </p>
        
        <p className="hero-signature">~ with all my love ~</p>
        
        <button className="cta-button-elegant" onClick={scrollToNext}>
          Begin our story
        </button>
      </div>
    </section>
  );
};

export default LandingSection;
