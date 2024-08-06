import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { FaMedal } from 'react-icons/fa';

const SectionTitle = styled.h2`
  position: relative;
  display: inline-block;
  margin-bottom: 30px;
  font-weight: 700;
  color: ${props => props.isDarkMode ? '#4cc9f0' : '#3a0ca3'};
  text-shadow: ${props => props.isDarkMode ? '0 0 5px #4cc9f0, 0 0 10px #4cc9f0' : 'none'};
`;

const CertificationSection = styled.section`
  padding: 70px 0;
  background-color: ${props => props.isDarkMode ? '#16213e' : '#f8f9fa'};
  transition: background-color 0.3s ease;
`;

const CertificationCard = styled(Card)`
  transition: all 0.3s ease;
  background: ${props => props.isDarkMode 
    ? 'linear-gradient(145deg, #1e2a4a, #1a1b26)'
    : 'linear-gradient(145deg, #f0f1f3, #ffffff)'};
  box-shadow: ${props => props.isDarkMode
    ? '0 0 15px rgba(76, 201, 240, 0.3)'
    : '0 0 15px rgba(0, 0, 0, 0.1)'};
  border: 2px solid ${props => props.isDarkMode ? '#4cc9f0' : '#3a0ca3'};
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.isDarkMode
      ? '0 0 20px rgba(76, 201, 240, 0.5)'
      : '0 0 20px rgba(0, 0, 0, 0.2)'};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('path_to_certificate_texture.png') repeat;
    opacity: 0.1;
    pointer-events: none;
  }
`;

const CardTitle = styled(Card.Title)`
  color: ${props => props.isDarkMode ? '#4cc9f0' : '#3a0ca3'};
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`;

const MedalIcon = styled(FaMedal)`
  font-size: 2rem;
  color: ${props => props.isDarkMode ? '#4cc9f0' : '#3a0ca3'};
  margin-bottom: 10px;
`;

const CertDate = styled.p`
  font-style: italic;
  text-align: center;
  margin-top: 10px;
  color: ${props => props.isDarkMode ? '#a0a0a0' : '#666666'};
`;

const CertificationComp = () => {
  const { isDarkMode } = useTheme();

  const certifications = [
    { name: "Programação de algoritmos escaláveis", date: "Junho 2022" },
    { name: "Programação de sistemas de informação", date: "Agosto 2022" },
    { name: "Programação para dispositivos móveis", date: "Outubro 2022" },
    { name: "Programação para internet", date: "Dezembro 2022" }
  ];

  return (
    <CertificationSection id="certificacoes" className="fade-in" isDarkMode={isDarkMode}>
      <div className="container">
        <SectionTitle isDarkMode={isDarkMode}>Certificações</SectionTitle>
        <Row>
          {certifications.map((cert, index) => (
            <Col key={index} md={6} className="mb-4">
              <CertificationCard isDarkMode={isDarkMode}>
                <Card.Body className="text-center">
                  <MedalIcon isDarkMode={isDarkMode} />
                  <CardTitle isDarkMode={isDarkMode}>{cert.name}</CardTitle>
                  <CertDate isDarkMode={isDarkMode}>{cert.date}</CertDate>
                </Card.Body>
              </CertificationCard>
            </Col>
          ))}
        </Row>
      </div>
    </CertificationSection>
  );
};

export default CertificationComp;
