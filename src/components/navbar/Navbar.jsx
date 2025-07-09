import React, { useState } from 'react';
import './Navbar.css';
import logoImage from '../../assets/Logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logoImage} alt="SSF Logo" className="logo" />
      </div>

      <div className="menu-icon" onClick={handleToggle}>
        {toggle ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`navbar-center ${toggle ? 'active' : ''}`}>

        <ul className="nav-links">
          <li><a href="#about" onClick={handleToggle}>About</a></li>
          <li><a href="#services" onClick={handleToggle}>Services</a></li>
          <li><a href="#howitworks" onClick={handleToggle}>How It Works</a></li>
          <li><a href="#testimonials" onClick={handleToggle}>Testimonials</a></li>
          <li><a href="#gallery" onClick={handleToggle}>Gallery</a></li>
          <li><a href="#join" onClick={handleToggle}>Join</a></li>
        </ul>
        <div className={`navbar-right ${toggle ? 'active' : ''}`}>

        <a href="#join">
          <button className="member-btn" onClick={handleToggle}>Become a Member</button>
        </a>
      </div>
      </div>
    </div>
  );
}

export default Navbar;