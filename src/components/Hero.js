import React from 'react';
import './Hero.css';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaCertificate, FaUserFriends, FaCalendarCheck } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>
{/* Hero Component */}
      <div className="hero-content">
        <div className="hero-text">
          <h4 className="subtitle">OPEN YOUR EYES TO</h4>
          <h1 className="main-title">SHANGRI LA</h1>
          <h2 className="sub-heading">The hidden World</h2>
        </div>
        <div className="hero-buttons">
          <button className="btn btn-call">
            <FaPhoneAlt /> Call Now
          </button>
          <button className="btn btn-whatsapp">
            <FaWhatsapp /> Whatsapp
          </button>
        </div>
      </div>

      {/* Bottom Blue */}
      <div className="features-bar">
        <div className="feature-item">
          <FaMapMarkerAlt className="feature-icon" />
          <span>50+ DESTINATIONS</span>
        </div>
        <div className="feature-item">
          <FaCertificate className="feature-icon" />
          <span>BEST PRICE GUARANTEE</span>
        </div>
        <div className="feature-item">
          <FaUserFriends className="feature-icon" />
          <span>ECO FRIENDLY TOURISM</span>
        </div>
        <div className="feature-item">
          <FaCalendarCheck className="feature-icon" />
          <span>SUPER FAST BOOKING</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;