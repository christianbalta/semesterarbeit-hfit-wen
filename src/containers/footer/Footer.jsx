import React from 'react';
import gsLogo from '../../logo-removebg-.png';
import './footer.css';

const Footer = () => (
  <div className="gs__footer section__padding">
    <div className="gs__footer-heading">
      <h1 className="gradient__text">Lorem ipsum dolor sit amet.</h1>
    </div>

    <div className="gs__footer-btn">
      <p>Lorem ipsum dolor.</p>
    </div>

    <div className="gs__footer-links">
      <div className="gs__footer-links_logo">
        <img src={gsLogo} alt="gs-logo" />
        <p>Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor.</p>
      </div>
      <div className="gs__footer-links_div">
        <h4>Links</h4>
        <p>Games</p>
        <p>Social Media</p>
        <p>lorem</p>
        <p>Contact</p>
      </div>
      <div className="gs__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gs__footer-links_div">
        <h4>Get in touch</h4>
        <p>Lorem ipsum dolor sit.</p>
        <p>+41 76 123 45 67 </p>
        <p>info@gs.net</p>
      </div>
    </div>

    <div className="gs__footer-copyright">
      <p>@2022 GS. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
