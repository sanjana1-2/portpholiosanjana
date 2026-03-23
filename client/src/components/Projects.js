import React from 'react';

function Projects({ projects, loading }) {
  const defaultProjects = [
    {
      _id: '1',
      title: 'Live Classroom System',
      date: 'MAR 2026',
      description: 'Real-time platform supporting 100+ concurrent users with interactive sessions.',
      features: [
        'Real-time sessions',
        'JWT authentication',
        'Attendance tracking'
      ],
      techStack: ['React', 'Node.js', 'MongoDB'],
      icon: '🎓'
    },
    {
      _id: '2',
      title: 'Online Zoo Platform',
      date: 'FEB 2025',
      description: 'Zoo platform with animal database, ticket booking, and interactive maps.',
      features: [
        'Animal database',
        'Ticket booking',
        'Interactive maps'
      ],
      techStack: ['React', 'PHP', 'MySQL'],
      icon: '🦁'
    },
    {
      _id: '3',
      title: 'Blood Donation Network',
      date: 'FEB 2025',
      description: 'Community platform for blood donation with donor registration and emergency alerts.',
      features: [
        'Donor profiles',
        'Blood inventory',
        'Emergency alerts'
      ],
      techStack: ['React', 'Node.js', 'MongoDB'],
      icon: '🩸'
    },
    {
      _id: '4',
      title: 'Sorting Visualizer',
      date: 'DEC 2024',
      description: 'Interactive algorithm visualizer with real-time visualization and speed control.',
      features: [
        'Multiple algorithms',
        'Real-time visualization',
        'Speed control'
      ],
      techStack: ['React', 'JavaScript', 'Canvas API'],
      icon: '📊'
    }
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Innovative solutions built with modern technologies</p>
        
        {loading ? (
          <p style={{ textAlign: 'center', color: '#b0b0b0', fontSize: '1.1rem' }}>Loading projects...</p>
        ) : (
          <div className="projects-grid">
            {displayProjects.map((project) => (
              <div key={project._id} className="project-card">
                <div className="project-icon">{project.icon}</div>
                
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-date">{project.date}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  {project.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>

                <div className="tech-stack">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <a href="https://github.com/sanjana1-2" target="_blank" rel="noopener noreferrer" className="project-link">
                    View Code →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
