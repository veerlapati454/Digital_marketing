import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div>
          <h2>DigiMax</h2>
          <p>
            Helping businesses scale through SEO,
            PPC, Social Media Marketing and Data Analytics.
          </p>
        </div>

        <div>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3>Services</h3>
          <ul>
            <li>SEO</li>
            <li>PPC</li>
            <li>Social Media</li>
            <li>Email Marketing</li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <p>support@digimax.com</p>
          <p>+91 9876543210</p>

          <div className="socials">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 DigiMax. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;