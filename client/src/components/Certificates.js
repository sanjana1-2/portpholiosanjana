import React, { useState } from 'react';

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: 'HACKERRANK JAVA',
      subtitle: '5-STAR GOLD BADGE',
      image: '/images/HACKA.png',
      date: 'NOVEMBER 2025',
      description: 'High-difficulty coding challenges. Consistent top-rank performance.'
    },
    {
      id: 2,
      title: 'HACKERRANK C++',
      subtitle: '4-STAR SILVER BADGE',
      image: '/images/HACKK.png',
      date: 'NOVEMBER 2025',
      description: 'Data structures and algorithms. Problem-solving excellence.'
    },
    {
      id: 3,
      title: 'RESPONSIVE WEB DESIGN',
      subtitle: 'FREECODECAMP',
      image: '/images/FREECODECAMP.png',
      date: 'FEBRUARY 2024',
      description: 'Professional training in responsive web design principles.'
    },
    {
      id: 4,
      title: 'CHATGPT MADE EASY',
      subtitle: 'UDEMY - AI ESSENTIALS',
      image: '/images/UDEMY1.png',
      date: 'AUGUST 2025',
      description: 'Udemy certification in AI and ChatGPT mastery.'
    },
    {
      id: 5,
      title: 'JAVA GEEKS',
      subtitle: 'ADVANCED JAVA TRAINING',
      image: '/images/JAVAGEEKS.png',
      date: '2025',
      description: 'Advanced Java programming and development skills.'
    },
    {
      id: 6,
      title: 'UDEMY CERTIFICATION',
      subtitle: 'PROFESSIONAL DEVELOPMENT',
      image: '/images/UDEMY2.png',
      date: '2025',
      description: 'Professional development and skill enhancement.'
    },
    {
      id: 7,
      title: 'C++ PROGRAMMING',
      subtitle: 'ADVANCED CERTIFICATION',
      image: '/images/CPP.png',
      date: '2025',
      description: 'Advanced C++ programming and system design.'
    },
    {
      id: 8,
      title: 'JAVA PROGRAMMING',
      subtitle: 'PROFESSIONAL CERTIFICATION',
      image: '/images/JAVA.png',
      date: '2025',
      description: 'Professional Java development and architecture.'
    }
  ];

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2>CERTIFICATIONS</h2>
        <p className="certificates-intro">8 PROFESSIONAL CERTIFICATIONS & ACHIEVEMENTS</p>
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="certificate-card"
              onClick={() => setSelectedCert(selectedCert === cert.id ? null : cert.id)}
            >
              <div className="certificate-image-wrapper">
                <img src={cert.image} alt={cert.title} className="certificate-image" />
              </div>
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <p className="certificate-subtitle">{cert.subtitle}</p>
                <p className="certificate-date">{cert.date}</p>
                {selectedCert === cert.id && (
                  <p className="certificate-description">{cert.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full view */}
      {selectedCert && (
        <div className="certificate-modal" onClick={() => setSelectedCert(null)}>
          <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCert(null)}>✕</button>
            <img
              src={certificates.find(c => c.id === selectedCert)?.image}
              alt="Certificate"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;
