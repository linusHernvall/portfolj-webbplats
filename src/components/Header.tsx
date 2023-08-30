import { Box, Container, Transition } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';
import BurgerMenuLinks from './BurgerMenuLinks';

function Header() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState<number | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);

  function toggleBurgerMenu() {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  }

  // Scroll to the top
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
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const { height } = headerRef.current.getBoundingClientRect();
        setHeaderHeight(height);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  return (
    <Box
      ref={headerRef}
      sx={{
        width: '100%',
        background: 'rgba(0,0,0,0.4)',
        position: 'fixed',
        top: headerVisible ? '0' : '-200px',
        left: 0,
        transition: 'top 0.3s ease-in-out',
        zIndex: 1000,
      }}
    >
      <Container maw={'1980px'} p={0}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.5rem ',
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
        </Box>
      </Container>
      <Transition transition='slide-down' duration={400} mounted={isBurgerMenuOpen}>
        {transitionStyles => (
          <BurgerMenuLinks
            headerHeight={headerHeight} // Pass header height to BurgerMenuLinks
            setBurgerMenuOpen={setBurgerMenuOpen}
            setHeaderVisible={setHeaderVisible}
            style={{ ...transitionStyles }}
          />
        )}
      </Transition>
    </Box>
  );
}

export default Header;
