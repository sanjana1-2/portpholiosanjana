import React from 'react';

function Projects({ projects, loading }) {
  const defaultProjects = [
    {
      _id: '1',
      title: 'LIVE CLASSROOM SYSTEM',
      date: 'MAR 2026',
      description: 'Scalable real-time Live Classroom platform supporting 100+ concurrent users. Interactive virtual sessions with seamless communication. 40% system efficiency improvement.',
      features: [
        'Real-time live class sessions (100+ concurrent users)',
        'Secure JWT authentication',
        'Attendance tracking system',
        'Real-time messaging',
        'Session management',
        'High-performance API architecture (30% latency reduction)'
      ],
      techStack: ['REACT', 'TAILWIND CSS', 'JAVASCRIPT', 'NODE.JS', 'EXPRESS.JS', 'MONGODB/MYSQL', 'REST APIS', 'JWT AUTH']
    },
    {
      _id: '2',
      title: 'ONLINE ZOO PLATFORM',
      date: 'FEB 2025',
      description: 'Responsive zoo platform. Animal database. Ticket booking. Weather integration. Interactive maps. Admin control.',
      features: [
        'Animal information database',
        'Ticket booking system',
        'Weather integration',
        'Interactive maps',
        'Admin management'
      ],
      techStack: ['HTML & CSS', 'TAILWIND CSS', 'JAVASCRIPT', 'PHP', 'MYSQL']
    },
    {
      _id: '3',
      title: 'BLOOD DONATION WEBSITE',
      date: 'FEB 2025',
      description: 'Community blood donation platform. Donor registration. Blood bank management. Request matching. Emergency alerts. Life-saving network.',
      features: [
        'Donor registration & profiles',
        'Blood bank inventory management',
        'Request matching system',
        'Emergency blood alerts',
        'Donation history tracking',
        'Admin dashboard'
      ],
      techStack: ['REACT', 'NODE.JS', 'MONGODB', 'EXPRESS', 'JWT AUTH']
    },
    {
      _id: '4',
      title: 'SORTING VISUALIZER',
      date: 'DEC 2024',
      description: 'Interactive sorting algorithm visualizer. Real-time visualization. Multiple algorithms. Speed control. Educational tool for learning data structures.',
      features: [
        'Multiple sorting algorithms',
        'Real-time visualization',
        'Speed control slider',
        'Array size customization',
        'Algorithm comparison',
        'Step-by-step execution'
      ],
      techStack: ['REACT', 'JAVASCRIPT', 'CSS3', 'CANVAS API', 'ALGORITHMS']
    }
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>PROJECTS</h2>
        {loading ? (
          <p style={{ textAlign: 'center', color: '#b0b0b0' }}>LOADING...</p>
        ) : (
          <div className="projects-grid">
            {displayProjects.map((project) => (
              <div key={project._id} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="date">{project.date}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-features">
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="tech-stack">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href="https://github.com/sanjana1-2" target="_blank" rel="noopener noreferrer" className="link-btn">
                    VIEW CODE
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
