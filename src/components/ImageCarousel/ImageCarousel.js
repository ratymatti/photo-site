import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ImageCarousel(props) {
  const { images } = props;
  
  return (
    <div className='image-carousel'>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Slide ${index}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;

