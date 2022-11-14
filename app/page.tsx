"use client";
import { motion as m, Target, TargetAndTransition, useScroll } from "framer-motion";
import React from "react";
import Banner from "./(components)/banner";
import Circle from './(components)/(knick-knack)/cricle'
import DoubleCirc from "./(components)/(knick-knack)/doubleCirc";

const whileHover: TargetAndTransition = {
  fontStyle: "italic",

  transition: {
    duration: 2,
    ease:"easeOut"
  }
}




export default function Page() {

  const scrollPos = useScroll()

  return (
    <main className="overflow-y-scroll min-w-screen overflow-x-hidden relative">
      
     
      <div className="flex items-center w-full justify-between">
        <DoubleCirc />
          <span className="font-SyneMono mr-5 ">Never tell anyone 100% of what you know</span>
      </div>
      <m.div className="text-7xl md:text-9xl  marquee h-full w-full rotate-45 font-extralight font-major  ">

        <Banner className="hover:text-Accent transition-colors duration-500 ease-in hover:font-medium" title={"COde , Design, 3D Art"} />
        
      </m.div>
      
      
      <m.div className="text-5xl w-2/3 mt-8 ml-10 font-poppins text-neutral-200 overflow-clip mb-10">
        Hi im <m.span
          whileHover={whileHover}
          transition={{

            duration: 2,
            ease:"easeOut"
          }}
          className="highlight-text">shubhVeer singh chaUdharY</m.span>,
        a Computer science student with a passion to <m.span whileHover={whileHover} className="highlight-text">creAte</m.span> stuff
        like Apps Websites & 3d renders
      </m.div>

    </main>
  );
}
