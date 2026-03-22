import React from 'react';

function HeroElegant() {
  const renderWords = (text) => {
    return text.split(' ').map((word, index) => (
      <span key={index} className="word">
        {word}
      </span>
    ));
  };

  return (
    <section id="home" className="hero-elegant">
      <div className="container">
        <div className="hero-elegant-content">
          <img 
            src="/images/profile.png" 
            alt="Sanjana Bhardwaj" 
            className="profile-image-elegant"
          />

          <h1 className="hero-headline-elegant">
            {renderWords('SANJANA BHARDWAJ')}
          </h1>

          <p className="hero-subtitle-elegant">
            Full Stack Developer
          </p>

          <p className="hero-tagline-elegant">
            Crafting elegant digital experiences with precision and purpose.
            <br />
            Building systems that matter. Code that speaks.
          </p>

          <div className="hero-buttons-elegant">
            <a href="#projects" className="btn-elegant btn-elegant-primary">
              Explore Work
            </a>
            <a href="#contact" className="btn-elegant">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroElegant;
