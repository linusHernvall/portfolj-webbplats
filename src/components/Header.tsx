import { Box, Container } from '@mantine/core';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';
import BurgerMenuLinks from './BurgerMenuLinks';

function Header() {
  // Variabler / Functions ------------------------------------------------------
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  function toggleBurgerMenu() {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // If we scroll down
        setHeaderVisible(false);
      } else {
        // If we scroll up
        setHeaderVisible(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st); // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  // TSX ------------------------------------------------------------------------
  return (
    <Box
      sx={{
        width: '100%',
        padding: '1rem 1.5rem ',
        background: 'rgba(0,0,0,0.4)',

        position: 'fixed',
        top: headerVisible ? '0' : '-200px',
        left: 0,
        transition: 'top 0.3s ease-in-out',
        zIndex: 1000,
      }}
    >
      <Container
        maw={'1980px'}
        p={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <NavLink onClick={scrollToTop} to='/'>
          <img
            style={{ height: '2rem' }}
            src='/public/logo-lil-flame.png'
            alt="ELD'S IT logotype"
          />
        </NavLink>
        <BurgerMenu toggleMenu={toggleBurgerMenu} isOpen={isBurgerMenuOpen} />
      </Container>
      {isBurgerMenuOpen && <BurgerMenuLinks />}
    </Box>
  );
}
export default Header;
