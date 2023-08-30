import { Carousel } from '@mantine/carousel';
import { Progress } from '@mantine/core';
import jacyz from '/jacyz.jpg';
import mcdonalds from '/mcdonalds.jpg';
import volvo from '/volvo.jpg';




function ProjectCarousel() {
  

 
  return (
    <>
    <div style={{width:'100%'}}>
      <Carousel
      slideSize='100%'
      height={800} 
      align='center'
      slideGap="xs" 
      controlsOffset="xs" 
      controlSize={27} 
      draggable={false} 
      withIndicators
      initialSlide={1}
      slidesToScroll='auto'
      breakpoints={[{ maxWidth: '100vw', slideSize: '100%' }]}
      >
        
        <Carousel.Slide><img src={volvo}></img></Carousel.Slide>
        <Carousel.Slide><img src={jacyz}></img></Carousel.Slide>
        <Carousel.Slide><img src={mcdonalds}></img></Carousel.Slide>
        
      </Carousel>
      </div>
      <Progress
        
      />
    </>
  );
}
export default ProjectCarousel;
