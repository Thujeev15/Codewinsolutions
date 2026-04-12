import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import SEO from '../components/SEO';
import './Career.css';

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [applicationData, setApplicationData] = useState({
    jobTitle: '',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
    skills: '',
    coverLetter: '',
    cvFile: null
  });
  const [submitStatus, setSubmitStatus] = useState({ show: false, success: false, message: '' });

  // Handle apply button click
  const handleApplyClick = (job) => {
    setApplicationData({ ...applicationData, jobTitle: job.title });
    setShowApplicationModal(true);
    setCurrentStep(1);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData({ ...applicationData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5000000) { // 5MB limit
      setApplicationData({ ...applicationData, cvFile: file });
    } else {
      alert('File size should be less than 5MB');
    }
  };

  // Navigate steps
  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Submit application
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('jobTitle', applicationData.jobTitle);
    formData.append('fullName', applicationData.fullName);
    formData.append('email', applicationData.email);
    formData.append('phone', applicationData.phone);
    formData.append('address', applicationData.address);
    formData.append('education', applicationData.education);
    formData.append('experience', applicationData.experience);
    formData.append('skills', applicationData.skills);
    formData.append('coverLetter', applicationData.coverLetter);
    if (applicationData.cvFile) {
      formData.append('cv', applicationData.cvFile);
    }

    try {
      const response = await axios.post('/api/job-application', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        setSubmitStatus({
          show: true,
          success: true,
          message: 'Application submitted successfully! We will contact you soon.'
        });
        
        // Reset form
        setTimeout(() => {
          setShowApplicationModal(false);
          setSubmitStatus({ show: false, success: false, message: '' });
          setApplicationData({
            jobTitle: '',
            fullName: '',
            email: '',
            phone: '',
            address: '',
            education: '',
            experience: '',
            skills: '',
            coverLetter: '',
            cvFile: null
          });
          setCurrentStep(1);
        }, 3000);
      }
    } catch (error) {
      setSubmitStatus({
        show: true,
        success: false,
        message: 'Failed to submit application. Please try again.'
      });
    }
  };

  const openPositions = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Colombo, Sri Lanka',
      type: 'Full-time',
      experience: '5+ years',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
      description: 'We are looking for an experienced Full Stack Developer to join our engineering team and build scalable web applications.'
    },
    {
      id: 2,
      title: 'Mobile App Developer',
      department: 'Engineering',
      location: 'Colombo, Sri Lanka',
      type: 'Full-time',
      experience: '3+ years',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      description: 'Join our mobile team to create innovative mobile applications for iOS and Android platforms.'
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Colombo, Sri Lanka',
      type: 'Full-time',
      experience: '2+ years',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
      description: 'We need a creative UI/UX designer to craft beautiful and intuitive user experiences for our products.'
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Operations',
      location: 'Colombo, Sri Lanka',
      type: 'Full-time',
      experience: '4+ years',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      description: 'Help us build and maintain robust cloud infrastructure and automate deployment processes.'
    },
    {
      id: 5,
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Colombo, Sri Lanka',
      type: 'Full-time',
      experience: '2+ years',
      skills: ['SEO', 'SEM', 'Social Media', 'Analytics'],
      description: 'Drive our digital marketing strategy and help grow our online presence across multiple channels.'
    },
    {
      id: 6,
      title: 'Business Analyst',
      department: 'Business',
      location: 'Colombo, Sri Lanka',
      type: 'Full-time',
      experience: '3+ years',
      skills: ['Requirements Analysis', 'Data Analysis', 'Agile', 'Documentation'],
      description: 'Bridge the gap between business needs and technical solutions as a Business Analyst.'
    }
  ];

  const benefits = [
  {
    title: 'Competitive Salary',
    image: 'salaryt.webp',
    description:
      'Market-leading compensation packages with performance bonuses. We believe in rewarding talent and dedication with salaries that reflect your true value. Enjoy annual salary reviews, transparent pay structures, and the opportunity to earn additional bonuses based on your performance and contributions. Our compensation philosophy ensures you are recognized and rewarded for your impact, helping you achieve both your professional and personal financial goals.'
  },
  {
    title: 'Health Insurance',
    image: 'health.png',
    description:
      'Comprehensive health coverage for you and your family, including medical, dental, and vision plans. We prioritize your well-being with access to top healthcare providers, wellness programs, and support for both preventive and emergency care. Enjoy peace of mind knowing you and your loved ones are protected and supported throughout your career with us.'
  },
  {
    title: 'Learning & Development',
    image: 'learning.webp',
    description:
      'Annual training budget and access to online courses, workshops, and certifications. We invest in your growth with personalized learning paths, mentorship programs, and opportunities to attend industry conferences. Advance your skills and stay ahead in your field with continuous support for professional development.'
  },
  {
    title: 'Flexible Leave',
    image: 'leave.jpeg',
    description:
      'Generous paid time off and flexible work arrangements. Take advantage of vacation days, personal leave, and sick leave to maintain a healthy work-life balance. We support your needs with adaptable schedules and remote work options, ensuring you can recharge and return refreshed.'
  },
  {
    title: 'Remote Work',
    image: 'remote.jpeg',
    description:
      'Hybrid work model with remote work options. Collaborate from anywhere with the latest tools and technology, while staying connected to your team. Enjoy the freedom to work in a way that suits your lifestyle and productivity, with support for both in-office and remote collaboration.'
  },
  {
    title: 'Career Growth',
    image: 'career.png',
    description:
      'Clear career progression paths and mentorship programs. Benefit from regular performance reviews, leadership training, and opportunities for promotion. We are committed to helping you achieve your professional goals and reach your full potential through structured growth and development plans.'
  }
];

  const careerSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Codewinsolutions",
      "sameAs": "https://www.codewinsolutions.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaffna",
        "addressRegion": "Northern Province",
        "addressCountry": "LK"
      }
    },
    "employmentType": "FULL_TIME",
    "description": "Join our team of talented developers and designers. We offer exciting career opportunities in web development, mobile app development, UI/UX design, and more."
  };

  return (
    <div className="career-page">
      <SEO
        title="Careers - Join Our IT Team & Grow Your Career | Codewinsolutions"
        description="Explore exciting career opportunities at Codewinsolutions. Join our talented team of developers, designers, and digital experts. Competitive salaries, growth opportunities, and innovative projects await."
        keywords="careers codewinsolutions, IT jobs Sri Lanka, web developer jobs, software engineer jobs, UI UX designer jobs, job vacancies Jaffna, IT careers, join our team"
        url="/career"
        schema={careerSchema}
      />

      {/* Hero Section */}
      <section className="career-hero">
        <div className="career-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-tag">Join Our Team</span>
            <h1 className="career-hero-title">
              <span className="text-white">Build Your </span>
              <span className="text-cyan">Career</span>
            </h1>
            <p className="career-hero-description">
              Join a team of passionate innovators building the future of technology in Sri Lanka
            </p>
            <motion.a
              href="#positions"
              className="hero-cta-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="why-work-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="text-white">Why </span>
            <span className="text-cyan">Codewinsolutions?</span>
          </h2>
          <p className="section-subtitle">
            We believe in creating an environment where innovation thrives
          </p>

          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className={`benefit-item ${index % 2 === 1 ? 'reverse' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="benefit-image-container">
                  <img src={benefit.image} alt={benefit.title} className="benefit-image" />
                </div>
                <div className="benefit-content">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="positions-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="text-white">Open </span>
            <span className="text-cyan">Positions</span>
          </h2>
          <p className="section-subtitle">
            Find your perfect role and start your journey with us
          </p>

          <div className="positions-list">
            {openPositions.map((job, index) => (
              <motion.div
                key={job.id}
                className={`job-card ${selectedJob === job.id ? 'expanded' : ''}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
              >
                <div className="job-header">
                  <div className="job-main-info">
                    <h3>{job.title}</h3>
                    <div className="job-meta">
                      <span className="job-department">{job.department}</span>
                      <span className="job-location"><i className="fas fa-map-marker-alt"></i> {job.location}</span>
                      <span className="job-type">{job.type}</span>
                    </div>
                  </div>
                  <div className="job-apply-btn-container">
                    <motion.button
                      className="apply-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleApplyClick(job);
                      }}
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </div>

                {selectedJob === job.id && (
                  <motion.div
                    className="job-details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <div className="job-detail-section">
                      <h4>Experience Required</h4>
                      <p>{job.experience}</p>
                    </div>
                    <div className="job-detail-section">
                      <h4>About the Role</h4>
                      <p>{job.description}</p>
                    </div>
                    <div className="job-detail-section">
                      <h4>Key Skills</h4>
                      <div className="skills-tags">
                        {job.skills.map((skill, idx) => (
                          <span key={idx} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Application Process */}
      <section className="process-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="text-white">Application </span>
            <span className="text-cyan">Process</span>
          </h2>
          <p className="section-subtitle">
            Our simple and transparent hiring process
          </p>

          <div className="process-timeline">
            {[
              {
                step: '01',
                title: 'Apply Online',
                description: 'Submit your application through our careers portal'
              },
              {
                step: '02',
                title: 'Initial Screening',
                description: 'Our HR team reviews your application'
              },
              {
                step: '03',
                title: 'Technical Interview',
                description: 'Meet with our technical team to discuss your skills'
              },
              {
                step: '04',
                title: 'Final Interview',
                description: 'Discussion with senior management and team leads'
              },
              {
                step: '05',
                title: 'Offer & Onboarding',
                description: 'Receive your offer and join the team'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="process-step"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="step-number">{item.step}</div>
                <div className="step-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="career-cta-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="cta-content"
        >
          <h2>Ready to Make an Impact?</h2>
          <p>Join our team and help shape the future of technology in Sri Lanka</p>
          <div className="cta-buttons">
            <motion.a
              href="#positions"
              className="cta-btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
            </motion.a>
            <motion.a
              href="/contact"
              className="cta-btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact HR
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {showApplicationModal && (
          <motion.div
            className="application-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowApplicationModal(false)}
          >
            <motion.div
              className="application-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setShowApplicationModal(false)}>×</button>
              
              <div className="modal-header">
                <h2>Apply for {applicationData.jobTitle}</h2>
                <div className="step-indicator">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className={`step ${currentStep >= step ? 'active' : ''}`}>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="application-form">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="form-step">
                    <h3>Personal Information</h3>
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={applicationData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={applicationData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={applicationData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+94 XX XXX XXXX"
                      />
                    </div>
                    <div className="form-group">
                      <label>Address *</label>
                      <textarea
                        name="address"
                        value={applicationData.address}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full address"
                        rows="3"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Education & Experience */}
                {currentStep === 2 && (
                  <div className="form-step">
                    <h3>Education & Experience</h3>
                    <div className="form-group">
                      <label>Education *</label>
                      <textarea
                        name="education"
                        value={applicationData.education}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., BSc in Computer Science, University of Colombo, 2020"
                        rows="4"
                      />
                    </div>
                    <div className="form-group">
                      <label>Work Experience *</label>
                      <textarea
                        name="experience"
                        value={applicationData.experience}
                        onChange={handleInputChange}
                        required
                        placeholder="List your work experience (Company, Position, Duration, Key responsibilities)"
                        rows="6"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Skills & Cover Letter */}
                {currentStep === 3 && (
                  <div className="form-step">
                    <h3>Skills & Cover Letter</h3>
                    <div className="form-group">
                      <label>Skills *</label>
                      <textarea
                        name="skills"
                        value={applicationData.skills}
                        onChange={handleInputChange}
                        required
                        placeholder="List your key skills (e.g., React, Node.js, MongoDB, AWS)"
                        rows="4"
                      />
                    </div>
                    <div className="form-group">
                      <label>Cover Letter *</label>
                      <textarea
                        name="coverLetter"
                        value={applicationData.coverLetter}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us why you're interested in this position and what makes you a great fit"
                        rows="6"
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Upload CV */}
                {currentStep === 4 && (
                  <div className="form-step">
                    <h3>Upload Your CV</h3>
                    <div className="form-group">
                      <label>CV/Resume * (PDF, DOC, DOCX - Max 5MB)</label>
                      <div className="file-upload-area">
                        <input
                          type="file"
                          id="cvUpload"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          required
                        />
                        <label htmlFor="cvUpload" className="file-upload-label">
                          <span className="upload-icon">📄</span>
                          <span>{applicationData.cvFile ? applicationData.cvFile.name : 'Click to upload or drag and drop'}</span>
                          <span className="upload-hint">PDF, DOC, DOCX (max 5MB)</span>
                        </label>
                      </div>
                    </div>

                    {/* Application Summary */}
                    <div className="application-summary">
                      <h4>Application Summary</h4>
                      <div className="summary-item">
                        <strong>Position:</strong> {applicationData.jobTitle}
                      </div>
                      <div className="summary-item">
                        <strong>Name:</strong> {applicationData.fullName}
                      </div>
                      <div className="summary-item">
                        <strong>Email:</strong> {applicationData.email}
                      </div>
                      <div className="summary-item">
                        <strong>Phone:</strong> {applicationData.phone}
                      </div>
                    </div>
                  </div>
                )}

                {/* Status Message */}
                {submitStatus.show && (
                  <div className={`submit-status ${submitStatus.success ? 'success' : 'error'}`}>
                    {submitStatus.message}
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="form-navigation">
                  {currentStep > 1 && (
                    <button type="button" onClick={prevStep} className="btn-prev">
                      ← Previous
                    </button>
                  )}
                  {currentStep < 4 ? (
                    <button type="button" onClick={nextStep} className="btn-next">
                      Next →
                    </button>
                  ) : (
                    <button type="submit" className="btn-submit">
                      Submit Application
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Career;
