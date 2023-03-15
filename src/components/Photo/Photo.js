import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';


function Photo() {
  const categories = [
    { name: 'Category 1', images: ['image1.jpg', 'image2.jpg', 'image3.jpg'] },
    // { name: 'Category 2', images: ['image4.jpg', 'image5.jpg', 'image6.jpg'] },
    // { name: 'Category 3', images: ['image7.jpg', 'image8.jpg', 'image9.jpg'] },
  ];

  return (
    <div>
      {categories.map((category, index) => (
        <ImageCarousel key={index} images={category.images} category={category.name} />
      ))}
    </div>
  );
}

export default Photo;

