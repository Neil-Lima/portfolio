import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const HeaderWrapper = styled.header`
  background: url('https://images7.alphacoders.com/133/1337527.png') no-repeat center center fixed;
  background-size: cover;
  padding: 150px 0 100px;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
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
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: rgba(76, 201, 240, 0.8);
  color: #ffffff;
  text-decoration: none;
  border-radius: 25px;
  transition: all 0.3s ease;
  font-weight: 600;

  &:hover {
    background-color: rgba(247, 37, 133, 0.8);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const HeroComp = () => {
  const { isDarkMode } = useTheme();

  return (
    <HeaderWrapper>
      <ContentWrapper className="container text-center">
        <ProfileImg src="/path-to-your-profile-image.jpg" alt="Victor Neil" />
        <Title>Victor Neil Barata Lima</Title>
        <Subtitle>Desenvolvedor Full Stack | React.js e Node.js</Subtitle>
        <ContactButton href="#contato">Entre em Contato</ContactButton>
      </ContentWrapper>
    </HeaderWrapper>
  );
};

export default HeroComp;
