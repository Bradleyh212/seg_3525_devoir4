import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';
import natImg from '../assets/natural-plants.jpg';
import accImg from '../assets/plant-accessories.jpg';
import artImg from '../assets/artificial-plants.jpg';

export default function Categories() {

  const items = [
    { title: 'Natural Plants',    img: natImg },
    { title: 'Plant Accessories', img: accImg },
    { title: 'Artificial Plants', img: artImg },
  ];

  return (
    <section id="categories" className="categories">
      <div className="container">
        <h2>Categories</h2>
        <p className="subtitle">Find what you are looking for</p>

        <div className="category-items">
          {items.map(({ title, img }) => (
            <div className="category-item" key={title}>
              <img src={img} alt={title} />
              <h3>{title}</h3>
            </div>
          ))}
        </div>

        <Link to="/products" className="explore-btn">
          Explore All&nbsp;&rarr;
        </Link>
      </div>
    </section>
  );
}
