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
            
            <div className="about-highlights">
              <div className="highlight-item">
                <h3>Technical Skills</h3>
                <ul>
                  <li>React & JavaScript</li>
                  <li>Node.js & Express</li>
                  <li>MongoDB & Databases</li>
                  <li>AI & Automation</li>
                  <li>Cloud Deployment</li>
                </ul>
              </div>
              
              <div className="highlight-item">
                <h3>Core Strengths</h3>
                <ul>
                  <li>Full-Stack Development</li>
                  <li>Problem Solving</li>
                  <li>Clean Code</li>
                  <li>User Experience</li>
                  <li>Continuous Learning</li>
                </ul>
              </div>
            </div>
            
            <p className="about-closing">
              I'm driven by curiosity and committed to building solutions that make an impact. Let's collaborate and create something great.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
