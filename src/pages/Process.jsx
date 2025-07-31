import React, { useEffect } from 'react';
import Header from '../components/Header';
import './Process.css';
import models from '../assets/process_flow_sheet.png';
import fab from '../assets/Q_plot.png';
import safety from '../assets/P&ID.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Footer from '../components/Footer';

const Process = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    const tl2 = gsap.timeline();
    tl2.from(".headings", {
      y: 50,
      duration: 1,
      ease: 'power2.out',
      opacity: 0
    });
  });

  return (
    <>
      <Header />

      <div className='main6'>
        <h1 className='headings text-4xl md:text-6xl font-medium uppercase text-center px-4'>
          Process and Manufacturing Subsystem
        </h1>
      </div>

      {/* Section 1 */}
      <div className='mt-12 flex flex-col md:flex-row p-4 md:p-5 gap-5'>
        <div className='md:w-1/2'>
          <h1 className='text-2xl md:text-4xl font-medium text-lime-500'>Modeling</h1>
          <p className='mt-5 md:mt-9 text-justify text-sm md:text-base'>
            The modeling phase uses advanced simulation tools such as DWSim and Aspen Plus
            to design and optimize chemical processes. This includes developing accurate
            process flow diagrams (PFDs), performing material and energy balances, and
            simulating operational conditions to assess performance. These simulations
            provide insights into system efficiency, identify bottlenecks, and guide
            decisions for improving energy use, material flow, and overall process feasibility.
          </p>
        </div>
        <div className='md:w-1/2 flex justify-center'>
          <img src={models} alt="Process Modeling" className='rounded-md object-contain max-h-96 max-w-full' />
        </div>
      </div>

      {/* Section 2 */}
      <div className='mt-12 flex flex-col md:flex-row p-4 md:p-5 gap-5 items-center'>
        <div className='md:w-1/2'>
          <h1 className='text-2xl md:text-4xl font-medium text-lime-500'>Results & Sensitivity Analysis</h1>
          <p className='mt-5 md:mt-9 text-justify text-sm md:text-base'>
            Fabrication transforms process designs into functional prototypes. Using
            AutoCAD, detailed engineering drawings of equipment and system layouts are
            prepared, ensuring precision and feasibility. These drawings serve as
            blueprints for constructing essential components such as reactors, pipelines,
            and adsorbent beds. The fabrication phase emphasizes creating scalable and
            robust systems that bridge theoretical concepts with practical implementation.
          </p>
        </div>
        <div className='md:w-1/2 flex justify-center'>
          <img src={fab} alt="Fabrication & Sensitivity" className='rounded-md object-contain max-h-96 max-w-full' />
        </div>
      </div>

      {/* Section 3 */}
      <div className='mt-12 flex flex-col md:flex-row p-4 md:p-5 gap-5 items-center'>
        <div className='md:w-1/2'>
          <h1 className='text-2xl md:text-4xl font-medium text-lime-500'>Piping and Instrumentation</h1>
          <p className='mt-5 md:mt-9 text-justify text-sm md:text-base'>
            Safety is integral to every stage of the process. This involves conducting
            thorough hazard assessments, such as HAZOP (Hazard and Operability Analysis),
            to identify and mitigate potential risks. Engineering controls, such as pressure
            relief systems and interlocks, are incorporated to enhance operational safety.
            Emergency response protocols and compliance with industrial safety standards
            are established to address potential incidents. Regular safety audits and
            real-time monitoring ensure that the system operates reliably and securely
            under all conditions.
          </p>
        </div>
        <div className='md:w-1/2 flex justify-center'>
          <img src={safety} alt="Safety System" className='rounded-md object-contain max-h-96 max-w-full' />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Process;
