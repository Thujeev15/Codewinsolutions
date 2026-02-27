import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

import serviceWeb from '../assets/images/service_web.jpg';
import serviceMobile from '../assets/images/service_mobile.jpg';
import serviceSoftware from '../assets/images/service_software.jpg';
import serviceMarketing from '../assets/images/service_marketing.jpg';
import serviceMaintenance from '../assets/images/service_maintenance.jpg';
import serviceUiux from '../assets/images/service_uiux.jpg';

import bentoFast from '../assets/images/bento_fast.jpg';
import bentoInnovation from '../assets/images/bento_innovation.jpg';
import bentoSecurity from '../assets/images/bento_security.jpg';

const Services = () => {
  const services = [
    {
      title: 'Web Design & Development',
      description: 'Creative, responsive websites and powerful web applications for your business.',
      image: serviceWeb,
      features: ['UI Web Design', 'Frontend Development', 'Backend Integration', 'Responsive Layouts'],
      color: '#6366F1',
      number: '01'
    },
    {
      title: 'Mobile Application Development',
      description: 'High-performance mobile applications for Android and iOS platforms.',
      image: serviceMobile,
      features: ['Android & iOS', 'Cross-Platform Apps', 'API Integration', 'App Optimization'],
      color: '#8B5CF6',
      number: '02'
    },
    {
      title: 'Custom Software Development',
      description: 'Tailor-made software solutions built around your workflows and goals.',
      image: serviceSoftware,
      features: ['Business Software', 'Process Automation', 'Scalable Architecture', 'Secure Systems'],
      color: '#EC4899',
      number: '03'
    },
    {
      title: 'Digital Marketing (SEO & Meta Advertising)',
      description: 'Improve online visibility, traffic, and leads through smart digital campaigns.',
      image: serviceMarketing,
      features: ['Search Engine Optimization', 'Meta Ads', 'Performance Tracking', 'Lead Generation'],
      color: '#F59E0B',
      number: '04'
    },
    {
      title: 'System Maintenance & Technical Support',
      description: 'Reliable maintenance and technical support to keep systems stable and secure.',
      image: serviceMaintenance,
      features: ['Routine Maintenance', 'Issue Resolution', 'System Monitoring', 'Technical Assistance'],
      color: '#10B981',
      number: '05'
    },
    {
      title: 'UI/UX Design (Creative & Modern Interfaces)',
      description: 'User-friendly interface design focused on creativity, clarity, and engagement.',
      image: serviceUiux,
      features: ['User Experience Design', 'Modern Interface Design', 'Wireframes & Prototypes', 'Design Consistency'],
      color: '#3B82F6',
      number: '06'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Banner */}
      <section className="services-banner">
        <div className="banner-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="banner-tag">What We Do</span>
            <h1 className="banner-title">
              <span className="text-white">Our Services &</span><br/>
              <span className="text-cyan">Solutions</span>
            </h1>
            <p className="banner-description">
              Delivering cutting-edge technology solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
        <div className="banner-overlay"></div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="services-wrapper">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-box"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {service.image && (
                <div className="service-background-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-image-overlay"></div>
                </div>
              )}
              
              <div className="service-header">
                <span className="service-num">{service.number}</span>
              </div>
              
              <h3 className="service-name">{service.title}</h3>
              <p className="service-text">{service.description}</p>
              
              <ul className="service-list">
                {service.features && service.features.map((feature, i) => (
                  <li key={i}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="service-link">
                <span>Learn More</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us - Modern Bento Box */}
      <section className="why-section">
        <div className="why-header">
          <motion.span 
            className="why-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Codewin Advantage
          </motion.span>
          <motion.h2 
            className="why-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Why Choose <span className="text-cyan">Codewinsolutions</span>
          </motion.h2>
          <motion.p 
            className="why-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            We blend cutting-edge technology with strategic thinking to deliver solutions that put you ahead of the competition.
          </motion.p>
        </div>

        <div className="bento-grid">
          {/* Large Feature Card */}
          <motion.div 
            className="bento-card large-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bento-bg-image" style={{ backgroundImage: `url(${bentoFast})` }}></div>
            <div className="bento-content">
              <h3>Lightning Fast Delivery</h3>
              <p>We utilize agile methodologies and modern tech stacks to accelerate development cycles, ensuring your product reaches the market faster without compromising on quality.</p>
            </div>
            <div className="bento-glow"></div>
          </motion.div>

          {/* Medium Feature Card 1 */}
          <motion.div 
            className="bento-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bento-bg-image" style={{ backgroundImage: `url(${bentoInnovation})` }}></div>
            <div className="bento-content">
              <h3>Innovative Solutions</h3>
              <p>Forward-thinking approaches using AI, Cloud, and modern frameworks.</p>
            </div>
          </motion.div>

          {/* Medium Feature Card 2 */}
          <motion.div 
            className="bento-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bento-bg-image" style={{ backgroundImage: `url(${bentoSecurity})` }}></div>
            <div className="bento-content">
              <h3>Enterprise Security</h3>
              <p>Bank-grade security protocols and best practices built into every project.</p>
            </div>
          </motion.div>

          {/* Wide Feature Card */}
          <motion.div 
            className="bento-card wide-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bento-content bento-flex">
              <div className="bento-text">
                <h3>24/7 Dedicated Support</h3>
                <p>Our commitment doesn't end at launch. We provide continuous monitoring, maintenance, and dedicated technical support to ensure your systems run flawlessly around the clock.</p>
              </div>
              <div className="bento-stats">
                <div className="stat-item">
                  <span className="stat-num">99.9%</span>
                  <span className="stat-label">Uptime</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Get Started?</h2>
          <p>Let's bring your ideas to life with our expert team</p>
          <div className="cta-buttons-group">
            <motion.a 
              href="/contact" 
              className="cta-btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.a>
            <motion.a 
              href="/about" 
              className="cta-btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;

