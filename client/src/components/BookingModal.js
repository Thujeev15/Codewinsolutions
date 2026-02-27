import React, { useState } from 'react';
import './BookingModal.css';

const BookingModal = ({ service, onClose }) => {
  const [selectedPackage, setSelectedPackage] = useState('normal');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    notes: ''
  });

  const packages = {
    normal: {
      name: 'Normal',
      price: service?.packages?.normal || 12000,
      features: service?.normalFeatures || []
    },
    standard: {
      name: 'Standard',
      price: service?.packages?.standard || 18000,
      features: service?.standardFeatures || []
    },
    premium: {
      name: 'Premium',
      price: service?.packages?.premium || 28000,
      features: service?.premiumFeatures || []
    }
  };


  const handlePlaceOrder = () => {
    const packageInfo = packages[selectedPackage];
    const message = `Order Details:\nService: ${service.title}\nPackage: ${packageInfo.name}\nPrice: $${packageInfo.price}\n\nCustomer Details:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nPreferred Date: ${formData.date}\nNotes: ${formData.notes}`;
    
    // Open WhatsApp
    const whatsappNumber = '+94761302004';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+94761302004';
  };

  if (!service) return null;

  return (
    <div className="booking-modal-overlay" onClick={onClose}>
      <div className="booking-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="booking-modal-close" onClick={onClose}>
          ×
        </button>

        <div className="booking-modal-content">
          {/* Left Side - Service Image */}
          <div className="booking-modal-left">
            <div className="booking-service-image">
              <img src={service.image} alt={service.title} />
            </div>
          </div>

          {/* Right Side - Service Details */}
          <div className="booking-modal-right">
            <h2 className="booking-service-title">{service.title}</h2>
            <p className="booking-service-description">{service.description}</p>

            {/* Duration and Price */}
            <div className="booking-info-row">
              <div className="booking-info-item">
                <div className="booking-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="booking-info-text">
                  <div className="booking-info-label">{service.duration || '2-4 hours'}</div>
                  <div className="booking-info-sublabel">Duration</div>
                </div>
              </div>
              <div className="booking-info-item">
                <div className="booking-info-icon price-icon">
                  <span>$</span>
                </div>
                <div className="booking-info-text">
                  <div className="booking-info-label">${packages.normal.price}</div>
                  <div className="booking-info-sublabel">Starting Price</div>
                </div>
              </div>
            </div>

            {/* Package Selection */}
            <div className="booking-packages-section">
              <h3 className="booking-section-title">Choose Your Package</h3>
              <div className="booking-packages-grid">
                {Object.keys(packages).map((key) => (
                  <div
                    key={key}
                    className={`booking-package-card ${selectedPackage === key ? 'selected' : ''}`}
                    onClick={() => setSelectedPackage(key)}
                  >
                    <div className="booking-package-name">{packages[key].name}</div>
                    <div className="booking-package-price">
                      ${packages[key].price}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="booking-actions">
              <button className="booking-btn booking-btn-primary" onClick={handlePlaceOrder}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Place Order
              </button>
              <button className="booking-btn booking-btn-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Write Review
              </button>
              <button className="booking-btn booking-btn-success" onClick={handleCallNow}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Call Now
              </button>
            </div>

            {/* Service Features */}
            <div className="booking-features-section">
              <h3 className="booking-section-title">What's Included</h3>
              <div className="booking-features-list">
                {service.features && service.features.map((feature, index) => (
                  <div key={index} className="booking-feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Packages Detail */}
            {selectedPackage && packages[selectedPackage].features.length > 0 && (
              <div className="booking-package-details">
                <h3 className="booking-section-title">{packages[selectedPackage].name} Package Details</h3>
                <div className="booking-features-list">
                  {packages[selectedPackage].features.map((feature, index) => (
                    <div key={index} className="booking-feature-item">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
