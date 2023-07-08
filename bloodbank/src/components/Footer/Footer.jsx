import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaInstagram, FaFacebook, FaGooglePlusSquare } from 'react-icons/fa';
import footerLogo from '../../Images/blood_logo_white-removebg-preview.png'
const Footer = () => {
  return (
    <div className="footer">
       {/* <div className="wave-container">
        <div className="wave"></div>
      </div> */}
      <div className="inner-footer">
        
        <div className="footer-items">
         <img src ={footerLogo} alt='footer-logo' className='footer-logo'/>
          <p>Description of any product or motto of the company.</p>
        </div>
        <div className="footer-items">
          <h3>Quick Links</h3>
          <div className="border1"></div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="/contactus">Contact</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
        <div className="footer-items">
          <h3>Recipes</h3>
          <div className="border1"></div>
          <ul>
            <li><a href="#">Become donor</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#"></a></li>
            <li><a href="#">Italian</a></li>
          </ul>
        </div>
        <div className="footer-items ">
          <h3>Contact us</h3>
          <div className="border1 text-center"></div>
          <ul>
  <li><FaMapMarkerAlt />XYZ, abc</li>
  <li><FaPhone />123456789</li>
  <li><FaEnvelope />xyz@gmail.com</li>
</ul>
<div className="social-media" >
  <a href="#" className='footer-icon'><FaInstagram /></a>
  <a href="#" className='footer-icon'><FaFacebook /></a>
  <a href="#" className='footer-icon'><FaGooglePlusSquare /></a>
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
