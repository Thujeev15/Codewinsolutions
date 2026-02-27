import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Reviews.css';

const perks = [
  { icon: 'fas fa-trophy', title: 'Trusted by 50+ Clients', desc: 'Companies worldwide rely on us to deliver.' },
  { icon: 'fas fa-bolt', title: 'Fast Turnaround', desc: 'We deliver quality solutions on time, every time.' },
  { icon: 'fas fa-lock', title: 'Your Privacy Matters', desc: 'Your email is never shared or published.' },
];

const Reviews = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    rating: 0,
    review: ''
  });
  const [hovered, setHovered] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Review submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', company: '', email: '', rating: 0, review: '' });
    }, 4000);
  };

  const displayRating = hovered || formData.rating;

  return (
    <section className="reviews-section">
      <div className="reviews-container">

        {/* Section Badge */}
        <motion.div
          className="reviews-badge-row"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          <span className="reviews-badge">Client Testimonials</span>
        </motion.div>

        {/* Heading */}
        <motion.div
          className="reviews-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="reviews-title">
            Share Your <span className="text-gradient">Experience</span>
          </h2>
          <p className="reviews-subtitle">
            We turn client feedback into better solutions. Tell us about your journey with us.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="reviews-layout">

          {/* Left column — context panel */}
          <motion.div
            className="reviews-info-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="info-panel-inner">
              <p className="info-panel-eyebrow">Why your opinion counts</p>
              <h3 className="info-panel-heading">
                Help us build the future of tech together
              </h3>
              <p className="info-panel-body">
                Your honest feedback shapes how we work, grow, and serve our next
                client. Every review makes a difference.
              </p>

              <div className="info-perks">
                {perks.map((p, i) => (
                  <motion.div
                    key={i}
                    className="info-perk"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="perk-icon"><i className={p.icon}></i></span>
                    <div>
                      <p className="perk-title">{p.title}</p>
                      <p className="perk-desc">{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="info-divider" />
              <p className="info-quote">
                &ldquo;Working with CodeWin was a game-changer for our entire digital
                infrastructure.&rdquo;
              </p>
              <p className="info-quote-author">— Alex R., CTO at NovaTech</p>
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            className="review-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="submission-success">
                <div className="success-icon"><i className="fas fa-check"></i></div>
                <h3>Thank you!</h3>
                <p>Your review has been submitted and will be verified shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="review-form">
                <p className="form-heading">Leave a Review</p>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name <span>*</span></label>
                    <input
                      type="text" id="name" name="name"
                      value={formData.name} onChange={handleChange}
                      required placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company / Role <span>*</span></label>
                    <input
                      type="text" id="company" name="company"
                      value={formData.company} onChange={handleChange}
                      required placeholder="CEO at Tech Corp"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address <span>*</span></label>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange}
                    required placeholder="john@example.com"
                  />
                </div>

                {/* Star Rating */}
                <div className="form-group">
                  <label>Rating <span>*</span></label>
                  <div className="star-rating-row">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`star-btn ${star <= displayRating ? 'active' : ''}`}
                        onMouseEnter={() => setHovered(star)}
                        onMouseLeave={() => setHovered(0)}
                        onClick={() => setFormData({ ...formData, rating: star })}
                        aria-label={`${star} star`}
                      >
                        ★
                      </button>
                    ))}
                    <span className="rating-label">
                      {displayRating > 0
                        ? ['', 'Poor', 'Fair', 'Good', 'Great', 'Excellent'][displayRating]
                        : 'Select rating'}
                    </span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="review">Your Review <span>*</span></label>
                  <textarea
                    id="review" name="review"
                    value={formData.review} onChange={handleChange}
                    required rows="5"
                    placeholder="Share your experience working with CodeWin Solutions…"
                  />
                </div>

                <button
                  type="submit"
                  className="submit-review-btn"
                  disabled={formData.rating === 0}
                >
                  <span>Submit Review</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
