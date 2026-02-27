import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Header */}
      <div className="about-hero">
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-tag">Who We Are</span>
          <h1 className="about-title">
            <span className="text-white">About</span> <span className="text-cyan">Codewinsolutions</span>
          </h1>
          <p className="about-subtitle">
            Empowering businesses through innovative technology solutions since 2026
          </p>
        </motion.div>
      </div>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="mission-container">
          <motion.div
            className="mission-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mission-icon"><i className="fas fa-bullseye"></i></div>
            <h3>Our Mission</h3>
            <p>
              To empower businesses with innovative technology solutions that drive growth,
              efficiency, and competitive advantage in the digital age.
            </p>
          </motion.div>

          <motion.div
            className="mission-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mission-icon">👁️</div>
            <h3>Our Vision</h3>
            <p>
              To become the leading IT solutions provider in Sri Lanka, recognized for
              excellence, innovation, and transformative impact on businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="story-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title"><span className="text-white">Our</span> <span className="text-cyan">Story</span></h2>

          <div className="story-content">
            <div className="story-image">
              {/*our photo add pending */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                alt="Team working together"
              />
            </div>
            <div className="story-text">
              <p>
                Codewinsolutations was founded with a clear vision: to bridge the gap between
                cutting-edge technology and business success. Based in the heart of Sri Lanka,
                we've grown from a small startup to a trusted technology partner for businesses
                across various industries.
              </p>
              <p>
                Our team of passionate developers, designers, and strategists work together to
                deliver solutions that not only meet current needs but anticipate future challenges.
                We believe in the power of technology to transform businesses and create lasting value.
              </p>
              <p>
                With expertise spanning web development, mobile applications, cloud solutions, and
                emerging technologies like AI and machine learning, we're equipped to handle projects
                of any scale and complexity.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div>
          <h2 className="section-title"><span className="text-white">Our</span> <span className="text-cyan">Values</span></h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>

          <div className="values-list">
            {/* Innovation */}
            <div className="value-item">
              <div className="value-image-container">
                <img src="/t3.jpeg" alt="Innovation" className="value-image" />
              </div>
              <div className="value-content">
                <h3 className="value-title">Innovation</h3>
                <p className="value-text">
                  We believe in constantly pushing boundaries and exploring new possibilities. Our team embraces 
                  cutting-edge technologies and creative solutions to solve complex problems. Innovation isn't just 
                  about technology—it's about finding better ways to serve our clients and deliver exceptional results 
                  that drive their business forward.
                </p>
              </div>
            </div>

            {/* Collaboration */}
            <div className="value-item value-item-reverse">
              <div className="value-image-container">
                <img src="/m1.jpeg" alt="Collaboration" className="value-image" />
              </div>
              <div className="value-content">
                <h3 className="value-title">Collaboration</h3>
                <p className="value-text">
                  We work together with our clients as true partners, not just service providers. Strong collaboration 
                  leads to better understanding, stronger relationships, and superior outcomes. By combining your industry 
                  expertise with our technical knowledge, we create solutions that truly meet your needs and exceed expectations.
                </p>
              </div>
            </div>

            {/* Excellence */}
            <div className="value-item">
              <div className="value-image-container">
                <img src="/Excellence.jpeg" alt="Excellence" className="value-image" />
              </div>
              <div className="value-content">
                <h3 className="value-title">Excellence</h3>
                <p className="value-text">
                  Quality is at the heart of everything we do. From the first line of code to the final deployment, we 
                  maintain the highest standards. Our commitment to excellence means thorough testing, clean code, 
                  thoughtful design, and attention to every detail that makes the difference between good and great.
                </p>
              </div>
            </div>

            {/* Integrity */}
            <div className="value-item value-item-reverse">
              <div className="value-image-container">
                <img src="agi.jpeg" alt="Integrity" className="value-image" />
              </div>
              <div className="value-content">
                <h3 className="value-title">Integrity</h3>
                <p className="value-text">
                  Trust is the foundation of every successful partnership. We believe in complete transparency, honest 
                  communication, and always doing the right thing—even when it's difficult. Our integrity means you can 
                  count on us to deliver on our promises and maintain the highest ethical standards in all our work.
                </p>
              </div>
            </div>

            {/* Agility */}
            <div className="value-item">
              <div className="value-image-container">
                <img src="agi.jpeg" alt="Agility" className="value-image" />
              </div>
              <div className="value-content">
                <h3 className="value-title">Agility</h3>
                <p className="value-text">
                  In today's fast-paced digital world, adaptability is crucial. We embrace change and respond quickly to 
                  evolving needs and technologies. Our agile approach allows us to pivot when necessary, incorporate 
                  feedback rapidly, and deliver value continuously throughout the development process.
                </p>
              </div>
            </div>

            {/* Learning */}
            <div className="value-item value-item-reverse">
              <div className="value-image-container">
                <img src="learning.jpeg" alt="Continuous Learning" className="value-image" />
              </div>
              <div className="value-content">
                <h3 className="value-title">Continuous Learning</h3>
                <p className="value-text">
                  The technology landscape is always evolving, and so are we. We're committed to continuous growth and 
                  skill development. Our team stays current with the latest trends, tools, and best practices, ensuring 
                  that we bring the most effective and modern solutions to every project we undertake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title"><span className="text-white">Meet Our</span> <span className="text-cyan">Team</span></h2>
          <p className="section-subtitle">
            Talented professionals dedicated to your success
          </p>

          <div className="team-grid">
            {[
              {
                name: 'Thurshikan Srithar',
                role: 'Founder',
                
              },
              {
                name: 'Thanushkanth Jeyaseelan',
                role: 'CEO',
                
              },
              {
                name: 'Thujeev Kamaleswaran',
                role: 'CTO',
                
              },
              {
                name: 'Prakash Jeganadhan',
                role: 'CFO',
                
              },
              

              
            ].map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
