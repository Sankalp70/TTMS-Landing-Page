import React, { useState } from "react";
import { motion } from "framer-motion";
import "./pages.css";
import { content } from "../constants/content.js";
import contactus from "../../assests/contactus2.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });
                    
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for contacting us, ${formData.name}!`);
  };

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Contact Cards */}
      <div className="contact-cards-container">
        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={content.contactInfo.address.image} alt="Address" />
          <p>{content.contactInfo.address.text}</p>
          <p>{content.contactInfo.address.postalCode}</p>
        </motion.div>
        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={content.contactInfo.email.image} alt="Email" />
          <p>{content.contactInfo.email.text}</p>
        </motion.div>
        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={content.contactInfo.phone.image} alt="Phone" />
          <p>{content.contactInfo.phone.text}</p>
        </motion.div>
      </div>

      <div className="contact-container">
        {/* Left Image */}
        <motion.div
          className="contact-image"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src={contactus} alt="Contact Us" />
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="contact-form-container"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Get in Touch</h2>
          <p>Feel free to drop us a line below!</p>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-field">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <input
                type="number"
                name="number"
                placeholder="Your Mobile No"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Map Section */}
      <div className="map-container">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12..."
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.1366020988594!2d81.64635187503721!3d21.226431080472803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd9eb30b9f6d%3A0xff39ec5081da4bb7!2sSamagra%20Shiksha%20State%20Project%20Office!5e0!3m2!1smr!2sin!4v1732606842617!5m2!1smr!2sin"
          width="100%"
          height="350"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Contact;
