import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleJoinClick = () => {
    window.open("https://forms.gle/81fXY1koiUhsJnng7", "_blank");
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img
          src="https://weeho12-u21m.vercel.app/assets/weeho-logo-DKyBzIFi.png"
          alt="Weeho Logo"
        />
      </div>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/weeho-details">About</Link>
        <Link to="/our-team">Our Team</Link>
        <Link to="/blogs">Blog</Link>
        <Link to="/contact">Contact</Link>

        <div className="mobile-cta">
          <button className="btn login-btn" onClick={handleJoinClick}>
            Join As A Performer
          </button>
        </div>
      </nav>

      <div className="nav-buttons desktop-cta">
        <button className="btn login-btn" onClick={handleJoinClick}>
          Join As A Performer
        </button>
      </div>
    </header>
  );
}

export default Navbar;
