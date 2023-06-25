import React from 'react';
import './Header.css';

const Header = ({ backgroundImage, text ,heading}) => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`
  };

  return (
    <header className="header" style={headerStyle}>
      <div className="header-text">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </header>
  );
};

export default Header;
