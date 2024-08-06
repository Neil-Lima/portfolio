import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeContext';

export const NAVBAR_HEIGHT = '70px';

const StyledNavbar = styled(Navbar)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
  padding: 1rem 0;
  background-color: ${props => props.isDarkMode
    ? 'rgba(22, 33, 62, 0.9)'
    : 'rgba(224, 225, 221, 0.9)'};
  height: ${NAVBAR_HEIGHT};
  box-shadow: ${props => props.isDarkMode
    ? '0 2px 10px rgba(76, 201, 240, 0.1)'
    : '0 2px 10px rgba(0, 0, 0, 0.1)'};
`;

const NavLink = styled(Nav.Link)`
  color: ${props => props.isDarkMode ? '#e0e1dd' : '#16213e'} !important;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${props => props.isDarkMode ? '#4cc9f0' : '#3a0ca3'} !important;
    transform: translateY(-2px);
  }
`;

const Brand = styled(Navbar.Brand)`
  font-weight: 700;
  color: #4cc9f0 !important;
  text-shadow: ${props => props.isDarkMode
    ? '0 0 10px rgba(76, 201, 240, 0.5)'
    : '0 0 10px rgba(58, 12, 163, 0.5)'};
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  color: ${props => props.isDarkMode ? '#e0e1dd' : '#16213e'};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${props => props.isDarkMode ? '#4cc9f0' : '#3a0ca3'};
    transform: rotate(15deg);
  }
`;

const NavbarComp = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -70;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <StyledNavbar expand="lg" isDarkMode={isDarkMode}>
      <Container>
        <Brand href="#" isDarkMode={isDarkMode}>Victor Neil</Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {['sobre', 'habilidades', 'projetos', 'formacao', 'certificacoes', 'contato'].map((item) => (
              <NavLink key={item} onClick={() => scrollToSection(item)} isDarkMode={isDarkMode}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
        <ThemeToggle onClick={toggleTheme} isDarkMode={isDarkMode}>
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </ThemeToggle>
      </Container>
    </StyledNavbar>
  );
};

export default NavbarComp;
