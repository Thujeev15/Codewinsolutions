import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TeamMemberPanel.css';

const TeamMemberPanel = ({ member, onClose }) => {
  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && member) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [member, onClose]);

  // Prevent body scroll when panel is open
  useEffect(() => {
    if (member) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [member]);

  if (!member) return null;

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          className="panel-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="panel-container"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="panel-close-btn"
              onClick={onClose}
              aria-label="Close panel"
            >
              ×
            </button>

            {/* Header Section */}
            <div className="panel-header">
              <div className="panel-profile-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="panel-member-info">
                <h2 className="panel-member-name">{member.name}</h2>
                <p className="panel-member-role">{member.role}</p>
                {member.qualification && (
                  <p className="panel-member-qualification">{member.qualification}</p>
                )}
              </div>
            </div>

            {/* Social Links Section */}
            {(member.linkedin || member.github || member.email) && (
              <div className="panel-social-section">
                <h3 className="panel-section-title">Connect</h3>
                <div className="panel-social-links">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="panel-social-link"
                    >
                      <i className="fab fa-linkedin"></i>
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="panel-social-link"
                    >
                      <i className="fab fa-github"></i>
                      <span>GitHub</span>
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="panel-social-link"
                    >
                      <i className="fas fa-envelope"></i>
                      <span>Email</span>
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Bio Section */}
            {member.bio && (
              <div className="panel-bio-section">
                <h3 className="panel-section-title">About</h3>
                <div className="panel-bio-content">
                  {member.bio.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamMemberPanel;
