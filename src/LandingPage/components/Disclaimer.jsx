import React from 'react';
import content from '../constants/content'; 
import './main.css';

const Disclaimer = () => {
  const { disclaimerContent } = content;

  return (
    <div className="disclaimer-container">
      <div className="disclaimer-content">
        <h2 className="disclaimer-title">{disclaimerContent.title}</h2>
        <div className="disclaimer-text-container">
          <p className="disclaimer-text">{disclaimerContent.copyright}</p>
          <p className="disclaimer-text">{disclaimerContent.responsibility}</p>
          <p className="disclaimer-text">{disclaimerContent.hosting}</p>
          <p className="disclaimer-text">
            {disclaimerContent.contact}{' '}
            <a
              href={disclaimerContent.contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="disclaimer-link"
            >
              {disclaimerContent.contactUrl}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
