import React from 'react';

import { FiMail } from "react-icons/fi";
import logo from '../assets/logo.png'

function Card({ name, image, position, email }) {
  return (
    <div className='mt-5 w-96 h-80 p-5 rounded-xl backdrop-blur-3xl bg-green-50 bg-opacity-10 flex flex-col items-center shadow-xl relative group'>
      <img src={image} alt={`${name}`} className='rounded-full w-40 h-40 mt-6 object-cover' />
      <h1 className='text-xl mt-5 font-medium text-white'>{name}</h1>
      <h2 className='text-l font-normal text-white'>{position}</h2>
       
      {/* Overlay div */}
      
      <div className='overlay absolute inset-0 bg-black bg-opacity-80 flex  flex-col items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <img src={logo} alt="" className='w-1/2' />
        {/* Mail icon as a link */}
        <a href={`mailto:${email}`} aria-label={`Email ${name}`}>
          <FiMail className='w-8 h-8 text-white' />
        </a>

      </div>



    </div>
  );
}

export default Card;

