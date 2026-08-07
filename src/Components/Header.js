import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="modern-header">
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          <span className="brand-icon" aria-hidden="true">R</span>
          <span className="brand-name">ReviewBaba</span>
        </Link>

        <button
          className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-controls="site-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span></span><span></span><span></span>
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'is-open' : ''}`} id="site-navigation">
          <ul className="nav-list">
            <li><NavLink end className="nav-link" to="/" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink className="nav-link" to="/englishMov" onClick={closeMenu}>English</NavLink></li>
            <li><NavLink className="nav-link" to="/bengaliMov" onClick={closeMenu}>Bengali</NavLink></li>
            <li><NavLink className="nav-link" to="/hindiMov" onClick={closeMenu}>Hindi</NavLink></li>
            <li><a className="nav-link nav-link--accent" href="#about" onClick={closeMenu}>About</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
