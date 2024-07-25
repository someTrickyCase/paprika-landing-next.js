import React from "react";
import GradientButton from "./ui/GradientButton";
import { FlipWords } from "./ui/FlipWords";

const Footer = () => {
  return (
    <footer className='h-[50vh] w-full relative antialiased bg-[#252a2b]'>
      <div className='text-[#ffffff]  relative w-full h-full flex flex-col justify-between items-center text-center p-10'>
        <div className='mb-4 text-base md:text-lg lg:text-2xl'>
          Живая музыка украшает любой
          праздник. Мы поможем Вам
          сделать это <br />
          <FlipWords
            className='text-[#ff141f]'
            words={[
              "ярко",
              "красиво",
              "качественно",
            ]}
          />
        </div>
        <a href='https://vk.com/im?media=&sel=-174380924'>
          <GradientButton text='написать нам' />
        </a>

        <div className='w-[200px] h-[100px] overflow-hidden flex items-center justify-center'>
          <img
            className='w-[200px]'
            src='Brand-logo.png'
            alt='Paprika cover-band logo'
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
