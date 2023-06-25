import React from 'react';
import './Footer.css';
import footerLogo from '../../Images/blood_logo_white-removebg-preview.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className="inner-footer">
        <div className="footer-items">
         <img src ={footerLogo} alt='footer-logo' className='footer-logo'/>
          <p>Description of any product or motto of the company.</p>
        </div>
        <div className="footer-items">
          <h3>Quick Links</h3>
          <div className="border1"></div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
        <div className="footer-items">
          <h3>Recipes</h3>
          <div className="border1"></div>
          <ul>
            <li><a href="#">Indian</a></li>
            <li><a href="#">Chinese</a></li>
            <li><a href="#">Mexican</a></li>
            <li><a href="#">Italian</a></li>
          </ul>
        </div>
        <div className="footer-items ">
          <h3>Contact us</h3>
          <div className="border1 text-center"></div>
          <ul>
            <li><i className="fa fa-map-marker" aria-hidden="true"></i>XYZ, abc</li>
            <li><i className="fa fa-phone" aria-hidden="true"></i>123456789</li>
            <li><i className="fa fa-envelope" aria-hidden="true"></i>xyz@gmail.com</li>
          </ul>
          <div className="social-media">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-google-plus-square"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy;DigitalShakha
      </div>
    </div>
  );
};

export default Footer;
