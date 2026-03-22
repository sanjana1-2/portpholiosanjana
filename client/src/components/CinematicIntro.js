import React, { useEffect, useState } from 'react';
import '../styles/cinematic-intro.css';

function CinematicIntro({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 0: Rooftop scene (4 seconds)
    const timer1 = setTimeout(() => setPhase(1), 4000);
    
    // Phase 1: Fade to splash screen (1 second)
    const timer2 = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="cinematic-intro">
      {/* Background - City skyline */}
      <div className="intro-background">
        <div className="city-skyline"></div>
        <div className="sky-gradient"></div>
      </div>

      {/* Ambient lights */}
      <div className="ambient-lights">
        <div className="light light-1"></div>
        <div className="light light-2"></div>
        <div className="light light-3"></div>
        <div className="light light-4"></div>
      </div>

      {/* Rooftop scene */}
      <div className="rooftop-scene">
        {/* Roses */}
        <div className="roses-container">
          <div className="rose rose-1"></div>
          <div className="rose rose-2"></div>
          <div className="rose rose-3"></div>
          <div className="rose rose-4"></div>
          <div className="rose rose-5"></div>
        </div>

        {/* Figure with guitar */}
        <div className="figure-container">
          <div className="figure">
            {/* Dress flowing */}
            <div className="dress"></div>
            
            {/* Guitar */}
            <div className="guitar">
              <div className="guitar-body"></div>
              <div className="guitar-neck"></div>
              <div className="guitar-strings"></div>
            </div>

            {/* Hair flowing in wind */}
            <div className="hair">
              <div className="hair-strand strand-1"></div>
              <div className="hair-strand strand-2"></div>
              <div className="hair-strand strand-3"></div>
            </div>
          </div>
        </div>

        {/* Soft lights */}
        <div className="soft-lights">
          <div className="lantern lantern-1"></div>
          <div className="lantern lantern-2"></div>
          <div className="lantern lantern-3"></div>
        </div>

        {/* Wind effect */}
        <div className="wind-particles">
          <div className="particle p-1"></div>
          <div className="particle p-2"></div>
          <div className="particle p-3"></div>
          <div className="particle p-4"></div>
          <div className="particle p-5"></div>
        </div>
      </div>

      {/* Text overlay */}
      <div className="intro-text">
        <h2 className="intro-title">A Moment of Beauty</h2>
        <p className="intro-subtitle">Music, Dreams, and Presence</p>
      </div>

      {/* Music notes animation */}
      <div className="music-notes">
        <div className="note note-1">♪</div>
        <div className="note note-2">♫</div>
        <div className="note note-3">♪</div>
        <div className="note note-4">♫</div>
      </div>

      {/* Fade out overlay */}
      <div className={`intro-fade ${phase === 1 ? 'fade-out' : ''}`}></div>
    </div>
  );
}

export default CinematicIntro;
