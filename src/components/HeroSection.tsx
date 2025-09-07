'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const glassmorphismRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate glassmorphism card entrance
    if (glassmorphismRef.current) {
      // Simple fade in animation
      glassmorphismRef.current.style.opacity = '1'
      glassmorphismRef.current.style.transform = 'translateY(0)'
    }

    // Animate main title
    if (titleRef.current) {
      titleRef.current.style.opacity = '1'
      titleRef.current.style.transform = 'translateY(0)'
    }

    // Smooth scroll function
    const smoothScrollToServices = () => {
      const servicesSection = document.querySelector('[data-section="services"]')
      if (servicesSection) {
        servicesSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }

    // Add click handler to CTA button
    const ctaButton = document.getElementById('hero-cta-button')
    if (ctaButton) {
      ctaButton.addEventListener('click', smoothScrollToServices)
    }

    return () => {
      if (ctaButton) {
        ctaButton.removeEventListener('click', smoothScrollToServices)
      }
    }
  }, [])
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      {/* Enhanced Aurora Background with Strong Glow */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient with stronger animation */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #0a0a0b 0%, #1a0d2e 30%, #2a1454 70%, #0a0a0b 100%)',
          }}
          animate={{
            background: [
              'linear-gradient(135deg, #0a0a0b 0%, #1a0d2e 30%, #2a1454 70%, #0a0a0b 100%)',
              'linear-gradient(135deg, #0a0a0b 0%, #2a1454 30%, #7c3aed 70%, #0a0a0b 100%)',
              'linear-gradient(135deg, #0a0a0b 0%, #1a0d2e 30%, #2a1454 70%, #0a0a0b 100%)'
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Enhanced animated overlay with more particles */}
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.3) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.3) 0%, transparent 40%),
              radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 30%),
              radial-gradient(circle at 70% 20%, rgba(147, 51, 234, 0.25) 0%, transparent 35%)
            `
          }}
          animate={{
            background: [
              `
              radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.3) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.3) 0%, transparent 40%),
              radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 30%),
              radial-gradient(circle at 70% 20%, rgba(147, 51, 234, 0.25) 0%, transparent 35%)
              `,
              `
              radial-gradient(circle at 30% 40%, rgba(168, 85, 247, 0.35) 0%, transparent 40%),
              radial-gradient(circle at 70% 60%, rgba(124, 58, 237, 0.35) 0%, transparent 40%),
              radial-gradient(circle at 50% 90%, rgba(236, 72, 153, 0.25) 0%, transparent 30%),
              radial-gradient(circle at 60% 10%, rgba(147, 51, 234, 0.3) 0%, transparent 35%)
              `,
              `
              radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.3) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.3) 0%, transparent 40%),
              radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 30%),
              radial-gradient(circle at 70% 20%, rgba(147, 51, 234, 0.25) 0%, transparent 35%)
              `
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Stardust particle effect */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                boxShadow: '0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(168, 85, 247, 0.6)'
              }}
              animate={{
                y: [0, -Math.random() * 100 - 50],
                x: [0, (Math.random() - 0.5) * 50],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      {/* Subtle dark vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10" />

      {/* Hero Content - Clean Layout */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        {/* Content Container */}
        <div 
          ref={glassmorphismRef}
          className="relative p-12 md:p-16 lg:p-20 transition-all duration-1000"
          style={{
            opacity: 0,
            transform: 'translateY(30px)'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Main Brand Heading */}
            <div className="relative">
              <h1 
                ref={titleRef}
                className="font-orbitron font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight transition-all duration-1000"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #a855f7 50%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.03em',
                  opacity: 0,
                  transform: 'translateY(30px)'
                }}
              >
                kaarma.cloud
              </h1>
              
              {/* Subtle glow backdrop */}
              <div 
                className="absolute inset-0 -z-10 rounded-2xl opacity-20"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.3) 0%, rgba(168, 85, 247, 0.2) 30%, transparent 70%)',
                  filter: 'blur(40px)'
                }}
              />
            </div>

            {/* Premium Subheadings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 font-orbitron">
                Where Performance Meets Affordability.
              </h2>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-white/80 font-orbitron">
                Reliable. Scalable. Unbeatable.
              </h3>
              
              {/* Small tagline */}
              <p className="text-lg md:text-xl text-gray-300/90 mt-6 font-light italic">
                Enterprise-level hosting without enterprise pricing.
              </p>
            </motion.div>

            {/* Premium CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex justify-center mt-12"
            >
              <motion.button
                id="hero-cta-button"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(124, 58, 237, 0.8), 0 10px 30px rgba(0, 0, 0, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative px-12 py-5 text-xl md:text-2xl font-bold font-orbitron text-white rounded-2xl overflow-hidden group transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #7c3aed 100%)',
                  boxShadow: '0 0 20px rgba(124, 58, 237, 0.5), 0 10px 30px rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                {/* Animated background overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #a855f7 100%)'
                  }}
                />
                
                {/* Button text */}
                <span className="relative z-10">
                  Get Started in 30s
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}