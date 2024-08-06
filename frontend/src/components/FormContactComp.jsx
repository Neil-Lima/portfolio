import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '../context/ThemeContext';
import styled from 'styled-components';

const SectionTitle = styled.h2`
  position: relative;
  display: inline-block;
  margin-bottom: 30px;
  font-weight: 700;
  color: ${props => props.isDarkMode ? '#4cc9f0' : '#3a0ca3'};
  text-shadow: ${props => props.isDarkMode ? '0 0 5px #4cc9f0, 0 0 10px #4cc9f0' : 'none'};
`;

const ContactSection = styled.section`
  padding: 70px 0;
  background-color: ${props => props.isDarkMode ? '#16213e' : '#f8f9fa'};
  transition: background-color 0.3s ease;
`;

const ContactForm = styled(Form)`
  background: ${props => props.isDarkMode 
    ? 'linear-gradient(145deg, #1e2a4a, #1a1b26)'
    : 'linear-gradient(145deg, #f0f1f3, #ffffff)'};
  padding: 30px;
  border-radius: 10px;
  box-shadow: ${props => props.isDarkMode
    ? '0 0 15px rgba(76, 201, 240, 0.3)'
    : '0 0 15px rgba(0, 0, 0, 0.1)'};
`;

const FormInput = styled(Form.Control)`
  background-color: ${props => props.isDarkMode ? '#0d1b2a' : '#ffffff'};
  border: 1px solid ${props => props.isDarkMode ? '#4cc9f0' : '#3a0ca3'};
  color: ${props => props.isDarkMode ? '#e0e1dd' : '#16213e'};

  &:focus {
    background-color: ${props => props.isDarkMode ? '#1e2a4a' : '#f0f1f3'};
    box-shadow: 0 0 0 0.2rem ${props => props.isDarkMode ? 'rgba(76, 201, 240, 0.25)' : 'rgba(58, 12, 163, 0.25)'};
  }
`;

const FormTextArea = styled(FormInput)`
  min-height: 200px;
  resize: vertical;
`;

const FormLabel = styled(Form.Label)`
  display: block;
  margin-bottom: 8px;
  color: ${props => props.isDarkMode ? '#e0e1dd' : '#16213e'};
`;

const SubmitButton = styled(Button)`
  background-color: ${props => props.isDarkMode ? '#4cc9f0' : '#3a0ca3'};
  border: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.isDarkMode ? '#f72585' : '#7209b7'};
    transform: translateY(-3px);
    box-shadow: ${props => props.isDarkMode
      ? '0 0 10px #f72585, 0 0 20px #f72585'
      : '0 5px 15px rgba(0, 0, 0, 0.2)'};
  }
`;

const ContactInfo = styled.div`
  color: ${props => props.isDarkMode ? '#e0e1dd' : '#16213e'};
`;

const ContactIcon = styled(FontAwesomeIcon)`
  color: ${props => props.isDarkMode ? '#4cc9f0' : '#3a0ca3'};
  margin-right: 10px;
`;

const SocialIcon = styled.a`
  color: ${props => props.isDarkMode ? '#4cc9f0' : '#3a0ca3'};
  font-size: 1.5rem;
  margin-right: 15px;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.isDarkMode ? '#f72585' : '#7209b7'};
    transform: translateY(-3px);
    text-shadow: ${props => props.isDarkMode ? '0 0 5px #f72585, 0 0 10px #f72585' : 'none'};
  }
`;

const FormContactComp = () => {
  const { isDarkMode } = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Obrigado por entrar em contato! Sua mensagem foi enviada.');
    event.target.reset();
  };

  return (
    <ContactSection id="contato" className="fade-in" isDarkMode={isDarkMode}>
      <div className="container">
        <SectionTitle isDarkMode={isDarkMode}>Contato</SectionTitle>
        <Row>
          <Col md={6}>
            <ContactForm onSubmit={handleSubmit} isDarkMode={isDarkMode}>
              <Form.Group className="mb-3" controlId="name">
                <FormLabel isDarkMode={isDarkMode}>Nome</FormLabel>
                <FormInput type="text" required isDarkMode={isDarkMode} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <FormLabel isDarkMode={isDarkMode}>E-mail</FormLabel>
                <FormInput type="email" required isDarkMode={isDarkMode} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <FormLabel isDarkMode={isDarkMode}>Mensagem</FormLabel>
                <FormTextArea as="textarea" rows={8} cols={70} required isDarkMode={isDarkMode} />
              </Form.Group>
              <SubmitButton type="submit" isDarkMode={isDarkMode}>Enviar</SubmitButton>
            </ContactForm>
          </Col>
          <Col md={6}>
            <ContactInfo isDarkMode={isDarkMode}>
              <h4>Informações de Contato</h4>
              <p><ContactIcon icon={faEnvelope} isDarkMode={isDarkMode} />victorneil08@gmail.com</p>
              <p><ContactIcon icon={faPhone} isDarkMode={isDarkMode} /> (91) 98117-9825</p>
              <p><ContactIcon icon={faMapMarkerAlt} isDarkMode={isDarkMode} /> Belém, PA</p>
              <div className="mt-4">
                <SocialIcon href="https://github.com/Neil-Lima" target="_blank" rel="noopener noreferrer" isDarkMode={isDarkMode}>
                  <FontAwesomeIcon icon={faGithub} />
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com/in/neil-lima-706606248/" target="_blank" rel="noopener noreferrer" isDarkMode={isDarkMode}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </SocialIcon>
                <SocialIcon href="https://victorlimaportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" isDarkMode={isDarkMode}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </SocialIcon>
              </div>
            </ContactInfo>
          </Col>
        </Row>
      </div>
    </ContactSection>
  );
};

export default FormContactComp;
