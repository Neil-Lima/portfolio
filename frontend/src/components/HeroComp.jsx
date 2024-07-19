import React from 'react';
import { useTheme } from '../context/ThemeContext';

const HeroComp = () => {
  const { isDarkMode } = useTheme();

  const headerStyle = {
    background: 'linear-gradient(135deg, #3a0ca3, #4cc9f0)',
    padding: '150px 0 100px',
    position: 'relative',
    overflow: 'hidden',
  };

  const profileImgStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: '5px solid #e0e1dd',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
    animation: 'float 3s ease-in-out infinite',
  };

  const textStyle = {
    color: isDarkMode ? '#e0e1dd' : '#16213e',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 700,
    marginBottom: '20px',
    color: '#e0e1dd',
  };

  const subtitleStyle = {
    fontSize: '1.5rem',
    marginBottom: '30px',
    color: '#e0e1dd',
  };

  return (
    <header style={headerStyle}>
      <div className="container text-center">
        <img src="/path-to-your-profile-image.jpg" alt="Victor Neil" style={profileImgStyle} />
        <h1 style={titleStyle}>Victor Neil Barata Lima</h1>
        <p style={subtitleStyle}>Desenvolvedor Full Stack | React.js Specialist</p>
        <a href="#contato" className="btn btn-light btn-lg">Entre em Contato</a>
      </div>
    </header>
  );
};

export default HeroComp;

