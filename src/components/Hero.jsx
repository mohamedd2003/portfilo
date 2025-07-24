"use client"

import { useState, useEffect } from "react"

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Mouse follower */}
      <div
        className="fixed w-4 h-4 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transition: "all 0.1s ease-out",
        }}
      ></div>

      <div className="text-center px-4 relative z-10">
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="w-40 h-40 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  MH
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-4">
            <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              MOHAMED
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              HOSSAM
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-400 font-light tracking-widest">FULL STACK DEVELOPER</div>
        </div>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Crafting digital experiences with precision and passion. Specialized in modern web technologies, scalable
          architectures, and innovative solutions that drive business growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-600 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
