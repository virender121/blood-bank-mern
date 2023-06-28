import React, { createContext, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "../../Images/blood_logo_white-removebg-preview.png";


const AuthContext = createContext()
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
 const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleLogin = () => {
    // Perform login actions
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
        <AuthContext.Provider value={{ isLoggedIn, handleLogout }}>
    <nav>
      <Link to='/' className="logo-link">
        <img src={logo} alt="Logo" className="logo-image" />
      </Link>
      <div className={`nav-links ${showMenu ? 'show' : ''}`}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/event'>Events</Link>
        <Link to='/contactus'>Contact Us</Link>
        <AuthLink />
      </div>
      <div className="hamburger" onClick={handleMenuToggle}>
        <div className={`line ${showMenu ? 'line-1' : ''}`}></div>
        <div className={`line ${showMenu ? 'line-2' : ''}`}></div>
        <div className={`line ${showMenu ? 'line-3' : ''}`}></div>
      </div>
    </nav>
    </AuthContext.Provider>
    </>
  );
}
const AuthLink = () => {
  const { isLoggedIn, handleLogin, handleLogout } = useContext(AuthContext);

  return isLoggedIn ? (
    <Link to='/logout' onClick={handleLogout}>Logout</Link>
  ) : (
    <Link to='/signin'>SignIn</Link>
  );
};
export default Navbar;
