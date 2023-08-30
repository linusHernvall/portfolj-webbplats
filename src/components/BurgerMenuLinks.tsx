import { Box, Container, Title } from '@mantine/core';

function BurgerMenuLinks() {
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
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
          <li>
            <Title order={2} weight={400} color='#FFFFFF'>
              {' '}
              Process
            </Title>
          </li>
          <li>
            <Title order={2} weight={400} color='#FFFFFF'>
              {' '}
              Projekt
            </Title>
          </li>
          <li>
            <Title order={2} weight={400} color='#FFFFFF'>
              {' '}
              Teamet
            </Title>
          </li>
          <li>
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
          <li>
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
