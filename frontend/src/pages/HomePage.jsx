import React, { Suspense, lazy } from 'react';
import { useTheme } from '../context/ThemeContext';
import NavbarComp from '../components/NavbarComp';
import FooterComp from '../components/FooterComp';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroComp = lazy(() => import('../components/HeroComp'));
const AboutComp = lazy(() => import('../components/AboutComp'));
const SkillsComp = lazy(() => import('../components/SkillsComp'));
const ProjectsComp = lazy(() => import('../components/ProjectsComp'));
const AcademicFormationsComp = lazy(() => import('../components/AcademicFormationsComp'));
const CertificationComp = lazy(() => import('../components/CertificationComp'));
const FormContactComp = lazy(() => import('../components/FormContactComp'));

const LoadingSpinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div style={{ border: '4px solid #f3f3f3', borderTop: '4px solid #3498db', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite' }} />
  </div>
);

const HomePage = () => {
  const { isDarkMode } = useTheme();

  return (
    <div style={{
      backgroundColor: isDarkMode ? '#16213e' : '#f8f9fa',
      color: isDarkMode ? '#e0e1dd' : '#16213e',
      minHeight: '100vh',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      <NavbarComp />
      <Suspense fallback={<LoadingSpinner />}>
        <HeroComp />
        <main className="container my-5">
          <AboutComp />
          <SkillsComp />
          <ProjectsComp />
          <AcademicFormationsComp />
          <CertificationComp />
          <FormContactComp />
        </main>
      </Suspense>
      <FooterComp />
    </div>
  );
};

export default HomePage;
