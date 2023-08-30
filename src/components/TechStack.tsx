import Marquee from 'react-fast-marquee';

function TechStack() {
  // CSS ------------------------------------------------------------------------

  // Variabler / Functions ------------------------------------------------------

  // TSX ------------------------------------------------------------------------
  return (
    <>
      <Marquee speed={25} autoFill>
        <img height='40px' src='/public/react-logo.png' />
        <img height='40px' src='/public/typeScript-logo.png' />
        <img height='40px' src='/public/angular-logo.png' />
        <img height='40px' src='/public/mantine-logo.png' />
        <img height='40px' src='/public/vue-logo.png' />
      </Marquee>
    </>
  );
}

export default TechStack;
