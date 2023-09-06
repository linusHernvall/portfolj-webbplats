import { Carousel } from '@mantine/carousel';
import jacyz from '/jacyz.jpg';
import mcdonalds from '/mcdonalds.jpg';
import volvo from '/volvo.jpg';

interface ProjectCarouselProps {
  selectedLogo: string; 
}

function ProjectCarousel({ selectedLogo }: ProjectCarouselProps) {
  let initialSlide = 0;

  switch (selectedLogo) {
    case 'jacyz':
      initialSlide = 1;
      break;
    case 'mcdonalds':
      initialSlide = 2;
      break;
    case 'volvo':
      initialSlide = 0;
      break;
    default:
      initialSlide = 0;
  }
  return (
    <>
      <Carousel
        slideSize='100%'
        align='center'
        controlsOffset='xs'
        controlSize={27}
        draggable={false}
        withIndicators
        initialSlide={initialSlide}
        loop={true} // Enable the loop to transition from last to first and vice versa
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
    </>
  );
}

export default ProjectCarousel;
