import React from 'react';
import '../styles/logo.css';

function Logo() {
  return (
    <div className="logo-container">
      <svg className="logo-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* Background circle */}
        <circle cx="50" cy="50" r="48" className="logo-bg" />
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d9ff" />
            <stop offset="50%" stopColor="#ff006e" />
            <stop offset="100%" stopColor="#8338ec" />
          </linearGradient>
        </defs>
        
        {/* S shape */}
        <path
          d="M 35 25 Q 25 25 25 35 Q 25 42 32 45 Q 25 48 25 55 Q 25 65 35 65 Q 45 65 45 55"
          className="logo-letter"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* B shape */}
        <path
          d="M 55 25 L 55 65 M 55 25 L 65 25 Q 72 25 72 32 Q 72 38 65 40 L 55 40 M 55 40 L 65 40 Q 72 40 72 50 Q 72 65 65 65 L 55 65"
          className="logo-letter"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Accent line */}
        <line x1="20" y1="75" x2="80" y2="75" className="logo-accent" />
      </svg>
    </div>
  );
}

export default Logo;
