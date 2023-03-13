"use client";
import {
  motion as m,
  Target,
  TargetAndTransition,
  useScroll,
} from "framer-motion";
import React from "react";
import Banner from "./(components)/banner";
import Circle from "./(components)/(knick-knack)/cricle";
import DoubleCirc from "./(components)/(knick-knack)/doubleCirc";
const whileHover: TargetAndTransition = {
  fontStyle: "italic",
  transition: {
    duration: 2,
    ease: "easeOut",
  },
};

export default function Page() {
  const scrollPos = useScroll();

  return (
    <m.main className="min-w-screen relative overflow-x-hidden overflow-y-scroll">
      <div className="flex w-full items-center justify-between">
        <DoubleCirc />
        <span className="mr-5 font-SyneMono ">
          Never tell anyone 100% of what you know
        </span>
      </div>
      <m.div className="marquee h-full  w-full rotate-45 font-major text-7xl font-extralight md:text-9xl  ">
        <Banner
          className="transition-colors duration-500 ease-in hover:font-medium hover:text-Accent"
          title={"COde , Design, 3D Art"}
        />
      </m.div>

      <m.div className="font-poppins mt-8 ml-10 mb-36 w-2/3 select-none overflow-clip text-5xl text-neutral-200">
        Hi im{" "}
        <m.span
          whileHover={whileHover}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          className="highlight-text"
        >
          shubhVeer singh chaUdharY
        </m.span>
        , a Computer science student with a passion to{" "}
        <m.span whileHover={whileHover} className="highlight-text">
          creAte
        </m.span>{" "}
        stuff like Apps Websites & 3d renders
      </m.div>
      <m.div className="ml-5 mt-8 mb-32   flex w-9/12 select-none flex-col items-center justify-center font-Poppins text-4xl font-thin text-neutral-200 md:mr-36 md:w-11/12 md:text-7xl ">
        Hello i'm a 'full' full stack developer, currently studying Computer
        Science with major in IOT at Netaji Subhash University of Technology
      </m.div>
      <m.div className="ml-5 mt-8 mb-32   flex w-9/12 select-none flex-col items-center justify-center font-Poppins text-4xl font-thin text-neutral-200 md:mr-36 md:w-11/12 md:text-7xl ">
        I like to try and learn a bunch of stuff currently im learning Next13
        while growing my skills in DSA.
      </m.div>
    </m.main>
  );
}
