import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>ABOUT</h2>
        <div className="about-content">
          <div className="about-grid">
            <div className="about-text">
              <p className="about-intro">
                Full-Stack Developer | React • Node.js • Laravel | Software Engineer
              </p>
              <p className="about-description">
                CSE student at Lovely Professional University building scalable web applications. Expertise in full-stack development, 
                secure backend systems, and database-driven solutions. Passionate about clean code, performance optimization, and solving real-world problems.
              </p>
              <p className="about-description" style={{ marginTop: '1rem', fontSize: '0.95rem', color: '#b0b0b0' }}>
                <strong>Tech Stack:</strong> React • Node.js • Laravel • MongoDB • MySQL • JavaScript • Python • Java • C++
              </p>
              <p className="about-description" style={{ marginTop: '1rem', fontSize: '0.95rem', color: '#b0b0b0' }}>
                <strong>Specialization:</strong> Full-stack architecture • RESTful APIs • Real-time systems • Database design • Performance optimization (30-50% improvements)
              </p>
              <div className="about-stats">
                <div className="stat">
                  <div className="stat-number">4</div>
                  <div className="stat-label">MAJOR PROJECTS</div>
                </div>
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">LEETCODE STREAK</div>
                </div>
                <div className="stat">
                  <div className="stat-number">5★</div>
                  <div className="stat-label">HACKERRANK JAVA</div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="/images/SANJANA2.png" alt="Sanjana Bhardwaj" className="about-photo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
