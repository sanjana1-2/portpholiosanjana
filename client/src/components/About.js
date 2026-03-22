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
              Hi, I'm <span className="highlight">Sanjana Bhardwaj</span>, a passionate full-stack developer and AI enthusiast with a strong foundation in computer science and problem-solving.
            </p>
            
            <p className="about-description">
              I specialize in building scalable web applications using modern technologies like React, Node.js, and MongoDB. With expertise in AI automation and machine learning, I create intelligent solutions that solve real-world problems.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <h3>🎯 Focus Areas</h3>
                <ul>
                  <li>Full-Stack Web Development</li>
                  <li>AI & Machine Learning Integration</li>
                  <li>Cloud Deployment & DevOps</li>
                  <li>Problem Solving & Algorithms</li>
                </ul>
              </div>
              
              <div className="highlight-item">
                <h3>💡 What I Do</h3>
                <ul>
                  <li>Design and develop responsive web applications</li>
                  <li>Implement AI-powered features and automation</li>
                  <li>Optimize performance and user experience</li>
                  <li>Deploy applications to production environments</li>
                </ul>
              </div>
            </div>
            
            <p className="about-closing">
              I'm always eager to learn new technologies and take on challenging projects. Let's collaborate and build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
