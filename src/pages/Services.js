import React from 'react';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import '../styles/Services.css';

function Services() {
  return (
    <div className="services-container">
      {/* Heading */}
      <h1 className="services-heading">Our Services</h1>
      
      {/* Introduction */}
      <p className="services-intro">
        At HR-noorcom, we offer a range of innovative HR solutions to help your business thrive. Our tailored services are designed to meet the unique needs of modern organizations.
      </p>
      
      {/* Services Section */}
      <div className="services-grid">
        {/* Service 1 */}
        <div className="service-card">
          <BusinessIcon className="service-icon" />
          <h3 className="service-title">HR Consulting</h3>
          <p className="service-description">
            We provide expert HR consulting services to optimize your workforce management and improve organizational efficiency.
          </p>
        </div>

        {/* Service 2 */}
        <div className="service-card">
          <PeopleAltIcon className="service-icon" />
          <h3 className="service-title">Talent Acquisition</h3>
          <p className="service-description">
            Our talent acquisition services are focused on recruiting the right candidates who will drive success for your organization.
          </p>
        </div>

        {/* Service 3 */}
        <div className="service-card">
          <TrendingUpIcon className="service-icon" />
          <h3 className="service-title">Performance Management</h3>
          <p className="service-description">
            Empower your employees with performance management systems that enhance growth and productivity.
          </p>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="services-cta">
        <button className="discover-button">Discover More Services</button>
      </div>
    </div>
  );
}

export default Services;
