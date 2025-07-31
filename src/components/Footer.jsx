import React from 'react';
import './Footer.css';
import { FaInstagram } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import icon from '../assets/icon.png';

const Footer = () => {
  return (
    <footer className="bg-[#282c34] text-white text-center px-4 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto w-full gap-6">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img src={icon} alt="logo" className="w-28 h-28 md:w-40 md:h-40" />
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center md:items-start justify-center w-full md:w-3/4 space-y-2">
          <p className="text-base">&copy; 2024. All rights reserved. ChemeCa_IITB</p>

          <div className="flex items-center justify-center md:justify-start gap-3 mt-2">
            <span>Follow us on</span>
            <a href="https://in.linkedin.com/company/team-chemeca" target="_blank" rel="noopener noreferrer">
              <TiSocialLinkedin className="text-3xl hover:text-emerald-300 social-icon" />
            </a>
            <a href="https://www.instagram.com/chemeca.iitb/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-emerald-300 social-icon" />
            </a>
          </div>

          <div className="text-sm mt-3 text-center md:text-left">
            <p>Contact Us:</p>
            <p>Yogesh Dangi: 7067503163, Saransh Vottery: 7509040303</p>
            <a href="mailto:chemeca.iitb@gmail.com" className="hover:text-emerald-300">
              chemeca.iitb@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
