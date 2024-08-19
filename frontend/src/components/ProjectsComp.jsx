import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Box, Chip, Modal, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';

// Importando as imagens
import jogoVelhaImage from '../img/jogo_da_velha.png';


const ProjectSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(45deg, #1A2980 0%, #26D0CE 100%)'
    : 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
  clipPath: 'polygon(0 5%, 100% 0%, 100% 95%, 0% 100%)',
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '20px',
  overflow: 'hidden',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #2c3e50, #34495e)'
    : 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
  border: theme.palette.mode === 'dark'
    ? '1px solid rgba(255, 255, 255, 0.1)'
    : '1px solid rgba(255, 255, 255, 0.2)',
  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
  },
}));

const ProjectMedia = styled(CardMedia)({
  height: 250,
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7))',
  },
});

const ProjectTitle = styled(Typography)({
  position: 'absolute',
  bottom: 20,
  left: 20,
  color: 'white',
  zIndex: 1,
  fontWeight: 'bold',
  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
});

const TechChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(255, 255, 255, 0.2)',
  color: theme.palette.mode === 'dark'
    ? theme.palette.primary.light
    : 'white',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 1000,
  height: '80%',
  maxHeight: 600,
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'
    : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
  borderRadius: 16,
  overflow: 'hidden',
  display: 'flex',
}));

const ModalImage = styled('img')({
  width: '50%',
  height: '100%',
  objectFit: 'cover',
});

const ModalInfo = styled(Box)(({ theme }) => ({
  width: '50%',
  height: '100%',
  padding: theme.spacing(4),
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
}));

const TechIcon = styled('img')({
  width: 40,
  height: 40,
  margin: 8,
});

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 8,
  top: 8,
  color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[700],
  zIndex: 1,
}));

const projects = [
  {
    title: 'Jogo da Velha',
    description: 'Um jogo da velha interativo e responsivo com interface moderna, modos claro/escuro e placar personalizado.',
    image: jogoVelhaImage,
    github: 'https://github.com/yourusername/jogo-da-velha',
    demo: 'https://jogodavelhaapp.netlify.app/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
 
];

const techIcons = {
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  'Prisma': 'https://www.vectorlogo.zone/logos/prisma/prisma-icon.svg',
  'WebSocket': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
};

const ProjectsComp = () => {
  const theme = useTheme();
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <ProjectSection id="projects">
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom sx={{ 
          fontWeight: 'bold', 
          color: 'white', 
          marginBottom: 8,
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        }}>
          Projetos Inovadores
        </Typography>
        <Grid container spacing={6}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <ProjectCard elevation={0} onClick={() => handleOpenModal(project)}>
                <ProjectMedia image={project.image} title={project.title}>
                  <ProjectTitle variant="h5">{project.title}</ProjectTitle>
                </ProjectMedia>
                <CardContent>
                  <Typography variant="body2" color={theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'textSecondary'} sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2 }}>
                    {project.technologies.map((tech, i) => (
                      <TechChip key={i} label={tech} size="small" />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                  <Button variant="contained" color="primary" startIcon={<GitHubIcon />} href={project.github} target="_blank">
                    GitHub
                  </Button>
                  <Button variant="outlined" color="secondary" endIcon={<LaunchIcon />} href={project.demo} target="_blank">
                    Demo
                  </Button>
                </CardActions>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
      >
        <ModalContent>
          <CloseButton onClick={handleCloseModal}>
            <CloseIcon />
          </CloseButton>
          {selectedProject && (
            <>
              <ModalImage src={selectedProject.image} alt={selectedProject.title} />
              <ModalInfo>
                <Typography id="project-modal-title" variant="h4" component="h2" sx={{ mb: 2, color: theme.palette.mode === 'dark' ? 'white' : 'black' }}>
                  {selectedProject.title}
                </Typography>
                <Typography id="project-modal-description" sx={{ mb: 3, color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)' }}>
                  {selectedProject.title === 'Jogo da Velha' ? (
                    <>
                      Este Jogo da Velha moderno oferece uma experiência de jogo clássica com um toque contemporâneo. Desenvolvido com HTML, CSS e JavaScript, o jogo apresenta uma interface responsiva e atraente, utilizando Bootstrap para um design limpo e adaptável. Características incluem:
                      <ul>
                        <li>Modo claro/escuro para conforto visual</li>
                        <li>Placar personalizado para acompanhar vitórias</li>
                        <li>Animações suaves para uma experiência interativa</li>
                        <li>Design responsivo para jogar em qualquer dispositivo</li>
                      </ul>
                      O projeto demonstra habilidades em desenvolvimento front-end e design de UI/UX, criando uma versão envolvente de um jogo atemporal.
                    </>
                  ) : (
                    selectedProject.description
                  )}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mb: 3 }}>
                  {selectedProject.technologies.map((tech, i) => (
                    <TechIcon key={i} src={techIcons[tech]} alt={tech} title={tech} />
                  ))}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 'auto' }}>
                  <Button variant="contained" color="primary" startIcon={<GitHubIcon />} href={selectedProject.github} target="_blank">
                    GitHub
                  </Button>
                  <Button variant="outlined" color="secondary" endIcon={<LaunchIcon />} href={selectedProject.demo} target="_blank">
                    Demo
                  </Button>
                </Box>
              </ModalInfo>
            </>
          )}
        </ModalContent>
      </Modal>
    </ProjectSection>
  );
};

export default ProjectsComp;
