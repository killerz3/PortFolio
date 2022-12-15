

import Link from 'next/link'
import React from 'react'
import { RiFlutterLine , RiReactjsFill} from "react-icons/ri"
import { FaBlender, FaPython } from "react-icons/fa"
import { IoLogoFirebase ,IoLogoNodejs} from "react-icons/io5"
import { TbBrandNextjs, TbBrandTailwind, } from "react-icons/tb"
import {SiAdobe, SiAdobephotoshop, SiAdobepremierepro, SiBlender, SiExpress, SiMongodb, SiPremierleague, SiPrisma} from "react-icons/si"
export default function Projects() {
  return (
    <div className='w-screen overflow-y-scroll h-screen  pr-24 pl-5'>
      
      
        <div className='h-full pt-10'>
        <span className='my-10 font-major text-3xl md:text-5xl font-extrabold'>My Projects</span>

        <div className='project-card'>
          <div className="flex flex-col w-1/2">
            <Link href={"/"} className='font-major text-3xl hover:underline'>Apps</Link>
            <span className="ml-3 my-2 text-xl">Tech-Stack:</span>
            <ul className='ml-8 list-disc text-lg grid grid-col-2 md:grid-cols-3 '>
              <li className='flex items-center'><RiFlutterLine className='mr-2'/> Flutter</li>
              <li className='flex items-center'><FaPython className='mr-2'/>Python</li>
              <li className='flex items-center'><IoLogoFirebase className='mr-2'/>Firebase</li>
              
            </ul>
          </div>
        
        </div>
        <div className='project-card md:justify-end'>
          <div className="flex flex-col w-1/2">
            <Link href={"/"} className='font-major text-3xl hover:underline'>WebSites</Link>
            <span className="ml-3 mt-2 text-xl">Tech-Stack:</span>
             <ul className='ml-8 list-disc text-lg grid grid-col-2 md:grid-cols-3 '>
              <li className='flex items-center'><TbBrandNextjs className='mr-2'/>NextJS</li>
              <li className='flex items-center'><TbBrandTailwind className='mr-2'/>TailwindCss</li>
              <li className='flex items-center'><IoLogoNodejs className='mr-2'/>Node</li>
              <li className='flex items-center'><RiReactjsFill className='mr-2'/>React</li>
              <li className='flex items-center'><SiExpress className='mr-2'/>Express</li>
              <li className='flex items-center'><SiMongodb className='mr-2'/>Mongo</li>
              <li className='flex items-center'><SiPrisma className='mr-2'/>Prisma ORM</li>
            </ul>
          </div>
        
        </div>
        <div className='project-card'>
          <div className="flex flex-col w-1/2">
            <Link href={"/"} className='font-major text-3xl hover:underline'>3D</Link>
            <span className="ml-3 mt-2 text-xl">Tech-Stack:</span>
            <ul className='ml-8 list-disc text-lg grid grid-col-2 md:grid-cols-3 '>
              <li className='flex items-center'><SiBlender className='mr-2'/> Blender</li>
              <li className='flex items-center'><SiAdobepremierepro className='mr-2'/>Premiere Pro</li>
              <li className='flex items-center'><SiAdobephotoshop className='mr-2'/>Photoshop</li>
              
            </ul>
          </div>
        
        </div>
        
      </div>
      
   </div>
  )
}
