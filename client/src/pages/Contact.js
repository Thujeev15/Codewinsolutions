import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [showPortfolioModal, setShowPortfolioModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, info: { error: false, msg: null } });

    try {
      const response = await axios.post('/api/contact', formData);
      setSubmittedData({ ...formData });
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: response.data.message }
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'Failed to send message. Please try again.' }
      });
    }
  };

  return (
    <div className="contact-page">
      {/* Portfolio Coming Soon - Full Screen */}
      {showPortfolioModal && (
        <div
          style={{
            position: 'fixed', inset: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#0a0a1e',
            zIndex: 99999,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', padding: '20px'
          }}
        >
          {/* Dark overlay matching home page */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(0,0,0,0.65)',
          }} />

          {/* All content above overlay */}
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          {/* Close */}
          <button
            onClick={() => setShowPortfolioModal(false)}
            style={{
              position: 'fixed', top: '28px', right: '32px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.6)', width: '42px', height: '42px',
              borderRadius: '50%', fontSize: '20px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 2
            }}
          >×</button>

          {/* Subtle teal glow */}
          <div style={{
            position: 'absolute', width: '500px', height: '500px',
            borderRadius: '50%', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(69,214,196,0.08) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          {/* Tag */}
          <span style={{
            display: 'inline-block', padding: '6px 18px',
            border: '1px solid rgba(69,214,196,0.4)',
            borderRadius: '30px', color: '#45D6C4',
            fontSize: '11px', fontWeight: '700',
            letterSpacing: '2.5px', textTransform: 'uppercase',
            marginBottom: '28px', background: 'rgba(69,214,196,0.06)'
          }}>Portfolio</span>

          {/* Heading */}
          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '800',
            color: '#ffffff', marginBottom: '20px', lineHeight: 1.1,
            letterSpacing: '-1px'
          }}>
            We're Working On
            <br />
            <span style={{
              background: 'linear-gradient(90deg, #45D6C4, #00B8A9)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>Something Great</span>
          </h1>

          {/* Subtext */}
          <p style={{
            color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(15px, 2vw, 18px)',
            lineHeight: 1.7, maxWidth: '480px', marginBottom: '44px', textAlign: 'center'
          }}>
            Our portfolio is being curated with our finest work.<br />
            <strong style={{ color: 'rgba(255,255,255,0.75)', fontWeight: '600' }}>We will update soon!</strong>
          </p>

          {/* Button */}
          <button
            onClick={() => setShowPortfolioModal(false)}
            style={{
              padding: '14px 40px',
              background: 'transparent',
              border: '2px solid #45D6C4',
              borderRadius: '50px', color: '#45D6C4',
              fontSize: '15px', fontWeight: '600',
              cursor: 'pointer', letterSpacing: '0.5px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={e => { e.currentTarget.style.background = 'rgba(69,214,196,0.12)'; }}
            onMouseOut={e => { e.currentTarget.style.background = 'transparent'; }}
          >Go Back</button>

          </div>
        </div>
      )}
      {/* Hero Header */}
      <div className="contact-hero">
        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-tag">Contact Us</span>
          <h1 className="contact-title">
            <span className="text-white">Get In</span> <span className="text-cyan">Touch</span>
          </h1>
          <p className="contact-subtitle">
            Let's discuss how we can help transform your business
          </p>
        </motion.div>
      </div>

      <div className="contact-container">
        <div className="contact-content">
          {/* Contact Form */}
          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+94 XX XXX XXXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn-primary"
                disabled={status.submitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {status.info.msg && (
                <div className={`status-message ${status.info.error ? 'error' : 'success'}`}>
                  {status.info.msg}
                </div>
              )}

              {status.submitted && submittedData && (
                <a
                  href={`https://wa.me/94761302004?text=${encodeURIComponent(
                    `Hi CodeWin Solutions!%0A%0AName: ${submittedData.name}%0AEmail: ${submittedData.email}%0APhone: ${submittedData.phone || 'N/A'}%0A%0AMessage:%0A${submittedData.message}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    marginTop: '12px', padding: '13px 24px',
                    background: '#25d366', borderRadius: '10px',
                    color: '#fff', fontWeight: '700', fontSize: '15px',
                    textDecoration: 'none', boxShadow: '0 4px 16px rgba(37,211,102,0.35)'
                  }}
                >
                  <i className="fab fa-whatsapp" style={{ fontSize: '20px' }}></i>
                  Also Send via WhatsApp
                </a>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Image */}
          <div className="contact-sidebar">
            {/* Office Image */}
            <motion.div
              className="office-image"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80" 
                alt="Modern office workspace"
              />
              <div className="image-overlay"></div>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="info-card">
                <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
                <h3>Location</h3>
                <p>33/3, Vandervert Place, Dehiwela</p>
              </div>

              <div className="info-card">
                <div className="info-icon"><i className="fas fa-envelope"></i></div>
                <h3>Email</h3>
                <p>info@codewinsolutions.com</p>
              </div>

              <div className="info-card">
                <div className="info-icon"><i className="fas fa-phone"></i></div>
                <h3>Phone</h3>
                <p>+94761302004</p>
              </div>

              <div className="info-card">
                <div className="info-icon"><i className="fas fa-clock"></i></div>
                <h3>Business Hours</h3>
                <p>Monday - Friday</p>
                <p>9:00 AM - 6:00 PM</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="map-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="map-title">
            <span className="text-white">Find Us in</span> <span className="text-cyan">Dehiwela</span>
          </h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps?q=33%2F3%2C%20Vandervert%20Place%2C%20Dehiwela&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dehiwela Location Map"
            ></iframe>
          </div>
          <p style={{ marginTop: '12px', textAlign: 'center' }}>
            <a
              href="https://maps.app.goo.gl/ZC8HGJMBp4FJkdq59"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan"
            >
              Open exact location in Google Maps
            </a>
          </p>
        </motion.div>
      </section>

      {/* Map/CTA Section */}
      <section className="cta-section">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Ready to start your project?</h2>
          <p>
            Join the growing number of businesses that trust Codewinsolutions 
            to deliver innovative technology solutions.
          </p>
          <div className="cta-buttons">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Call
            </motion.button>
            <motion.button
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPortfolioModal(true)}
            >
              View Portfolio
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
