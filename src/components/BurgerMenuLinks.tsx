import { Box, Container, Title } from '@mantine/core';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  // Function to scroll to a section if already on the homepage
  const scrollIfHomePage = (id: string) => {
    const sectionElement = document.getElementById(id);

    if (sectionElement) {
      const position = sectionElement.offsetTop - (headerHeight ?? 0);
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    }
  };

  // Check if we're already on the homepage
  const isHomePage = window.location.pathname === '/';

  const scrollToSection = (id: string) => {
    setHeaderVisible(false);
    setBurgerMenuOpen(false);

    // If already on the homepage, just scroll
    if (isHomePage) {
      scrollIfHomePage(id);
    } else {
      // Navigate to the homepage and append the hash for the section
      navigate(`/#${id}`);
    }
  };

  // This effect runs whenever the component mounts, ensuring it scrolls to the correct section if needed
  // useEffect(() => {
  //   const hash = window.location.hash.substring(1);
  //   if (hash) {
  //     scrollIfHomePage(hash);
  //   }
  // }, []);
  useEffect(() => {
    if (location.pathname === '/') {
      const hash = window.location.hash.substring(1);
      if (hash) {
        scrollIfHomePage(hash);
      }
    }
  }, [location.pathname]);
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
