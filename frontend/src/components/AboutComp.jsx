import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';

const AboutComp = () => {
  const { isDarkMode } = useTheme();

  const sectionTitleStyle = {
    position: 'relative',
    display: 'inline-block',
    marginBottom: '30px',
    fontWeight: 700,
    color: '#4cc9f0',
  };

  const textStyle = {
    color: isDarkMode ? '#e0e1dd' : '#16213e',
  };

  return (
    <section id="sobre" className="mb-5 fade-in">
      <h2 style={sectionTitleStyle}>Sobre Mim</h2>
      <Row>
        <Col md={6}>
          <p style={textStyle}>Sou um desenvolvedor Full Stack apaixonado por criar soluções web inovadoras e eficientes. Com experiência em React.js e um amplo conhecimento em tecnologias front-end e back-end, estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades.</p>
          <p style={textStyle}>Atualmente, trabalho como desenvolvedor React.js na empresa Cyberethic, onde aplico meus conhecimentos para desenvolver interfaces de usuário modernas e responsivas.</p>
        </Col>
        <Col md={6}>
          <ul className="list-unstyled" style={textStyle}>
            <li><strong>Idade:</strong> 31 anos</li>
            <li><strong>Localização:</strong> Belém, PA</li>
            <li><strong>E-mail:</strong> neil.033@hotmail.com</li>
            <li><strong>GitHub:</strong> <a href="https://github.com/Neil-Lima" target="_blank" rel="noopener noreferrer">github.com/Neil-Lima</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/neil-lima-706606248/" target="_blank" rel="noopener noreferrer">linkedin.com/in/neil-lima-706606248/</a></li>
          </ul>
        </Col>
      </Row>
    </section>
  );
};

export default AboutComp;
