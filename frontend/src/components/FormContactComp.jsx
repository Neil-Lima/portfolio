import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '../context/ThemeContext';

const FormContactComp = () => {
  const { isDarkMode } = useTheme();

  const sectionTitleStyle = {
    position: 'relative',
    display: 'inline-block',
    marginBottom: '30px',
    fontWeight: 700,
    color: '#4cc9f0',
  };

  const contactIconStyle = {
    fontSize: '2rem',
    color: '#4cc9f0',
    transition: 'all 0.3s ease',
  };

  const textStyle = {
    color: isDarkMode ? '#e0e1dd' : '#16213e',
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Obrigado por entrar em contato! Sua mensagem foi enviada.');
    event.target.reset();
  };

  return (
    <section id="contato" className="mb-5 fade-in">
      <h2 style={sectionTitleStyle}>Contato</h2>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label style={textStyle}>Nome</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label style={textStyle}>E-mail</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label style={textStyle}>Mensagem</Form.Label>
              <Form.Control as="textarea" rows={3} required />
            </Form.Group>
            <Button variant="primary" type="submit">Enviar</Button>
          </Form>
        </Col>
        <Col md={6}>
          <h4 style={textStyle}>Informações de Contato</h4>
          <p style={textStyle}><FontAwesomeIcon icon={faEnvelope} style={contactIconStyle} className="me-2" /> neil.033@hotmail.com</p>
          <p style={textStyle}><FontAwesomeIcon icon={faPhone} style={contactIconStyle} className="me-2" /> (91) 98117-9825</p>
          <p style={textStyle}><FontAwesomeIcon icon={faMapMarkerAlt} style={contactIconStyle} className="me-2" /> Belém, PA</p>
          <div className="mt-4">
            <a href="https://github.com/Neil-Lima" target="_blank" rel="noopener noreferrer" className="me-3">
              <FontAwesomeIcon icon={faGithub} style={contactIconStyle} />
            </a>
            <a href="https://www.linkedin.com/in/neil-lima-706606248/" target="_blank" rel="noopener noreferrer" className="me-3">
              <FontAwesomeIcon icon={faLinkedin} style={contactIconStyle} />
            </a>
            <a href="https://victorlimaportfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} style={contactIconStyle} />
            </a>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default FormContactComp;
