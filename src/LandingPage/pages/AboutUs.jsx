import React from 'react';
import Slider from 'react-slick';
import { content } from '../constants/content';
import './pages.css';
import Card from '../components/Card';
import Mission from '../components/Mission';
import Offer from '../components/Offer';

const AboutUs = () => {
  const { whatWeOffer } = content;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    dots: false,
    nextArrow: <div className="arrow-next">→</div>,
    prevArrow: <div className="arrow-prev">←</div>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="about-us-container">
      <Card />
      <section className="testimonials">
        <h2 className="testimonials-heading">{whatWeOffer.title}</h2>
        <Slider {...settings}>
          {whatWeOffer.offerings.map((offering, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="offering-icon">{offering.icon}</div>
                <h3 className="offering-title">{offering.title}</h3>
                <p className="offering-text">{offering.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    
      <Mission />
      <Offer />
    </div>
  );
};

export default AboutUs;
