"use client"
import { AnimatePresence,motion as m } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"

import Sidebar from "./(components)/sidebar"
import "./global.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
  
  const path= usePathname()
  
  
  return (
    <html>
      <head>
        <title>Next 13 app</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossorigin"/>
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Major+Mono+Display&family=Poppins:ital,wght@0,100;0,400;0,600;1,100;1,400;1,600&family=Syne+Mono&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-dark-primary w-screen overflow-x-hidden text-white h-screen inset-0 ">

        <AnimatePresence  >
          <m.div
            className="flex ">
          <Sidebar />
              {children}
        </m.div>

        </AnimatePresence>
      </body>
    </html>
  )
}
