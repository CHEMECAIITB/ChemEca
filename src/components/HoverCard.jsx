import React from 'react';
import './HoverCard.css';
import { Link } from 'react-router-dom';

const HoverCard = ({ imageSrc, overlayText, overlayText2 }) => {
  let path;
  switch (overlayText) {
    case 'Research & development':
      path = 'Research';
      break;
    case 'Process Simulation':
      path = 'Process';
      break;
    case 'Instrumentation':
      path = 'Controls';
      break;
    case 'Business':
      path = 'Business';
      break;
    default:
      path = overlayText;
  }

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
          <Link to={`/${path}`}>{overlayText}</Link>
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