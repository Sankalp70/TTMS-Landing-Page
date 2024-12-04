//IMAGE CHANGING CAROUSEL

// import React from 'react';
// import Slider from 'react-slick';
// import content from '../constants/content';
// import './main.css';

// const Carousel = () => {
//   return (
//     <div className="carousel-container">
//       <Slider {...content.sliderSettings}>
//         {content.carousel.images.map((image, index) => (
//           <div key={index} className="carousel-slide">
//             <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
//             <div className="carousel-overlay">
//               <p className="overlay-text">{content.carousel.overlayText}</p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Carousel;

//STATIC IMAGE CAROUSEL

import React from "react";
import content from "../constants/content";
import "./main.css";

const Carousel = () => {
  const singleImage = content.carousel.images[1];

  return (
    <div className="custom-carousel-container">
      <div className="custom-carousel-slide">
        <img
          src={singleImage}
          alt="Single Image"
          className="custom-carousel-image"
        />
        <div className="custom-carousel-overlay">
          <p className="custom-overlay-text">{content.carousel.overlayText}</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
