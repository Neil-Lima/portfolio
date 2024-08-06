import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGitAlt, faBootstrap } from '@fortawesome/free-brands-svg-icons';

const SectionTitle = styled.h2`
  position: relative;
  display: inline-block;
  margin-bottom: 30px;
  font-weight: 700;
  color: ${props => props.isDarkMode ? '#4cc9f0' : '#3a0ca3'};
  text-shadow: ${props => props.isDarkMode ? '0 0 5px #4cc9f0, 0 0 10px #4cc9f0' : 'none'};
`;

const SkillBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  margin: 8px;
  border-radius: 25px;
  font-weight: 600;
  color: ${props => props.isDarkMode ? '#ffffff' : '#3a0ca3'};
  background: ${props => props.isDarkMode 
    ? `linear-gradient(145deg, ${props.color}, #4cc9f0)`
    : 'linear-gradient(145deg, #f0f1f3, #ffffff)'};
  box-shadow: ${props => props.isDarkMode
    ? `0 0 10px ${props.color}80, 0 0 20px ${props.color}40`
    : '3px 3px 6px rgba(0,0,0,0.1), -3px -3px 6px rgba(255,255,255,0.5)'};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: ${props => props.isDarkMode
      ? `0 0 15px ${props.color}A0, 0 0 30px ${props.color}60`
      : '5px 5px 10px rgba(0,0,0,0.2), -5px -5px 10px rgba(255,255,255,0.7)'};
  }

  svg {
    margin-right: 8px;
  }
`;

const SkillsSection = styled.section`
  padding: 70px 0;
  background-color: ${props => props.isDarkMode ? '#16213e' : '#f8f9fa'};
  transition: background-color 0.3s ease;
`;

const SkillsComp = () => {
  const { isDarkMode } = useTheme();

  const skills = [
    { name: "HTML5", icon: faHtml5, color: "#E44D26" },
    { name: "CSS3", icon: faCss3Alt, color: "#264DE4" },
    { name: "JavaScript", icon: faJs, color: "#F0DB4F" },
    { name: "React", icon: faReact, color: "#61DAFB" },
    { name: "Redux", color: "#764ABC" },
    { name: "Node.js", icon: faNodeJs, color: "#339933" },
    { name: "Nest.js", color: "#000000" },
    { name: "MongoDB", color: "#47A248" },
    { name: "MySQL", color: "#4479A1" },
    { name: "Git", icon: faGitAlt, color: "#F05032" },
    { name: "Bootstrap", icon: faBootstrap, color: "#7952B3" },
    { name: "Materialize", color: "#EB7077" },
    { name: "Styled-components", color: "#DB7093" },
    { name: "Chakra UI", color: "#319795" },
    { name: "Material UI", color: "#0081CB" },
    { name: "React Router", color: "#CA4245" },
    { name: "React Query", color: "#FF4154" },
    { name: "GraphQL", color: "#E10098" }
  ];

  return (
    <SkillsSection id="habilidades" className="fade-in" isDarkMode={isDarkMode}>
      <div className="container">
        <SectionTitle isDarkMode={isDarkMode}>Habilidades e Competências</SectionTitle>
        <Row>
          {skills.map((skill, index) => (
            <Col key={index} lg={3} md={4} sm={6} xs={6} className="mb-4 text-center">
              <SkillBadge isDarkMode={isDarkMode} color={skill.color}>
                {skill.icon && <FontAwesomeIcon icon={skill.icon} />}
                {skill.name}
              </SkillBadge>
            </Col>
          ))}
        </Row>
      </div>
    </SkillsSection>
  );
};

export default SkillsComp;
