import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="modern-header">
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          <span className="brand-icon">✦</span>
          <span>ReviewBaba</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/englishMov">English</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bengaliMov">Bengali</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hindiMov">Hindi</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
