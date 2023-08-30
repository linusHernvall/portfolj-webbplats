import { ActionIcon, Group, Text } from '@mantine/core';
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

function Footer() {
  // CSS ------------------------------------------------------------------------

  // Variabler / Functions ------------------------------------------------------

  // TSX ------------------------------------------------------------------------
  return (
    <footer
      style={{
        backgroundColor: 'black',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        display: 'flex',
        gap: '0.5rem',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img style={{ height: '4rem' }} src='/public/logo-lil-flame.png' alt="ELD'S IT logotype" />
      <NavLink
        to=''
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <Text fw={700}>VÅRT TEAM</Text>
      </NavLink>
      <NavLink
        to=''
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <Text fw={700}>KONTAKTA OSS</Text>
      </NavLink>
      <NavLink
        to=''
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <Text fw={700}>OM OSS</Text>
      </NavLink>
      <Group>
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
      <Text fw={700} sx={{ color: 'white', fontSize: '12px' }}>
        ©ELD'S IT 2023
      </Text>
    </footer>
  );
}

export default Footer;
