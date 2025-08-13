import React from 'react';
import { Container, Typography, Grid, Paper, Box, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const EducationCard = styled(Paper)(({ theme, position }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  top: position === 'top' ? '-20px' : '20px',
  zIndex: position === 'top' ? 1 : 0,
  transition: 'all 0.3s ease-in-out',
  borderRadius: '15px',
  background: theme.palette.mode === 'dark'
    ? (position === 'top' 
      ? 'linear-gradient(135deg, #4B0082 0%, #8A2BE2 100%)'
      : 'linear-gradient(135deg, #1A2980 0%, #26D0CE 100%)')
    : (position === 'top' 
      ? 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)'
      : 'linear-gradient(135deg, #6A5ACD 0%, #00CED1 100%)'),
  color: theme.palette.common.white,
  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
  },
}));

const Divider = styled(Box)(({ theme }) => ({
  width: '6px',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(180deg, #4B0082 0%, #1A2980 50%, #26D0CE 100%)'
    : 'linear-gradient(180deg, #FF6B6B 0%, #6A5ACD 50%, #00CED1 100%)',
  height: '90%',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  borderRadius: '4px',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
  },
  '&::before': { 
    top: 0,
    background: theme.palette.mode === 'dark' ? '#4B0082' : '#FF6B6B',
  },
  '&::after': { 
    bottom: 0,
    background: theme.palette.mode === 'dark' ? '#26D0CE' : '#00CED1',
  },
}));

const IconWrapper = styled(Box)(({ theme, position }) => ({
  background: theme.palette.mode === 'dark'
    ? (position === 'top' ? '#8A2BE2' : '#1A2980')
    : (position === 'top' ? '#4ECDC4' : '#6A5ACD'),
  color: theme.palette.common.white,
  borderRadius: '50%',
  padding: theme.spacing(2),
  display: 'inline-flex',
  marginBottom: theme.spacing(2),
  boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
}));

const EducationComp = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} id="education">
      <Typography variant="h3" gutterBottom align="center" sx={{ 
        mb: 6, 
        fontWeight: 'bold', 
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #4B0082 0%, #1A2980 50%, #26D0CE 100%)'
          : 'linear-gradient(135deg, #FF6B6B 0%, #6A5ACD 50%, #00CED1 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        Formação Acadêmica
      </Typography>
      <Box sx={{ position: 'relative', mb: 8 }}>
        <Divider />
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <EducationCard elevation={6} position="top">
              <Box>
                <IconWrapper position="top">
                  <SchoolIcon fontSize="large" />
                </IconWrapper>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  Análise e Desenvolvimento de Sistemas
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Estácio
                </Typography>
                <Typography variant="body2">
                  Ensino superior completo
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Iniciado em outubro de 2021 e concluído em março de 2024.
                </Typography>
              </Box>
            </EducationCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <EducationCard elevation={6} position="bottom">
              <Box>
                <IconWrapper position="bottom">
                  <WorkIcon fontSize="large" />
                </IconWrapper>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  Pós-Graduação em Desenvolvimento Web Full Stack e Cloud Computing
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Concluído
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Iniciado em abril de 2024 e concluído em fevereiro de 2025.
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  O curso aborda frontend, back-end e integração com serviços em nuvem, com amplo conhecimento em tecnologias como HTML5, CSS3, JavaScript, Bootstrap, Node.js, Next.js, React, Express.js, Docker e Kubernetes.
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  A experiência prática inclui modelagem de banco de dados, criação de APIs RESTful e implantação de aplicações na nuvem. Desenvolvimento de habilidades em DevOps, integração contínua e entrega contínua (CI/CD) para automação de processos de desenvolvimento e implantação.
                </Typography>
              </Box>
            </EducationCard>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default EducationComp;
