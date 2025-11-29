import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <img
          src="https://weeho12-u21m.vercel.app/assets/weeho-logo-DKyBzIFi.png"
          alt="Weeho Logo"
        />
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
  <Link to="/">Home</Link>
  <Link to="/weeho-details">About</Link>
  <a href="#">Book An Event</a>
  <Link to="/our-team">Our Team</Link>
  <Link to="/blogs">Blog</Link>
  <a href="#">Contact</a>
</nav>


      {/* Buttons */}
      <div className="nav-buttons">
        <button
          className="btn login-btn"
          onClick={() =>
            window.open("https://forms.gle/81fXY1koiUhsJnng7", "_blank")
          }
        >
          Join As A Performer
        </button>
        <button
          className="btn signup-btn"
          onClick={() =>
            window.open("https://forms.gle/JqDMVxuxpYvHq34V8", "_blank")
          }
        >
          Book An Event
        </button>
      </div>
    </header>
  );
}

export default Navbar;
