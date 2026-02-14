import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export const FinalSection = () => {
  const [showSurprise, setShowSurprise] = useState(false);

  const handleSurpriseClick = () => {
    setShowSurprise(true);
    createConfetti();
  };

  const createConfetti = () => {
    const colors = ['#FF4D6D', '#FFC0CB', '#C8A2C8', '#FF69B4', '#FFB6C1'];
    const container = document.querySelector('.final-section');
    if (!container) return;

    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 3 + 's';
      confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
      container.appendChild(confetti);

      setTimeout(() => confetti.remove(), 5000);
    }
  };

  return (
    <section className="final-section">
      <div className="floating-hearts-intense">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="floating-heart"
            size={Math.random() * 30 + 20}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 5}s`,
              opacity: Math.random() * 0.6 + 0.3
            }}
          />
        ))}
      </div>

      <div className="section-container final-content">
        <div className="final-message">
          <Sparkles className="sparkle-accent" size={48} />
          <h1 className="final-headline">
            I choose you, Avni.
          </h1>
          <h2 className="final-subheadline">
            Today. Tomorrow. Always.
          </h2>
          <Sparkles className="sparkle-accent" size={48} />
        </div>

        {!showSurprise ? (
          <button className="surprise-button" onClick={handleSurpriseClick}>
            <Heart className="button-heart" size={24} />
            Click for a Surprise
          </button>
        ) : (
          <div className="surprise-reveal">
            <div className="surprise-box">
              <Heart className="surprise-heart pulse-heart" size={64} />
              <h2 className="surprise-question">
                Will you be my Valentine forever, Avni?
              </h2>
              <div className="yes-languages">
                <span className="yes-word">Yes</span>
                <span className="yes-word">हाँ</span>
                <span className="yes-word">Oui</span>
                <span className="yes-word">Sí</span>
                <span className="yes-word">Ja</span>
                <span className="yes-word">Sim</span>
                <span className="yes-word">はい</span>
                <span className="yes-word">네</span>
              </div>
            </div>
          </div>
        )}

        <footer className="valentine-footer">
          <p>Made with endless love for Avni ❤️</p>
          <p className="footer-signature">- Sweeta Ka Sweetu</p>
        </footer>
      </div>
    </section>
  );
};

export default FinalSection;
