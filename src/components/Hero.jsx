import { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Hero.css';

export const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".tobe, .line", {
      y: -15,
      duration: 1,
      stagger: 0.5,
      opacity: 1
    });
  });

  return (
    <div className="wrap2 flex items-center justify-center text-center min-h-[60vh] px-4">
      <div className="w-full max-w-5xl">
        <div className="overflow-hidden py-4 leading-tight">
          <div className="tobe transform translate-y-32 opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-normal leading-snug">
            Catalysing
          </div>
        </div>
        <div className="overflow-hidden py-4 leading-tight">
          <h1 className="line transform translate-y-32 opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-normal leading-snug">
            Reactions into
          </h1>
        </div>
        <div className="overflow-hidden py-4 leading-tight">
          <h1 className="line transform translate-y-32 opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-normal leading-snug">
            Reality
          </h1>
        </div>
      </div>
    </div>
  );
};
