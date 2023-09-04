import { Box } from '@mantine/core';

function MapSection() {
  // CSS ------------------------------------------------------------------------

  // Variabler / Functions ------------------------------------------------------

  // TSX ------------------------------------------------------------------------
  return (
    <>
      <Box>
        <iframe
          style={{ border: 0, width: '100%', height: '5      0vh' }}
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68339.6230963471!2d11.932331149453148!3d57.638062137830346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff21f327977eb%3A0x2f62d03e8837a995!2sIndustri%20Eldfast%20AB!5e0!3m2!1ssv!2sse!4v1693485493454!5m2!1ssv!2sse'
          width='800'
          height='600'
          loading='lazy'
        ></iframe>
      </Box>
    </>
  );
}

export default MapSection;
