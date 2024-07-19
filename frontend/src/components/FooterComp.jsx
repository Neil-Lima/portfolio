import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '../context/ThemeContext';

const FooterComp = () => {
  const { isDarkMode } = useTheme();

  const footerStyle = {
    backgroundColor: isDarkMode ? '#16213e' : '#f8f9fa',
    color: isDarkMode ? '#e0e1dd' : '#16213e',
    padding: '2rem 0',
  };

  const socialIconStyle = {
    fontSize: '1.5rem',
    color: isDarkMode ? '#e0e1dd' : '#16213e',
    margin: '0 10px',
    transition: 'all 0.3s ease',
  };

  return (
    <footer style={footerStyle}>
      <Container className="text-center">
        <p>&copy; 2024 Victor Neil Barata Lima. Todos os direitos reservados.</p>
        <div className="mt-3">
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} style={socialIconStyle} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} style={socialIconStyle} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} style={socialIconStyle} /></a>
        </div>
      </Container>
    </footer>
  );
};

export default FooterComp;
