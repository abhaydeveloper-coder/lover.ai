import React, { useState, useEffect } from 'react';
import { Heart, Clock, MessageCircle } from 'lucide-react';

const openWhenMessages = {
  miss: "Hey beautiful, I miss you too. Close your eyes and imagine me right there with you, holding you close. You're always in my heart, no matter the distance. I love you, Avni. 💕",
  sad: "My love, I hate seeing you sad. Remember that you are so strong, so loved, and so precious to me. Whatever you're going through, we'll face it together. You are never alone. I'm always here. ❤️",
  honesty: "You want honesty? Here it is: you are the best thing that ever happened to me. Loving you is effortless. You make me want to be better every single day. And I mean every word I've written here. You're my forever, Avni."
};

export const InteractiveSection = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [yesButtons, setYesButtons] = useState(1);
  const [showLoveMessage, setShowLoveMessage] = useState(false);
  const [openWhenMessage, setOpenWhenMessage] = useState(null);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown to November 3, 2026
  useEffect(() => {
    const targetDate = new Date('2026-11-03T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleYesClick = () => {
    setShowLoveMessage(true);
    // Create hearts explosion
    createHeartsExplosion();
  };

  const handleNoHover = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setNoButtonPosition({ x: randomX, y: randomY });
    
    if (yesButtons < 5) {
      setYesButtons(prev => prev + 1);
    }
  };

  const createHeartsExplosion = () => {
    const container = document.querySelector('.interactive-section');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
      const heart = document.createElement('div');
      heart.className = 'explosion-heart';
      heart.innerHTML = '❤️';
      heart.style.left = '50%';
      heart.style.top = '50%';
      heart.style.setProperty('--tx', `${Math.random() * 400 - 200}px`);
      heart.style.setProperty('--ty', `${Math.random() * 400 - 200}px`);
      container.appendChild(heart);

      setTimeout(() => heart.remove(), 2000);
    }
  };

  const handleOpenWhen = (type) => {
    setOpenWhenMessage({ type, message: openWhenMessages[type] });
  };

  return (
    <section className="interactive-section">
      <div className="section-container">
        <h2 className="section-title">Just For You, Avni</h2>

        {/* Countdown Timer */}
        <div className="countdown-container">
          <div className="countdown-header">
            <Clock size={32} />
            <h3>Until Our Next Anniversary</h3>
          </div>
          <div className="countdown-display">
            <div className="countdown-item">
              <span className="countdown-number">{countdown.days}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{countdown.hours}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{countdown.minutes}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{countdown.seconds}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        </div>

        {/* Do You Love Me Game */}
        <div className="love-game-container">
          <h3 className="game-title">Do You Love Me?</h3>
          <div className="game-buttons">
            {[...Array(yesButtons)].map((_, index) => (
              <button
                key={`yes-${index}`}
                className="game-button yes-button"
                onClick={handleYesClick}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                Yes! ❤️
              </button>
            ))}
            <button
              className="game-button no-button"
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: 'transform 0.3s ease'
              }}
            >
              No
            </button>
          </div>
          {showLoveMessage && (
            <div className="love-message">
              <Heart className="pulse-heart" size={48} />
              <p>I love you more, Avni! ❤️</p>
            </div>
          )}
        </div>

        {/* Open When Buttons */}
        <div className="open-when-container">
          <h3 className="open-when-title">
            <MessageCircle size={28} />
            Open When You Need...
          </h3>
          <div className="open-when-buttons">
            <button
              className="open-when-button"
              onClick={() => handleOpenWhen('miss')}
            >
              When you miss me
            </button>
            <button
              className="open-when-button"
              onClick={() => handleOpenWhen('sad')}
            >
              When you're sad
            </button>
            <button
              className="open-when-button"
              onClick={() => handleOpenWhen('honesty')}
            >
              When you need honesty
            </button>
          </div>

          {openWhenMessage && (
            <div className="open-when-message">
              <button
                className="close-message"
                onClick={() => setOpenWhenMessage(null)}
              >
                ×
              </button>
              <p>{openWhenMessage.message}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;
