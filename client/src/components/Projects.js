import React from 'react';

function Projects({ projects, loading }) {
  const defaultProjects = [
    {
      _id: '1',
      title: 'Live Classroom System',
      date: 'MAR 2026',
      description: 'Scalable real-time platform supporting 100+ concurrent users with interactive virtual sessions and seamless communication.',
      features: [
        'Real-time live sessions (100+ users)',
        'Secure JWT authentication',
        'Attendance tracking',
        'Real-time messaging',
        'Session management',
        '30% latency reduction'
      ],
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      icon: '🎓'
    },
    {
      _id: '2',
      title: 'Online Zoo Platform',
      date: 'FEB 2025',
      description: 'Responsive zoo platform with animal database, ticket booking, weather integration, and interactive maps.',
      features: [
        'Animal information database',
        'Ticket booking system',
        'Weather integration',
        'Interactive maps',
        'Admin management',
        'Responsive design'
      ],
      techStack: ['React', 'Tailwind CSS', 'PHP', 'MySQL'],
      icon: '🦁'
    },
    {
      _id: '3',
      title: 'Blood Donation Network',
      date: 'FEB 2025',
      description: 'Community blood donation platform with donor registration, blood bank management, and emergency alert system.',
      features: [
        'Donor registration & profiles',
        'Blood bank inventory',
        'Request matching system',
        'Emergency alerts',
        'Donation history',
        'Admin dashboard'
      ],
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      icon: '🩸'
    },
    {
      _id: '4',
      title: 'Sorting Visualizer',
      date: 'DEC 2024',
      description: 'Interactive algorithm visualizer with real-time visualization, multiple sorting algorithms, and educational features.',
      features: [
        'Multiple algorithms',
        'Real-time visualization',
        'Speed control',
        'Array customization',
        'Algorithm comparison',
        'Step-by-step execution'
      ],
      techStack: ['React', 'JavaScript', 'Canvas API', 'CSS3'],
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
                  <h4>Key Features</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="tech-stack">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <a href="https://github.com/sanjana1-2" target="_blank" rel="noopener noreferrer" className="project-link">
                    View on GitHub →
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
