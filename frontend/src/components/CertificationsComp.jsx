import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useTheme } from '@mui/material/styles';

const CertificateCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #2c3e50 0%, #1a2634 100%)'
    : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  borderRadius: '15px',
  border: theme.palette.mode === 'dark'
    ? '2px solid #3498db'
    : '2px solid #gold',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 10px 20px rgba(0,0,0,0.3), 0 6px 6px rgba(0,0,0,0.4)'
    : '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 15px 30px rgba(0,0,0,0.4), 0 10px 10px rgba(0,0,0,0.5)'
      : '0 15px 30px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  },
}));

const CertificateIcon = styled(VerifiedIcon)(({ theme }) => ({
  fontSize: '48px',
  color: theme.palette.mode === 'dark' ? '#3498db' : theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const certifications = [
  {
    title: '• Programação de algoritmos escaláveis',
    issuer: 'Estácio',
    date: '26/04/2024',
  },
  {
    title: 'Programação de sistemas de informação',
    issuer: 'Estácio',
    date: '26/04/2024',
  },
  {
    title: 'Programação para dispositivos móveis',
    issuer: 'Estácio',
    date: '26/04/2024',
  },
  {
    title: 'Programação para internet',
    issuer: 'Estácio',
    date: '26/04/2024',
  },
];

const CertificationsComp = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ 
      py: 8, 
      background: theme.palette.mode === 'dark' 
        ? 'linear-gradient(135deg, #1a2634 0%, #2c3e50 100%)' 
        : 'inherit'
    }} id="certifications">
      <Typography variant="h3" gutterBottom align="center" sx={{ 
        mb: 6, 
        fontWeight: 'bold', 
        color: theme.palette.mode === 'dark' ? '#3498db' : theme.palette.primary.main,
        textShadow: theme.palette.mode === 'dark'
          ? '2px 2px 4px rgba(0,0,0,0.5)'
          : '2px 2px 4px rgba(0,0,0,0.1)',
      }}>
        Certificações
      </Typography>
      <Grid container spacing={4}>
        {certifications.map((cert, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <CertificateCard elevation={3}>
              <CertificateIcon />
              <Typography variant="h6" gutterBottom sx={{ 
                fontWeight: 'bold', 
                color: theme.palette.mode === 'dark' ? '#ffffff' : theme.palette.primary.main 
              }}>
                {cert.title}
              </Typography>
              <Typography variant="subtitle1" gutterBottom sx={{
                color: theme.palette.mode === 'dark' ? '#ecf0f1' : 'inherit'
              }}>
                {cert.issuer}
              </Typography>
              <Typography variant="body2" sx={{
                color: theme.palette.mode === 'dark' ? '#bdc3c7' : 'textSecondary'
              }}>
                {cert.date}
              </Typography>
              <Box mt={2}>
                <Typography variant="body2" sx={{ 
                  fontStyle: 'italic', 
                  color: theme.palette.mode === 'dark' ? '#95a5a6' : 'text.secondary' 
                }}>
                </Typography>
              </Box>
            </CertificateCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CertificationsComp;
