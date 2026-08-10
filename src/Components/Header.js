import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <header className="modern-header">
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="site-brand" to="/" onClick={closeMenu}>
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
            <li><NavLink end className="site-link" to="/">Home</NavLink></li>
            <li><NavLink className="site-link" to="/englishMov">English</NavLink></li>
            <li><NavLink className="site-link" to="/bengaliMov">Bengali</NavLink></li>
            <li><NavLink className="site-link" to="/hindiMov">Hindi</NavLink></li>
            <li><a className="site-link site-link--accent" href="#about" onClick={closeMenu}>About</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
