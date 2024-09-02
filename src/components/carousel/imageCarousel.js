import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './imageCarousel.css'; // Import the CSS file

import embraceFailure from '../../resources/Embracing Failure.jpg';
import womenInStem from '../../resources/Women in STEM.jpg';


const ImageCarousel = () => {
  const images = [
    { url: embraceFailure, text: 'Embracing Failure and Resilience Panel Event' },
    { url: womenInStem, text: 'Women in STEM' },
    { url: 'image3.jpg', text: 'Third Image' },
    // Add more image URLs and text here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image.url} alt={`Slide ${index}`} className="carousel-image" />
            <div className="carousel-text">{image.text}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
