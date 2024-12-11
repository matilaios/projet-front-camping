import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import cabanearbre1 from '../Images/cabanearbre1.jpg';
import mobilehome1 from '../Images/mobilehome1.jpg';
import piscine from '../Images/piscine.jpg';

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item className="carousel-item">
        <img  className='imgCarousel'     
          src={cabanearbre1}
          alt="First slide" 
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img  
       className='imgCarousel' 
          src={mobilehome1}
          alt="Second slide" 
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className='imgCarousel' 
          src={piscine}
          alt="Third slide" 
        />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;