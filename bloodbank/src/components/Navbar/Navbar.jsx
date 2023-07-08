import React, { createContext, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Images/blood_logo_white-removebg-preview.png';
import { RiSearchLine } from 'react-icons/ri';


const AuthContext = createContext();

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
    const Navigate = useNavigate()
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };
  const handleDontationPage =() =>{
      Navigate('/donor')
   };
   const handleBloodRequest =() => {
    Navigate('/requestblood')
   }
  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogout }}>
      <nav>
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
        <div className={`nav-links ${showMenu ? 'show' : ''}`}>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/about" onClick={handleLinkClick}>
            About
          </Link>
          <Link to="/event" onClick={handleLinkClick}>
            Events
          </Link>
          <Link to="/contactus" onClick={handleLinkClick}>
            Contact Us
          </Link>
          <Link to="/requestblood" id= 'req-nav'onClick={handleBloodRequest}>
            Request For Blood
          </Link>
            
          <AuthLink />
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            className={`search-input ${isSearchOpen ? 'active' : ''}`}
          />
          <div className="search-icon" onClick={toggleSearch}>
            <RiSearchLine />
          </div>
        </div>
        <div className="btn-hem">
          <button className="btn-navbar" onClick={handleBloodRequest}>Request For Blood</button>
          <button className="btn-nav" onClick={handleDontationPage}>Donate</button>
          <div className="hamburger" onClick={handleMenuToggle}>
            <div className={`line ${showMenu ? 'line-1' : ''}`}></div>
            <div className={`line ${showMenu ? 'line-2' : ''}`}></div>
            <div className={`line ${showMenu ? 'line-3' : ''}`}></div>
          </div>
        </div>
      </nav>
    </AuthContext.Provider>
  );
};

const AuthLink = () => {
  const { isLoggedIn, handleLogout } = useContext(AuthContext);

  return (
    <div className="navbar-item">
      {isLoggedIn ? (
        <div className="navbar-links" onClick={() => localStorage.clear()}>
          Log Out
        </div>
      ) : (
        <Link to="/signin" className='navbar-links'>Sign In</Link>
      )}
    </div>
  );
}

export default Navbar;
