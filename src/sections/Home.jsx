import React from 'react';
import ParticlesBackground from '../components/ParticlesBackground';

function Home() {
  return (
    <section id="Home" className="w-full h-screen relative bg-black overflow-hidden">
      <ParticlesBackground />
      <div className="absolute -top-32 -left-32 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vw] sm:h-[z-500vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vw] sm:h-[z-500vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500"></div>
      <div className='relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 '></div>
      <div className='flex flex-col justify-center h-full text-center lg:text-left relative'></div>
      <div className='w-full lg:pr-24 mx-auto max-w-[48rem]'></div>
    </section>
  );
}

export default Home;
