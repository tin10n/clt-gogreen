// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo-clt.png";
import "../styles/header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header--container">
        {/* Logo */}
        <Link to="/" className="logo--link">
          <img src={Logo} alt="CLT GoGreen Logo" className="logo" />
        </Link>

        {/* Desktop Nav */}
        <nav className={`nav--links ${menuOpen ? "open" : ""}`}>
          <Link to="/challenges" onClick={() => setMenuOpen(false)}>Challenges</Link>
          <Link to="/leaderboard" onClick={() => setMenuOpen(false)}>Leaderboard</Link>
          <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>
            Log In
          </Link>
        </nav>

        {/* Hamburger Button (Mobile only) */}
        <button
          className="menu--toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

export default Header;