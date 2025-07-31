import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import './Business.css';

import ttb from '../assets/Havc.png';
import tca from '../assets/zoom_meet.jpeg';
import colab from '../assets/group_photo.jpg';
import videoBg from '../assets/ChemEca_Pitch_video.mp4';

const Business = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    gsap.from(".headings", {
      y: 50,
      duration: 1,
      opacity: 0,
      ease: 'power2.out'
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

      {/* Hero Section with Video */}
      <div className="main3">
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

        <div className="overlay" />

        <h1 className="headings text-white text-4xl sm:text-6xl md:text-7xl font-semibold uppercase z-10 text-center px-4">
          Business Subsystem
        </h1>

        <button onClick={toggleMute} className="mute-btn z-10">
          {isMuted ? '🔇 Unmute' : '🔊 Mute'}
        </button>
      </div>

      {/* Section Template */}
      {[{
        title: "Tech to Business",
        text: `This involves translating technological innovations into viable business solutions. The subsystem identifies potential market opportunities for the developed technology and formulates strategies to commercialize it. Key activities include defining the value proposition, identifying target customers, and creating business models that align with industry needs.`,
        img: ttb
      }, {
        title: "Ideas Cohort",
        text: `A comprehensive analysis is conducted to assess the economic and technical feasibility of the project. This includes evaluating production costs, scalability, market demand, and the return on investment (ROI). Technical performance data is combined with financial metrics to create a balanced view of the technology’s commercial prospects.`,
        img: tca
      }, {
        title: "Professor and Industry Mentorship",
        text: `This aspect emphasizes establishing partnerships with industrial stakeholders to secure funding and gain mentorship for the project. Collaborations with companies, venture capitalists, and government agencies provide financial support for scaling up prototypes and pilot studies. Mentorship helps refine the technology, align with standards, and co-develop innovations.`,
        img: colab
      }].map((section, i) => (
        <div key={i} className="flex flex-col md:flex-row mt-12 p-5 gap-6">
          <div className="md:w-2/3 mt-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-lime-500">{section.title}</h2>
            <p className="mt-6 text-justify text-white">{section.text}</p>
          </div>
          <div className="md:w-1/3 flex items-center justify-center">
            <img src={section.img} alt={section.title} className="images rounded-md w-full md:w-80" />
          </div>
        </div>
      ))}

      <Footer />
    </>
  );
};

export default Business;
