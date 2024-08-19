import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Box, Switch, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuIcon from '@mui/icons-material/Menu';
import { useThemeContext } from '../context/ThemeContext';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.mode === 'dark' 
    ? 'linear-gradient(90deg, #1A2980 0%, #26D0CE 100%)' 
    : 'linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)',
  boxShadow: 'none',
  transition: 'all 0.3s ease-in-out',
}));

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
});

const NavButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  marginLeft: '1rem',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '0',
    height: '2px',
    bottom: 0,
    left: '50%',
    background: theme.palette.secondary.main,
    transition: 'all 0.3s ease-in-out',
  },
  '&:hover::after': {
    width: '100%',
    left: '0',
  },
}));

const ThemeToggle = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '1rem',
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

const NavbarComp = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useThemeContext();
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    handleClose();
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'Início', id: 'home' },
    { label: 'Sobre', id: 'about' },
    { label: 'Habilidades', id: 'skills' },
    { label: 'Projetos', id: 'projects' },
    { label: 'Formação', id: 'education' },
    { label: 'Certificações', id: 'certifications' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <StyledAppBar position="fixed" elevation={isScrolled ? 4 : 0}>
      <Container maxWidth="lg">
        <StyledToolbar>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
            Meu Portfólio
          </Typography>
          <NavButtons>
            {menuItems.map((item) => (
              <NavButton key={item.id} onClick={() => scrollToSection(item.id)}>
                {item.label}
              </NavButton>
            ))}
            <ThemeToggle>
              <Brightness7Icon />
              <Switch checked={isDarkMode} onChange={toggleTheme} color="default" />
              <Brightness4Icon />
            </ThemeToggle>
          </NavButtons>
          <MobileMenuButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </MobileMenuButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {menuItems.map((item) => (
              <MenuItem key={item.id} onClick={() => scrollToSection(item.id)}>
                {item.label}
              </MenuItem>
            ))}
            <MenuItem>
              <ThemeToggle>
                <Brightness7Icon />
                <Switch checked={isDarkMode} onChange={toggleTheme} color="default" />
                <Brightness4Icon />
              </ThemeToggle>
            </MenuItem>
          </Menu>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};

export default NavbarComp;
