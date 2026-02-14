import React from 'react';

export const FutureSection = () => {
  const timeline = [
    { emoji: '📅', label: 'First Met', date: 'October 31, 2025', color: '#FF6B9D' },
    { emoji: '💕', label: 'First Date', date: 'November 3, 2025', color: '#FFB5C5' },
    { emoji: '📅', label: 'Today', date: 'Right Now', color: '#E8B4BC' },
    { emoji: '♾️', label: 'Forever', date: 'Together Always', color: '#FF6B9D' }
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
        <h2 className="section-title">Our <span className="text-accent">Forever,</span> Avni</h2>
        
        <p className="future-message">
          From the moment we met, I knew you were special. Every day with you feels like a gift,
          and I can't wait to create countless more memories together. Our story is just beginning,
          and I want every chapter to be with you. You are my today and all of my tomorrows.
        </p>

        <div className="timeline-container">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div
                className="timeline-icon"
                style={{ backgroundColor: item.color }}
              >
                <span style={{ fontSize: '24px' }}>{item.emoji}</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-label">{item.label}</h3>
                <p className="timeline-date">{item.date}</p>
              </div>
              {index < timeline.length - 1 && (
                <div className="timeline-connector" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
