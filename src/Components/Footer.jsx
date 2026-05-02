import React from "react";
import { HashLink } from 'react-router-hash-link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-box">
          <h3>Contact Us</h3>
          
          <p>📞 +919230621729</p>
          <p>📧 events.weeho@gmail.com</p>
         <div className="footer-box">
          {/* <h3>Follow Us</h3> */}
          <div className="social-icons">
            <a href="https://wa.me"><FaWhatsapp/></a>
            <a href="https://www.instagram.com/weeho_events/"><FaInstagram /></a>
            <a href="https://www.linkedin.com"><FaLinkedinIn /></a>
            <a href="https://www.facebook.com"><FaFacebookF /></a>
            <a href="https://www.youtube.com"><FaYoutube/></a>
            
            
          </div>
        </div>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/weeho-details">About Us</a></li>
              <li><HashLink smooth to="/#events-section">Events</HashLink></li>
            <li><a href="/contact">Contact</a></li>
            
          </ul>
        </div>

        


      
      </div>

      <div className="footer-bottom">
        <p>© 2025 ADORE By Simtrak Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
