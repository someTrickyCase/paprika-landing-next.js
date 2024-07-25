import React from "react";
import { ImagesSlider } from "./ui/ImagesSlider";
import { FlipWords } from "./ui/FlipWords";
import { BackgroundBeams } from "./ui/BackgroundBeams";

const Gallery = () => {
  return (
    <div
      id='gallery'
      className='h-[100vh] w-full flex items-center justify-center relative antialiased bg-[#171b1c] border-b-2 border-[#252a2b]'>
      <BackgroundBeams />
      <div className='h-[60vh] w-full flex gap-3'>
        <ImagesSlider
          className='w-[32vw]'
          children={[]}
          images={[
            "shotOne.jpg",
            "shotTwo.jpg",
            "shotThree.jpg",
            "shotFour.jpg",
          ]}
        />
        <ImagesSlider
          className='w-[32vw] left-0'
          children={[]}
          direction='down'
          images={[
            "shotFour.jpg",
            "shotOne.jpg",
            "shotTwo.jpg",
            "shotThree.jpg",
          ]}
        />
        <ImagesSlider
          className='w-[32vw] right-0'
          children={[]}
          images={[
            "shotThree.jpg",
            "shotFour.jpg",
            "shotOne.jpg",
            "shotTwo.jpg",
          ]}
        />
      </div>
      <div className='absolute top-2 flex items-center justify-center text-center'>
        <h2 className=' text-[#f0f2f3] text-3xl font-extrabold ml-3'>
          Наш
          <br />
          <FlipWords
            words={[
              "увлекательный",
              "милый",
              "задорный",
            ]}
            className='text-[#fe0c1a]'
          />
          <br />
          репертуар
        </h2>
      </div>
      <p className='absolute text-[#f0f2f3] text-lg bottom-20'>
        Можно найти{" "}
        <a
          className='hover:border-b-2 transition-all text-[#fe0c1a]'
          href='https://forms.yandex.ru/u/6283cdd3f0698860b70e58a4/'>
          здесь
        </a>
      </p>
    </div>
  );
};

export default Gallery;
