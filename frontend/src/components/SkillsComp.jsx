import React from 'react';
import { Row, Col } from 'react-bootstrap';

const SkillsComp = () => {
  const sectionTitleStyle = {
    position: 'relative',
    display: 'inline-block',
    marginBottom: '30px',
    fontWeight: 700,
    color: '#4cc9f0',
  };

  const skillBadgeStyle = {
    display: 'inline-block',
    padding: '8px 16px',
    margin: '5px',
    borderRadius: '20px',
    fontWeight: 600,
    color: 'white',
    background: 'linear-gradient(145deg, #3a0ca3, #4cc9f0)',
    boxShadow: '3px 3px 6px rgba(0,0,0,0.3), -3px -3px 6px rgba(255,255,255,0.1)',
    transition: 'all 0.3s ease',
  };

  const skills = [
    "HTML5", "CSS3", "JavaScript", "React", "Redux", "Node.js", "Express.js", 
    "MongoDB", "MySQL", "Git", "Bootstrap", "Materialize", "Styled-components", 
    "Chakra UI", "Material UI", "React Router", "React Query", "GraphQL"
  ];

  return (
    <section id="habilidades" className="mb-5 fade-in">
      <h2 style={sectionTitleStyle}>Habilidades e Competências</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col key={index} md={3} sm={4} xs={6} className="mb-3">
            <span style={skillBadgeStyle}>{skill}</span>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default SkillsComp;
