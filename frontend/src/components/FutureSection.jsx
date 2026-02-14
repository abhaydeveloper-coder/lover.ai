import React from 'react';
import { Heart, Calendar, Infinity } from 'lucide-react';

export const FutureSection = () => {
  const timeline = [
    { icon: Calendar, label: 'First Met', date: 'October 31, 2025', color: '#FF4D6D' },
    { icon: Heart, label: 'First Date', date: 'November 3, 2025', color: '#FFC0CB' },
    { icon: Calendar, label: 'Today', date: 'Right Now', color: '#C8A2C8' },
    { icon: Infinity, label: 'Forever', date: 'Together Always', color: '#FF69B4' }
  ];

  return (
    <section className="future-section">
      <div className="stars-background">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`
            }}
          />
        ))}
      </div>

      <div className="section-container">
        <h2 className="section-title">Our Forever, Avni</h2>
        
        <p className="future-message">
          From the moment we met, I knew you were special. Every day with you feels like a gift,
          and I can't wait to create countless more memories together. Our story is just beginning,
          and I want every chapter to be with you. You are my today and all of my tomorrows.
        </p>

        <div className="timeline-container">
          {timeline.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="timeline-item">
                <div
                  className="timeline-icon"
                  style={{ backgroundColor: item.color }}
                >
                  <IconComponent size={28} />
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-label">{item.label}</h3>
                  <p className="timeline-date">{item.date}</p>
                </div>
                {index < timeline.length - 1 && (
                  <div className="timeline-connector" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
