'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import anime from 'animejs'

export default function MinecraftHeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Mouse tracking for interactive effects (without cursor glow)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    // Anime.js title animation
    if (titleRef.current) {
      anime({
        targets: titleRef.current.querySelectorAll('span'),
        opacity: [0, 1],
        scale: [0.8, 1],
        translateY: [50, 0],
        rotateZ: [10, 0],
        delay: anime.stagger(50, { start: 800 }),
        duration: 1000,
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
        delay: 1800,
        duration: 1200,
        easing: 'easeOutExpo'
      })
    }

    // Anime.js badge animation
    if (badgeRef.current) {
      anime({
        targets: badgeRef.current,
        opacity: [0, 1],
        scale: [0.8, 1],
        translateY: [-20, 0],
        delay: 600,
        duration: 800,
        easing: 'easeOutBack'
      })

      // Continuous floating animation for badge
      anime({
        targets: badgeRef.current,
        translateY: [-10, 10],
        duration: 3000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
      })
    }

    // Create floating particles
    const createParticles = () => {
      if (!particlesRef.current) return

      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        
        const size = Math.random() * 6 + 3
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight
        const animationDuration = Math.random() * 15 + 10
        
        particle.style.cssText = `
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          animation-duration: ${animationDuration}s;
          animation-delay: ${Math.random() * 5}s;
          opacity: ${Math.random() * 0.8 + 0.2};
          background: radial-gradient(circle, rgba(124, 58, 237, 0.8) 0%, rgba(124, 58, 237, 0) 70%);
          border-radius: 50%;
          position: absolute;
          pointer-events: none;
        `
        
        particlesRef.current.appendChild(particle)

        // Animate particle movement
        anime({
          targets: particle,
          translateX: [0, Math.random() * 300 - 150],
          translateY: [0, Math.random() * 300 - 150],
          scale: [1, Math.random() * 2 + 0.5],
          opacity: [particle.style.opacity, 0],
          duration: animationDuration * 1000,
          easing: 'linear',
          loop: true,
          direction: 'alternate'
        })
      }
    }

    createParticles()
    
    // Create walking mobs
    const createWalkingMobs = () => {
      const mobs = ['🧟', '💀', '🕷️', '🤖', '👤', '🐉']
      
      setInterval(() => {
        const mob = mobs[Math.floor(Math.random() * mobs.length)]
        const mobElement = document.createElement('div')
        mobElement.innerHTML = mob
        mobElement.className = 'mob-walking'
        mobElement.style.animationDelay = Math.random() * 5 + 's'
        mobElement.style.bottom = Math.random() * 30 + 10 + '%'
        
        if (particlesRef.current) {
          particlesRef.current.appendChild(mobElement)
        }
        
        setTimeout(() => {
          if (mobElement.parentNode) {
            mobElement.parentNode.removeChild(mobElement)
          }
        }, 15000)
      }, 8000)
    }
    
    createWalkingMobs()

    return () => {
      if (particlesRef.current) {
        particlesRef.current.innerHTML = ''
      }
    }
  }, [])

  const titleText = "Kaarma.Cloud Minecraft Hosting – High Performance ‎ Servers"
  const titleChars = titleText.split('').map((char, index) => (
    <span key={index} className="inline-block">
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Parallax Background Layers */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          y: mousePosition.y * 0.5,
          x: mousePosition.x * 0.3
        }}
      >
        <iframe 
          src="https://my.spline.design/minecraftcubecopy-df8d8d2e2d9e4b0f0a0d5e5f5f5f5f5f/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Animated Grid Layer */}
      <motion.div 
        className="absolute inset-0 z-5 grid-bg opacity-10"
        style={{
          y: mousePosition.y * -0.2,
          x: mousePosition.x * -0.1
        }}
      />

      {/* Floating Particles Overlay with Parallax */}
      <motion.div 
        ref={particlesRef}
        className="particles absolute inset-0 z-10 pointer-events-none"
        style={{
          y: mousePosition.y * 0.1,
          x: mousePosition.x * 0.05
        }}
      />

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-jet-black/40 via-transparent to-jet-black/60 z-20" />

      {/* Hero Content */}
      <div className="relative z-30 text-center px-4 max-w-6xl mx-auto">
        {/* Powered By Badge */}
        <motion.div
          ref={badgeRef}
          initial={{ opacity: 0, scale: 0.8 }}
          style={{
            rotateX: mousePosition.y * 0.1,
            rotateY: mousePosition.x * 0.1
          }}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-glow-purple/20 to-accent-purple/20 backdrop-blur-lg border border-purple-500/30 rounded-full px-6 py-3 mb-8 glass-card glow-purple cursor-pointer"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity }
            }}
            className="w-8 h-8 bg-gradient-to-br from-glow-purple to-accent-purple rounded-lg flex items-center justify-center text-sm font-bold"
          >
            🔥
          </motion.div>
          <motion.span 
            className="font-orbitron font-semibold text-lg text-glow"
            animate={{
              textShadow: [
                "0 0 5px rgba(124, 58, 237, 0.5)",
                "0 0 20px rgba(124, 58, 237, 0.8)",
                "0 0 5px rgba(124, 58, 237, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            High Performance Servers
          </motion.span>
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 5px rgba(34, 197, 94, 0.5)",
                "0 0 15px rgba(34, 197, 94, 0.8)",
                "0 0 5px rgba(34, 197, 94, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-green-500 rounded-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Main Title with Glowing Streaks */}
          <div className="relative">
            {/* Background Glow Streaks */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-glow-purple/30 to-transparent blur-xl"
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <h1 
              ref={titleRef}
              className="relative font-orbitron font-black text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl mb-6 text-glow leading-tight whitespace-nowrap overflow-hidden text-ellipsis sm:whitespace-normal"
              style={{ wordBreak: 'keep-all', hyphens: 'none' }}
            >
              {titleChars}
            </h1>
          </div>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl mb-12 text-gray-300 font-light leading-relaxed opacity-0 max-w-4xl mx-auto"
          >
            Instant setup, one-click modpacks & plugins, ultra-low latency, powered by Amd Processors ensuring top-notch performance
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(124, 58, 237, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#plans')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-gradient-to-r from-glow-purple to-accent-purple px-8 py-4 rounded-2xl text-lg font-semibold glow-purple hover:glow-purple-intense transition-all duration-300 btn-hover overflow-hidden"
            >
              <span className="relative z-10">Start your Minecraft journey with us</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-purple to-glow-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Single AMD Logo - Right Side with Hover Flip Animation */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1.5 }}
          className="absolute bottom-10 right-10 hidden lg:block"
          style={{
            rotateX: mousePosition.y * 0.3,
            rotateY: mousePosition.x * 0.3
          }}
        >
          <div className="flip-card w-20 h-20">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-gradient-to-br from-glow-purple to-accent-purple rounded-xl flex items-center justify-center glow-purple shadow-2xl">
                <img 
                  src="https://en.wikichip.org/w/images/4/4e/amd_ryzen_7_logo.png" 
                  alt="AMD Ryzen 7" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="flip-card-back bg-gradient-to-br from-accent-purple to-glow-purple rounded-xl flex items-center justify-center glow-purple shadow-2xl">
                <img 
                  src="https://en.wikichip.org/w/images/thumb/0/01/amd_ryzen_9_logo.png/250px-amd_ryzen_9_logo.png" 
                  alt="AMD Ryzen 9" 
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}