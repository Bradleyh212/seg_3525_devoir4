import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { label: 'Home',       path: '#home' },
    { label: 'Products',   path: '/products' },
    { label: 'About Us',   path: '#about-us' },   // ← hash link
    { label: 'Categories', path: '#categories' },
  ];

  const toggleMenu = () => setMenuOpen(open => !open);

  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-text">GREENMIND</span>
        </a>

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
              <li key={item.label}>
                {item.path.startsWith('#') ? (
                  // plain anchor for hash in-page links
                  <a
                    href={item.path}
                    className="nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  // react-router NavLink for real routes
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
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
