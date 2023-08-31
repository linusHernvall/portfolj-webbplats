import { ActionIcon, Box, Group, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BrandFacebook, BrandInstagram, BrandYoutube } from 'tabler-icons-react';

function Footer() {
  // Variabler / Functions ------------------------------------------------------
  const matches = useMediaQuery('(min-width: 48em)');

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollIfHomePage = (id: string) => {
    const sectionElement = document.getElementById(id);

    if (sectionElement) {
      const position = sectionElement.offsetTop - 66;
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    }
  };

  // Check if we're already on the homepage
  const isHomePage = window.location.pathname === '/';

  const scrollToSection = (id: string) => {
    // If already on the homepage, just scroll
    if (isHomePage) {
      scrollIfHomePage(id);
    } else {
      // Navigate to the homepage and append the hash for the section
      window.location.href = `/#${id}`;
    }
  };

  // This effect runs whenever the component mounts, ensuring it scrolls to the correct section if needed
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      scrollIfHomePage(hash);
    }
  }, []);
  // TSX ------------------------------------------------------------------------
  return (
    <footer
      style={{
        backgroundColor: 'black',
        padding: matches ? '1rem 1rem 0rem 1rem' : '1rem 0rem',
      }}
    >
      <Group
        sx={{
          display: 'flex',
          flexDirection: matches ? 'row-reverse' : 'column',
          gap: matches ? '0rem' : '0.8rem',
          alignItems: matches ? 'flex-end' : 'center',
          justifyContent: matches ? 'space-between' : 'center',
        }}
      >
        <NavLink onClick={scrollToTop} to='/'>
          <img
            style={{ height: '4rem' }}
            src='/public/logo-lil-flame.png'
            alt="ELD'S IT logotype"
          />
        </NavLink>
        <Group
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: matches ? 'flex-start' : 'center',
          }}
        >
          <Group
            sx={{
              display: 'flex',
              gap: matches ? '0.5rem' : '1rem',
              flexDirection: 'column',
              alignItems: matches ? 'flex-start' : 'center',
            }}
          >
            <Box
              onClick={() => scrollToSection('team')}
              style={{
                color: 'white',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              <Text size='12px' fw={700}>
                VÅRT TEAM
              </Text>
            </Box>
            <Box
              onClick={() => scrollToSection('contact')}
              style={{
                color: 'white',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              <Text size='12px' fw={700}>
                KONTAKTA OSS
              </Text>
            </Box>
            <Box
              onClick={() => scrollToSection('about')}
              style={{
                color: 'white',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              <Text size='12px' fw={700}>
                OM OSS
              </Text>
            </Box>
          </Group>
          <Group pb={matches ? '0rem' : '1rem'}>
            <ActionIcon size={matches ? 'xl' : 'lg'} variant='default' radius='xl'>
              <BrandInstagram size={40} strokeWidth={1.3} color={'black'} />
            </ActionIcon>
            <ActionIcon size={matches ? 'xl' : 'lg'} variant='default' radius='xl'>
              <BrandFacebook size={40} strokeWidth={1.3} color={'black'} />
            </ActionIcon>
            <ActionIcon size={matches ? 'xl' : 'lg'} variant='default' radius='xl'>
              <BrandYoutube size={40} strokeWidth={1.3} color={'black'} />
            </ActionIcon>
          </Group>
        </Group>
      </Group>
      <Text
        fw={700}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          color: 'white',
          fontSize: '12px',
          transform: matches ? 'translateY(-1rem)' : 'translateY(0rem)',
        }}
      >
        ©ELD'S IT 2023
      </Text>
    </footer>
  );
}

export default Footer;
