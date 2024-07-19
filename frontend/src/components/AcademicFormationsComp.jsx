import React from 'react';
import { useTheme } from '../context/ThemeContext';

const AcademicFormationsComp = () => {
  const { isDarkMode } = useTheme();

  const sectionTitleStyle = {
    position: 'relative',
    display: 'inline-block',
    marginBottom: '30px',
    fontWeight: 700,
    color: '#4cc9f0',
  };

  const timelineStyle = {
    position: 'relative',
    padding: '50px 0',
  };

  const timelineBeforeStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '50%',
    width: '2px',
    height: '100%',
    background: 'linear-gradient(#3a0ca3, #4cc9f0)',
    transform: 'translateX(-50%)',
  };

  const educationItemStyle = {
    position: 'relative',
    marginBottom: '50px',
    color: isDarkMode ? '#e0e1dd' : '#16213e',
  };

  const educationItemBeforeStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    width: '20px',
    height: '20px',
    backgroundColor: '#f72585',
    borderRadius: '50%',
  };

  const educations = [
    {
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "Estácio",
      period: "Outubro de 2021 - Março de 2024",
      description: "Durante minha graduação, adquiri uma base sólida em programação, banco de dados, engenharia de software e desenvolvimento web. Participei de diversos projetos práticos que me permitiram aplicar os conhecimentos teóricos em cenários reais."
    },
    {
      title: "Pós-Graduação em Desenvolvimento Web Full Stack e Cloud Computing",
      institution: "Em andamento",
      period: "Iniciado em abril de 2024, com previsão de conclusão em 6 a 18 meses.",
      description: "Esta pós-graduação está ampliando meus conhecimentos em desenvolvimento web full stack, incluindo tecnologias avançadas de frontend e backend, além de introduzir conceitos e práticas de computação em nuvem."
    }
  ];

  return (
    <section id="formacao" className="mb-5 fade-in">
      <h2 style={sectionTitleStyle}>Formação Acadêmica</h2>
      <div style={timelineStyle}>
        <div style={timelineBeforeStyle}></div>
        {educations.map((edu, index) => (
          <div key={index} style={{...educationItemStyle, [index % 2 === 0 ? 'marginRight' : 'marginLeft']: '50%', textAlign: index % 2 === 0 ? 'right' : 'left'}}>
            <div style={{...educationItemBeforeStyle, [index % 2 === 0 ? 'right' : 'left']: '-60px'}}></div>
            <h5>{edu.title}</h5>
            <h6>{edu.institution}</h6>
            <p>{edu.period}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicFormationsComp;
