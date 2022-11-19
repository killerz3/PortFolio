"use client"
import Link from 'next/link'
import React from 'react'
import {usePathname, useRouter, useSelectedLayoutSegment} from "next/navigation"



export default function NavLink({ href, children }) {
  const path = usePathname()
  const active = path === href
  console.log(path,href,active);
  
  
  return (
      <Link className={`${active?"text-Accent":""} font-SyneMono my-5 font-bold text-3xl transition duration-300 ease-in`} href={href}>{children}</Link>
  )
}
