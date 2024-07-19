import React from 'react';
import { useTheme } from '../context/ThemeContext';
import NavbarComp from '../components/NavbarComp';
import HeroComp from '../components/HeroComp';
import AboutComp from '../components/AboutComp';
import SkillsComp from '../components/SkillsComp';
import ProjectsComp from '../components/ProjectsComp';
import AcademicFormationsComp from '../components/AcademicFormationsComp';
import CertificationComp from '../components/CertificationComp';
import FormContactComp from '../components/FormContactComp';
import FooterComp from '../components/FooterComp';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <HeroComp /><br />
      <main className="container my-5">
        <AboutComp /><br />
        <SkillsComp /><br />
        <ProjectsComp /><br />
        <AcademicFormationsComp /><br />
        <CertificationComp /><br />
        <FormContactComp /><br />
      </main>
      <FooterComp /><br />
    </div>
  );
};

export default HomePage;
