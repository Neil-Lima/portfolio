import React from 'react';
import { Container, Typography, Grid, TextField, Button, Box, Paper, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from '@mui/material/styles';

const ContactSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #0D0221 0%, #190835 50%, #2D1155 100%)'
    : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
}));

const ContactPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '20px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  background: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.23)' : theme.palette.primary.main,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : theme.palette.primary.dark,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.mode === 'dark' ? '#BB86FC' : theme.palette.primary.dark,
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'inherit',
  },
  '& .MuiInputBase-input': {
    color: theme.palette.mode === 'dark' ? '#E0E0E0' : 'inherit',
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1, 4),
  borderRadius: '25px',
  backgroundColor: theme.palette.mode === 'dark' ? '#BB86FC' : theme.palette.primary.main,
  color: theme.palette.mode === 'dark' ? '#000' : '#fff',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? '#9965F4' : theme.palette.primary.dark,
  },
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  color: theme.palette.mode === 'dark' ? '#BB86FC' : theme.palette.primary.main,
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(3),
}));

const ContactComp = () => {
  const theme = useTheme();

  return (
    <ContactSection id="contact">
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={6}>
            <ContactPaper elevation={3}>
              <Typography variant="h4" gutterBottom sx={{ 
                fontWeight: 'bold', 
                color: theme.palette.mode === 'dark' ? '#BB86FC' : 'primary.main', 
                marginBottom: 3 
              }}>
                Entre em Contato
              </Typography>
              <form>
                <StyledTextField fullWidth label="Nome" variant="outlined" />
                <StyledTextField fullWidth label="Email" variant="outlined" />
                <StyledTextField fullWidth label="Mensagem" variant="outlined" multiline rows={4} />
                <SubmitButton variant="contained" endIcon={<SendIcon />}>
                  Enviar Mensagem
                </SubmitButton>
              </form>
            </ContactPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactPaper elevation={3}>
              <Typography variant="h4" gutterBottom sx={{ 
                fontWeight: 'bold', 
                color: theme.palette.mode === 'dark' ? '#BB86FC' : 'primary.main', 
                marginBottom: 3 
              }}>
                Informações de Contato
              </Typography>
              <ContactInfo>
                <EmailIcon sx={{ marginRight: 2 }} />
                <Typography color={theme.palette.mode === 'dark' ? '#E0E0E0' : 'inherit'}>
                  email@exemplo.com
                </Typography>
              </ContactInfo>
              <ContactInfo>
                <PhoneIcon sx={{ marginRight: 2 }} />
                <Typography color={theme.palette.mode === 'dark' ? '#E0E0E0' : 'inherit'}>
                  +55 (11) 1234-5678
                </Typography>
              </ContactInfo>
              <ContactInfo>
                <LocationOnIcon sx={{ marginRight: 2 }} />
                <Typography color={theme.palette.mode === 'dark' ? '#E0E0E0' : 'inherit'}>
                  São Paulo, SP - Brasil
                </Typography>
              </ContactInfo>
              <SocialIcons>
                <IconButton color={theme.palette.mode === 'dark' ? 'secondary' : 'primary'} 
                            href="https://linkedin.com/in/yourprofile" target="_blank">
                  <LinkedInIcon />
                </IconButton>
                <IconButton color={theme.palette.mode === 'dark' ? 'secondary' : 'primary'} 
                            href="https://github.com/yourusername" target="_blank">
                  <GitHubIcon />
                </IconButton>
              </SocialIcons>
            </ContactPaper>
          </Grid>
        </Grid>
      </Container>
    </ContactSection>
  );
};

export default ContactComp;
