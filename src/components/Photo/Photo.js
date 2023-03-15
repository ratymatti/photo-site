import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import images from '../../modules/images/images';

function Photo() {
  return (
    <div>
      {images.map((category, index) => (
        <div key={index}>
          <h3>{category.category}</h3>
          <ImageCarousel images={category.images} category={category.category} />
        </div>
      ))}
    </div>
  );
};

export default Photo;
