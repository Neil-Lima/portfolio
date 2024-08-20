import React from 'react';
import { Container, Typography, Grid, Box, Paper, IconButton } from '@mui/material';
import { styled } from '@mui/system';
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
        <Grid container justifyContent="center">
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
                  victorneil08@gmail.com
                </Typography>
              </ContactInfo>
              <ContactInfo>
                <PhoneIcon sx={{ marginRight: 2 }} />
                <Typography color={theme.palette.mode === 'dark' ? '#E0E0E0' : 'inherit'}>
                  +55 (91) 98117-9825
                </Typography>
              </ContactInfo>
              <ContactInfo>
                <LocationOnIcon sx={{ marginRight: 2 }} />
                <Typography color={theme.palette.mode === 'dark' ? '#E0E0E0' : 'inherit'}>
                  Belém, PA - Brasil
                </Typography>
              </ContactInfo>
              <SocialIcons>
                <IconButton color={theme.palette.mode === 'dark' ? 'secondary' : 'primary'} 
                            href="https://www.linkedin.com/in/neil-lima-706606248" target="_blank">
                  <LinkedInIcon />
                </IconButton>
                <IconButton color={theme.palette.mode === 'dark' ? 'secondary' : 'primary'} 
                            href="https://github.com/Neil-Lima" target="_blank">
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
