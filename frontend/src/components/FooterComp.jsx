import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '../context/ThemeContext';

const FooterWrapper = styled.footer`
  background-color: ${props => props.isDarkMode ? '#0d1b2a' : '#f8f9fa'};
  color: ${props => props.isDarkMode ? '#e0e1dd' : '#16213e'};
  padding: 4vh 0;
  transition: background-color 0.3s ease;
`;

const SocialIcon = styled.a`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: ${props => props.isDarkMode ? '#4cc9f0' : '#3a0ca3'};
  margin: 0 2vw;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.isDarkMode ? '#f72585' : '#7209b7'};
    transform: translateY(-3px);
    text-shadow: ${props => props.isDarkMode ? '0 0 5px #f72585, 0 0 10px #f72585' : 'none'};
  }
`;

const FooterText = styled.p`
  margin-bottom: 2vh;
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
`;

const FooterComp = () => {
  const { isDarkMode } = useTheme();

  return (
    <FooterWrapper isDarkMode={isDarkMode}>
      <Container className="text-center">
        <FooterText>&copy; 2024 Victor Neil Barata Lima. Todos os direitos reservados.</FooterText>
        <div>
          <SocialIcon href="#" isDarkMode={isDarkMode}><FontAwesomeIcon icon={faFacebook} /></SocialIcon>
          <SocialIcon href="#" isDarkMode={isDarkMode}><FontAwesomeIcon icon={faTwitter} /></SocialIcon>
          <SocialIcon href="#" isDarkMode={isDarkMode}><FontAwesomeIcon icon={faInstagram} /></SocialIcon>
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default FooterComp;
