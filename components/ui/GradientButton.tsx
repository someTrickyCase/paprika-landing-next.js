import React from "react";

const GradientButton = ({
  text,
}: {
  text: string;
}) => {
  return (
    <button className='group/item flex items-center justify-center py-2 px-4 rounded-full relative text-white text-sm sm:text-base md:text-lg lg:text-xl hover:shadow-md hover:shadow-white/[0.1] transition-all duration-200 border border-white/[0.3]'>
      <div className='group-hover/item:w-[80%] absolute inset-x-0 h-px w-1/2 mx-auto -top-px transition-all duration-1000 bg-gradient-to-r from-white/[0] via-red to-white/[0]' />
      <span className='relative z-20 font-light'>
        {text}
      </span>
    </button>
  );
};

export default GradientButton;
