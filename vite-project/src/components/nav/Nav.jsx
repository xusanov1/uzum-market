import React from 'react';
import { Link } from 'react-router-dom';
import uzumLogo from '../../assets/uzum.png'
import userIcon from '../../assets/user.png'
import './Nav.css';

const NavBar = () => {
  return (
    <nav className="navbar">
        <img className="navbar-logo" src={uzumLogo} alt="Uyum Logo" />
       <input className='navbar-input' type="text" placeholder='Search ' />
      <Link className="nav-link" to="/">Products</Link>
      <Link className="nav-link" to="/liked-products">Liked Products</Link>
      <Link className="nav-link" to="/profile">Profile <img className='user-img' src={userIcon} alt="user" /></Link>
    </nav>
  );
};

export default NavBar;
