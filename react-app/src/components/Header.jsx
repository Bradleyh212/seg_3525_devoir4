import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';   // ← only if using React Router
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Categories', path: '/categories' },
  ];

  const toggleMenu = () => setMenuOpen(open => !open);

  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">
          <span className="logo-text">GREENMIND</span>
        </a>

        {/* Hamburger for mobile */}
        <button
          className={`hamburger${menuOpen ? ' is-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav${menuOpen ? ' open' : ''}`}>
          <ul className="nav-list">
            {navItems.map(item => (
              <li key={item.path}>
                {/* If you’re not using React Router, swap NavLink for <a href={item.path}> */}
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  onClick={() => setMenuOpen(false)}  // close on click
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
