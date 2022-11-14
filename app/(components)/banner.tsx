import React from 'react'
import { motion as m } from "framer-motion"

const banner= {
      animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 1,
    },
  },
};

const letterAni = {
  initial: { y: 400 , opacity:0},
  animate: {
      y: 0,
      opacity:1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 10,
    },
  },
};


export default function Banner({title,className}) {
  return (
    <m.div
    
      initial={{
        opacity:0
      }}
      animate={{
        opacity: 1,
        transition: {
          ease: [0.6, 0.01, -0.05, 0.95],
          duration:10
        }
        
      }}
      
      
      className={className ?? null}>
          {title}
    </m.div>
  )
}


