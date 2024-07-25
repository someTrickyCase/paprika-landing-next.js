"use client";

import { cn } from "@/utils/cn";
import React, {
  useEffect,
  useState,
} from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    path: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef =
    React.useRef<HTMLDivElement>(null);
  const scrollerRef =
    React.useRef<HTMLUListElement>(
      null
    );

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] =
    useState(false);
  function addAnimation() {
    if (
      containerRef.current &&
      scrollerRef.current
    ) {
      const scrollerContent =
        Array.from(
          scrollerRef.current.children
        );

      scrollerContent.forEach(
        (item) => {
          const duplicatedItem =
            item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(
              duplicatedItem
            );
          }
        }
      );

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty(
          "--animation-duration",
          "20s"
        );
      } else if (speed === "normal") {
        containerRef.current.style.setProperty(
          "--animation-duration",
          "40s"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-duration",
          "80s"
        );
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden ",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-24 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover &&
            "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => (
          <li
            className='relative w-[90vw] md:w-[60vw] lg:w-[40vw] h-auto sm:h-[35vh]  p-2 rounded-2xl border-[#252a2b] border-b-0 flex-shrink-0 border-slate-700 bg-[#252a2b]'
            key={item.name}
            style={{
              background:
                "rgb(70,70,77, 0.1)",
            }}>
            <blockquote>
              <div
                aria-hidden='true'
                className='user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]'></div>
              <div className='z-20 flex flex-col gap-4 pl-4'>
                <span className='flex gap-4 items-center mt-1'>
                  <div className='w-[40px] h-[40px] overflow-hidden rounded-full flex items-center justify-center border-[1px] border-[#fe0c1a]'>
                    <img
                      className='w-[40px] '
                      src={item.path}
                      alt={item.name}
                    />
                  </div>
                  <span className='text-lg font-bold leading-3 text-[#fe0c1a]'>
                    {item.name}
                  </span>
                </span>
                <span className='relative z-20 text-sm sm:text-base text-[#f0f2f3]'>
                  {item.quote}
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
