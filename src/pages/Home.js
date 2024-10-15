import React, { useState, useEffect } from 'react';
import HomeImage from '../assets/business-people-meeting.jpg';
import '../styles/Home.css';

const messages = [
  "Unlocking potential: Empower your workforce to achieve more.",
  "Driving success through employee engagement and innovation.",
  "Creating a culture of collaboration and growth.",
  "Transforming HR practices: Innovation that drives productivity.",
  "Fostering diversity and inclusion for a dynamic workplace."
];

function Home() {
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      setCurrentMessage(messages[messageIndex]);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(interval);
  }, [messageIndex]);

  return (
    <div className="home">
      <div className="headerContainer" style={{ backgroundImage: `url(${HomeImage})` }}>
        {/* Animated Section */}
        <div className="animatedSection">
          <h2>Empowering your team:</h2>
          <p>{currentMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
