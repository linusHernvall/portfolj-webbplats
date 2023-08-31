import { Box, Title } from '@mantine/core';

function Subheader() {
  // CSS ------------------------------------------------------------------------

  // Variabler / Functions ------------------------------------------------------

  // TSX ------------------------------------------------------------------------
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
        <Title order={1}>DIN WEBBYRÅ</Title>
        <Title>FÖR HELTÄCKANDE IT-LÖSNINGAR</Title>
      </Box>
    </>
  );
}

export default Subheader;
