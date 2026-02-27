import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ServiceDetail.css';

import webDevHeader from '../assets/images/service_web.jpg';
import mobileAppsHeader from '../assets/images/service_mobile.jpg';
import cloudHeader from '../assets/images/service_software.jpg';
import marketingHeader from '../assets/images/service_marketing.jpg';
import maintenanceHeader from '../assets/images/service_maintenance.jpg';
import uiuxHeader from '../assets/images/service_uiux.jpg';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const servicesData = {
    'web-development': {
      title: 'Web Design & Development',
      headerImage: webDevHeader,
      description: 'Transform your online presence with cutting-edge web solutions that combine stunning design with powerful functionality.',
      fullDescription: 'Our web development services deliver responsive, user-friendly websites and robust web applications tailored to your business needs. We leverage the latest technologies including React, Next.js, and Node.js to create fast, scalable, and secure digital experiences that drive results.',
      features: [
        { title: 'UI/UX Web Design', description: 'Beautiful, intuitive interfaces that engage users and reflect your brand identity.' },
        { title: 'Frontend Development', description: 'Modern, responsive interfaces built with React, Vue, or Angular for seamless user experiences.' },
        { title: 'Backend Integration', description: 'Robust server-side architecture with secure APIs and database management.' },
        { title: 'Responsive Design', description: 'Mobile-first approach ensuring perfect display across all devices and screen sizes.' },
        { title: 'Performance Optimization', description: 'Lightning-fast load times and optimized code for superior user experience.' },
        { title: 'SEO Ready', description: 'Built-in SEO best practices to improve your search engine rankings.' }
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'HTML5', 'CSS3', 'JavaScript'],
      benefits: [
        'Increased online visibility and brand recognition',
        'Enhanced user engagement and conversion rates',
        'Scalable architecture for future growth',
        '24/7 reliable performance and uptime'
      ]
    },
    'mobile-development': {
      title: 'Mobile Application Development',
      headerImage: mobileAppsHeader,
      description: 'Build powerful mobile experiences that users love with native and cross-platform mobile applications.',
      fullDescription: 'We create high-performance mobile applications for iOS and Android platforms that deliver exceptional user experiences. Whether you need a native app or cross-platform solution, our team uses cutting-edge technologies to bring your mobile vision to life.',
      features: [
        { title: 'Native iOS & Android', description: 'Platform-specific apps optimized for the best performance and user experience.' },
        { title: 'Cross-Platform Development', description: 'Build once, deploy everywhere with React Native or Flutter technologies.' },
        { title: 'API Integration', description: 'Seamless integration with third-party services and backend systems.' },
        { title: 'App Optimization', description: 'Performance tuning for smooth animations and fast response times.' },
        { title: 'Push Notifications', description: 'Keep users engaged with timely, relevant push notification systems.' },
        { title: 'Offline Functionality', description: 'Apps that work seamlessly even without an internet connection.' }
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'REST APIs'],
      benefits: [
        'Reach customers on their preferred devices',
        'Increase customer engagement and loyalty',
        'Streamline business operations with mobile tools',
        'Generate new revenue streams through mobile channels'
      ]
    },
    'custom-software': {
      title: 'Custom Software Development',
      headerImage: cloudHeader,
      description: 'Tailored software solutions designed specifically for your unique business workflows and requirements.',
      fullDescription: 'Our custom software development services create bespoke solutions that perfectly align with your business processes and goals. From enterprise applications to specialized tools, we build scalable, secure, and efficient software that gives you a competitive edge.',
      features: [
        { title: 'Business Software', description: 'Custom applications designed to streamline your specific business operations.' },
        { title: 'Process Automation', description: 'Automate repetitive tasks and workflows to boost productivity and reduce errors.' },
        { title: 'Scalable Architecture', description: 'Future-proof solutions that grow with your business needs.' },
        { title: 'System Integration', description: 'Connect all your systems for seamless data flow and operations.' },
        { title: 'Cloud Solutions', description: 'Leverage cloud technology for flexibility, reliability, and cost-effectiveness.' },
        { title: 'Security First', description: 'Enterprise-grade security measures to protect your sensitive data.' }
      ],
      technologies: ['Java', 'Python', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS'],
      benefits: [
        'Improved operational efficiency and productivity',
        'Reduced manual errors and operational costs',
        'Better data-driven decision making',
        'Competitive advantage through custom solutions'
      ]
    },
    'digital-marketing': {
      title: 'Digital Marketing (SEO & Meta Advertising)',
      headerImage: marketingHeader,
      description: 'Boost your online presence and drive qualified traffic with data-driven digital marketing strategies.',
      fullDescription: 'Our digital marketing services combine SEO expertise with targeted advertising campaigns to maximize your online visibility and ROI. We create comprehensive strategies that attract, engage, and convert your target audience across multiple digital channels.',
      features: [
        { title: 'Search Engine Optimization', description: 'Improve organic rankings and visibility on Google and other search engines.' },
        { title: 'Meta Ads Management', description: 'Targeted Facebook and Instagram advertising campaigns that deliver results.' },
        { title: 'Performance Tracking', description: 'Detailed analytics and reporting to measure campaign effectiveness.' },
        { title: 'Content Strategy', description: 'Engaging content that resonates with your audience and boosts engagement.' },
        { title: 'Keyword Research', description: 'Identify high-value keywords to target your ideal customers.' },
        { title: 'Conversion Optimization', description: 'Turn visitors into customers with optimized landing pages and funnels.' }
      ],
      technologies: ['Google Analytics', 'SEMrush', 'Meta Business Suite', 'Google Ads', 'Ahrefs'],
      benefits: [
        'Increased website traffic and brand awareness',
        'Higher search engine rankings',
        'Better ROI on advertising spend',
        'More qualified leads and conversions'
      ]
    },
    'system-maintenance': {
      title: 'System Maintenance & Technical Support',
      headerImage: maintenanceHeader,
      description: 'Keep your systems running smoothly with proactive maintenance and responsive technical support.',
      fullDescription: 'Our comprehensive maintenance and support services ensure your IT infrastructure remains stable, secure, and performing optimally. We provide proactive monitoring, regular updates, and rapid issue resolution to minimize downtime and keep your business running smoothly.',
      features: [
        { title: 'Routine Maintenance', description: 'Regular system updates, backups, and preventive maintenance tasks.' },
        { title: 'Issue Resolution', description: 'Quick diagnosis and resolution of technical problems to minimize downtime.' },
        { title: 'System Monitoring', description: '24/7 monitoring to detect and address issues before they impact your business.' },
        { title: 'Security Updates', description: 'Regular security patches and updates to protect against threats.' },
        { title: 'Performance Tuning', description: 'Ongoing optimization to ensure peak system performance.' },
        { title: 'Technical Support', description: 'Responsive support team available to assist with any technical issues.' }
      ],
      technologies: ['Monitoring Tools', 'Backup Solutions', 'Security Software', 'Help Desk Systems'],
      benefits: [
        'Minimized system downtime and disruptions',
        'Enhanced security and data protection',
        'Extended system lifespan and reliability',
        'Peace of mind with expert support'
      ]
    },
    'uiux-design': {
      title: 'UI/UX Design (Creative & Modern Interfaces)',
      headerImage: uiuxHeader,
      description: 'Create memorable digital experiences with user-centered design that delights and engages.',
      fullDescription: 'Our UI/UX design services focus on creating intuitive, beautiful interfaces that users love. We combine research, creativity, and best practices to design digital experiences that are both functional and aesthetically pleasing, ensuring your product stands out in the market.',
      features: [
        { title: 'User Experience Design', description: 'Research-driven UX design that puts users at the center of everything.' },
        { title: 'Modern Interface Design', description: 'Beautiful, contemporary UI designs that reflect your brand identity.' },
        { title: 'Wireframes & Prototypes', description: 'Interactive prototypes to visualize and test designs before development.' },
        { title: 'User Research', description: 'In-depth user research and testing to inform design decisions.' },
        { title: 'Design Systems', description: 'Comprehensive design systems for consistent, scalable interfaces.' },
        { title: 'Responsive Design', description: 'Designs that work seamlessly across all devices and platforms.' }
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro', 'UserTesting'],
      benefits: [
        'Improved user satisfaction and engagement',
        'Higher conversion rates and ROI',
        'Reduced development time and costs',
        'Stronger brand recognition and loyalty'
      ]
    }
  };

  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="service-detail-container">
        <div className="service-not-found">
          <h1>Service Not Found</h1>
          <button onClick={() => navigate('/')} className="btn-back">Go Back Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-container">
      {/* Hero Section */}
      <motion.section 
        className="service-detail-hero"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${service.headerImage})` 
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.button 
            onClick={() => navigate('/')} 
            className="btn-back-hero"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Home
          </motion.button>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {service.description}
          </motion.p>
        </div>
      </motion.section>

      {/* Overview Section */}
      <section className="service-overview">
        <div className="overview-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2><i className="fas fa-lightbulb"></i> Overview</h2>
            <p className="overview-text">{service.fullDescription}</p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-features-section">
        <div className="features-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <i className="fas fa-bolt"></i> Key Features
          </motion.h2>
          <div className="features-grid">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="feature-icon"><i className="fas fa-check"></i></div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="service-tech-section">
        <div className="tech-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <i className="fas fa-tools"></i> Technologies We Use
          </motion.h2>
          <motion.div 
            className="tech-tags"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {service.technologies.map((tech, index) => (
              <motion.span 
                key={index} 
                className="tech-tag"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits-section">
        <div className="benefits-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <i className="fas fa-bullseye"></i> Benefits for Your Business
          </motion.h2>
          <div className="benefits-list">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="benefit-check"><i className="fas fa-check"></i></span>
                <p>{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta-section">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2><i className="fas fa-rocket"></i> Ready to Get Started?</h2>
          <p>Let's discuss how we can help transform your business with our {service.title.toLowerCase()} services.</p>
          <motion.button 
            onClick={() => navigate('/contact')} 
            className="btn-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default ServiceDetail;
