"use client"
import React, { useState } from 'react'
import { motion as m } from "framer-motion"
import Circle from "../(knick-knack)/cricle"
export default function DoubleCirc() {
  
  return (
      <m.div className=" relative right-0" >
        <Circle
          
          radius={35}
          animate
          duration={5}
          className="stroke-Accent fill-dark-primary absolute"
          pathLengthFrom={0}
          pathLengthTo={0.75}
          strokeThicc={10} />
        <Circle
          height={50}
          width={50}
          radius={30}
          animate
          duration={5}
          className="stroke-Accent fill-dark-primary pointer-events-auto"
          pathLengthFrom={1}
          pathLengthTo={0.25}
          strokeThicc={10}
          svgClassName="absolute top-[12.5px] left-[12.5px] -rotate-90"
        />
      </m.div>
  )
}
