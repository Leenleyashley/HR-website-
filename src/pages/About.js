import React from 'react';
import GavelIcon from '@mui/icons-material/Gavel';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AboutImage from '../assets/christina-wocintechchat-com-vzfgh3RAPzM-unsplash.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      {/* Left Side: Text Content */}
      <div className="about-content">
        <h1 className="about-heading">About Us</h1>
        <p className="about-description">
          <strong>We believe in the power of human connections</strong>
        </p>
        <div className="spacer" />
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Values Section */}
        <div className="values-section">
          <h2 className="values-heading">Our Values</h2>
          <div className="value-item">
            <GavelIcon className="value-icon" />
            <span className="value-text">Integrity</span>
          </div>
          <div className="value-item">
            <HandshakeIcon className="value-icon" />
            <span className="value-text">Collaboration</span>
          </div>
          <div className="value-item">
            <LightbulbIcon className="value-icon" />
            <span className="value-text">Innovation</span>
          </div>
        </div>

        {/* Vision Section */}
        <div className="vision-section">
          <h2 className="vision-heading">Our Vision</h2>
          <div className="vision-item">
            <VisibilityIcon className="vision-icon" />
            <span className="vision-text">To create meaningful connections that empower individuals and organizations.</span>
          </div>
        </div>
      </div>

      {/* Right Side: Image and Button */}
      <div className="about-image">
        <img src={AboutImage} alt="About Us" />
        <button className="discover-button">Discover More</button> {/* Added Button */}
      </div>
    </div>
  );
}

export default About;
