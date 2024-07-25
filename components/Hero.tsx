import React from "react";
import GradientButton from "./ui/GradientButton";

const Hero = () => {
  return (
    <section
      id='hero'
      className='h-[100vh] w-full bg-[#171b1c] border-b-2 border-[#252a2b]'>
      <div className='absolute z--10 h-[100vh] w-[100vw] flex justify-center overflow-hidden'>
        <video
          autoPlay
          loop
          muted
          className='blur-xl absolute z--10 w-auto min-w-full min-h-full max-w-none'
          src='/Brand-video.mp4'
        />
      </div>
      <div className='flex flex-col h-full w-full items-center justify-center text-[#f0f2f3]'>
        <p className='z-10 font-light text-xl md:text-2xl lg:text-4xl'>
          кавер-группа
        </p>
        <h1 className='z-10 font-light text-6xl sm:text-8xl md:text-9xl'>
          Papr
          <span className='text-[#fe0c1a]'>
            i
          </span>
          ka
        </h1>
        <div className='mt-16 sm:mt-22 md:mt-28'>
          <a href='#about'>
            <GradientButton text='узнай больше' />
          </a>
        </div>

        <div className='flex gap-4 absolute top-[80vh]'>
          <a
            className=' flex items-center justify-center'
            href='https://vk.com/paprikband'>
            <img
              src='/vk.svg'
              alt='vk-logo'
              className='h-[50px]'
            />
          </a>

          <a
            className=' flex items-center justify-center'
            href='https://www.youtube.com/@paprika2619'>
            <img
              src='/youtube.svg'
              alt='youtobe-logo'
              className='h-[50px]'
            />
          </a>

          <a
            className=' flex items-center justify-center'
            href='https://www.instagram.com/paprikaband_izh?igsh=MThrbHY0Z2I3Nm9pYw=='>
            <img
              src='/instagram.svg'
              alt='instagram-logo'
              className='h-[50px]'
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
