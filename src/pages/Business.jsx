import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import { gsap } from 'gsap';
import './Business.css';
import ttb from '../assets/Havc.png';
import tca from '../assets/zoom_meet.jpeg';
import colab from '../assets/group_photo.jpg';
import Footer from '../components/Footer';
import { useGSAP } from '@gsap/react';
import videoBg from '../assets/ChemEca_Pitch_video.mp4'; // Make sure this is .mp4

const Business = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

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

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <>
      <Header />
      <div className="main3">
        {/* Background Video */}
        <video
          ref={videoRef}
          className="background-video"
          autoPlay
          muted={isMuted}
          loop
          playsInline
        >
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay gradient */}
        <div className="overlay" />

        {/* Heading */}
        <h1 className="headings text-8xl font-medium uppercase z-10 text-white">
          Business Subsystem
        </h1>

        {/* Mute/Unmute Button */}
        <button onClick={toggleMute} className="mute-btn z-10">
          {isMuted ? '🔇 Unmute' : '🔊 Mute'}
        </button>
      </div>

      {/* Section 1 */}
      <div className='mt-12 flex flex-row p-5'>
        <div className='w-2/3 mt-6'>
          <h1 className='text-4xl font-medium text-lime-500'>Tech to Business</h1>
          <p className='mt-9 text-justify'>
            This involves translating technological innovations into 
            viable business solutions. The subsystem identifies potential
            market opportunities for the developed technology and formulates 
            strategies to commercialize it. Key activities include defining the
            value proposition, identifying target customers, and creating business
            models that align with industry needs. By bridging the gap between technology and 
            market requirements, this phase ensures that the developed solutions
            have real-world applications and commercial potential.
          </p>
        </div>
        <div className='w-1/3 flex align-middle justify-center self-center'>
          <img src={ttb} alt="" className='images rounded-md scale-90' />
        </div>
      </div>

      {/* Section 2 */}
      <div className='mt-12 flex flex-row p-5'>
        <div className='w-2/3 mt-14'>
          <h1 className='text-4xl font-medium text-lime-500'>Ideas Cohort</h1>
          <p className='mt-9 text-justify'>
            A comprehensive analysis is conducted to assess
            the economic and technical feasibility of the project.
            This includes evaluating production costs, scalability, 
            market demand, and the return on investment (ROI). Technical 
            performance data is combined with financial metrics to create a 
            balanced view of the technology’s commercial prospects. The analysis 
            ensures that the solution is both technically viable and economically
            sustainable, guiding decision-making for further development and market entry.
          </p>
        </div>
        <div className='w-1/3 flex align-middle justify-center self-center'>
          <img src={tca} alt="" className='images rounded-md scale-75' />
        </div>
      </div>

      {/* Section 3 */}
      <div className='mt-8 flex flex-row p-5'>
        <div className='w-2/3 mt-10'>
          <h1 className='text-4xl font-medium text-lime-500'>Professor and Industry Mentorship</h1>
          <p className='mt-9 text-justify'>
            This aspect emphasizes establishing partnerships with industrial stakeholders to 
            secure funding and gain mentorship for the project. Collaborations with companies, 
            venture capitalists, and government agencies provide financial support for scaling up
            prototypes, conducting pilot studies, and commercial deployment. Industrial mentorship 
            offers valuable insights into market dynamics, technical challenges, and regulatory requirements, helping refine the technology to align with industry standards. These partnerships also open avenues for joint R&D projects, access to state-of-the-art
            facilities, and co-development opportunities, ensuring both 
            financial sustainability and technological robustness.
          </p>
        </div>
        <div className='w-1/3 flex align-middle justify-center self-center'>
          <img src={colab} alt="" className='images rounded-md scale-75' />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Business;
