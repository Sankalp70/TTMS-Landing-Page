import React from 'react';
import { content } from '../constants/content';
import './main.css';

const AboutUs = () => {
  return (
    <section className="about-us-container">
      <div className="about-us-wrapper">
        <div className="about-us-content">
          <h2 className="about-us-title">About Us</h2>
          <p className="about-us-description">{content.aboutUs.mission}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
