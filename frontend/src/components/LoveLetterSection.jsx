import React, { useState, useEffect, useRef } from 'react';

const letterText = `My love,

I don't think I'll ever fully find the right words for what you mean to me, but I need you to know this. The way you treat me, the way you care for me, and the way you always put me before yourself… it all means more to me than I can explain.

What you did for me was really, really special. It wasn't just "good" — it was perfect to me. It showed how deeply you care, and I'll carry that in my heart for a long time. I love you so much for that, and for a thousand other little things you do without even realizing.

You are calm when everything feels heavy, and strong when I feel weak. You're caring, funny, and so effortlessly cute. You're special because you're the only girl I love, and no one else could ever take your place.

You mean the world to me. You are my peace, my comfort, and my safe place. Life feels better just because you're in it. And something I want you to always remember — you don't just love me, you understand me. And that's rare, and that's beautiful.

I don't know what tomorrow brings, but I know this: loving you is the easiest and most natural thing I've ever done. And I'll always be thankful for you.

Always yours,
Sweeta Ka Sweetu`;

export const LoveLetterSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const typingRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    let index = 0;

    const typeWriter = () => {
      if (index < letterText.length) {
        setDisplayedText(letterText.slice(0, index + 1));
        index++;
        typingRef.current = setTimeout(typeWriter, 25);
      }
    };

    typeWriter();

    return () => clearTimeout(typingRef.current);
  }, [isOpen]);

  const handleOpenLetter = () => {
    setDisplayedText(''); // reset text before typing
    setIsOpen(true);
  };

  return (
    <section className="letter-section">
      <div className="section-container">
        <h2 className="section-title">
          Unfolding <span className="text-accent">Us</span>
        </h2>
        <p className="section-subtitle">
          A letter sealed with love — click to open
        </p>

        <div className={`envelope-container ${isOpen ? 'opened' : ''}`}>
          {!isOpen ? (
            <div className="envelope" onClick={handleOpenLetter}>
              <div className="envelope-flap"></div>
              <div className="envelope-body">
                <span style={{ fontSize: '48px', color: 'var(--rose)' }}>
                  💌
                </span>
                <p className="envelope-text">click to break the seal</p>
              </div>
              <div className="wax-seal">💌</div>
            </div>
          ) : (
            <div className="letter-paper">
              <div className="letter-content">
                <pre className="letter-text">{displayedText}</pre>
                <span className="typing-cursor">|</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
