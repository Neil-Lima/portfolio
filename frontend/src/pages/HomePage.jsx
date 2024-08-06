import React, { Suspense, lazy } from 'react';
import { useTheme } from '../context/ThemeContext';
import NavbarComp from '../components/NavbarComp';
import FooterComp from '../components/FooterComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const HeroComp = lazy(() => import('../components/HeroComp'));
const AboutComp = lazy(() => import('../components/AboutComp'));
const SkillsComp = lazy(() => import('../components/SkillsComp'));
const ProjectsComp = lazy(() => import('../components/ProjectsComp'));
const AcademicFormationsComp = lazy(() => import('../components/AcademicFormationsComp'));
const CertificationComp = lazy(() => import('../components/CertificationComp'));
const FormContactComp = lazy(() => import('../components/FormContactComp'));

const PageWrapper = styled.div`
  background-color: ${props => props.isDarkMode ? '#16213e' : '#f8f9fa'};
  color: ${props => props.isDarkMode ? '#e0e1dd' : '#16213e'};
  min-height: 100vh;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const MainContent = styled.main`
  padding: 5vh 0;
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &::after {
    content: "";
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid ${props => props.isDarkMode ? '#4cc9f0' : '#3a0ca3'};
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const HomePage = () => {
  const { isDarkMode } = useTheme();

  return (
    <PageWrapper isDarkMode={isDarkMode}>
      <NavbarComp />
      <Suspense fallback={<LoadingSpinner isDarkMode={isDarkMode} />}>
        <HeroComp />
        <MainContent className="container">
          <AboutComp />
          <SkillsComp />
          <ProjectsComp />
          <AcademicFormationsComp />
          <CertificationComp />
          <FormContactComp />
        </MainContent>
      </Suspense>
      <FooterComp />
    </PageWrapper>
  );
};

export default HomePage;
