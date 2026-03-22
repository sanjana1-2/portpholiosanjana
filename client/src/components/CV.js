import React, { useState } from 'react';

function CV() {
  const [showCV, setShowCV] = useState(false);

  return (
    <section id="cv" className="cv-section">
      <div className="container">
        <h2>RESUME / CV</h2>
        <div className="cv-container">
          <div className="cv-card">
            <div className="cv-icon">
              <i className="fas fa-file-pdf"></i>
            </div>
            <h3>DOWNLOAD CV</h3>
            <p>Full resume with complete details of experience, skills, and achievements.</p>
            <button 
              className="btn btn-primary" 
              onClick={() => setShowCV(!showCV)}
            >
              {showCV ? 'HIDE CV' : 'VIEW CV'}
            </button>
          </div>
        </div>

        {showCV && (
          <div className="cv-modal" onClick={() => setShowCV(false)}>
            <div className="cv-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setShowCV(false)}>✕</button>
              <img 
                src="/images/cv.png" 
                alt="Sanjana Bhardwaj CV" 
                className="cv-image"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CV;
