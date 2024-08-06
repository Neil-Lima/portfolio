import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const HeaderWrapper = styled.header`
  background: ${props => props.isDarkMode
    ? 'linear-gradient(135deg, #0d1b2a, #1b263b)'
    : 'linear-gradient(135deg, #3a0ca3, #4cc9f0)'};
  padding: 150px 0 100px;
  position: relative;
  overflow: hidden;
`;

const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #e0e1dd;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  animation: ${float} 3s ease-in-out infinite;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #e0e1dd;
  text-shadow: ${props => props.isDarkMode
    ? '0 0 10px #4cc9f0, 0 0 20px #4cc9f0'
    : '0 2px 4px rgba(0, 0, 0, 0.1)'};
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: #e0e1dd;
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: ${props => props.isDarkMode ? '#4cc9f0' : '#f72585'};
  color: #ffffff;
  text-decoration: none;
  border-radius: 25px;
  transition: all 0.3s ease;
  font-weight: 600;

  &:hover {
    background-color: ${props => props.isDarkMode ? '#f72585' : '#7209b7'};
    transform: translateY(-3px);
    box-shadow: ${props => props.isDarkMode
      ? '0 0 15px #f72585, 0 0 30px #f72585'
      : '0 5px 15px rgba(0, 0, 0, 0.2)'};
  }
`;

const HeroComp = () => {
  const { isDarkMode } = useTheme();

  return (
    <HeaderWrapper isDarkMode={isDarkMode}>
      <div className="container text-center">
        <ProfileImg src="/path-to-your-profile-image.jpg" alt="Victor Neil" />
        <Title isDarkMode={isDarkMode}>Victor Neil Barata Lima</Title>
        <Subtitle>Desenvolvedor Full Stack | React.js Specialist</Subtitle>
        <ContactButton href="#contato" isDarkMode={isDarkMode}>Entre em Contato</ContactButton>
      </div>
    </HeaderWrapper>
  );
};

export default HeroComp;
