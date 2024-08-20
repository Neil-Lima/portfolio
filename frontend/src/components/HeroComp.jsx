import React from "react";
import { Typography, Container, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTheme } from "@mui/material/styles";

const HeroSection = styled(Box)(({ theme }) => ({
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(135deg, #1A2980 0%, #26D0CE 100%)"
      : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: theme.palette.common.white,
  padding: theme.spacing(20, 0),
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "url(https://source.unsplash.com/random/1600x900?technology) no-repeat center center",
    backgroundSize: "cover",
    opacity: theme.palette.mode === "dark" ? 0.1 : 0.2,
    zIndex: 1,
  },
}));

const ContentWrapper = styled(Box)({
  position: "relative",
  zIndex: 2,
  textAlign: "center",
});

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "3.5rem",
  marginBottom: theme.spacing(2),
  textShadow:
    theme.palette.mode === "dark"
      ? "2px 2px 4px rgba(0,0,0,0.5)"
      : "2px 2px 4px rgba(0,0,0,0.3)",
  color: theme.palette.mode === "dark" ? "#FFFFFF" : "#FFFFFF",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  marginBottom: theme.spacing(4),
  opacity: 1,
  maxWidth: "800px",
  margin: "0 auto",
  color: theme.palette.mode === "dark" ? "#E0E0E0" : "#FFFFFF",
  textShadow:
    theme.palette.mode === "dark"
      ? "1px 1px 2px rgba(0,0,0,0.5)"
      : "1px 1px 2px rgba(0,0,0,0.3)",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  fontSize: "1.2rem",
  fontWeight: 600,
  borderRadius: "30px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  backgroundColor:
    theme.palette.mode === "dark" ? "#BB86FC" : theme.palette.secondary.main,
  color: theme.palette.mode === "dark" ? "#000000" : "#FFFFFF",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
    backgroundColor:
      theme.palette.mode === "dark" ? "#9965F4" : theme.palette.secondary.dark,
  },
}));

const ScrollDownIcon = styled(KeyboardArrowDownIcon)(({ theme }) => ({
  fontSize: "3rem",
  position: "absolute",
  bottom: theme.spacing(4),
  left: "50%",
  transform: "translateX(-50%)",
  animation: "bounce 2s infinite",
  color:
    theme.palette.mode === "dark" ? "#BB86FC" : theme.palette.secondary.main,
  "@keyframes bounce": {
    "0%, 20%, 50%, 80%, 100%": {
      transform: "translateY(0) translateX(-50%)",
    },
    "40%": {
      transform: "translateY(-20px) translateX(-50%)",
    },
    "60%": {
      transform: "translateY(-10px) translateX(-50%)",
    },
  },
}));

const HeroComp = () => {
  const theme = useTheme();

  return (
    <HeroSection id="home">
      <Container maxWidth="md">
        <ContentWrapper>
          <HeroTitle variant="h1">Olá, eu sou Victor Neil</HeroTitle>
          <HeroSubtitle variant="h5">
            Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e
            experiências digitais incríveis
          </HeroSubtitle>
          <CTAButton
            variant="contained"
            color="secondary"
            href="#contact"
            size="large"
          >
            Download CV
          </CTAButton>
        </ContentWrapper>
      </Container>
      <ScrollDownIcon />
    </HeroSection>
  );
};

export default HeroComp;
