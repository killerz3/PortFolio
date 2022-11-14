"use Client"
import Link from 'next/link'
import React from 'react'
import {FiGithub,FiTwitter,FiYoutube,FiInstagram} from "react-icons/fi"
import NavLink from './(client components)/NavLink'
import {useRouter, useSelectedLayoutSegment} from "next/navigation"



export default function Sidebar() {
  
  const router = useRouter()


  
  return (
      <aside className=' bg-dark-primary cursor-vertical-text p-10 shadow-xl shadow-black z-10 text-white sticky min-h-screen top-0  '>
          <div className='flex flex-col-reverse rotate-180 h-full justify-between items-center relative'>
        <div className='vertical-upright rotate-180 font-extrabold tracking-tighter  text-xl text-stone-300 font-major '>
          KZ3
        </div>
        <div className='flex-grow vertical-rl flex flex-row-reverse justify-between py-10 '>  
              <NavLink href="/">Home</NavLink>
              <NavLink href="/Projects">Projects</NavLink>
              <NavLink href="/Contact">Contact</NavLink>
        </div>  
              <div className='vertical-rl h-48  overflow-hidden'>
                  <ul className='flex justify-evenly text-2xl rotate-180' >
                    <Link href={"https://github.com/killerz3"}><FiGithub/></Link >
                    <Link href={"https://twitter.com/killer__z3"}><FiTwitter/></Link >
                    <Link href={"https://www.youtube.com/channel/UCqbtyCm8qUxUZaA1-7V8X-w"}><FiYoutube/></Link >
                    <Link href={"https://www.instagram.com/l_imagine_/"}><FiInstagram/></Link >
                  
                  </ul>
              </div>
         </div>
    </aside>
  )
}
