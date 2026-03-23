import React, { useState, useEffect } from 'react';
import '../styles/intro-animation.css';

const IntroAnimation = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="intro-animation">
      <div className="intro-background">
        <div className="intro-glow intro-glow-1"></div>
        <div className="intro-glow intro-glow-2"></div>
        <div className="intro-glow intro-glow-3"></div>
      </div>

      <div className="intro-container">
        <div className="intro-top-section">
          <div className="intro-logo-large">
            <div className="logo-letter-large">S</div>
            <div className="logo-letter-large">B</div>
          </div>
        </div>

        <div className="intro-middle-section">
          <div className="intro-text-large">
            <h1 className="intro-title-large">SANJANA</h1>
            <h1 className="intro-title-large">BHARDWAJ</h1>
          </div>

          <div className="intro-divider"></div>

          <p className="intro-subtitle-large">Full-Stack Developer</p>
          <p className="intro-tagline">Building Digital Solutions</p>
        </div>

        <div className="intro-bottom-section">
          <div className="intro-particles-grid">
            <div className="particle-large"></div>
            <div className="particle-large"></div>
            <div className="particle-large"></div>
            <div className="particle-large"></div>
            <div className="particle-large"></div>
            <div className="particle-large"></div>
            <div className="particle-large"></div>
            <div className="particle-large"></div>
          </div>
        </div>

        <div className="intro-corner-accent intro-corner-tl"></div>
        <div className="intro-corner-accent intro-corner-tr"></div>
        <div className="intro-corner-accent intro-corner-bl"></div>
        <div className="intro-corner-accent intro-corner-br"></div>
      </div>

      <div className="intro-progress-bar"></div>
    </div>
  );
};

export default IntroAnimation;
