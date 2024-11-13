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
        At our core, we are dedicated to fostering meaningful relationships and creating spaces where people feel seen, valued, and inspired. Every interaction is an opportunity to build trust, strengthen communities, and empower individuals to make a difference. We understand that genuine connections lead to greater understanding, shared growth, and lasting impact.

Whether through our products, services, or community initiatives, we strive to bring people together in ways that uplift and inspire. Join us on this journey, and let’s create something extraordinary together.
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
