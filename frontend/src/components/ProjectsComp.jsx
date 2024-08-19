import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Box, Chip } from '@mui/material';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { useTheme } from '@mui/material/styles';

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
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: theme.palette.mode === 'dark'
    ? '1px solid rgba(255, 255, 255, 0.1)'
    : '1px solid rgba(255, 255, 255, 0.2)',
  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
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
  backdropFilter: 'blur(5px)',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const projects = [
  {
    title: 'Nexus: E-commerce Revolution',
    description: 'Um ecossistema de e-commerce inovador com IA integrada para recomendações personalizadas e gestão de inventário em tempo real.',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    github: 'https://github.com/yourusername/nexus-ecommerce',
    demo: 'https://nexus-demo.com',
    technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow'],
  },
  {
    title: 'Quantum Task',
    description: 'Plataforma de gerenciamento de tarefas com interface futurista, colaboração em tempo real e integração com IA para priorização inteligente.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    github: 'https://github.com/yourusername/quantum-task',
    demo: 'https://quantum-task-demo.com',
    technologies: ['Vue.js', 'GraphQL', 'Prisma', 'WebSocket'],
  },
  {
    title: 'ClimaSense AI',
    description: 'Dashboard meteorológico avançado com previsões hiperpersonalizadas usando aprendizado de máquina e visualizações de dados imersivas.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    github: 'https://github.com/yourusername/climasense-ai',
    demo: 'https://climasense-demo.com',
    technologies: ['React', 'Python', 'TensorFlow', 'D3.js'],
  },
];

const ProjectsComp = () => {
  const theme = useTheme();

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
              <ProjectCard elevation={0}>
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
    </ProjectSection>
  );
};

export default ProjectsComp;
