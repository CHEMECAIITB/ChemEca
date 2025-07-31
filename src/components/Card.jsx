import React from 'react';
import { FiMail } from "react-icons/fi";
import logo from '../assets/logo.png';

function Card({ name, image, position, email }) {
  return (
    <div className='mt-5 w-11/12 sm:w-80 lg:w-96 h-auto p-5 rounded-xl backdrop-blur-3xl bg-green-50 bg-opacity-10 flex flex-col items-center shadow-xl relative group transition-transform duration-300 hover:scale-105'>

      <img src={image} alt={name} className='rounded-full w-28 sm:w-36 md:w-40 h-auto aspect-square mt-3 object-cover' />
      
      <h1 className='text-lg sm:text-xl mt-4 font-medium text-white text-center'>{name}</h1>
      <h2 className='text-sm sm:text-base font-normal text-white text-center'>{position}</h2>

      {/* Overlay */}
      <div className='overlay absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <img src={logo} alt="ChemEca Logo" className='w-2/3 sm:w-1/2 mb-3' />
        <a href={`mailto:${email}`} aria-label={`Email ${name}`}>
          <FiMail className='w-7 h-7 sm:w-8 sm:h-8 text-white' />
        </a>
      </div>

    </div>
  );
}

export default Card;
