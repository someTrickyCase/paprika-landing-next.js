import React from "react";
import { ImagesSlider } from "./ui/ImagesSlider";
import { FlipWords } from "./ui/FlipWords";
import { BackgroundBeams } from "./ui/BackgroundBeams";

const Gallery = () => {
  return (
    <div
      id='gallery'
      className='h-[100vh] w-full flex items-center justify-center relative antialiased bg-black border-b-2 border-gray'>
      <BackgroundBeams />
      <div className='h-[60vh] grid grid-cols-3 gap-2 items-center justify-center'>
        <ImagesSlider
          className='w-auto'
          children={[]}
          direction='down'
          images={[
            "shotOne.jpg",
            "shotTwo.jpg",
            "shotThree.jpg",
            "shotFour.jpg",
          ]}
        />
        <ImagesSlider
          time={4200}
          className='w-[31vw]'
          children={[]}
          images={[
            "shotTwo.jpg",
            "shotThree.jpg",
            "shotFour.jpg",
            "shotOne.jpg",
          ]}
        />
        <ImagesSlider
          time={2700}
          className='w-[31vw]'
          children={[]}
          direction='down'
          images={[
            "shotThree.jpg",
            "shotFour.jpg",
            "shotOne.jpg",
            "shotTwo.jpg",
          ]}
        />
        <ImagesSlider
          time={3000}
          className='w-[31vw]'
          children={[]}
          images={[
            "shotFour.jpg",
            "shotOne.jpg",
            "shotTwo.jpg",
            "shotThree.jpg",
          ]}
        />
        <ImagesSlider
          time={4000}
          className='w-[31vw] '
          children={[]}
          direction='down'
          images={[
            "shotFour.jpg",
            "shotThree.jpg",
            "shotOne.jpg",
            "shotTwo.jpg",
          ]}
        />
        <ImagesSlider
          time={3500}
          className='w-[31vw]'
          children={[]}
          images={[
            "shotTwo.jpg",
            "shotThree.jpg",
            "shotFour.jpg",
            "shotOne.jpg",
          ]}
        />
      </div>
      <div className='absolute top-2 flex items-center justify-center text-center'>
        <h2 className=' text-white text-3xl font-extrabold ml-3'>
          Наш
          <br />
          <FlipWords
            words={[
              "увлекательный",
              "милый",
              "задорный",
            ]}
            className='text-red'
          />
          <br />
          репертуар
        </h2>
      </div>
      <p className='absolute text-white text-lg bottom-20'>
        Можно найти{" "}
        <a
          className='hover:border-b-2 transition-all text-red'
          href='https://forms.yandex.ru/u/6283cdd3f0698860b70e58a4/'>
          здесь
        </a>
      </p>
    </div>
  );
};

export default Gallery;
