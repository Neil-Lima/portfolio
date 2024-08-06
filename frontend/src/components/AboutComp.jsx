import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SectionTitle = styled.h2`
  position: relative;
  display: inline-block;
  margin-bottom: 30px;
  font-weight: 700;
  color: ${props => props.isDarkMode ? '#4cc9f0' : '#3a0ca3'};
  text-shadow: ${props => props.isDarkMode ? '0 0 5px #4cc9f0, 0 0 10px #4cc9f0' : 'none'};
`;

const AboutSection = styled.section`
  padding: 70px 0;
  background-color: ${props => props.isDarkMode ? '#16213e' : '#f8f9fa'};
  transition: background-color 0.3s ease;
`;

const TextContent = styled.p`
  color: ${props => props.isDarkMode ? '#e0e1dd' : '#16213e'};
`;

const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const InfoItem = styled.li`
  margin-bottom: 10px;
  color: ${props => props.isDarkMode ? '#e0e1dd' : '#16213e'};
`;

const IconLink = styled.a`
  color: ${props => props.isDarkMode ? '#4cc9f0' : '#3a0ca3'};
  margin-right: 15px;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.isDarkMode ? '#f72585' : '#7209b7'};
    text-shadow: ${props => props.isDarkMode ? '0 0 5px #f72585, 0 0 10px #f72585' : 'none'};
  }
`;

const AboutComp = () => {
  const { isDarkMode } = useTheme();

  return (
    <AboutSection id="sobre" className="fade-in" isDarkMode={isDarkMode}>
      <div className="container">
        <SectionTitle isDarkMode={isDarkMode}>Sobre Mim</SectionTitle>
        <Row>
          <Col md={6}>
            <TextContent isDarkMode={isDarkMode}>
              Sou um desenvolvedor Full Stack apaixonado por criar soluções web inovadoras e eficientes. Com experiência em React.js e um amplo conhecimento em tecnologias front-end e back-end, estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades.
            </TextContent>
            <TextContent isDarkMode={isDarkMode}>
              Atualmente, trabalho como desenvolvedor React.js na empresa Cyberethic, onde aplico meus conhecimentos para desenvolver interfaces de usuário modernas e responsivas.
            </TextContent>
          </Col>
          <Col md={6}>
            <InfoList>
              <InfoItem isDarkMode={isDarkMode}><strong>Idade:</strong> 31 anos</InfoItem>
              <InfoItem isDarkMode={isDarkMode}>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>Localização:</strong> Belém, PA
              </InfoItem>
              <InfoItem isDarkMode={isDarkMode}>
                <FontAwesomeIcon icon={faEnvelope} /> <strong>E-mail:</strong> neil.033@hotmail.com
              </InfoItem>
            </InfoList>
            <div>
              <IconLink href="https://github.com/Neil-Lima" target="_blank" rel="noopener noreferrer" isDarkMode={isDarkMode}>
                <FontAwesomeIcon icon={faGithub} />
              </IconLink>
              <IconLink href="https://www.linkedin.com/in/neil-lima-706606248/" target="_blank" rel="noopener noreferrer" isDarkMode={isDarkMode}>
                <FontAwesomeIcon icon={faLinkedin} />
              </IconLink>
            </div>
          </Col>
        </Row>
      </div>
    </AboutSection>
  );
};

export default AboutComp;
