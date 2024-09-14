import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-newsletter">
          <h2>Be the first to know</h2>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe">
            <input
              className="subscribe-input"
              type="text"
              placeholder="Enter your e-mail..."
            />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>

        <div className="footer-contact">
          <h2>CONTACT US</h2>
          <p>+44 221 133 5360</p>
          <p>
            <a href="mailto:customercare@mettamuse.com">
              customercare@mettamuse.com
            </a>
          </p>

          <div className="currency-section">
            <h3>Currency</h3>
            <span>
              <FontAwesomeIcon icon={faDollarSign} /> USD
            </span>
            <span className="currency-info">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </span>
          </div>
        </div>
        <div className="footer-links">
          <h2>Meta Muse</h2>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Orders & Shipping</a>
            </li>
            <li>
              <a href="#">Stories</a>
            </li>
            <li>
              <a href="#">Join/Login as a Seller</a>
            </li>
            <li>
              <a href="#">Artisans</a>
            </li>
            <li>
              <a href="#">Payment & Pricing</a>
            </li>
            <li>
              <a href="#">Return & Refunds</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">EU Compliance Docs</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h2>Follow Us</h2>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2023 mettā muse. All rights reserved.</p>
        <p>mettā muse Accepts: [Add Payment Methods Here]</p>
      </div>
    </footer>
  );
};

export default Footer;
