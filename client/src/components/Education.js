import React from 'react';

function Education() {
  const education = [
    {
      degree: 'BACHELOR OF TECHNOLOGY',
      specialization: 'Computer Science & Engineering',
      institution: 'Lovely Professional University, Phagwara, Punjab',
      details: 'AUG 2025 - PRESENT | CGPA: 6.7'
    },
    {
      degree: 'INTERMEDIATE',
      specialization: '',
      institution: 'Govt. Girls Senior Secondary School, Faridabad, Haryana',
      details: 'APR 2021 - MAR 2022 | PERCENTAGE: 80%'
    },
    {
      degree: 'MATRICULATION',
      specialization: '',
      institution: 'Shri Ram Modal School, Faridabad, Haryana',
      details: 'APR 2019 - MAR 2020 | PERCENTAGE: 85%'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2>EDUCATION</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-marker"></div>
              <div className="education-content">
                <h3>{edu.degree} {edu.specialization && `- ${edu.specialization}`}</h3>
                <p className="institution">{edu.institution}</p>
                <p className="details">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
