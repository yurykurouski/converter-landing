import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import { images1 } from '../../assets/images';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles.css';

export const Gallery = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        transitionTime={5000}
        interval={11000}
      >
        {images1.map((image, index) => (
          <div
            key={index}
            className="demo-item"
            style={{ backgroundImage: 'url(' + image.src + ')' }}
          >
            <p className='card-title'><span className='card-title__text'>{image.title}</span></p>
            <img src={image.src} alt='' />
          </div>
        ))}
      </Carousel>
    </div>
  );
}