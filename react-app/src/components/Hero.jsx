import React from 'react';
import plantImg from '../assets/hero-plant.png';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content container">
        <div className="hero-text">
          <h1>Buy your dream plants</h1>
          <div className="stats">
            <div>
              <strong>50+</strong>
              <p>Plant Species</p>
            </div>
            <div className="divider" />
            <div>
              <strong>100+</strong>
              <p>Customers</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={plantImg} alt="" />
        </div>
      </div>
    </section>
  );
}
