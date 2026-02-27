import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Scene3D from '../components/Scene3D';
import Reviews from '../components/Reviews';
import BookingModal from '../components/BookingModal';
import './Home.css';

import webDevHeader from '../assets/images/service_web.jpg';
import mobileAppsHeader from '../assets/images/service_mobile.jpg';
import cloudHeader from '../assets/images/service_software.jpg';
import aiHeader from '../assets/images/service_marketing.jpg';
import marketingHeader from '../assets/images/service_maintenance.jpg';
import brandHeader from '../assets/images/service_uiux.jpg';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const openServiceModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;
    
    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMousePosition({
            x: (e.clientX / window.innerWidth) * 2 - 1,
            y: (e.clientY / window.innerHeight) * 2 - 1
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="home">
      {/* 3D Scene */}
      <div className="scene-3d-container">
        <Scene3D />
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hero-content-wrapper"
          >
            <div className="hero-badge">
              <span className="badge-icon"><i className="fas fa-bolt"></i></span>
              <span className="badge-text">Leading IT Solutions in Sri Lanka</span>
            </div>

            <h1 className="hero-main-title">
              <span className="text-white">Transform Your Business with</span>
              <span className="text-cyan"> CodeWin Solutions</span>
            </h1>

            <p className="hero-tagline">INNOVATE. ADAPT. DELIVER.</p>

            <p className="hero-description">
              We deliver cutting-edge technology solutions that drive digital transformation.
              From web and mobile development to cloud infrastructure and AI-powered analytics,
              we help businesses achieve their goals with innovative, scalable solutions.
            </p>

            <div className="hero-cta-group">
              <motion.a
                href="#services"
                className="btn-primary-large"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Services
                <span className="btn-arrow">→</span>
              </motion.a>
              <motion.a
                href="/contact"
                className="btn-secondary-large"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Consultation
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <div className="trust-badges">
              <div className="trust-item">
                <span className="trust-check"><i className="fas fa-check"></i></span>
                <span>24/7 Expert Support</span>
              </div>
              <div className="trust-item">
                <span className="trust-check"><i className="fas fa-check"></i></span>
                <span>Dedicated Solutions</span>
              </div>
              <div className="trust-item">
                <span className="trust-check"><i className="fas fa-check"></i></span>
                <span>Customized Approach</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services" className="services-preview">
        {/* Office Image Background */}
        <div className="office-image-bg"></div>

        <div>
          <h2 className="section-title">
            <span className="text-white">What We </span>
            <span className="text-cyan">Offer</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive IT solutions tailored to your business needs
          </p>

          <div className="services-grid">
            {[
              {
                id: 'web-development',
                image: webDevHeader,
                headerImage: webDevHeader,
                title: 'Web Design & Development',
                description: 'Creative, responsive websites and powerful web applications for your business.',
                duration: '2-4 weeks',
                packages: { normal: 400, standard: 700, premium: 1100 },
                features: ['UI Web Design', 'Frontend Development', 'Backend Integration', 'Responsive Layouts', 'SEO Optimization', 'Performance Tuning'],
                normalFeatures: ['5 Pages', 'Responsive Design', 'Basic SEO', 'Contact Form'],
                standardFeatures: ['10 Pages', 'Advanced Design', 'Enhanced SEO', 'CMS Integration', 'Social Media Integration'],
                premiumFeatures: ['Unlimited Pages', 'Custom Features', 'E-commerce', 'Advanced Analytics', 'Priority Support', 'Maintenance']
              },
              {
                id: 'mobile-development',
                image: mobileAppsHeader,
                headerImage: mobileAppsHeader,
                title: 'Mobile Application Development',
                description: 'High-performance mobile applications for Android and iOS platforms.',
                duration: '4-8 weeks',
                packages: { normal: 400, standard: 700, premium: 1200 },
                features: ['Android & iOS', 'Cross-Platform Apps', 'API Integration', 'App Optimization', 'Push Notifications', 'Cloud Sync'],
                normalFeatures: ['Single Platform', 'Basic Features', 'Standard UI', 'API Integration'],
                standardFeatures: ['Both Platforms', 'Advanced Features', 'Custom UI/UX', 'Push Notifications', 'Analytics'],
                premiumFeatures: ['Full Cross-Platform', 'Enterprise Features', 'Backend Development', 'Real-time Features', 'Advanced Security', 'Maintenance']
              },
              {
                id: 'custom-software',
                image: cloudHeader,
                headerImage: cloudHeader,
                title: 'Custom Software Development',
                description: 'Tailor-made software solutions built around your workflows and goals.',
                duration: '6-12 weeks',
                packages: { normal: 400, standard: 700, premium: 1100 },
                features: ['Business Software', 'Process Automation', 'Scalable Architecture', 'Secure Systems', 'Data Management', 'Reporting'],
                normalFeatures: ['Core Features', 'Standard Database', 'Basic Reporting', 'User Management'],
                standardFeatures: ['Advanced Features', 'Custom Database', 'Advanced Reporting', 'Role Management', 'API Development'],
                premiumFeatures: ['Enterprise Features', 'Multi-tenant', 'Real-time Analytics', 'Advanced Security', 'Cloud Deployment', 'Full Support']
              },
              {
                id: 'digital-marketing',
                image: aiHeader,
                headerImage: aiHeader,
                title: 'Digital Marketing',
                description: 'Improve online visibility, traffic, and leads through smart digital campaigns.',
                duration: 'Monthly',
                packages: { normal: 400, standard: 800, premium: 1600 },
                features: ['Search Engine Optimization', 'Meta Ads', 'Performance Tracking', 'Content Strategy', 'Social Media Management', 'Email Marketing'],
                normalFeatures: ['SEO Basics', 'Social Media Posts', 'Monthly Reports', 'Basic Analytics'],
                standardFeatures: ['Advanced SEO', 'Paid Advertising', 'Weekly Reports', 'A/B Testing', 'Content Creation'],
                premiumFeatures: ['Full SEO Service', 'Multi-channel Ads', 'Daily Monitoring', 'Advanced Analytics', 'Dedicated Manager', 'Strategy Consulting']
              },
              {
                id: 'system-maintenance',
                image: marketingHeader,
                headerImage: marketingHeader,
                title: 'System Maintenance',
                description: 'Reliable maintenance and technical support to keep systems stable and secure.',
                duration: 'Monthly',
                packages: { normal: 400, standard: 800, premium: 1600 },
                features: ['Routine Maintenance', 'Issue Resolution', 'System Monitoring', 'Security Updates', 'Backup Management', 'Performance Optimization'],
                normalFeatures: ['Monthly Updates', 'Bug Fixes', 'Basic Monitoring', 'Email Support'],
                standardFeatures: ['Weekly Updates', 'Priority Support', 'Advanced Monitoring', 'Security Patches', 'Performance Reports'],
                premiumFeatures: ['24/7 Monitoring', 'Instant Support', 'Proactive Maintenance', 'Advanced Security', 'Dedicated Team', 'SLA Guarantee']
              },
              {
                id: 'uiux-design',
                image: brandHeader,
                headerImage: brandHeader,
                title: 'UI/UX Design',
                description: 'User-friendly interface design focused on creativity, clarity, and engagement.',
                duration: '2-3 weeks',
                packages: { normal: 400, standard: 750, premium: 1250 },
                features: ['User Experience Design', 'Modern Interface Design', 'Wireframes & Prototypes', 'Usability Testing', 'Design System', 'Responsive Design'],
                normalFeatures: ['Basic Wireframes', '5 Screen Designs', 'Standard Components', 'Design Files'],
                standardFeatures: ['Advanced Wireframes', '15 Screen Designs', 'Interactive Prototype', 'User Testing', 'Design System'],
                premiumFeatures: ['Full User Journey', 'Unlimited Screens', 'Advanced Prototyping', 'Multiple User Tests', 'Complete Design System', 'Developer Handoff']
              }
            ].map((service, index) => (

              <div
                key={index}
                className="service-card-pro"
                onClick={() => openServiceModal(service)}
                style={{ cursor: 'pointer' }}
              >
                <div className="service-image-wrapper">
                  <img src={service.headerImage} alt={service.title} className="service-header-img" loading="lazy" decoding="async" />
                  <div className="service-overlay"></div>
                </div>
                <div className="service-content">
                  <h3 className="service-title-pro">{service.title}</h3>
                  <p className="service-desc-pro">{service.description}</p>
                  <ul className="service-features-pro">
                    {service.features.map((feature, i) => (
                      <li key={i}>
                        <span className="feature-check"><i className="fas fa-check"></i></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="service-link-pro">
                    <span>Learn More</span>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack">
        <div className="tech-stack-header">
          <h2 className="section-title"><span className="text-white">Our</span> <span className="gradient-text">Tech Stack</span></h2>
          <p className="section-subtitle">
            We use cutting-edge technologies to build robust solutions that scale with your business. 
            Our expert team leverages modern frameworks and tools to deliver high-performance, 
            secure, and maintainable applications tailored to your needs.
          </p>
        </div>

        <div className="tech-stack-timeline">
          {[
              { 
                name: 'React', 
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                description: 'A powerful JavaScript library for building modern, responsive user interfaces with reusable component architecture.',
                color: '#61DAFB'
              },
              { 
                name: 'Next.js', 
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
                description: 'Production-ready React framework with server-side rendering and static site generation capabilities.',
                color: '#FFFFFF'
              },
              { 
                name: 'Node.js', 
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                description: 'JavaScript runtime built on Chrome V8 engine for building fast and scalable network applications.',
                color: '#68A063'
              },
              { 
                name: 'MongoDB', 
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
                description: 'Document-oriented NoSQL database designed for ease of development and scaling.',
                color: '#4DB33D'
              },
              { 
                name: 'Python', 
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                description: 'High-level programming language perfect for AI, machine learning, data science, and backend development.',
                color: '#FFD43B'
              },
              { 
                name: 'Java', 
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
                description: 'Object-oriented language for building secure, portable enterprise-level applications.',
                color: '#E76F00'
              },
              { 
                name: 'MySQL', 
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
                description: 'World\'s most popular open-source relational database for reliable data management.',
                color: '#4479A1'
              }
            ].map((tech, index) => (
              <div
                key={index}
                className={`tech-timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                style={{ '--tech-color': tech.color }}
              >
                <div className="tech-timeline-content">
                  <div className="tech-timeline-icon">
                    <img src={tech.img} alt={tech.name} loading="lazy" decoding="async" />
                  </div>
                  <div className="tech-timeline-text">
                    <h3>{tech.name}</h3>
                    <p>{tech.description}</p>
                  </div>
                </div>
                <div className="tech-timeline-connector"></div>
              </div>
            ))}
          </div>
      </section>

      {/* Client Reviews Section */}
      <Reviews />

      {/* FAQ Section */}
      <section className="faq-section">
        <div>
          <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="section-subtitle">
            Find answers to common questions about our services
          </p>

          <div className="faq-wrapper">
            <div className="faq-container">
              {[
                {
                  question: 'How long does it take to develop a website?',
                  answer: 'Typically, a basic website takes 4-6 weeks, while more complex web applications can take 2-4 months. The timeline depends on project complexity, features required, and your feedback turnaround time.'
                },
                {
                  question: 'Do you provide ongoing support and maintenance?',
                  answer: 'Yes! All our packages include support ranging from 3 to 12 months depending on the plan. We also offer extended maintenance contracts for continued support, updates, and security patches.'
                },
                {
                  question: 'Can you work with my existing website or system?',
                  answer: 'Absolutely! We can integrate with, upgrade, or completely rebuild your existing systems. We\'ll assess your current setup and provide the best solution for your needs.'
                },
                {
                  question: 'What is your payment structure?',
                  answer: 'We typically follow a milestone-based payment structure: 30% upfront, 40% at mid-project review, and 30% upon completion. Custom payment plans can be arranged for enterprise projects.'
                },
                {
                  question: 'Do you provide hosting and domain services?',
                  answer: 'Yes, we can set up and manage your hosting on AWS, Azure, or other cloud platforms. We also assist with domain registration and DNS configuration as part of our deployment services.'
                },
                {
                  question: 'Can you help migrate my application to the cloud?',
                  answer: 'Yes! We specialize in cloud migration services. We can help you move your existing applications to AWS, Azure, or Google Cloud, ensuring minimal downtime and optimal performance.'
                },
                {
                  question: 'What technologies do you specialize in?',
                  answer: 'We work with modern technologies including React, Node.js, Python, MongoDB, PostgreSQL, AWS, Docker, and more. We choose the best tech stack based on your specific requirements.'
                },
                {
                  question: 'Do you sign NDAs and ensure data security?',
                  answer: 'Yes, we prioritize confidentiality and security. We\'re happy to sign NDAs and follow strict security protocols to protect your data and intellectual property throughout the project.'
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className={`glass-card faq-item ${activeIndex === index ? 'active' : ''}`}
                >
                  <div className="faq-question" onClick={() => toggleFAQ(index)}>
                    <h3>{faq.question}</h3>
                    <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                  </div>
                  <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="faq-image-container"
            >
              <div className="glass-card faq-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                  alt="Team collaboration in modern office"
                  className="faq-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="faq-image-overlay">
                  <h3>Need More Help?</h3>
                  <p>Our team is here to answer all your questions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="faq-cta">
            <p>Still have questions?</p>
            <a href="/contact" className="faq-contact-btn">Contact Us</a>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {isModalOpen && (
        <BookingModal 
          service={selectedService} 
          onClose={closeServiceModal} 
        />
      )}
    </div>
  );
};

export default Home;
