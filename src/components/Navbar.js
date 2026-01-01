import React, { useState } from 'react';
import './Navbar.css';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLock,
  FaSearch,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import logo from '../assets/logo-2.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <span className="contact-item">
            <FaPhoneAlt /> +92 321 410 6223
          </span>
          <span className="contact-item">
            <FaEnvelope /> info@pakistantravelplaces.com
          </span>
        </div>
        <div className="top-bar-right">
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
          <span className="login-btn">
            <FaLock /> Login
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="main-nav">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li className="active">Home</li>
          <li>Destinations</li>
          <li>Packages</li>
          <li>Honeymoon Tours</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Contact</li>
          <li className="search-icon">
            <FaSearch />
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <FaTimes className="close-icon" onClick={() => setMenuOpen(false)} />
        <ul>
          <li className="active">Home</li>
          <li>Destinations</li>
          <li>Packages</li>
          <li>Honeymoon Tours</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
