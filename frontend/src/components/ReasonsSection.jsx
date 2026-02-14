import React from 'react';

const reasons = [
  {
    emoji: "💕",
    text: "She treats me with so much love and respect."
  },
  {
    emoji: "⭐",
    text: "She always puts me before herself, even when she doesn't have to."
  },
  {
    emoji: "🛡️",
    text: "She is calm when things get hard and strong when I feel weak."
  },
  {
    emoji: "😊",
    text: "She's cute, caring, and effortlessly funny."
  },
  {
    emoji: "💎",
    text: "She's special because she's the only girl I truly love."
  },
  {
    emoji: "🏡",
    text: "She means the whole world to me — my peace, my strength, my home."
  },
  {
    emoji: "☀️",
    text: "Even without trying, she makes my life brighter just by being in it."
  },
  {
    emoji: "✨",
    text: "And from my side: she doesn't just love me… she understands me, and that's rare."
  }
];

export const ReasonsSection = () => {
  return (
    <section id="reasons-section" className="reasons-section-elegant">
      <div className="section-container">
        <h2 className="section-title">Why <span className="text-accent">You</span></h2>
        <p className="section-subtitle">An ever-growing list of reasons my heart chose yours</p>
        
        <div className="reasons-grid-elegant">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="reason-card-elegant"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="reason-emoji">{reason.emoji}</div>
              <p className="reason-text-elegant">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
