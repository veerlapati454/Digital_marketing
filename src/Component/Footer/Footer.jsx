import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

import logo from "../../assets/stackly_logo.webp"; // change path if needed

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-brand">
          <Link to="/">
            <img
              src={logo}
              alt="Stackly Logo"
              className="footer-logo"
            />
          </Link>

          <p>
            Helping businesses scale through SEO, PPC,
            Social Media Marketing and Data Analytics.
          </p>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>Company</h3>

          <Link to="*" className="footer-link">
            About
          </Link>

          <Link to="*" className="footer-link">
            Careers
          </Link>

          <Link to="*" className="footer-link">
            Blog
          </Link>

          <Link to="*" className="footer-link">
            Contact
          </Link>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Services</h3>

          <Link to="*" className="footer-link">
            SEO
          </Link>

          <Link to="*" className="footer-link">
            PPC
          </Link>

          <Link to="*" className="footer-link">
            Social Media
          </Link>

          <Link to="*" className="footer-link">
            Email Marketing
          </Link>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact</h3>

          <p>support@stackly.com</p>
          <p>+91 9876543210</p>

          <div className="footer-socials">

            <Link to="*" className="social-icon">
              <FaFacebookF />
            </Link>

            <Link to="*" className="social-icon">
              <FaInstagram />
            </Link>

            <Link to="*" className="social-icon">
              <FaLinkedinIn />
            </Link>

            <Link to="*" className="social-icon">
              <FaTwitter />
            </Link>

          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Stackly. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;