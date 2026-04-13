import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import TeamMemberPanel from '../components/TeamMemberPanel';
import './About.css';

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Codewinsolutions",
      "description": "A passionate team of developers, designers, and digital strategists dedicated to delivering cutting-edge IT solutions. We combine technical excellence with creative innovation to help businesses thrive in the digital age.",
      "foundingDate": "2020",
      "slogan": "Innovating Solutions, Empowering Growth"
    }
  };

  return (
    <div className="about-page">
      <SEO
        title="About Us - Expert IT Team & Company Story | Codewinsolutions"
        description="Meet the passionate team behind Codewinsolutions. Learn about our mission, values, and expertise in delivering innovative IT solutions. Based in Sri Lanka, serving clients worldwide with excellence."
        keywords="about codewinsolutions, IT company Sri Lanka, software development team, web development experts, technology company, IT services Jaffna, our team, company profile"
        url="/about"
        schema={aboutSchema}
      />

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
            <div className="story-gallery">
              <div className="story-image-card story-image-main">
                <img
                  src="/our-team.jpeg"
                  alt="Codewinsolutions team collaboration"
                  className="story-image-single story-image-main-img"
                />
              </div>
              <div className="story-image-card story-image-secondary">
                <img
                  src="/our-mem.jpeg"
                  alt="Codewinsolutions team meetup"
                  className="story-image-single story-image-secondary-img"
                />
              </div>
              <div className="story-image-card story-image-tertiary">
                <img
                  src="/out-t.jpeg"
                  alt="Codewinsolutions team moments"
                  className="story-image-single story-image-tertiary-img"
                />
              </div>
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

              <div className="story-highlights">
                <div className="story-highlight">
                  <span className="highlight-number">2026</span>
                  <span className="highlight-label">Founded</span>
                </div>
                <div className="story-highlight">
                  <span className="highlight-number">50+</span>
                  <span className="highlight-label">Projects Delivered</span>
                </div>
                <div className="story-highlight">
                  <span className="highlight-number">Global</span>
                  <span className="highlight-label">Client Reach</span>
                </div>
              </div>
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
                name: 'Thurshikan S',
                role: 'Founder',
                qualification: 'BSc (Hons) in Information Technology(SLIIT)',
                image: '/thurshi.jpeg',
                bio: 'Thurshikan is the visionary founder of Codewinsolutions, bringing innovative ideas and strategic direction to the company. With a passion for technology and entrepreneurship, he established Codewinsolutions with the mission to transform businesses through cutting-edge digital solutions.\n\nWith extensive experience in software development and business strategy, Thurshikan leads the company with a focus on delivering exceptional value to clients while fostering a culture of innovation and excellence. His leadership has been instrumental in establishing Codewinsolutions as a trusted technology partner for businesses across various industries.',
                linkedin: 'https://www.linkedin.com/in/thurshikan-srithar-519a41401?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                github: 'https://github.com/thurshikan',
                email: 'thurshikan@codewinsolutions.com'
              },
              {
                name: 'Thanushkanth J',
                role: 'CEO',
                qualification: 'BSc Hons) in Software Engineering (SLIIT)',
                image: '/mo.jpeg',
                imageFit: 'contain',
                imagePosition: 'center top',
                imageBackground: '#ffffff',
                bio: 'As CEO of Codewinsolutions, Thanushkanth drives the company\'s growth strategy and operational excellence. His leadership style combines strategic vision with hands-on execution, ensuring that every project delivers measurable results for clients.\n\nWith a strong background in technology management and business development, Thanushkanth has successfully led multiple large-scale digital transformation projects. He is committed to building lasting relationships with clients and creating innovative solutions that address real business challenges.',
                linkedin: 'https://linkedin.com/in/thanushkanth-jeyaseelan',
                github: 'https://github.com/thanushkanth',
                email: 'thanushkanth@codewinsolutions.com'
              },
              {
                name: 'Pahalavan K',

                role: 'COO',
                qualification: 'BSc in Computer Science (Deakin University)',
                image: '/pk2.jpeg',
                bio: 'As COO of Codewinsolutions, Pahalavan oversees the company\'s day-to-day operations and ensures seamless execution of strategic initiatives. His expertise in technology management and business development has been crucial in driving the company\'s growth and success.\n\nWith a strong background in computer science and a passion for innovation, Pahalavan is dedicated to delivering high-quality solutions that meet the evolving needs of our clients.',
                linkedin: 'https://www.linkedin.com/in/pahalavan-kandeepan-380205345?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
                github: 'https://github.com/Pahalavan3',
                email: 'pahalavan@codewinsolutions.com'
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
                onClick={() => setSelectedMember(member)}
                style={{ cursor: 'pointer' }}
              >
                <div
                  className="team-image"
                  style={member.imageBackground ? { backgroundColor: member.imageBackground } : undefined}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={
                      member.imageFit || member.imagePosition
                        ? {
                            objectFit: member.imageFit || 'cover',
                            objectPosition: member.imagePosition || 'center top'
                          }
                        : undefined
                    }
                  />
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                {member.qualification && (
                  <p className="team-qualification">{member.qualification}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Member Detail Panel */}
      <TeamMemberPanel
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
};

export default About;
