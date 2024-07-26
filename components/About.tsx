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
      className='min-h-[100vh] h-auto w-full relative antialiased bg-black flex flex-col gap-8 items-center justify-center border-b-2 border-gray'>
      <BackgroundBeams />

      <h2 className='absolute top-8 text-white text-3xl font-extrabold ml-3'>
        Kое-что, что вы <br />
        <FlipWords
          words={[
            "хотите",
            "должны",
            "любите",
          ]}
          className='text-red'
        />{" "}
        знать о нас
      </h2>

      <div className='h-auto w-[80vw] md:w-[70vw] lg:w-[900px] transition-all'>
        <h3 className='text-xl font-bold text-red'>
          {aboutData[dataIndex].title}
        </h3>
        <p className='mt-8 text-base font-light text-white'>
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
