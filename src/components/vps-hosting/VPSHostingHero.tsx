'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import anime from 'animejs'

export default function VPSHostingHero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Mouse tracking for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Anime.js title animation
    if (titleRef.current) {
      anime({
        targets: titleRef.current.querySelectorAll('span'),
        opacity: [0, 1],
        scale: [0.8, 1],
        translateY: [50, 0],
        rotateZ: [10, 0],
        delay: anime.stagger(80, { start: 600 }),
        duration: 1200,
        easing: 'easeOutElastic(1, .8)'
      })
    }

    // Anime.js subtitle animation
    if (subtitleRef.current) {
      anime({
        targets: subtitleRef.current,
        opacity: [0, 1],
        translateY: [30, 0],
        letterSpacing: ['0.2em', '0.05em'],
        delay: 1600,
        duration: 1000,
        easing: 'easeOutExpo'
      })
    }

    // Anime.js buttons animation
    if (buttonsRef.current) {
      anime({
        targets: buttonsRef.current.children,
        opacity: [0, 1],
        scale: [0.8, 1],
        translateY: [40, 0],
        delay: anime.stagger(200, { start: 2000 }),
        duration: 800,
        easing: 'easeOutBack'
      })
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const titleText = "High Performance India &  Germany VPS Hosting"
  const titleChars = titleText.split('').map((char, index) => (
    <span key={index} className="inline-block">
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Spline 3D Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          y: mousePosition.y * 0.5,
          x: mousePosition.x * 0.3
        }}
      >
        <iframe 
          src="https://my.spline.design/serversrack-4f8e2c5d2f4a4b8f8c8d8e8f8f8f8f8f/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          className="w-full h-full object-cover opacity-40"
        />
      </motion.div>

      {/* Animated Grid Background */}
      <motion.div 
        className="absolute inset-0 z-10"
        style={{
          y: mousePosition.y * -0.3,
          x: mousePosition.x * -0.2
        }}
      >
        <div className="grid-bg opacity-20" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-20">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 2, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 text-center px-4 lg:px-8 max-w-6xl mx-auto">
        {/* Hero Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-glow-purple/20 to-accent-purple/20 backdrop-blur-lg border border-purple-500/30 rounded-full px-6 py-3 mb-8"
        >
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          <span className="font-orbitron font-semibold text-lg text-glow">🇮🇳 Delhi Data Center</span>
        </motion.div>

        {/* Hero Title */}
        <h1 
          ref={titleRef}
          className="font-orbitron font-bold text-4xl md:text-6xl lg:text-7xl mb-8 text-glow leading-tight whitespace-nowrap overflow-hidden text-ellipsis sm:whitespace-normal"
          style={{ wordBreak: 'keep-all', hyphens: 'none' }}
        >
          {titleChars}
        </h1>

        {/* Hero Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed opacity-0"
        >
          Powerful Virtual Private Servers in India with dedicated resources, 
          root access, and enterprise-grade DDoS protection.
        </p>

        {/* CTA Button */}
        <div ref={buttonsRef} className="flex justify-center items-center">
          <motion.button
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 0 30px rgba(124, 58, 237, 0.8)",
              filter: "drop-shadow(0 0 20px rgba(124, 58, 237, 0.6))"
            }}
            whileTap={{ scale: 0.95 }}
            className="neuro-button-lg bg-gradient-to-r from-glow-purple to-accent-purple px-8 py-4 rounded-2xl font-orbitron font-bold text-lg glow-purple hover:glow-purple-intense transition-all duration-300 opacity-0"
            onClick={() => document.querySelector('#vps-plans')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Deploy VPS Now
          </motion.button>
        </div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-8 mt-16 text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span>Instant Deployment</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full" />
            <span>Root Access</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full" />
            <span>NVMe SSD</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full" />
            <span>1 Gbps Unmetered</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}