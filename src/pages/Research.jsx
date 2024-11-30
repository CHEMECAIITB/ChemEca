import React, { useEffect } from 'react';
import Header from '../components/Header'
import './Research.css'
import adb from '../assets/adb.jpg'
import uti from '../assets/uti.jpg'
import data from '../assets/data.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

import Footer from '../components/Footer';
const Research = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  useGSAP(() => {
    const tl2 = gsap.timeline(); // Create a timeline for syncing animations

    // Animate the text elements
    tl2.from(".headings", {
      y:50,// Move to normal position from off-screen below
      duration: 1,
      ease: 'power2.out',
      opacity: 0
    },);

  });

  


  return (
    <>
    <Header/>
    <div className='main4'>
        

        <h1 className='headings text-8xl font-medium uppercase'>Research Subsystem</h1>
        

    </div>
    <div className='mt-12 flex flex-row p-5'>
      <div className='w-2/3'>      
      <h1 className='text-4xl font-medium text-yellow-600'>Adsorbent Modification </h1>
      <p className='mt-9'>This involves enhancing adsorbent properties to improve CO₂ capture. Key tasks 
        include functionalizing adsorbents with chemical groups or nanoparticles to increase 
        selectivity and capacity, optimizing their stability under operational conditions, and 
        improving regeneration efficiency for energy-efficient CO₂ release. Rigorous testing under real-world 
        conditions ensures the adsorbents meet performance requirements and identify areas for improvement.
      </p>
      </div>
      <div className='w-1/3 flex align-middle justify-center self-center'>
      <img src={adb} alt="" className='images rounded-md'/>
      </div>
    </div>



    <div className='mt-12 flex flex-row p-5'>
      <div className='w-2/3'>      
      <h1 className='text-4xl font-medium text-yellow-600'>Utilization
      </h1>
      <p className='mt-9'>
      Captured CO₂ is applied to produce valuable
       products. In methane synthesis, CO₂ reacts
        with renewable hydrogen in a catalytic 
        reactor (via the Sabatier process) to produce methane. The process includes optimizing conditions like temperature, pressure, and catalyst selection. For cement manufacturing, CO₂ is used in concrete curing or mineralization to form carbonates, enhancing material durability and reducing emissions. Both applications focus on achieving efficient integration, 
      scalability, and economic viability.
      </p>
      </div>
      <div className='w-1/3 flex align-middle justify-center self-center'>
      <img src={uti} alt="" className='images rounded-md'/>
      </div>
    </div>


    <div className='mt-16 flex flex-row p-5'>
      <div className='w-2/3'>      
      <h1 className='text-4xl font-medium text-yellow-600'>Data Analysis
      </h1>
      <p className='mt-9'>
      Data analysis evaluates
       adsorbent performance and
        utilization efficiency. It 
        involves studying adsorption 
        capacity, selectivity, and kinetics 
        using models like Langmuir and Freundlich 
        isotherms. For utilization, the focus is on 
        conversion efficiency, energy use, and 
        product yield. Economic and environmental 
        assessments, including cost-benefit and
         life-cycle analyses, provide insights to
          refine processes
       and enhance overall system efficiency.
      </p>
      </div>
      <div className='w-1/3 '>
      <img src={data} alt="" className='images2 rounded-md '/>
      </div>
    </div>








    <Footer/>



    </>
  )
}

export default Research