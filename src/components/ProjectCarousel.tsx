import { Carousel } from '@mantine/carousel';
import { Progress } from '@mantine/core';
import { useMediaQuery } from 'react-responsive';
import jacyz from '/jacyz.jpg';
import mcdonalds from '/mcdonalds.jpg';
import volvo from '/volvo.jpg';

function ProjectCarousel() {
  const isSmallScreen = useMediaQuery({ maxWidth: 576 });
  const isMediumScreen = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const isLargeScreen = useMediaQuery({ minWidth: 769, maxWidth: 992 });

  const slideSize = isSmallScreen
    ? '100vw'
    : isMediumScreen
    ? '75vw'
    : isLargeScreen
    ? '50vw'
    : '33.33vw';

  return (
    <>
      
        <Carousel
          slideSize={slideSize}
          
          align='center'
          controlsOffset="xs"
          controlSize={27}
          draggable={false}
          withIndicators
          initialSlide={0}
        >
          <Carousel.Slide><img style={{width:'100vw'}} src={volvo} alt="Volvo" /></Carousel.Slide>
          <Carousel.Slide><img  style={{width:'100vw'}} src={jacyz} alt="Jacyz" /></Carousel.Slide>
          <Carousel.Slide><img  style={{width:'100vw'}} src={mcdonalds} alt="McDonald's" /></Carousel.Slide>
        </Carousel>
     
      <Progress />
    </>
  );
}

export default ProjectCarousel;
