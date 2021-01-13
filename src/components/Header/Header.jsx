import React from 'react';
import '../Header/Header.css';

class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <h1 className="logo"> React BulletinBoard </h1>
      </header>
    )
  }
}

export default Header;