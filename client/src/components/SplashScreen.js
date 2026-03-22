import React, { useEffect, useState } from 'react';

function SplashScreen({ onComplete }) {
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
    <div className="splash-screen-welcome">
      <div className="splash-container-welcome">
        {/* Background gradient */}
        <div className="splash-bg-gradient"></div>

        {/* Main content */}
        <div className="splash-content-welcome">
          {/* Profile Image */}
          <div className="splash-profile-wrapper">
            <img 
              src="/images/profile.png" 
              alt="Sanjana Bhardwaj" 
              className="splash-profile-image"
            />
            <div className="splash-profile-glow"></div>
            <div className="splash-profile-ring"></div>
            <div className="splash-profile-particles"></div>
          </div>

          {/* Name */}
          <div className="splash-name-wrapper">
            <h1 className="splash-name">SANJANA BHARDWAJ</h1>
            <div className="splash-name-underline"></div>
          </div>

          {/* Title */}
          <div className="splash-role-wrapper">
            <p className="splash-role">Full Stack Developer</p>
            <p className="splash-tagline-welcome">Welcome to my portfolio</p>
          </div>

          {/* Loading indicator */}
          <div className="splash-progress">
            <div className="splash-progress-bar"></div>
          </div>

          {/* Floating elements */}
          <div className="splash-float-1"></div>
          <div className="splash-float-2"></div>
          <div className="splash-float-3"></div>
        </div>

        {/* Ambient light */}
        <div className="splash-ambient"></div>
      </div>
    </div>
  );
}

export default SplashScreen;
