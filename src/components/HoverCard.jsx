import React from 'react';
import './HoverCard.css';
import { Link } from 'react-router-dom';

const HoverCard = ({ imageSrc, overlayText, overlayText2 }) => {
  return (
    <div className='ml-6 mt-12 w-56 sm:w-64 md:w-72 h-96 relative'>
      <div className='IM w-full h-full'>
        <img
          src={imageSrc}
          alt={overlayText}
          className='rounded-md w-full h-full object-cover'
        />
        
        {/* Subsystem label */}
        <div className='up font-semibold text-lg md:text-xl'>
          <Link to={`/${overlayText}`}>{overlayText}</Link>
        </div>

        {/* Overlay on hover */}
        <div className='overlay'>
          <p className='overlay-text font-medium uppercase'>
            {overlayText2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
