import { Box, Container, Title } from '@mantine/core';

interface BurgerMenuLinksProps {
  headerHeight?: number | null;
  setHeaderVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setBurgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  style?: React.CSSProperties;
}

function BurgerMenuLinks({
  headerHeight,
  setHeaderVisible,
  setBurgerMenuOpen,
  style,
}: BurgerMenuLinksProps) {
  const scrollToSection = (id: string) => {
    setHeaderVisible(false);
    setBurgerMenuOpen(false);
    const sectionElement = document.getElementById(id);

    if (sectionElement) {
      const position = sectionElement.offsetTop - (headerHeight ?? 0);
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    }
  };
  return (
    <Box
      sx={{
        width: '100%',
        background: 'rgba(24,100,171, 0.88)',
        padding: '1rem 1rem 8rem 0',
      }}
      style={style}
    >
      <Container
        maw={'1980px'}
        p={0}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
        style={style}
      >
        <ul
          style={{
            textDecoration: 'none',
            listStyleType: 'none',
            textTransform: 'uppercase',
            textAlign: 'right',
            cursor: 'pointer',
          }}
        >
          <li onClick={() => scrollToSection('process')}>
            <Title
              sx={{
                '&:hover': {
                  color: 'rgba(0,0,0,0.4)',
                },
              }}
              order={2}
              weight={400}
              color='#FFFFFF'
            >
              {' '}
              Process
            </Title>
          </li>
          <li onClick={() => scrollToSection('project')}>
            <Title
              sx={{
                '&:hover': {
                  color: 'rgba(0,0,0,0.4)',
                },
              }}
              order={2}
              weight={400}
              color='#FFFFFF'
            >
              {' '}
              Projekt
            </Title>
          </li>
          <li onClick={() => scrollToSection('team')}>
            <Title
              sx={{
                '&:hover': {
                  color: 'rgba(0,0,0,0.4)',
                },
              }}
              order={2}
              weight={400}
              color='#FFFFFF'
            >
              {' '}
              Teamet
            </Title>
          </li>
          <li onClick={() => scrollToSection('contact')}>
            <Title
              sx={{
                '&:hover': {
                  color: 'rgba(0,0,0,0.4)',
                },
              }}
              order={2}
              weight={400}
              color='#FFFFFF'
            >
              {' '}
              Kontakta
            </Title>
          </li>
          <li onClick={() => scrollToSection('about')}>
            <Title
              sx={{
                '&:hover': {
                  color: 'rgba(0,0,0,0.4)',
                },
              }}
              order={2}
              weight={400}
              color='#FFFFFF'
            >
              {' '}
              Om oss
            </Title>
          </li>
          <li onClick={() => scrollToSection('map')}>
            <Title
              sx={{
                '&:hover': {
                  color: 'rgba(0,0,0,0.4)',
                },
              }}
              order={2}
              weight={400}
              color='#FFFFFF'
            >
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
