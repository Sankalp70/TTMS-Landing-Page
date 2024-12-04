import React from "react";
import content from "../constants/content";
import "./main.css";

const InfoCard = () => {
  return (
    <div className="info-card-container">
      {content.cardData.map((card, index) => (
        <div key={index} className="info-card">
          <img src={card.image} alt={card.title} className="info-card-image" />
          <h3 className="info-card-title">{card.title}</h3>
          <p className="info-card-value">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
