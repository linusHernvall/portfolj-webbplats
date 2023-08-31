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
        h={'60vh'}
        sx={{
          backgroundImage: 'url("subhead-image.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '30% center',
        }}
      >
        {matches ? (
          <Title sx={{ textShadow: 'black 4px 4px 6px' }} fz='96px' pt='25vh' ta='right' c='white'>
            DIN WEBBYRÅ
          </Title>
        ) : (
          <Title sx={{ textShadow: 'black 3px 3px 5px' }} fz='48px' pt='25vh' ta='right' c='white'>
            DIN WEBBYRÅ
          </Title>
        )}
        {matches ? (
          <Title sx={{ textShadow: 'black 3px 3px 5px' }} order={2} ta='right' c='white'>
            FÖR HELTÄCKANDE IT-LÖSNINGAR
          </Title>
        ) : (
          <Title sx={{ textShadow: 'black 2px 3px 4px' }} order={3} ta='right' c='white'>
            FÖR HELTÄCKANDE IT-LÖSNINGAR
          </Title>
        )}
      </Box>
    </>
  );
}

export default Subheader;
