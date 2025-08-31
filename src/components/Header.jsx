import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import icon from '../assets/icon.png';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <div className='warp w-full'>
      <div className='wrapper flex items-center justify-between w-full px-4 py-2 bg-transparent backdrop-blur-md'>
        {/* Logo */}
        <Link to='/' className='flex items-center'>
          <img src={icon} alt="icon" className='w-16 h-16 mr-3' />
          <div className='text-2xl sm:text-3xl text-slate-100'>ChemEca</div>
        </Link>

        {/* Desktop Menu */}
        <nav className='hidden md:flex space-x-8 mr-6'>
          <Link to="/Home" className={`MY text-lg ${isActive('/Home') ? 'text-blue-500' : 'text-white'}`}>Home</Link>
          <div className="MY relative text-lg cursor-pointer">
            <div className="flex items-center" onClick={toggleDropdown}>
              <span>Subsystems</span>
              <span className="ml-1">▼</span>
            </div>
            {dropdownOpen && (
              <div className="drop absolute top-8 left-0 text-white rounded shadow-lg text-sm z-50 bg-gray-800 bg-opacity-80 backdrop-blur-md">
                <Link to="/Research" className="block hover:text-cyan-500 px-2 py-2">Research & Development</Link>
                <Link to="/Process" className="block hover:text-cyan-500 px-2 py-2">Process Simulation</Link>
                <Link to="/Controls" className="block hover:text-cyan-500 px-2 py-2">Instrumentation</Link>
                <Link to="/Business" className="block hover:text-cyan-500 px-2 py-2">Business & Outreach</Link>
              </div>
            )}
          </div>
          <Link to="/Team" className={`MY text-lg ${isActive('/Team') ? 'text-blue-500' : 'text-white'}`}>Our Team</Link>
          <Link to="/Comp" className={`MY text-lg ${isActive('/Comp') ? 'text-blue-500' : 'text-white'}`}>Competitions</Link>
          <Link to="/Contact" className={`MY text-lg ${isActive('/Contact') ? 'text-blue-500' : 'text-white'}`}>Contact</Link>
        </nav>

        {/* Hamburger for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white text-3xl focus:outline-none">☰</button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-gray-900 bg-opacity-80 backdrop-blur-md text-white px-6 pb-4 space-y-2 z-40">
          <Link to="/Home" className="MY" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/Research" className="MY" onClick={toggleMobileMenu}>Research</Link>
          <Link to="/Process" className="MY" onClick={toggleMobileMenu}>Process Simulation</Link>
          <Link to="/Controls" className="MY" onClick={toggleMobileMenu}>Instrumentation</Link>
          <Link to="/Business" className="MY" onClick={toggleMobileMenu}>Business</Link>
          <Link to="/Team" className="MY" onClick={toggleMobileMenu}>Our Team</Link>
          <Link to="/Comp" className="MY" onClick={toggleMobileMenu}>Competitions</Link>
          <Link to="/Contact" className="MY" onClick={toggleMobileMenu}>Contact Us</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
