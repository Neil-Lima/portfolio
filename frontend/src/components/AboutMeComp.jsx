import React from 'react';
import { Typography, Container, Grid, Box, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import victor from '../img/victor.jpg';
const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #121212 0%, #2C3E50 100%)'
    : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 250,
  height: 250,
  border: theme.palette.mode === 'dark'
    ? '4px solid #BB86FC'
    : `4px solid ${theme.palette.primary.main}`,
  boxShadow: theme.palette.mode === 'dark'
    ? '0 10px 20px rgba(187, 134, 252, 0.3)'
    : '0 10px 20px rgba(0, 0, 0, 0.1)',
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(255, 255, 255, 0.8)',
  borderRadius: '15px',
  padding: theme.spacing(4),
  boxShadow: theme.palette.mode === 'dark'
    ? '0 5px 15px rgba(0, 0, 0, 0.3)'
    : '0 5px 15px rgba(0, 0, 0, 0.08)',
  backdropFilter: 'blur(10px)',
}));

const AboutMeComp = () => {
  const theme = useTheme();

  return (
    <AboutSection>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box display="flex" justifyContent="center">
              <StyledAvatar alt="Victor Lima" src={victor} />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <ContentWrapper>
              <Typography variant="h3" gutterBottom sx={{ 
                fontWeight: 'bold', 
                color: theme.palette.mode === 'dark' ? '#BB86FC' : theme.palette.primary.main,
                marginBottom: 3,
                textShadow: theme.palette.mode === 'dark' ? '2px 2px 4px rgba(0,0,0,0.5)' : 'none',
              }}>
                Sobre Mim
              </Typography>
              <Typography variant="body1" paragraph sx={{ 
                fontSize: '1.1rem', 
                lineHeight: 1.6,
                color: theme.palette.mode === 'dark' ? '#E0E0E0' : 'inherit',
              }}>
                Olá, me chamo Victor Lima, tenho 31 anos, sou formado em Análise e Desenvolvimento de Sistemas e Pós graduando em Desenvolvimento Full Stack Web e Cloud Computing.
              </Typography>
              <Typography variant="body1" paragraph sx={{ 
                fontSize: '1.1rem', 
                lineHeight: 1.6,
                color: theme.palette.mode === 'dark' ? '#E0E0E0' : 'inherit',
              }}>
                Sou Desenvolvedor Fullstack, onde lido com aplicações Web em React.js, Next.js, Node.js, MongoDB, MySQL, etc. Busco futuramente ingressar no mundo do desenvolvimento de aplicações nativas.
              </Typography>
              <Typography variant="body1" sx={{ 
                fontSize: '1.1rem', 
                lineHeight: 1.6,
                color: theme.palette.mode === 'dark' ? '#E0E0E0' : 'inherit',
              }}>
                Sou entusiasta de tecnologia, gosto de ler entre as linhas da indústria de tecnologia e tentar entender as motivações por trás de decisões que podem parecer incríveis, irracionais ou puramente simples.
              </Typography>
            </ContentWrapper>
          </Grid>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default AboutMeComp;
