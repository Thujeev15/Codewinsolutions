import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import './Portfolio.css';

const completedProjects = [
  {
    title: 'Fixwellz',
    type: 'Service Marketplace Platform',
    image: 'https://image.thum.io/get/width/1400/https://www.fixwellz.com/careers',
    description:
      'Built and delivered a digital platform that brings all services under one roof, making it easy for users to discover and book trusted services.',
    outcome: 'Completed and deployed for live client operations.',
    client: 'Fixwellz',
    location: 'Jaffna, Sri Lanka',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: 'https://www.fixwellz.com'
  },
  {
    title: 'AutoFix Garage',
    type: 'Business Website',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop',
    description:
      'Designed and developed a professional website for a local auto repair garage featuring service listings, online booking, and customer testimonials.',
    outcome: 'Increased customer inquiries by 45% and streamlined appointment bookings.',
    client: 'AutoFix Garage',
    location: 'Monaragala, Sri Lanka',
    stack: ['React', 'Node.js', 'CSS3', 'Google Maps API'],
    link: '#'
  },
  {
    title: 'FleetGo Driver App',
    type: 'Mobile Application',
    description:
      'Delivered a logistics app for live route tracking, proof-of-delivery uploads, and operational performance insights.',
    outcome: 'On-time deliveries increased by 27% across pilot regions.',
    stack: ['React Native', 'Firebase', 'Google Maps API']
  }
];

const upcomingProjects = [
  {
    title: 'EduPulse Learning Suite',
    quarter: 'Q2 2026',
    focus:
      'Adaptive learning platform with teacher dashboards, student analytics, and smart content recommendations.',
    stack: ['Next.js', 'Node.js', 'Redis', 'OpenAI APIs']
  },
  {
    title: 'FinSight Client Workspace',
    quarter: 'Q3 2026',
    focus:
      'Secure financial client portal with document workflows, approvals, and performance reporting.',
    stack: ['React', '.NET', 'SQL Server', 'Power BI']
  },
  {
    title: 'OpsFlow Automation Engine',
    quarter: 'Q4 2026',
    focus:
      'Internal operations automation for requests, SLA tracking, notifications, and executive KPIs.',
    stack: ['React', 'Python', 'FastAPI', 'Docker']
  }
];

const Portfolio = () => {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Our Portfolio",
    "description": "Showcase of completed projects and upcoming work by Codewinsolutions",
    "provider": {
      "@type": "Organization",
      "name": "Codewinsolutions"
    }
  };

  return (
    <div className="portfolio-page">
      <SEO
        title="Portfolio - Our Completed Projects & Success Stories | Codewinsolutions"
        description="View our portfolio of successful web development, mobile app, and software projects. Real client work with measurable results. 25+ projects delivered with 92% client retention."
        keywords="portfolio, web development projects, mobile app projects, software projects Sri Lanka, completed projects, case studies, client work, project showcase"
        url="/portfolio"
        schema={portfolioSchema}
      />

      <section className="portfolio-hero">
        <div className="portfolio-overlay" />
        <motion.div
          className="portfolio-hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <span className="portfolio-eyebrow">Portfolio</span>
          <h1>
            Completed Work & <span>Upcoming Projects</span>
          </h1>
          <p>
            A professional showcase of what we have delivered and what we are building next for our clients.
          </p>
          <div className="portfolio-stats">
            <div>
              <strong>25+</strong>
              <small>Projects Delivered</small>
            </div>
            <div>
              <strong>92%</strong>
              <small>Client Retention</small>
            </div>
            <div>
              <strong>03</strong>
              <small>Upcoming Launches</small>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="portfolio-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Completed Projects</h2>
          <p>Real projects with measurable outcomes.</p>
        </motion.div>

        <div className="completed-grid">
          {completedProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              {project.image && (
                <div className="project-image-wrap">
                  <img className="project-image" src={project.image} alt={`${project.title} project preview`} loading="lazy" />
                </div>
              )}
              <div className="card-top">
                <span className="chip">{project.type}</span>
                <span className="status">Delivered</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.client && <div className="project-meta">Client: {project.client}</div>}
              {project.location && <div className="project-meta">Location: {project.location}</div>}
              <div className="outcome">{project.outcome}</div>
              <ul className="stack-list">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              {project.link && (
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                  Visit Website
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </section>

      <section className="portfolio-section upcoming">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Upcoming Projects</h2>
          <p>Projects currently in planning, design, and development stages.</p>
        </motion.div>

        <div className="timeline">
          {upcomingProjects.map((project, index) => (
            <motion.div
              className="timeline-row"
              key={project.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="dot" />
              <article className="timeline-card">
                <div className="timeline-head">
                  <h3>{project.title}</h3>
                  <span>{project.quarter}</span>
                </div>
                <p>{project.focus}</p>
                <ul className="stack-list compact">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </article>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
