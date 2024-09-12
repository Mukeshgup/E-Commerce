import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="http://localhost:3000/">Shop Categories</a></li>
            <li><a href="/customer-service">Customer Service</a></li>
            <li><a href="/account">My Account</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Payment & Security</h4>
          <div className="payment-logos">
            <img src="/visa.png" alt="Visa" />
            <img src="/mastercard.png" alt="MasterCard" />
            <img src="/paypa.png" alt="PayPal" />
          </div>
          <p>Secure Payment with SSL</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Newsletter Signup</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-section">
          <h4 style={{marginLeft:"100px"}}>Contact Us</h4>
          <p style={{marginLeft:"100px"}}>Email: <a href="mailto:support@ecommerce.com">support@ecommerce.com</a></p>
          <p style={{marginLeft:"100px"}}>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
          <p style={{marginLeft:"100px"}}>Address: 123 E-commerce St, Shopping City, USA</p>
        </div>

        <div className="footer-section legal-links">
          <a href="/privacy-policy" style={{marginLeft:"100px"}}>Privacy Policy</a>
          <a href="/terms" style={{marginLeft:"100px"}}>Terms of Service</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 E-Commerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
