import React from 'react';
import { createGlobalStyle } from 'styled-components';
import NavbarComp from '../components/NavbarComp';
import HeroComp from '../components/HeroComp';
import SkillsComp from '../components/SkillsComp';
import ProjectsComp from '../components/ProjectsComp';
import EducationComp from '../components/EducationComp';
import CertificationsComp from '../components/CertificationsComp';
import ContactComp from '../components/ContactComp';
import FooterComp from '../components/FooterComp';
import AboutMeComp from '../components/AboutMeComp';
import { useTheme } from '@mui/material/styles';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${props => props.theme.palette.mode === 'dark' 
      ? 'linear-gradient(135deg, #0D0221 0%, #190835 50%, #2D1155 100%)' 
      : props.theme.palette.background.default};
    color: ${props => props.theme.palette.mode === 'dark' ? '#E0E0E0' : props.theme.palette.text.primary};
    transition: background 0.3s ease, color 0.3s ease;
    background-attachment: fixed;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.palette.mode === 'dark' ? '#0D0221' : '#F1F1F1'};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.palette.mode === 'dark' ? '#4A0E78' : '#888'};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.palette.mode === 'dark' ? '#6A1B9A' : '#555'};
  }
`;

const HomePage = () => {
  const theme = useTheme();

  return (
    <>
      <GlobalStyle theme={theme} />
      <NavbarComp />
      <HeroComp />
      <AboutMeComp />
      <SkillsComp />
      <ProjectsComp />
      <EducationComp />
      <CertificationsComp />
      <ContactComp />
      <FooterComp />
    </>
  );
};

export default HomePage;
