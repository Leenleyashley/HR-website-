import React from 'react';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import '../styles/Careers.css';

function Careers() {
  return (
    <div className="careers-container">
      {/* Heading */}
      <h1 className="careers-heading">Join Our Team</h1>
      
      {/* Introduction Section */}
      <p className="careers-intro">
        At HR-noorcom, we believe that our people are our greatest asset. We foster a collaborative, innovative, and empowering work environment that encourages growth and creativity.
      </p>
      
      {/* Open Positions Section */}
      <div className="positions-section">
        <h2 className="positions-heading">Current Openings</h2>
        
        {/* Position 1 */}
        <div className="position-item">
          <WorkIcon className="position-icon" />
          <div className="position-details">
            <h3 className="position-title">HR Manager</h3>
            <p className="position-description">
              Lead our HR department and help shape the future of our team. You will oversee recruitment, onboarding, and employee relations.
            </p>
            <button className="apply-button">Apply Now</button>
          </div>
        </div>

        {/* Position 2 */}
        <div className="position-item">
          <PeopleIcon className="position-icon" />
          <div className="position-details">
            <h3 className="position-title">Talent Acquisition Specialist</h3>
            <p className="position-description">
              Join our team and help identify top talent for our growing company. You’ll play a key role in the hiring process.
            </p>
            <button className="apply-button">Apply Now</button>
          </div>
        </div>

        {/* Position 3 */}
        <div className="position-item">
          <SchoolIcon className="position-icon" />
          <div className="position-details">
            <h3 className="position-title">Learning & Development Coordinator</h3>
            <p className="position-description">
              Help our employees reach their full potential by developing and implementing innovative training programs.
            </p>
            <button className="apply-button">Apply Now</button>
          </div>
        </div>
      </div>
      
      {/* Why Work With Us Section */}
      <div className="benefits-section">
        <h2 className="benefits-heading">Why Work With Us?</h2>
        <p className="benefits-text">
          At HR-noorcom, we value work-life balance, continuous learning, and professional growth. We offer a dynamic workplace where your ideas matter and you can make a real impact.
        </p>
      </div>

      {/* Final Call to Action */}
      <div className="careers-cta">
        <button className="discover-button">Explore More Opportunities</button>
      </div>
    </div>
  );
}

export default Careers;
