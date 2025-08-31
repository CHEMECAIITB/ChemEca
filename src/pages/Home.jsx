import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import Header from '../components/Header';
import CustomCursor from '../components/CustomCursor';
import vdo from '../assets/tempvdo.mp4';
import './Home.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Carousel from '../components/Carousel';
import img1 from '../assets/gallery/img1.jpg';
import img2 from '../assets/gallery/img2.jpg';
import img3 from '../assets/gallery/img3.jpg';
import img4 from '../assets/gallery/img4.png';
import img5 from '../assets/gallery/img5.jpg';
import BG4 from '../assets/BG4.png';
import I1 from '../assets/sub/Research.jpg';
import I2 from '../assets/sub/Process.jpg';
import I3 from '../assets/sub/Controls.jpg';
import I4 from '../assets/sub/Business.jpg';
import HoverCard from '../components/HoverCard';
import Tilt from 'react-parallax-tilt';
import Footer from '../components/Footer';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [img1, img2, img3, img4, img5];

  useGSAP(() => {
    const tl3 = gsap.timeline();
    tl3.from(".maintext h1", {
      y: 120,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.maintext2',
        start: 'top 80%',
        end: 'top 50%',
        scrub: 2,
        stagger: 2,
      },
    });
  });

  return (
    <div className="main">
      <Header />
      <Hero />

      <div className="maintext flex items-center justify-center min-h-screen gap-5 flex-col px-4 text-center">
        <div className="maintext2 flex items-center justify-center gap-5 flex-col">
  <h1 className="iitb text-base sm:text-lg md:text-2xl lg:text-4xl tracking-normal font-medium uppercase">
    IIT Bombay’s pioneering student-led team in
  </h1>
  <h1 className="iitb text-base sm:text-lg md:text-2xl lg:text-4xl tracking-normal font-medium uppercase">
    sustainable engineering,
  </h1>
  <h1 className="iitb text-base sm:text-lg md:text-2xl lg:text-4xl tracking-normal font-medium uppercase">
    aims to tackle challenges from carbon capture to fuel cells
  </h1>
  <h1 className="iitb text-base sm:text-lg md:text-2xl lg:text-4xl tracking-normal font-medium uppercase">
    driving innovation for a greener future
  </h1>
</div>

      </div>

      <div className="content-container flex flex-col items-center justify-center px-4 text-justify">
        <h1 className="ABOUT text-3xl sm:text-4xl md:text-5xl mt-11 font-semibold">ABOUT US</h1>
        <p className="mt-8 text-base sm:text-lg md:text-xl text-gray-500 max-w-4xl">
          {/* Team ChemEca is a dynamic, interdisciplinary student team that brings together innovative minds
          from various fields to tackle complex challenges in chemical engineering and beyond. Focused on
          hands-on projects, cutting-edge research, and industry-relevant competitions, ChemEca provides a
          platform for students to collaborate, learn, and excel in areas ranging from process simulation
          to sustainable technology development. With a commitment to innovation and excellence, the team
          aims to bridge the gap between academic learning and real-world application, preparing its members
          for leadership roles in the chemical industry and related fields. */}
          We are currently working on the integration of carbon capture technology 
          with HVAC systems to enable simultaneous air conditioning and CO₂ removal. 
          This approach aims to enhance indoor air quality while contributing to decarbonization efforts 
          in built environments. By leveraging existing ventilation infrastructure, we seek to create an energy-efficient 
          and scalable solution for climate-conscious buildings.
        </p>
      </div>

      <div className="flex flex-col mt-20 px-4">
        <div className="text-3xl sm:text-4xl md:text-5xl text-center font-medium uppercase mb-10">
          Subsystems
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-6">
          <Tilt>
            <HoverCard
              imageSrc={I1}
              overlayText="Research & development"
              overlayText2={`Adsorbent Modification \n Utilization \n Data Analysis`}
            />
          </Tilt>
          <Tilt>
            <HoverCard
              imageSrc={I2}
              overlayText="Process Simulation"
              overlayText2={`Modeling \n Fabrication \n Safety`}
            />
          </Tilt>
          <Tilt>
            <HoverCard
              imageSrc={I3}
              overlayText="Instrumentation"
              overlayText2={`CO₂ Monitoring Device \n Control System Loops \n Internet of Things (IoT)`}
            />
          </Tilt>
          <Tilt>
            <HoverCard
              imageSrc={I4}
              overlayText="Business"
              overlayText2={`Tech to Business \n Techno-Commercial Analysis \n Industrial Collaboration`}
            />
          </Tilt>
        </div>
      </div>

      <div className="w-full h-1 bg-amber-200 mt-24"></div>

      <div className="carousel-container mt-28 px-4">
        <Carousel images={images} width={100} quantity={5} className="mt-5" />
        <Carousel images={images} width={100} quantity={5} reverse className="mt-5" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
