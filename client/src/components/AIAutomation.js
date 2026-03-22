import React from 'react';

function AIAutomation() {
  const aiSkills = [
    {
      icon: 'fas fa-brain',
      title: 'AI AGENTS',
      description: 'Designed and deployed intelligent AI agents for task automation, decision-making, and workflow optimization. Proficient in agent architecture and multi-step reasoning.'
    },
    {
      icon: 'fas fa-wand-magic-sparkles',
      title: 'PROMPT ENGINEERING',
      description: 'Expert in crafting effective prompts for LLMs. Specialized in prompt optimization, few-shot learning, and context management for superior AI outputs.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'WORKFLOW AUTOMATION (N8N)',
      description: 'Built complex automation workflows using n8n. Integrated multiple APIs and services for seamless data flow and process automation across platforms.'
    },
    {
      icon: 'fas fa-robot',
      title: 'AUTOMATION SOLUTIONS',
      description: 'Developed end-to-end automation solutions reducing manual workload by 40-50%. Expertise in RPA, task scheduling, and intelligent process automation.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'AI OPTIMIZATION',
      description: 'Optimized AI models and workflows for performance. Implemented cost-effective solutions leveraging AI for business intelligence and data analysis.'
    },
    {
      icon: 'fas fa-network-wired',
      title: 'INTEGRATION & APIS',
      description: 'Seamlessly integrated AI services with existing systems. Expert in API management, data pipelines, and real-time AI-powered applications.'
    }
  ];

  return (
    <section id="ai-automation" className="ai-automation">
      <div className="container">
        <h2>AI & AUTOMATION</h2>
        <p className="section-intro">Leveraging cutting-edge AI and automation technologies to build intelligent, efficient solutions.</p>
        <div className="ai-grid">
          {aiSkills.map((skill, index) => (
            <div key={index} className="ai-card">
              <div className="ai-icon">
                <i className={skill.icon}></i>
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIAutomation;
