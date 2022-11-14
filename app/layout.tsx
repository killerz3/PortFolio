"use client"
import { AnimatePresence } from "framer-motion"
import NavBar from "./(components)/NavBar"
import Sidebar from "./(components)/sidebar"
import "./global.css"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Next 13 app</title>
        <meta name="viewport" content="width=device-width initial-scale=1"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossorigin"/>
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Major+Mono+Display&family=Poppins:ital,wght@0,100;0,400;0,600;1,100;1,400;1,600&family=Syne+Mono&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-dark-primary md:w-screen text-white md:h-screen inset-0 ">

        <AnimatePresence>
          <div className="flex ">
            <Sidebar />
            
          {children}
        </div>

        </AnimatePresence>
      </body>
    </html>
  )
}
