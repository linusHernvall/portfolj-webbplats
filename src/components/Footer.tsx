import { ActionIcon, Group, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

function Footer() {
  // CSS ------------------------------------------------------------------------

  // Variabler / Functions ------------------------------------------------------
  const matches = useMediaQuery('(min-width: 48em)');
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
        <img style={{ height: '4rem' }} src='/public/logo-lil-flame.png' alt="ELD'S IT logotype" />
        <Group
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Group
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <NavLink
              to=''
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <Text fw={600}>VÅRT TEAM</Text>
            </NavLink>
            <NavLink
              to=''
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <Text fw={600}>KONTAKTA OSS</Text>
            </NavLink>
            <NavLink
              to=''
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <Text fw={600}>OM OSS</Text>
            </NavLink>
          </Group>
          <Group pb={matches ? '0rem' : '1rem'}>
            <ActionIcon size='lg' variant='default' radius='xl'>
              <IconBrandInstagram size='1.5rem' stroke='1.4' />
            </ActionIcon>
            <ActionIcon size='lg' variant='default' radius='xl'>
              <IconBrandFacebook size='1.5rem' stroke='1.4' />
            </ActionIcon>
            <ActionIcon size='lg' variant='default' radius='xl'>
              <IconBrandYoutube size='1.5rem' stroke='1.4' />
            </ActionIcon>
          </Group>
        </Group>
      </Group>
      <Text
        fw={600}
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
