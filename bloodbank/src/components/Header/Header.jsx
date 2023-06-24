import React from 'react';
import './Header.css';

const Header = ({ backgroundImage, text }) => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`
  };

  return (
    <header className="header" style={headerStyle}>
      <div className="header-text">
        <h1>{text}</h1>
      </div>
    </header>
  );
};

export default Header;
