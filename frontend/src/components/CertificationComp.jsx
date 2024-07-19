import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';

const CertificationComp = () => {
  const { isDarkMode } = useTheme();

  const sectionTitleStyle = {
    position: 'relative',
    display: 'inline-block',
    marginBottom: '30px',
    fontWeight: 700,
    color: '#4cc9f0',
  };

  const cardStyle = {
    transition: 'all 0.3s ease',
    background: isDarkMode 
      ? 'linear-gradient(145deg, #1e2a4a, #1a1b26)'
      : 'linear-gradient(145deg, #f0f1f3, #e0e1dd)',
    boxShadow: isDarkMode
      ? '5px 5px 10px rgba(0,0,0,0.3), -5px -5px 10px rgba(255,255,255,0.05)'
      : '5px 5px 10px rgba(0,0,0,0.1), -5px -5px 10px rgba(255,255,255,0.5)',
    color: isDarkMode ? '#e0e1dd' : '#16213e',
  };

  const certifications = [
    "Programação de algoritmos escaláveis",
    "Programação de sistemas de informação",
    "Programação para dispositivos móveis",
    "Programação para internet"
  ];

  return (
    <section id="certificacoes" className="mb-5 fade-in">
      <h2 style={sectionTitleStyle}>Certificações</h2>
      <Row>
        {certifications.map((cert, index) => (
          <Col key={index} md={6} className="mb-4">
            <Card style={cardStyle}>
              <Card.Body>
                <Card.Title>{cert}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default CertificationComp;
