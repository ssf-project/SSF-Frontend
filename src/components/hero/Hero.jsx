import React from 'react';
import './Hero.css';
import heroImage from '../../assets/hero.png';

function Hero() {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `linear-gradient(to right, rgb(3, 65, 96) 30%, transparent 80%), url(${heroImage})`,
      }}
    >
      <div className="heading1">
        <span>Empowering Every Student</span>
        <span className="subtitle1"></span>
        <div className="subtitle2">
          <div className="help">
            <span>60+ students educated by SSF in just 4 months</span>
          </div>
          Join a community that supports your growth
        </div>
        <div className="hero-buttons">
          <a href='#join'><button className="member-button">Become a Member</button></a>
        </div>
      </div>
      <div className="hero-image"></div>
    </div>
  );
}

export default Hero;
