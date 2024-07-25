import React from "react";

const GradientButton = ({
  text,
}: {
  text: string;
}) => {
  return (
    <button className='flex items-center justify-center py-2 px-4 rounded-full relative text-white text-sm sm:text-base md:text-lg lg:text-xl hover:shadow-2xl hover:shadow-white/[0.1] transition-all duration-200 border border-[#f0f2f3]/[0.3]'>
      <div className='absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-[#fe0c1a]/[0.6] to-transparent' />
      <span className='relative z-20 font-light'>
        {text}
      </span>
    </button>
  );
};

export default GradientButton;
