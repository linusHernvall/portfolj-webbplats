import { Box, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useParams } from 'react-router-dom';
import { coworkers } from '../data';

function Coworker() {
  // CSS ------------------------------------------------------------------------

  // Variabler / Functions ------------------------------------------------------
  const { id } = useParams<{ id: string | undefined }>();
  const matches = useMediaQuery('(min-width: 48em)');

  if (!id) {
    return <h4>Invalid ID</h4>;
  }

  const coworker = coworkers.find(c => c.id === parseInt(id));

  if (!coworker) {
    return <h4>Coworker not found</h4>;
  }

  // TSX ------------------------------------------------------------------------
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box
          sx={{
            display: matches ? 'block' : 'none',
            backgroundImage: 'url("/individuell-person-bg.png")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            width: '30%',
          }}
        ></Box>
        <Box p='0 0 0 15px' sx={{ width: matches ? '70%' : '100%' }}>
          <Box m='5rem 0 0 0' sx={{ width: '200px', borderRadius: '99999rem', overflow: 'hidden' }}>
            <img
              style={{ width: '100%', height: '100%' }}
              src={coworker.imgUrl}
              alt='En av våra konsult medarbetare, bild på ansiktet.'
            />
          </Box>
          <Title order={2}>{coworker.fullName}</Title>
          <Title order={3}>{coworker.expertise}</Title>
          <Title order={4} sx={{maxWidth:"600px"}}>{coworker.bio}</Title>
        </Box>
      </Box>
    </>
  );
}

export default Coworker;
