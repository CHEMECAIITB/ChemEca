import React from 'react';
import './Footer.css';  // Make sure to import the CSS file
import { FaInstagram } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import icon from '../assets/icon.png';
const Footer = () => {
  return (
    <footer className='flex flex-row'>
        <div className='flex justify-center items-center align-middle ml-7'>
            <img src={icon} alt="" className='w-40 h-40' />
        </div>
      <div className="footer-content w-full">
        <p>&copy; 2024. All rights reserved. ChemeCa_IITB</p>
        <div className="social-icons flex flex-row gap-5 items-center justify-center align-middle ">
          Follow us on
          <a href="https://in.linkedin.com/company/team-chemeca" target="_blank" rel="noopener noreferrer">
            <TiSocialLinkedin className='text-4xl hover:text-emerald-300' />
          </a>
          <a href="https://www.instagram.com/chemeca.iitb/" target="_blank" rel="noopener noreferrer    ">
            <FaInstagram className='text-3xl hover:text-emerald-300' />
          </a>
        </div>
        <div className="mt-2">
          <p>Contact Us:</p>
          <p>Yogesh Dangi : 7067503163, Saransh vottery : 75090 40303</p>
          <a href="mailto:chemeca.iitb@gmail.com" className="contact-email hover:text-emerald-300">
            chemeca.iitb@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
