import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { useCart } from '../context/CartContext';
import cartSvg      from '../assets/shopping_cart.svg';
import './Header.css';

export default function Header() {
  const { cart }   = useCart();
  const totalQty   = cart.reduce((s, i) => s + i.qty, 0);

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home',       to: '/' },
    { label: 'Products',   to: '/products' },
    { label: 'About Us',   to: '/#about-us' },
    { label: 'Categories', to: '/#categories' }
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <span className="logo-text">GREENMIND</span>
        </NavLink>

        <button
          className={`hamburger${menuOpen ? ' is-active' : ''}`}
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span/><span/><span/>
        </button>

        <nav className={`nav${menuOpen ? ' open' : ''}`}>
          <ul className="nav-list">
            {navItems.map(({ label, to }) => (
              <li key={label}>
                {to.includes('#') ? (
                  <HashLink smooth to={to} className="nav-link" onClick={closeMenu}>
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

        <NavLink to="/cart" className="cart-link" onClick={closeMenu}>
          <img src={cartSvg} alt="cart" className="cart-icon" />
          {totalQty > 0 && (
            <span className="cart-badge">{totalQty}</span>
          )}
        </NavLink>
      </div>
    </header>
  );
}