import React from 'react';
import content from '../constants/content'; 
import './main.css'; 

const Mission = () => {
  const { vision, mission } = content.companyInfo;
  
  return (
    <div className="company-info-container">
      {/* Vision Section */}
      <div className="vision-section">
        <div className="image-container">
          <img src={vision.image} alt="Vision" />
        </div>
        <div className="text-container">
          <h2>Our Vision
          <hr className="divider" />
          </h2>
          <p>{vision.text}</p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <div className="text-container">
          <h2>Our Mission
          <hr className="divider" />
          </h2>
          
          <p>{mission.text}</p>
         
        </div>
        <div className="image-container">
          <img src={mission.image} alt="Mission" />
        </div>
      </div>
    </div>
  );
};
  
export default Mission;
