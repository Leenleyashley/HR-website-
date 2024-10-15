import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactImage from '../assets/cytonn-photography-n95VMLxqM2I-unsplash.jpg';  // Import your image here
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      {/* Contact Content Section */}
      <div className="contact-content">
        {/* Left Side: Contact Form */}
        <div className="contact-form">
          <h1 className="contact-heading">Contact Us</h1>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" placeholder="Subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>

          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-item">
              <EmailIcon className="info-icon" />
              <p>info@hr-noorcom.com</p>
            </div>
            <div className="info-item">
              <PhoneIcon className="info-icon" />
              <p>+123 456 789</p>
            </div>
            <div className="info-item">
              <LocationOnIcon className="info-icon" />
              <p>Chuka Elimu Plaza, 1st flr,loita street</p>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="contact-image">
          <img src={ContactImage} alt="Contact Us" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
