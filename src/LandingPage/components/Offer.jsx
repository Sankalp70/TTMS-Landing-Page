import React from "react";
import { content } from "../constants/content";
import "./main.css";

const Offer = () => (
  <section className="what-sets-us-apart">
    <h2 className="section-title">What Sets Us Apart</h2>
    <div className="card-container">
      {content.whatSetsUsApart.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-content">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Offer;
