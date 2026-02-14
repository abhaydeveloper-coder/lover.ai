import React from 'react';
import { Heart, Sparkles, Star, Smile, Home, Shield, Sun, Gem } from 'lucide-react';

const reasons = [
  {
    icon: Heart,
    text: "She treats me with so much love and respect."
  },
  {
    icon: Star,
    text: "She always puts me before herself, even when she doesn't have to."
  },
  {
    icon: Shield,
    text: "She is calm when things get hard and strong when I feel weak."
  },
  {
    icon: Smile,
    text: "She's cute, caring, and effortlessly funny."
  },
  {
    icon: Gem,
    text: "She's special because she's the only girl I truly love."
  },
  {
    icon: Home,
    text: "She means the whole world to me — my peace, my strength, my home."
  },
  {
    icon: Sun,
    text: "Even without trying, she makes my life brighter just by being in it."
  },
  {
    icon: Sparkles,
    text: "And from my side: she doesn't just love me… she understands me, and that's rare."
  }
];

export const ReasonsSection = () => {
  return (
    <section id="reasons-section" className="reasons-section">
      <div className="section-container">
        <h2 className="section-title">Why You're My Favorite Person, Avni</h2>
        
        <div className="reasons-grid">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div 
                key={index} 
                className="reason-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="reason-icon">
                  <IconComponent size={32} />
                </div>
                <p className="reason-text">{reason.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
