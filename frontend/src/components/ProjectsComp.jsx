import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Box, Chip, Modal, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';

// Importing images
import jogoVelhaImage from '../img/jogo_da_velha.png';
import financasImage from '../img/financas.png';
import cassinoImage from '../img/cassino.png';
import calculadoraImage from '../img/calculadora.png';
import nexusImage from '../img/nexus.png';
import tabuadaImage from '../img/tabuada.png';
import urnaImage from '../img/urna.png';

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
    : '1px solid rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  cursor: 'pointer',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 15px 30px rgba(0,0,0,0.4), 0 5px 15px rgba(0,0,0,0.3)'
    : '0 15px 30px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.07)',
  '&:hover': {
    transform: 'translateY(-10px) scale(1.02)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 20px 40px rgba(0,0,0,0.5), 0 10px 20px rgba(0,0,0,0.4)'
      : '0 20px 40px rgba(0,0,0,0.2), 0 10px 20px rgba(0,0,0,0.1)',
  },
}));

const ProjectMedia = styled(CardMedia)(({ theme }) => ({
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
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))'
      : 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.8))',
  },
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  bottom: 20,
  left: 20,
  color: theme.palette.mode === 'dark' ? 'white' : 'black',
  zIndex: 1,
  fontWeight: 'bold',
  textShadow: theme.palette.mode === 'dark'
    ? '2px 2px 4px rgba(0,0,0,0.5)'
    : '2px 2px 4px rgba(255,255,255,0.5)',
}));

const TechChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)',
  color: theme.palette.mode === 'dark'
    ? theme.palette.primary.light
    : theme.palette.primary.dark,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '95%',
  maxWidth: 1200,
  maxHeight: '90vh',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'
    : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
  borderRadius: 16,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

const ModalImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '300px',
  objectFit: 'cover',
  [theme.breakpoints.up('md')]: {
    width: '50%',
    height: 'auto',
  },
}));

const ModalInfo = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  padding: theme.spacing(4),
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    width: '50%',
    maxHeight: '90vh',
  },
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
    title: 'Nexus API',
    description: 'Uma API social completa com funcionalidades avançadas e interface de usuário moderna.',
    image: nexusImage,
    github: 'https://github.com/Neil-Lima/nexusapi',
    demo: 'https://nexusapisocial.netlify.app/',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Socket.io', 'Material-UI'],
  },
  {
    title: 'Finanças Pessoais',
    description: 'Aplicativo completo de gerenciamento financeiro pessoal com recursos avançados de controle de despesas, orçamentos e investimentos.',
    image: financasImage,
    github: 'https://github.com/Neil-Lima/financas_app',
    demo: 'https://financasappproject.netlify.app/',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Material-UI'],
  },
  {
    title: 'Urna Eletrônica',
    description: 'Uma simulação interativa de urna eletrônica desenvolvida com Next.js, oferecendo uma experiência realista de votação.',
    image: urnaImage,
    github: 'https://github.com/Neil-Lima/urna_eletronica',
    demo: 'https://urnaeletronicaapp.netlify.app/',
    technologies: ['Next.js', 'React', 'TypeScript', 'Bootstrap'],
  },
  {
    title: 'Casino Web',
    description: 'Plataforma de cassino online com jogos interativos, sistema de apostas e design atraente.',
    image: cassinoImage,
    github: 'https://github.com/Neil-Lima/cassino',
    demo: 'https://cassinowebapp.netlify.app/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
  },
 
  {
    title: 'Jogo da Velha',
    description: 'Um jogo da velha interativo e responsivo com interface moderna, modos claro/escuro e placar personalizado.',
    image: jogoVelhaImage,
    github: 'https://github.com/Neil-Lima/Jogo_da_velha',
    demo: 'https://jogodavelhaapp.netlify.app/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
 
  {
    title: 'Calculadora',
    description: 'Uma calculadora interativa com design moderno e funcionalidades avançadas.',
    image: calculadoraImage,
    github: 'https://github.com/yourusername/calculadora',
    demo: 'https://minicalculadoraapp.netlify.app/',
    technologies: ['React', 'TypeScript', 'Styled Components'],
  },
  {
    title: 'Tabuada Interativa',
    description: 'Uma aplicação interativa para praticar e aprender tabuadas de forma divertida e eficiente.',
    image: tabuadaImage,
    github: 'https://github.com/yourusername/tabuada-interativa',
    demo: 'https://tabuadaapp.netlify.app/',
    technologies: ['React', 'TypeScript', 'Redux', 'Styled Components'],
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
  'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'JWT': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Material-UI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
  'jQuery': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Styled Components': 'https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png',
  'Socket.io': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
  'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
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
          Projetos
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
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
                    {selectedProject.title === 'Finanças Pessoais' ? (
                      <>
                        Este aplicativo de Finanças Pessoais é uma solução completa para gerenciamento financeiro, oferecendo uma ampla gama de funcionalidades para ajudar os usuários a controlar suas finanças de forma eficiente. Desenvolvido com tecnologias modernas, o aplicativo inclui:
                        <ul>
                          <li>Autenticação segura com JWT</li>
                          <li>Gerenciamento de despesas e receitas</li>
                          <li>Criação e acompanhamento de orçamentos</li>
                          <li>Controle de contas e saldos</li>
                          <li>Acompanhamento de investimentos</li>
                          <li>Geração de relatórios financeiros</li>
                          <li>Interface responsiva e intuitiva com Material-UI</li>
                          <li>Backend robusto com Node.js, Express e MongoDB</li>
                        </ul>
                        Este projeto demonstra habilidades avançadas em desenvolvimento full-stack, incluindo arquitetura de software, segurança e design de interfaces de usuário.
                      </>
                    ) : selectedProject.title === 'Jogo da Velha' ? (
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
                    ) : selectedProject.title === 'Casino Web' ? (
                      <>
                        Esta plataforma de Casino Web oferece uma experiência de jogo envolvente e realista. Desenvolvida com tecnologias web modernas, a aplicação inclui:
                        <ul>
                          <li>Variedade de jogos de cassino, incluindo roleta, blackjack e caça-níqueis</li>
                          <li>Sistema de apostas interativo</li>
                          <li>Design responsivo para jogar em qualquer dispositivo</li>
                          <li>Animações suaves e efeitos sonoros para uma experiência imersiva</li>
                          <li>Sistema de login e gerenciamento de saldo do usuário</li>
                          <li>Interface intuitiva e atraente</li>
                        </ul>
                        Este projeto demonstra habilidades em desenvolvimento front-end, design de UI/UX e implementação de lógica de jogos complexa usando JavaScript e jQuery.
                      </>
                    ) : selectedProject.title === 'Calculadora' ? (
                      <>
                        Esta Calculadora moderna e interativa oferece uma experiência de usuário aprimorada com design elegante e funcionalidades avançadas. Desenvolvida com React e TypeScript, a aplicação apresenta:
                        <ul>
                          <li>Interface limpa e intuitiva com design responsivo</li>
                          <li>Operações matemáticas básicas e avançadas</li>
                          <li>Histórico de cálculos para fácil referência</li>
                          <li>Animações suaves para melhor feedback visual</li>
                          <li>Modo de tema claro/escuro para conforto visual</li>
                          <li>Código bem estruturado e tipado com TypeScript</li>
                          <li>Estilização moderna usando Styled Components</li>
                        </ul>
                        Este projeto demonstra habilidades em desenvolvimento front-end com React, uso eficiente de TypeScript e criação de interfaces de usuário atraentes e funcionais.
                      </>
                    ) : selectedProject.title === 'Nexus API' ? (
                      <>
                        A Nexus API é uma plataforma social completa que oferece uma ampla gama de funcionalidades para criar uma experiência de rede social rica e interativa. Desenvolvida com tecnologias modernas, a aplicação inclui:
                        <ul>
                          <li>Autenticação segura de usuários com JWT</li>
                          <li>Perfis de usuário personalizáveis</li>
                          <li>Sistema de postagens com suporte a mídia</li>
                          <li>Funcionalidade de comentários e reações</li>
                          <li>Sistema de amizades e conexões</li>
                          <li>Mensagens em tempo real usando Socket.io</li>
                          <li>Feed de notícias personalizado</li>
                          <li>Notificações em tempo real</li>
                          <li>Pesquisa avançada de usuários e conteúdo</li>
                          <li>Interface responsiva e moderna com Material-UI</li>
                          <li>Backend robusto com Node.js, Express e MongoDB</li>
                        </ul>
                        Este projeto demonstra habilidades avançadas em desenvolvimento full-stack, incluindo arquitetura de sistemas distribuídos, comunicação em tempo real e design de APIs RESTful.
                        <p><strong>Observação:</strong> O backend desta aplicação ainda está em desenvolvimento e em constante evolução para adicionar novas funcionalidades e melhorar o desempenho.</p>
                      </>
                    ) : selectedProject.title === 'Tabuada Interativa' ? (
                      <>
                        A Tabuada Interativa é uma aplicação educacional projetada para tornar o aprendizado e a prática da tabuada divertidos e eficazes. Desenvolvida com React, TypeScript e Redux, a aplicação oferece:
                        <ul>
                          <li>Interface interativa e amigável para crianças e adultos</li>
                          <li>Modos de prática e teste para diferentes níveis de habilidade</li>
                          <li>Acompanhamento de progresso e estatísticas de desempenho</li>
                          <li>Animações e efeitos sonoros para feedback imediato</li>
                          <li>Design responsivo para uso em dispositivos móveis e desktops</li>
                          <li>Gerenciamento de estado eficiente com Redux</li>
                          <li>Código bem estruturado e tipado com TypeScript</li>
                          <li>Estilização moderna e atraente com Styled Components</li>
                        </ul>
                        Este projeto demonstra habilidades em desenvolvimento front-end com React, gerenciamento de estado com Redux, e criação de aplicações educacionais interativas.
                      </>
                    ) : selectedProject.title === 'Urna Eletrônica' ? (
                      <>
                        A Urna Eletrônica é uma aplicação web que simula o processo de votação eletrônica, desenvolvida com Next.js e TypeScript. Principais características incluem:
                        <ul>
                          <li>Interface realista de urna eletrônica</li>
                          <li>Simulação completa do processo de votação</li>
                          <li>Lista de candidatos com fotos e informações</li>
                          <li>Validação de votos e confirmação</li>
                          <li>Renderização do lado do servidor (SSR) para melhor performance</li>
                          <li>Design responsivo utilizando Bootstrap</li>
                          <li>Gerenciamento de estado eficiente</li>
                          <li>Código bem estruturado e tipado com TypeScript</li>
                        </ul>
                        Este projeto demonstra habilidades em desenvolvimento front-end com Next.js, TypeScript, e criação de aplicações interativas e educativas.
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
  
