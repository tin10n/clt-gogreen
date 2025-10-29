// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/shared.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        {/* Logo */}
        <Link to="/" className="logo" aria-label="CLT GoGreen - Home">
          <span className="logoText">CLT GoGreen</span>
        </Link>
      </div>

      {/* Mobile: Hamburger Button */}
      <button 
        className="menu-toggle" 
        onClick={() => setMenuOpen(!menuOpen)} 
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {/* Desktop and Tablet Navigation */}
      <ul className={`navbar-nav ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/account" className="nav-link">Account</Link></li>
        <li><Link to="/rewards" className="nav-link">Rewards</Link></li>
        <li><Link to="/community" className="nav-link">Community</Link></li>
        <li><Link to="/login" className="nav-link">Login</Link></li>
      </ul>
    </header>
  );
}

export default Header;