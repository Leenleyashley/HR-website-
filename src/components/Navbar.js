import React, { useState } from 'react';
import Logo from '../assets/noorcom_logo_clear.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="logo" />
        <div className={`hiddenLinks ${openLinks ? "show" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <a href="http://45.149.204.86:8090/" className="getStartedBtn">Visit Us</a>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <a href="http://45.149.204.86:8090/" className="getStartedBtn">Visit Us</a>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
