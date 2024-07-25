"use client";

import {
  useRef,
  useState,
} from "react";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import GlassedButton from "./ui/GlassedButton";
import {
  aboutData,
  svgList,
} from "@/data/data";
import { FlipWords } from "./ui/FlipWords";

const About = () => {
  const [dataIndex, setDataIndex] =
    useState(0);

  function changeCard(ref) {
    setDataIndex(
      Number(ref.current.id) - 1
    );
  }

  return (
    <div
      id='about'
      className='min-h-[100vh] h-auto w-full relative antialiased bg-[#171b1c] flex flex-col gap-8 items-center justify-center border-b-2 border-[#252a2b]'>
      <BackgroundBeams />

      <h2 className='absolute top-8 text-[#f0f2f3] text-3xl font-extrabold ml-3'>
        Kое-что, что вы <br />
        <FlipWords
          words={[
            "хотите",
            "должны",
            "любите",
          ]}
          className='text-[#fe0c1a]'
        />{" "}
        знать о нас
      </h2>

      <div className='h-auto w-[80vw] md:w-[70vw] lg:w-[900px] transition-all'>
        <h3 className='text-xl font-bold text-[#fe0c1a]'>
          {aboutData[dataIndex].title}
        </h3>
        <p className='mt-8 text-base font-light text-[#f0f2f3]'>
          {
            aboutData[dataIndex]
              .description
          }
        </p>
      </div>

      <div className='absolute bottom-12 sm:bottom-8 flex gap-2'>
        {svgList.map((item, idx) => (
          <GlassedButton
            hendleClick={changeCard}
            key={idx}
            id={item.id}
            path={item.path}
            alt={item.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
