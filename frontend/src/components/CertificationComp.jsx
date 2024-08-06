import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

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
  border: none;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.isDarkMode
      ? '0 0 20px rgba(76, 201, 240, 0.5)'
      : '0 0 20px rgba(0, 0, 0, 0.2)'};
  }
`;

const CardTitle = styled(Card.Title)`
  color: ${props => props.isDarkMode ? '#4cc9f0' : '#3a0ca3'};
`;

const CertificationComp = () => {
  const { isDarkMode } = useTheme();

  const certifications = [
    "Programação de algoritmos escaláveis",
    "Programação de sistemas de informação",
    "Programação para dispositivos móveis",
    "Programação para internet"
  ];

  return (
    <CertificationSection id="certificacoes" className="fade-in" isDarkMode={isDarkMode}>
      <div className="container">
        <SectionTitle isDarkMode={isDarkMode}>Certificações</SectionTitle>
        <Row>
          {certifications.map((cert, index) => (
            <Col key={index} md={6} className="mb-4">
              <CertificationCard isDarkMode={isDarkMode}>
                <Card.Body>
                  <CardTitle isDarkMode={isDarkMode}>{cert}</CardTitle>
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
