import React, {
  ElementType,
} from "react";
import "@/public/puzzle.svg";
import { useRef } from "react";
import { Interface } from "readline";

const GlassedButton = ({
  id,
  path,
  alt,
  hendleClick,
}: {
  id: string;
  path: string;
  alt: string;
  hendleClick: Function;
}) => {
  const buttonRef =
    useRef<HTMLButtonElement>(null);

  function clickHendler() {
    // console.log(buttonRef);
    hendleClick(buttonRef);
  }

  return (
    <button
      id={id}
      ref={buttonRef}
      onClick={clickHendler}>
      <div className='my-2 bg-[#252a2b]/[0.5] border-[1px] border-[#fe0c1a] rounded-xl w-[52px] sm:w-[90px] p-2 backdrop-blur-[1px] hover:shadow-[3px_7px_12px_10px_rgba(255,255,255,0.01)] shadow-[0_5px_2px_-1px_rgba(255,255,255,0.02)] hover:scale-[1.02] transition-all'>
        <img src={path} alt={alt} />
      </div>
    </button>
  );
};

export default GlassedButton;
