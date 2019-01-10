import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <div className="header">
      <span className="header__title">
        { props.linha }
      </span>
    </div>
  );
}

export default Header;