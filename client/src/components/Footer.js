import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const PRIVACY_TEXT = `CodeWin Solutions respects your privacy and is committed to protecting any personal information you provide through our website or services. We may collect details such as your name, email address, phone number, company information, and project requirements to respond to inquiries, deliver our services, and improve user experience. We implement appropriate security measures to safeguard your data and do not sell or share your personal information with third parties except as required to provide our services or comply with legal obligations. By using our website, you consent to the collection and use of information in accordance with this policy.`;

const TERMS_TEXT = `By accessing the website or using the services of CodeWin Solutions, you agree to comply with our terms and conditions. We provide services including web development, mobile app development, digital marketing, custom software solutions, UI/UX design, AI & analytics, and technical support. Clients agree to provide accurate information, adhere to agreed payment terms, and use our services for lawful purposes only. All project deliverables remain the property of CodeWin Solutions until full payment is received. We reserve the right to modify or terminate services if terms are violated, and we are not liable for indirect or consequential damages arising from service use.`;

const Footer = () => {
  const [modal, setModal] = useState(null); // 'privacy' | 'terms' | null

  return (
    <>
      {/* Policy Modal */}
      {modal && (
        <div className="policy-overlay" onClick={() => setModal(null)}>
          <div className="policy-modal" onClick={e => e.stopPropagation()}>
            <button className="policy-close" onClick={() => setModal(null)}>×</button>
            <h2>{modal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}</h2>
            <p>{modal === 'privacy' ? PRIVACY_TEXT : TERMS_TEXT}</p>
          </div>
        </div>
      )}
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-text">codewinsolutions</span>
          </div>
          <p className="footer-description">
             IT solutions provider in Sri Lanka, delivering innovative technology solutions for businesses worldwide.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/codewin_solutions?igsh=aml1a2gybDN2aHNq" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/codewinsolutions-alt" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://wa.me/94761302004" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp-icon">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3 className="footer-title">Our Services</h3>
          <ul className="footer-links">
            <li><Link to="/services">Web Design & Development</Link></li>
            <li><Link to="/services">Mobile App Development</Link></li>
            <li><Link to="/services">Custom Software</Link></li>
            <li><Link to="/services">Digital Marketing</Link></li>
            <li><Link to="/services">System Maintenance</Link></li>
            <li><Link to="/services">UI/UX Design</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-contact">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>33/3, Vandervert Place, Dehiwela, Sri Lanka</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>+94 762302004</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>info@codewinsolutions.com</span>
            </li>
            <li>
              <i className="fas fa-clock"></i>
              <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} Codewinsolutions. All rights reserved.</p>
          <div className="footer-bottom-links">
            <button className="footer-policy-btn" onClick={() => setModal('privacy')}>Privacy Policy</button>
            <span className="separator">|</span>
            <button className="footer-policy-btn" onClick={() => setModal('terms')}>Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/94761302004"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        title="Chat with us on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
};

export default Footer;
