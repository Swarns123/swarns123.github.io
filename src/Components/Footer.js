import React from "react";
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="modern-footer">
      <div className="footer-content">
        <div className="footer-intro">
          <Link className="footer-brand" to="/"><span aria-hidden="true">R</span> ReviewBaba</Link>
          <p>Thoughtful movie reviews, curated by language and made for your next watch.</p>
        </div>
        <div className="footer-nav" aria-label="Footer navigation">
          <span className="footer-label">Explore</span>
          <div className="footer-links">
            <Link to="/">Home</Link><Link to="/englishMov">English</Link><Link to="/bengaliMov">Bengali</Link><Link to="/hindiMov">Hindi</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} ReviewBaba</span>
        <button className="back-to-top" type="button" onClick={scrollToTop} aria-label="Back to top">Back to top <span aria-hidden="true">↑</span></button>
      </div>
    </footer>
  );
}

export default Footer;
