import { useParams } from 'react-router-dom';
import { Box } from '@mantine/core';
import { coworkers } from '../data';

function Coworker() {
  // CSS ------------------------------------------------------------------------

  // Variabler / Functions ------------------------------------------------------
  const { id } = useParams<{ id: string | undefined }>();

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
      <Box>
        <Box sx={{
          backgroundImage: 'url("enhetlig-process.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '30% center',
        }}></Box>
        <Box>
          <Box><img src={coworker.imgUrl} alt="En av våra konsult medarbetare, bild på ansiktet." /></Box>
          <h2>{coworker.fullName}</h2>
          <h2>{coworker.expertise}</h2>
          <h2>{coworker.bio}</h2>
        </Box>
      </Box>
    </>
  );
}

export default Coworker;
