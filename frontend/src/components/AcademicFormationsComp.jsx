import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const SectionTitle = styled.h2`
  position: relative;
  display: inline-block;
  margin-bottom: 4vh;
  font-weight: 700;
  color: ${props => props.isDarkMode ? '#4cc9f0' : '#3a0ca3'};
  text-shadow: ${props => props.isDarkMode ? '0 0 5px #4cc9f0, 0 0 10px #4cc9f0' : 'none'};
  font-size: clamp(2rem, 5vw, 3rem);
`;

const TimelineSection = styled.section`
  padding: 8vh 0;
  background-color: ${props => props.isDarkMode ? '#16213e' : '#f8f9fa'};
  transition: background-color 0.3s ease;
`;

const Timeline = styled.div`
  position: relative;
  padding: 5vh 0;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background: ${props => props.isDarkMode ? 'linear-gradient(#3a0ca3, #4cc9f0)' : 'linear-gradient(#3a0ca3, #7209b7)'};
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    &:before {
      left: 0;
    }
  }
`;

const EducationItem = styled.div`
  position: relative;
  margin-bottom: 5vh;
  padding: 3vh;
  background: ${props => props.isDarkMode 
    ? 'linear-gradient(145deg, #1e2a4a, #1a1b26)'
    : 'linear-gradient(145deg, #f0f1f3, #ffffff)'};
  border-radius: 10px;
  box-shadow: ${props => props.isDarkMode
    ? '0 0 15px rgba(76, 201, 240, 0.3)'
    : '0 0 15px rgba(0, 0, 0, 0.1)'};
  width: calc(50% - 30px);
  color: ${props => props.isDarkMode ? '#e0e1dd' : '#16213e'};

  &:nth-child(odd) {
    margin-left: auto;
  }

  &:before {
    content: '';
    position: absolute;
    top: 20px;
    width: 20px;
    height: 20px;
    background-color: #f72585;
    border-radius: 50%;
    ${props => props.isDarkMode ? 'box-shadow: 0 0 10px #f72585;' : ''}
  }

  &:nth-child(odd):before {
    left: -40px;
  }

  &:nth-child(even):before {
    right: -40px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 20px !important;

    &:before {
      left: -30px !important;
    }
  }
`;

const EducationTitle = styled.h5`
  color: ${props => props.isDarkMode ? '#4cc9f0' : '#3a0ca3'};
  margin-bottom: 1vh;
  font-size: clamp(1.1rem, 3vw, 1.3rem);
`;

const EducationInstitution = styled.h6`
  color: ${props => props.isDarkMode ? '#f72585' : '#7209b7'};
  margin-bottom: 1vh;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
`;

const EducationDescription = styled.p`
  font-size: clamp(0.9rem, 2vw, 1rem);
`;

const AcademicFormationsComp = () => {
  const { isDarkMode } = useTheme();

  const educations = [
    {
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "Estácio",
      period: "Outubro de 2021 - Março de 2024",
      description: "Durante minha graduação, adquiri uma base sólida em programação, banco de dados, engenharia de software e desenvolvimento web. Participei de diversos projetos práticos que me permitiram aplicar os conhecimentos teóricos em cenários reais."
    },
    {
      title: "Pós-Graduação em Desenvolvimento Web Full Stack e Cloud Computing",
      institution: "Em andamento",
      period: "Iniciado em abril de 2024, com previsão de conclusão em 6 a 18 meses.",
      description: "Esta pós-graduação está ampliando meus conhecimentos em desenvolvimento web full stack, incluindo tecnologias avançadas de frontend e backend, além de introduzir conceitos e práticas de computação em nuvem."
    }
  ];

  return (
    <TimelineSection id="formacao" className="fade-in" isDarkMode={isDarkMode}>
      <div className="container">
        <SectionTitle isDarkMode={isDarkMode}>Formação Acadêmica</SectionTitle>
        <Timeline isDarkMode={isDarkMode}>
          {educations.map((edu, index) => (
            <EducationItem key={index} isDarkMode={isDarkMode}>
              <EducationTitle isDarkMode={isDarkMode}>{edu.title}</EducationTitle>
              <EducationInstitution isDarkMode={isDarkMode}>{edu.institution}</EducationInstitution>
              <p>{edu.period}</p>
              <EducationDescription>{edu.description}</EducationDescription>
            </EducationItem>
          ))}
        </Timeline>
      </div>
    </TimelineSection>
  );
};

export default AcademicFormationsComp;
