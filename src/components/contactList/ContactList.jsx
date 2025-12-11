import React from 'react';

const ContactList = () => (
  <div className="contact-info">
    <span className="contact-item">
      <i className="fas fa-map-marker-alt"></i>
      Taipei, Taiwan
    </span>
    <span className="contact-item">
      <i className="fas fa-phone-alt"></i>
      <a href="tel:+886-911-277-811">+886 911 277 811</a>
    </span>
    <span className="contact-item">
      <i className="fas fa-envelope"></i>
      <a href="mailto:krebikshaw@gmail.com">krebikshaw@gmail.com</a>
    </span>
    <span className="contact-item">
      <i className="fas fa-globe"></i>
      <a href="https://www.linkedin.com/in/裕翔-蘇" target="_blank" rel="noopener noreferrer">Linkedin</a>
    </span>
  </div>
);

export default ContactList;
