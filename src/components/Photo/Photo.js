import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import  { images }  from '../../modules/images/images';
import './Photo.css';

function Photo() {
  return (
    <div className='photo'>
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

/**
 * images imported and added in /modules/images.js
 */