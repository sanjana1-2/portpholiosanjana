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
              Hi, I'm <span className="highlight">Sanjana Bhardwaj</span>, a passionate full-stack developer and AI enthusiast dedicated to creating innovative digital solutions that make a real impact.
            </p>
            
            <p className="about-description">
              With a strong foundation in computer science and hands-on experience in modern web technologies, I specialize in building scalable, user-centric applications. I combine technical expertise with creative problem-solving to deliver solutions that are not just functional, but exceptional. My journey in tech has been driven by curiosity and a commitment to continuous learning.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <h3>🚀 My Expertise</h3>
                <ul>
                  <li>Full-Stack Web Development (React, Node.js, MongoDB)</li>
                  <li>AI & Machine Learning Integration</li>
                  <li>Cloud Deployment & DevOps (Render, Netlify)</li>
                  <li>Responsive UI/UX Design</li>
                  <li>Database Design & Optimization</li>
                </ul>
              </div>
              
              <div className="highlight-item">
                <h3>💼 What I Bring</h3>
                <ul>
                  <li>Clean, maintainable, and scalable code</li>
                  <li>Problem-solving mindset with algorithmic thinking</li>
                  <li>Attention to detail and user experience</li>
                  <li>Collaborative approach to development</li>
                  <li>Passion for learning emerging technologies</li>
                </ul>
              </div>
            </div>
            
            <p className="about-closing">
              I'm always excited to take on new challenges and collaborate with teams that share a vision for innovation. Whether it's building a complex web application or integrating AI solutions, I'm ready to contribute my skills and grow alongside the project. Let's create something extraordinary together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
