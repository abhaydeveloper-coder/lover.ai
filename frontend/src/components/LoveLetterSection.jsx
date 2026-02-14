import React, { useState, useEffect, useRef } from 'react';
import { Mail } from 'lucide-react';

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
  const [isTyping, setIsTyping] = useState(false);
  const typingRef = useRef(null);

  useEffect(() => {
    if (isOpen && !isTyping) {
      setIsTyping(true);
      let index = 0;
      
      const typeWriter = () => {
        if (index < letterText.length) {
          setDisplayedText(letterText.substring(0, index + 1));
          index++;
          typingRef.current = setTimeout(typeWriter, 30);
        } else {
          setIsTyping(false);
        }
      };

      typeWriter();

      return () => {
        if (typingRef.current) {
          clearTimeout(typingRef.current);
        }
      };
    }
  }, [isOpen]);

  const handleOpenLetter = () => {
    setIsOpen(true);
  };

  return (
    <section className="letter-section">
      <div className="section-container">
        <h2 className="section-title">A Letter From My Heart</h2>
        
        <div className={`envelope-container ${isOpen ? 'opened' : ''}`}>
          {!isOpen ? (
            <div className="envelope" onClick={handleOpenLetter}>
              <div className="envelope-flap"></div>
              <div className="envelope-body">
                <Mail size={48} className="envelope-icon" />
                <p className="envelope-text">Click to open</p>
              </div>
              <div className="wax-seal">
                <Heart size={24} />
              </div>
            </div>
          ) : (
            <div className="letter-paper">
              <div className="letter-content">
                <pre className="letter-text">{displayedText}</pre>
                {isTyping && <span className="typing-cursor">|</span>}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Import Heart from lucide-react at the top with Mail
const Heart = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
};

export default LoveLetterSection;
