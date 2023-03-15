import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ImageCarousel(props) {
  const { images, category } = props;
  return (
    <div>
      <h3>{category}</h3>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={require(`../../images/${image}`).default}
              alt={`Slide ${index}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
