import { Box, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { coworkers } from '../data';

function Coworker() {
  // CSS ------------------------------------------------------------------------

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const hoverRotateStyles = {
    transform: isHovered ? 'rotate(360deg)' : 'none',
    transition: 'transform 0.5s ease',
  };

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
        {/* LEFT SECTION IMAGE DESKTOP ---------------------------------------------------------- */}
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
        {/* RIGHT SECTION DESKTOP ----------------------------------------------------- */}
        <Box
          sx={{
            minHeight: '100vh',
            width: matches ? '70%' : '100%',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* BLUE BALLS ----------------------------------------------------- */}
          <img
            style={{ position: 'absolute', zIndex: -10, top: -300, left: 0 }}
            src='/blue-ball.png'
            alt='A blue circle ball'
          />
          <img
            style={{ position: 'absolute', zIndex: -10, bottom: -300, right: -250 }}
            src='/blue-ball.png'
            alt='A blue circle ball'
          />
          {/* MOBILE - FULLNAME BOX ---------------------------------------------------- */}
          <Box
            p='0 0 15px 15px'
            sx={{
              backgroundImage: matches ? 'none' : 'url("/individuell-person-bg.png")',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          >
            <Box
              mt={matches ? '5rem' : '0rem'}
              pt={matches ? '0rem' : '5rem'}
              sx={{ width: '200px', overflow: 'hidden' }}
            >
              <img
                style={{ width: '100%', borderRadius: '9999rem', height: '100%' }}
                src={coworker.imgUrl}
                alt='En av våra konsult medarbetare, bild på ansiktet.'
              />
            </Box>
          </Box>

          {/* EXPERTISE, CONTACT, TECHSTACK BOX ---------------------------------------- */}
          <Box p='0 0 0 15px'>
            <Title color='blue.9' mt={matches ? '0rem' : '1rem'} fw={700} order={2}>
              {coworker.fullName}
            </Title>
            <Title mb={15} order={4}>
              {coworker.expertise}
            </Title>
            <Title
              dangerouslySetInnerHTML={{ __html: coworker.bio.replace(/\n/g, '<br/>') }}
              fz='12px'
              sx={{ maxWidth: '600px' }}
            ></Title>

            <Box m='1rem 0 1rem' sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Box>
                <img
                  style={{ width: '40px', marginRight: '0.5rem' }}
                  src='/phone.png'
                  alt='Phone'
                />
                <span>{coworker.phone}</span>
              </Box>
              <Box>
                <img style={{ width: '40px', marginRight: '.5rem' }} src='/email.png' alt='Mail' />
                <span>{coworker.email}</span>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: '1rem', paddingBottom: '1rem' }}>
              {coworker.techStack.map((tech, index) => (
                <img
                  style={hoverRotateStyles}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  height={50}
                  key={index}
                  src={tech}
                  alt={tech}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Coworker;
