import React from 'react';
import { Carousel } from 'react-bootstrap';
import carouselImg1 from '../../assets/bg.jpeg';
import carouselImg2 from '../../assets/bg1.jpg';
import carouselImg3 from '../../assets/sport.jpg';

const CustomCarousel = () => (
  <Carousel
    fade
    interval={3000}
    controls
    indicators
    className="custom-carousel"
  >
    <Carousel.Item>
      <img className="d-block w-100" src={carouselImg1} alt="First slide" />
      <div className="carousel-caption">
        <h3 className="animated-text title-one">Just do it</h3>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={carouselImg2} alt="Second slide" />
      <div className="carousel-caption">
        <h3 className="animated-text title-second">
          Make your kid be an athlete
        </h3>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={carouselImg3} alt="Third slide" />
      <div className="carousel-caption">
        <h3 className="animated-text title-three">Lose your fears</h3>
      </div>
    </Carousel.Item>
  </Carousel>
);

export default CustomCarousel;
