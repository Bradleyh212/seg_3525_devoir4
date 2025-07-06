import React from 'react';
import plantIcon from '../assets/icon-plant.svg';
import boxIcon   from '../assets/icon-box.svg';
import phoneIcon from '../assets/icon-phone.svg';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <section id="about-us" className="about-us">
      <div className="container">
        <h2>About us</h2>
        <p className="subtitle">
          Order now and appreciate the beauty of nature
        </p>

        <div className="features">
          <div className="feature">
            <div className="icon-wrapper">
              <img src={plantIcon} alt="Large Assortment" />
            </div>
            <h3>Large Assortment</h3>
            <p>
              we offer many different types of products<br/>
              with fewer variations in each category.
            </p>
          </div>

          <div className="feature">
            <div className="icon-wrapper">
              <img src={boxIcon} alt="Fast & Free Shipping" />
            </div>
            <h3>Fast & Free Shipping</h3>
            <p>
              4-day or less delivery time, free shipping<br/>
              and an expedited delivery option.
            </p>
          </div>

          <div className="feature">
            <div className="icon-wrapper">
              <img src={phoneIcon} alt="24/7 Support" />
            </div>
            <h3>24/7 Support</h3>
            <p>
              answers to any business related inquiry<br/>
              24/7 and in real-time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
