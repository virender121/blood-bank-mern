import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "../../Images/blood_logo_white-removebg-preview.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <Link to='/' className="logo-link">
        <img src={logo} alt="Logo" className="logo-image" />
      </Link>
      <div className={`nav-links ${showMenu ? 'show' : ''}`}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/event'>Events</Link>
        <Link to='/contact'>Contact Us</Link>
        <Link to='/signin'>SignIn</Link>
      </div>
      <div className="hamburger" onClick={handleMenuToggle}>
        <div className={`line ${showMenu ? 'line-1' : ''}`}></div>
        <div className={`line ${showMenu ? 'line-2' : ''}`}></div>
        <div className={`line ${showMenu ? 'line-3' : ''}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
