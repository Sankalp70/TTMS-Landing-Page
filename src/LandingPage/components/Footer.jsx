import React from "react";
import { content } from "../constants/content";
import "./main.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{content.footerContent.copyright}</p>
        <p>{content.footerContent.rights}</p>
        <p>{content.footerContent.lastUpdated}</p>
      </div>
    </footer>
  );
};

export default Footer;
