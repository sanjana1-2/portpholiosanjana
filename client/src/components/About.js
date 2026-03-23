import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img src="/images/profile.png" alt="Sanjana Bhardwaj" className="profile-image" />
            <div className="image-glow"></div>
          </div>
          
          <div className="about-text">
            <p className="about-intro">
              I'm <span className="highlight">Sanjana Bhardwaj</span>, a full-stack developer passionate about building scalable web applications and integrating AI solutions.
            </p>
            
            <p className="about-description">
              I specialize in creating modern, responsive applications using React, Node.js, and MongoDB. With a strong foundation in computer science and problem-solving, I deliver clean, maintainable code that solves real-world challenges.
            </p>

            <p className="about-description">
              My expertise spans full-stack development, AI automation, cloud deployment, and user experience design. I'm driven by curiosity and committed to continuous learning, always exploring new technologies to build better solutions.
            </p>
            
            <p className="about-closing">
              Let's collaborate and create something great together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
