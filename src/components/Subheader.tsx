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
          <Title fz='96px' pt='25vh' ta='right' c='white'>
            DIN WEBBYRÅ
          </Title>
        ) : (
          <Title fz='48px' pt='25vh' ta='right' c='white'>
            DIN WEBBYRÅ
          </Title>
        )}
        {matches ? (
          <Title order={1} ta='right' c='white'>
            FÖR HELTÄCKANDE IT-LÖSNINGAR
          </Title>
        ) : (
          <Title order={2} ta='right' c='white'>
            FÖR HELTÄCKANDE IT-LÖSNINGAR
          </Title>
        )}
      </Box>
    </>
  );
}

export default Subheader;
