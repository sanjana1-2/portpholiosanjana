import React from 'react';

function Achievements() {
  const achievements = [
    {
      icon: 'fas fa-fire',
      title: '50-DAY LEETCODE STREAK',
      description: 'Consistent algorithmic problem-solving. Discipline and dedication. Mar 2026'
    },
    {
      icon: 'fas fa-star',
      title: 'HACKERRANK JAVA',
      description: '5-Star Gold Badge. Advanced coding challenges. High-difficulty problems. Nov 2025'
    },
    {
      icon: 'fas fa-star',
      title: 'HACKERRANK C++',
      description: '4-Star Silver Badge. Data structures and algorithms. Problem-solving excellence. Nov 2025'
    },
    {
      icon: 'fas fa-certificate',
      title: 'CHATGPT MASTERY',
      description: 'AI Essentials for Beginners. Udemy Certification. Aug 2025'
    },
    {
      icon: 'fas fa-certificate',
      title: 'RESPONSIVE DESIGN',
      description: 'freeCodeCamp Certification. Modern web standards. Feb 2024'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'IDEA PITCHING',
      description: 'Innovation competition. Entrepreneurial thinking. Valuable feedback. Oct 2025'
    },
    {
      icon: 'fas fa-code',
      title: 'HACKATHON',
      description: 'EV-focused project. Problem-solving showcase. Entrepreneurial vision. Oct 2025'
    },
    {
      icon: 'fas fa-trophy',
      title: 'DATA STRUCTURES TRAINING',
      description: 'Intensive DSA training. Core concepts mastery. Real-world applications. Jul 2025'
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2>ACHIEVEMENTS</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">
                <i className={achievement.icon}></i>
              </div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
