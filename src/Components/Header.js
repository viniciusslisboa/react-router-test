import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Header = () => {
  return (
    <div>
      <header className="header">
        <Link to='/' className="logo"><h2>Logo</h2></Link>
        <nav className="nav">
          <Link to='/' className="link">Home</Link>
          <Link to='/products' className="link">Products</Link>
        </nav>
        <div className="userContent">
          <p>Username</p>
          <div className="avatar">...</div>
        </div>
      </header>
    </div>
  );
}

export default Header;
