// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/shared.css";

const Footer = () => {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer__content">
        {/* Explore Links */}
        <div className="footer__section">
          <h2 className="footer__title">Explore</h2>
          <ul className="footer__links">
            <li>
              <Link to="/" className="footer__link" aria-label="Home">
                Home
              </Link>
            </li>
            <li>
              <Link to="/game" className="footer__link" aria-label="Game">
                Game
              </Link>
            </li>

            <li>
              <Link to="/leaderboard" className="footer__link" aria-label="Leaderboard">
                Leaderboard
              </Link>
            </li>            
            <li>
              <Link to="/faq" className="footer__link" aria-label="FAQ Page">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="footer__section">
          <h2 className="footer__title">Legal</h2>
          <ul className="footer__links">
            <li>
              <Link to="/terms" className="footer__link" aria-label="Terms of Service">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="footer__link" aria-label="Privacy Policy">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer__section">
          <h2 className="footer__title">Stay Connected</h2>
          <div className="footer__social-links">
            <a
              href="https://facebook.com/CLTGoGreen"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Follow us on Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com/CLTGoGreen"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Follow us on Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/CLTGoGreen"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Follow us on Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://tiktok.com/@CLTGoGreen"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Follow us on TikTok"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>

      <p className="footer__copyright">
        ©2025 CLT GoGreen. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;