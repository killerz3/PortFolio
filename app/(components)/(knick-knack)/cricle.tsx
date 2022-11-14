import React from 'react'
import {motion as m, useScroll } from "framer-motion"

export default function Cricle({ className, strokeThicc, pathLengthTo, pathLengthFrom, radius, animate, duration , svgClassName,height,width}: {
  className: string,
  strokeThicc: number,
  pathLengthTo:number,
  pathLengthFrom:number,
  radius:number,
  animate: boolean,
  duration: number,
  svgClassName?: string
  height?: number,
  width?: number,

}) {



  return (
       <svg id="progress" width={width??75} height={height??75} viewBox="0 0 100 100" className={svgClassName}>
            <m.circle
              cx="50"
              cy="50"
              r={radius}
            
            strokeWidth={strokeThicc}
              className={className}
            initial={{
                pathLength:pathLengthFrom
            }}
            animate={animate&&{
              pathLength: pathLengthTo,
              transition: {
                duration: duration,
                ease: "easeOut"
              }
              
            }}
        whileHover={{
          pathLength: pathLengthFrom,
          transition: {
            duration:duration/2
          }
        }}
        
            />
            {/* <circle cx="50" cy="50" r="30" pathLength="1" className="fill-black text-black" /> */}
          </svg> 
  )
}
