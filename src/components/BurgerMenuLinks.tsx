import { Box, Container, Title } from '@mantine/core';

interface BurgerMenuLinksProps {
  setHeaderVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setBurgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function BurgerMenuLinks({ setHeaderVisible, setBurgerMenuOpen }: BurgerMenuLinksProps) {
  const scrollToSection = (id: string) => {
    setHeaderVisible(false);
    setBurgerMenuOpen(false);
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Box
      sx={{
        width: '100%',
        background: 'rgba(24,100,171, 0.88)',
        padding: '1rem 1rem 8rem 0',
      }}
    >
      <Container
        maw={'1980px'}
        p={0}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <ul
          style={{
            textDecoration: 'none',
            listStyleType: 'none',
            textTransform: 'uppercase',
            textAlign: 'right',
          }}
        >
          <li onClick={() => scrollToSection('process')}>
            <Title order={2} weight={400} color='#FFFFFF'>
              {' '}
              Process
            </Title>
          </li>
          <li onClick={() => scrollToSection('project')}>
            <Title order={2} weight={400} color='#FFFFFF'>
              {' '}
              Projekt
            </Title>
          </li>
          <li onClick={() => scrollToSection('team')}>
            <Title order={2} weight={400} color='#FFFFFF'>
              {' '}
              Teamet
            </Title>
          </li>
          <li onClick={() => scrollToSection('contact')}>
            <Title order={2} weight={400} color='#FFFFFF'>
              {' '}
              Kontakta
            </Title>
          </li>
          <li onClick={() => scrollToSection('about')}>
            <Title order={2} weight={400} color='#FFFFFF'>
              {' '}
              Om oss
            </Title>
          </li>
          <li onClick={() => scrollToSection('map')}>
            <Title order={2} weight={400} color='#FFFFFF'>
              {' '}
              Hitta hit
            </Title>
          </li>
        </ul>
      </Container>
    </Box>
  );
}

export default BurgerMenuLinks;
