import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home',       to: '/' }, 
    { label: 'Products',   to: '/products' },
    { label: 'About Us',   to: '/#about-us' },
    { label: 'Categories', to: '/#categories' },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container">
        <NavLink
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          <span className="logo-text">GREENMIND</span>
        </NavLink>


        <button
          className={`hamburger${menuOpen ? ' is-active' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>


        <nav className={`nav${menuOpen ? ' open' : ''}`}>
          <ul className="nav-list">
            {navItems.map(({ label, to }) => (
              <li key={label}>
                {to.includes('#') ? (
                  <HashLink
                    smooth
                    to={to}
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    {label}
                  </HashLink>
                ) : (
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                    onClick={closeMenu}
                  >
                    {label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}