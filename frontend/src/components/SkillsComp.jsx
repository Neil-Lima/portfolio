import React from 'react';
import { Container, Typography, Grid, Paper, Tooltip, Zoom, Fade } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(145deg, #1e1e1e, #2c2c2c)'
    : 'linear-gradient(145deg, #ffffff, #f0f0f0)',
  borderRadius: '12px',
  boxShadow: theme.palette.mode === 'dark'
    ? '3px 3px 10px #0d0d0d, -3px -3px 10px #2f2f2f'
    : '3px 3px 10px #d1d1d1, -3px -3px 10px #ffffff',
  '&:hover': {
    transform: 'translateY(-5px) scale(1.03)',
    boxShadow: theme.palette.mode === 'dark'
      ? '5px 5px 15px #0d0d0d, -5px -5px 15px #2f2f2f'
      : '5px 5px 15px #d1d1d1, -5px -5px 15px #ffffff',
  },
}));

const SkillImage = styled('img')({
  width: 50,
  height: 50,
  marginBottom: 8,
  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
  '&:hover': {
    transform: 'rotate(360deg) scale(1.1)',
  },
});

const skills = [
  { name: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Bootstrap', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Php', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Laravel', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'Materialize', image: 'https://seeklogo.com/images/M/materialize-logo-0FCAD8A6F8-seeklogo.com.png' },
  { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Styled Components', image: 'https://styled-components.com/logo.png' },
  { name: 'Chakra UI', image: 'https://avatars.githubusercontent.com/u/54212428?s=200&v=4' },
  { name: 'Material-UI', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
  { name: 'React Bootstrap', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg' },
  { name: 'Redux', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'Spring Boot', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'GraphQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Angular', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-plain.svg' },
  { name: 'Apollo', image: 'https://cdn.worldvectorlogo.com/logos/apollo-graphql-compact.svg' },
  { name: 'React Hooks', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'React Spring', image: 'https://react-spring.dev/favicon.ico' },
  { name: 'React Router', image: 'https://reactrouter.com/_brand/react-router-mark-color.svg' },
  { name: 'React Hook Form', image: 'https://avatars.githubusercontent.com/u/53986236?s=200&v=4' },
  { name: 'React Query', image: 'https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png' },
  { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Bootstrap Studio', image: 'https://bootstrapstudio.io/assets/img/logo_128.png' },
  { name: 'GitHub Desktop', image: 'https://desktop.github.com/images/desktop-icon.svg' },
  { name: 'Nest.js', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg' },
  { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
];

const SkillsComp = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }} id="skills">
      <Typography variant="h3" gutterBottom align="center" sx={{ 
        mb: 4, 
        fontWeight: 'bold', 
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #BB86FC 0%, #3700B3 50%, #03DAC6 100%)'
          : 'linear-gradient(135deg, #FF6B6B 0%, #6A5ACD 50%, #00CED1 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
      }}>
        Habilidades Técnicas
      </Typography>
      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid item xs={4} sm={3} md={2} lg={2} key={index}>
            <Fade in={true} timeout={500 + index * 100}>
              <Tooltip 
                title={`Experiência com ${skill.name}`} 
                TransitionComponent={Zoom} 
                arrow 
                placement="top"
              >
                <SkillCard elevation={0}>
                  <SkillImage src={skill.image} alt={skill.name} />
                  <Typography 
                    variant="caption" 
                    fontWeight="bold"
                    sx={{
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(45deg, #BB86FC 30%, #03DAC6 90%)'
                        : 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {skill.name}
                  </Typography>
                </SkillCard>
              </Tooltip>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SkillsComp;
