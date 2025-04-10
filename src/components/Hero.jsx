import { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import './Hero.css'
import BG from '../assets/BG.png'


export const Hero = () => {

  
    useGSAP(() => {
        const tl = gsap.timeline(); // Create a timeline for syncing animations
    
        // Animate the text elements
        tl.to(".tobe, .line", {
          y: -15,  // Move to normal position from off-screen below
          duration: 1,
           stagger:0.5,
          opacity: 1
        },);
    
        

        
      });


  return (
    <>
    <div className='wrap2 '>
    <div className='w-34 mt-32 text-8xl font-bold tracking-normal leading-normal '
    >
      {/* Outer div with overflow hidden to contain all content */}
      <div className='overflow-hidden '>
        {/* Texts are moved below initially using translate-y */}
        <div className='tobe transform translate-y-32 opacity-0 '>Catalysing</div>
      </div>
      <div className='overflow-hidden'>
        <h1 className='line transform translate-y-32 opacity-0'> Reactions into </h1>    
      </div>
      <div className='overflow-hidden'>
        <h1 className='line transform translate-y-32 opacity-0'>Reality</h1>
      </div>

      
    </div>
    </div> 
    </>
  )
}
