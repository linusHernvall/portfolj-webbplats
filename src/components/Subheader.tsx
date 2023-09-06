import { Box, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function Subheader() {
  // CSS ------------------------------------------------------------------------

  // Variabler / Functions ------------------------------------------------------

  // TSX ------------------------------------------------------------------------

  const matches = useMediaQuery('(min-width: 48em)');
  return (
    <>
      <Box
        h={'90vh'}
        sx={{
          backgroundImage: 'url("/subheader.jpeg")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        {matches ? (
          <Title
            sx={{ textShadow: 'black 4px 4px 6px' }}
            fz='96px'
            pt='35vh'
            pr='50px'
            ta='right'
            c='white'
          >
            DIN WEBBYRÅ
          </Title>
        ) : (
          <Title
            sx={{ textShadow: 'black 3px 3px 5px' }}
            fz='48px'
            pt='42vh'
            pr='5px'
            ta='right'
            c='white'
          >
            DIN WEBBYRÅ
          </Title>
        )}
        {matches ? (
          <Title sx={{ textShadow: 'black 3px 3px 5px' }} order={2} ta='right' pr='50px' c='white'>
            FÖR HELTÄCKANDE IT-LÖSNINGAR
          </Title>
        ) : (
          <Title sx={{ textShadow: 'black 2px 3px 4px' }} order={3} ta='right' pr='5px' c='white'>
            FÖR HELTÄCKANDE IT-LÖSNINGAR
          </Title>
        )}
      </Box>
    </>
  );
}

export default Subheader;
