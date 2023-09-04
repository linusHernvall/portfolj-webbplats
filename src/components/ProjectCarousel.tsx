import { Carousel } from '@mantine/carousel';
import { Progress } from '@mantine/core';
import jacyz from '/jacyz.jpg';
import mcdonalds from '/mcdonalds.jpg';
import volvo from '/volvo.jpg';

function ProjectCarousel() {
  return (
    <>
      <Carousel
        slideSize='100%'
        align='center'
        controlsOffset='xs'
        controlSize={27}
        draggable={false}
        withIndicators
        initialSlide={0}
      >
        <Carousel.Slide>
          <img style={{ width: '100%', objectFit: 'scale-down' }} src={volvo} alt='Volvo' />
        </Carousel.Slide>
        <Carousel.Slide>
          <img style={{ width: '100%', objectFit: 'scale-down' }} src={jacyz} alt='Jacyz' />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            style={{ width: '100%', objectFit: 'scale-down' }}
            src={mcdonalds}
            alt="McDonald's"
          />
        </Carousel.Slide>
      </Carousel>

      <Progress />
    </>
  );
}

export default ProjectCarousel;
