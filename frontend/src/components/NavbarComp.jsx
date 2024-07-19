import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeContext';

export const NAVBAR_HEIGHT = '70px';

const NavbarComp = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'background-color 0.3s ease',
    padding: '1rem 0',
    backgroundColor: isDarkMode ? 'rgba(22, 33, 62, 0.9)' : 'rgba(224, 225, 221, 0.9)',
    height: NAVBAR_HEIGHT,
  };

  const navLinkStyle = {
    color: isDarkMode ? '#e0e1dd' : '#16213e',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const brandStyle = {
    fontWeight: 700,
    color: '#4cc9f0',
    textShadow: '0 0 10px rgba(76, 201, 240, 0.5)',
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -70; // Ajuste conforme necessário
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <Navbar expand="lg" style={navbarStyle}>
      <Container>
        <Navbar.Brand href="#" style={brandStyle}>Victor Neil</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {['sobre', 'habilidades', 'projetos', 'formacao', 'certificacoes', 'contato'].map((item) => (
              <Nav.Link key={item} onClick={() => scrollToSection(item)} style={navLinkStyle}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        <button onClick={toggleTheme} style={{ background: 'none', border: 'none', fontSize: '1.2rem', color: isDarkMode ? '#e0e1dd' : '#16213e', transition: 'all 0.3s ease' }}>
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
