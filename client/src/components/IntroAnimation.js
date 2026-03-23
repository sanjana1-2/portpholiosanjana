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
      <div className="intro-container">
        <div className="intro-logo">
          <div className="logo-letter">S</div>
          <div className="logo-letter">B</div>
        </div>
        
        <div className="intro-text">
          <h1 className="intro-title">SANJANA BHARDWAJ</h1>
          <p className="intro-subtitle">Full-Stack Developer</p>
        </div>

        <div className="intro-line"></div>

        <div className="intro-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
