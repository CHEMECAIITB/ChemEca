import React from 'react';
import './CompCard.css';

const CompCard = ({ title, about, image, customClass = '' }) => {
  return (
    <div className={`p-7 flex flex-col md:flex-row bg-gray-700 mt-4 rounded-xl w-full md:w-fit ${customClass}`}>
      {/* Text section */}
      <div className='md:w-2/3 w-full'>
        <h1 className='font-medium text-xl md:text-2xl uppercase text-white'>{title}</h1>
        <p className='mt-4 text-sm sm:text-base text-gray-200'>{about}</p>
      </div>

      {/* Image section */}
      <div className='md:w-1/3 w-full flex items-center justify-center mt-4 md:mt-0'>
        <img src={image} alt={title} className='imgs' />
      </div>
    </div>
  );
};

export default CompCard;
