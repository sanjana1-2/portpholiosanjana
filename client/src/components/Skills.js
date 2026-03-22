import React from 'react';

function Skills() {
  const skillsData = [
    {
      category: 'LANGUAGES',
      skills: ['C++', 'JAVASCRIPT', 'C', 'PHP', 'PYTHON', 'JAVA']
    },
    {
      category: 'FRONTEND',
      skills: ['HTML & CSS', 'BOOTSTRAP', 'REACTJS', 'TAILWIND CSS']
    },
    {
      category: 'BACKEND & TOOLS',
      skills: ['NODE.JS', 'MYSQL', 'MONGODB', 'REST APIS', 'JWT AUTH']
    },
    {
      category: 'SOFT SKILLS',
      skills: ['PROBLEM-SOLVING', 'TEAM PLAYER', 'TIME MANAGEMENT', 'ADAPTABILITY']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>ARSENAL</h2>
        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3>{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.skills.map((skill, idx) => (
                  <span key={idx} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
