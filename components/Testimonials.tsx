import React from "react";
import { FlipWords } from "./ui/FlipWords";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { testimonialsData } from "@/data/data";

const Testimonials = () => {
  return (
    <div
      id='testimonials'
      className='min-h-[100vh] h-auto w-full relative antialiased bg-black flex flex-col gap-8 items-center justify-center border-b-2 border-gray'>
      <BackgroundBeams />
      <div className='absolute top-8 flex items-center justify-center text-center'>
        <h2 className=' text-white text-3xl font-extrabold ml-3'>
          <FlipWords
            words={[
              "Люди",
              "Клиенты",
              "Организаторы",
            ]}
            className='text-red'
          />
          <br />
          говорят о нас
        </h2>
      </div>
      <div className='absolute flex items-center justify-center'>
        <InfiniteMovingCards
          className='absolute'
          pauseOnHover={true}
          direction='left'
          speed='normal'
          items={testimonialsData}
        />
      </div>
    </div>
  );
};

export default Testimonials;
