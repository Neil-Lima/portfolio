import React from 'react';
import { Box, Container, Typography, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/system';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';

const FooterWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(to bottom, #1A2027, #0D1117)'
    : '#f5f5f5',
  color: theme.palette.mode === 'dark' ? '#E0E0E0' : '#333',
  padding: theme.spacing(6, 0),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #FF6B6B, #4ECDC4, #45B7D1)',
  },
}));

const ContentWrapper = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(3),
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#BB86FC' : '#6A5ACD',
  margin: theme.spacing(0, 1.5),
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#4ECDC4',
    transform: 'translateY(-3px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 4px 8px rgba(187, 134, 252, 0.3)'
      : '0 4px 8px rgba(106, 90, 205, 0.3)',
  },
}));

const FooterDivider = styled(Divider)(({ theme }) => ({
  width: '60%',
  margin: theme.spacing(3, 'auto'),
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.12), transparent)'
    : 'rgba(0, 0, 0, 0.12)',
}));

const FooterComp = () => {
  const theme = useTheme();

  return (
    <FooterWrapper>
      <ContentWrapper maxWidth="lg">
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: theme.palette.mode === 'dark' ? '#BB86FC' : '#6A5ACD' }}>
          João Silva
        </Typography>
        <Typography variant="body2" color={theme.palette.mode === 'dark' ? '#A0A0A0' : 'textSecondary'} align="center" sx={{ maxWidth: '600px', mb: 3 }}>
          Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais incríveis.
        </Typography>
        <SocialIcons>
          <SocialIcon href="#" aria-label="GitHub">
            <FaGithub size={24} />
          </SocialIcon>
          <SocialIcon href="#" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </SocialIcon>
          <SocialIcon href="#" aria-label="Email">
            <FaEnvelope size={24} />
          </SocialIcon>
        </SocialIcons>
        <FooterDivider />
        <Typography variant="body2" color={theme.palette.mode === 'dark' ? '#808080' : 'textSecondary'}>
          &copy; 2023 João Silva. Todos os direitos reservados.
        </Typography>
      </ContentWrapper>
    </FooterWrapper>
  );
};

export default FooterComp;
