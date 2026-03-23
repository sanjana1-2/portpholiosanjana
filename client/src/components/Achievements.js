import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      icon: '🏆',
      title: 'LeetCode Achievements',
      description: 'Solved 200+ coding problems with consistent daily streaks',
      stats: '200+ Problems | 50+ Day Streak'
    },
    {
      icon: '⭐',
      title: 'HackerRank Certifications',
      description: 'Earned certifications in C++, Java, and Problem Solving',
      stats: '3 Certifications | 5-Star Rating'
    },
    {
      icon: '🎓',
      title: 'Udemy Courses',
      description: 'Completed advanced courses in ChatGPT and Web Development',
      stats: '10+ Courses | 100+ Hours'
    },
    {
      icon: '🌐',
      title: 'FreeCodeCamp',
      description: 'Mastered responsive web design and full-stack development',
      stats: 'Responsive Design Certified'
    },
    {
      icon: '💻',
      title: 'Full-Stack Projects',
      description: 'Built and deployed multiple production-ready applications',
      stats: '5+ Live Projects'
    },
    {
      icon: '🚀',
      title: 'AI & Automation',
      description: 'Specialized in integrating AI solutions and automation workflows',
      stats: 'Advanced Expertise'
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-container">
        <h2 className="section-title">Achievements & Milestones</h2>
        <p className="section-subtitle">Recognitions and accomplishments that showcase my dedication to excellence</p>
        
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">{achievement.icon}</div>
              <h3>{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
              <div className="achievement-stats">{achievement.stats}</div>
            </div>
          ))}
        </div>

        <div className="achievements-summary">
          <div className="summary-item">
            <h4>200+</h4>
            <p>Coding Problems Solved</p>
          </div>
          <div className="summary-item">
            <h4>5+</h4>
            <p>Live Projects Deployed</p>
          </div>
          <div className="summary-item">
            <h4>10+</h4>
            <p>Certifications Earned</p>
          </div>
          <div className="summary-item">
            <h4>100%</h4>
            <p>Commitment to Growth</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
