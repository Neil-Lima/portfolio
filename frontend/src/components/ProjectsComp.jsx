import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '../context/ThemeContext';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: perspective(1000px) rotateX(-10deg) translateY(-50px);
  }
  to {
    opacity: 1;
    transform: perspective(1000px) rotateX(0) translateY(0);
  }
`;

const StyledModal = styled(Modal)`
  .modal-content {
    animation: ${fadeIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: none;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    background: ${props => props.isDarkMode ? 
      'linear-gradient(145deg, #1e2a4a, #2a3b5d)' : 
      'linear-gradient(145deg, #f0f1f3, #ffffff)'};
  }

  .modal-header, .modal-body {
    border: none;
    background: transparent;
  }

  .modal-header {
    padding: 20px 30px;
  }

  .modal-body {
    padding: 30px;
  }

  .modal-title, .modal-body {
    color: ${props => props.isDarkMode ? '#ffffff' : '#16213e'};
  }

  h5 {
    color: ${props => props.isDarkMode ? '#4cc9f0' : '#3a0ca3'};
  }
`;

const ProjectsComp = () => {
  const { isDarkMode } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const sectionTitleStyle = {
    position: 'relative',
    display: 'inline-block',
    marginBottom: '30px',
    fontWeight: 700,
    color: '#4cc9f0',
  };

  const cardStyle = {
    transition: 'all 0.3s ease',
    background: isDarkMode 
      ? 'linear-gradient(145deg, #1e2a4a, #1a1b26)'
      : 'linear-gradient(145deg, #f0f1f3, #e0e1dd)',
    boxShadow: isDarkMode
      ? '5px 5px 10px rgba(0,0,0,0.3), -5px -5px 10px rgba(255,255,255,0.05)'
      : '5px 5px 10px rgba(0,0,0,0.1), -5px -5px 10px rgba(255,255,255,0.5)',
    color: isDarkMode ? '#ffffff' : '#16213e',
  };

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Uma plataforma de comércio eletrônico completa com carrinho de compras, sistema de pagamento e painel de administração.",
      technologies: "React, Node.js, MongoDB",
      image: "/path-to-ecommerce-image.jpg",
      github: "https://github.com/yourusername/ecommerce-project",
      liveDemo: "https://your-ecommerce-demo.com"
    },
    {
      title: "Task Management App",
      description: "Um aplicativo de gerenciamento de tarefas com recursos de colaboração em tempo real e integração de calendário.",
      technologies: "React Native, Firebase",
      image: "/path-to-taskmanager-image.jpg",
      github: "https://github.com/yourusername/task-manager-app",
      liveDemo: "https://your-taskmanager-demo.com"
    },
    {
      title: "Portfolio Website",
      description: "Um site de portfólio responsivo e interativo para mostrar projetos e habilidades.",
      technologies: "React, Bootstrap",
      image: "/path-to-portfolio-image.jpg",
      github: "https://github.com/yourusername/portfolio-website",
      liveDemo: "https://your-portfolio-demo.com"
    }
  ];

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <section id="projetos" className="mb-5 fade-in">
      <h2 style={sectionTitleStyle}>Projetos</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card style={cardStyle}>
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Button variant="primary" className="me-2" onClick={() => handleShowModal(project)}>
                  Ver Detalhes
                </Button>              
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <StyledModal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        size="lg" 
        centered
        isDarkMode={isDarkMode}
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <Image src={selectedProject?.image} fluid style={{borderRadius: '10px'}} />
            </Col>
            <Col md={6}>
              <h5>Descrição</h5>
              <p>{selectedProject?.description}</p>
              <h5>Tecnologias Utilizadas</h5>
              <p>{selectedProject?.technologies}</p>
              <Button variant={isDarkMode ? "outline-light" : "primary"} className="me-2" href={selectedProject?.github} target="_blank">
                <FontAwesomeIcon icon={faGithub} /> Repositório
              </Button>
              <Button variant={isDarkMode ? "outline-success" : "success"} href={selectedProject?.liveDemo} target="_blank">
                <FontAwesomeIcon icon={faChrome} /> Ver Demo
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </StyledModal>
    </section>
  );
};

export default ProjectsComp;
