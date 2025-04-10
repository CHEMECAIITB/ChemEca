import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import icon from '../assets/icon.png';
import './Header.css';

const Header = () => {
  const location = useLocation(); // Get current path
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state

  const isActive = (path) => location.pathname === path;

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className='warp h-28'>
      <div className='wrapper flex items-center justify-between mt-0 w-full'>
        <nav className='flex items-center ml-10'>
          <Link to='/' className='flex items-center'>
            <img src={icon} alt="icon" className='w-24 h-24 mr-5' />
            <div className='text-4xl tracking-wide text-slate-100'>ChemEca</div>
          </Link>

        </nav>
        <nav className='flex space-x-8 mr-14'>
          <Link
            to="/Home"
            className={`MY text-xl ${isActive('/Home') ? 'text-blue-500' : 'text-white'}`}
          >
            Home
          </Link>
          <div className="MY relative  text-xl cursor-pointer">
            <div
              className="flex items-center"
              onClick={toggleDropdown} 
            >
              <span className='MY'>
              Subsystems
              </span>
              <span className="ml-1">▼</span> {/* Dropdown arrow */}
            </div>
            {dropdownOpen && (
  <div className="drop absolute top-8 left-0 text-white rounded shadow-lg text-sm">
    <Link to="/Research" className="block hover:text-cyan-500 px-2 py-2">
    Reseach & Developmet
    </Link>
    <Link to="/Process" className="block  hover:text-cyan-500 px-2 py-2">
      Process & Manufacturing
    </Link>
    <Link to="/Controls" className="block hover:text-cyan-500 px-2 py-2">
      Controls & Automation
    </Link>
    <Link to="/Business" className="block hover:text-cyan-500 px-2 py-2">
      Business & Outreach
    </Link>
  </div>
)}

          </div>
          <Link
            to="/Team"
            className={`MY text-xl ${isActive('/Team') ? 'text-blue-500' : 'text-white'}`}
          >
            Our Team
          </Link>
          <Link
            to="/Comp"
            className={`MY text-xl ${isActive('/Comp') ? 'text-blue-500' : 'text-white'}`}
          >
            Competitions
          </Link>
          <Link
            to="/Contact"
            className={`MY text-xl ${isActive('/Contact') ? 'text-blue-500' : 'text-white'}`}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
