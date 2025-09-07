'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function JoinUsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const handleExperienceClick = () => {
    const servicesSection = document.querySelector('[data-section="services"]') || document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleDiscordClick = () => {
    // Discord invite link
    window.open('https://discord.gg/C2pfxwxeUf', '_blank')
  }

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden joinus-bg">
      {/* Energetic Aurora Background for Join Us Section */}
      <div className="absolute inset-0">
        {/* Base gradient background */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse at center, #2d0a45 0%, #1a0b2e 25%, #0f0a1a 50%, #000000 100%),
            linear-gradient(135deg, #2d0a45 0%, #1a0b2e 25%, #000000 100%)
          `
        }} />
        
        {/* Aurora glow converging toward center */}
        <div className="absolute inset-0 opacity-30" style={{
          background: `
            radial-gradient(circle at 30% 70%, rgba(147, 51, 234, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.18) 0%, transparent 50%),
            radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(124, 58, 237, 0.15) 0%, transparent 40%)
          `,
          animation: 'neon-wave 15s ease-in-out infinite'
        }} />
        
        {/* Faster moving wave layers */}
        <div className="absolute inset-0 opacity-25" style={{
          background: `
            linear-gradient(45deg, 
              transparent 30%, 
              rgba(147, 51, 234, 0.1) 40%, 
              rgba(236, 72, 153, 0.08) 50%,
              rgba(147, 51, 234, 0.1) 60%,
              transparent 70%
            )
          `,
          backgroundSize: '250% 250%',
          animation: 'gradient-wave 15s ease-in-out infinite'
        }} />
        
        {/* Additional wave layer */}
        <div className="absolute inset-0 opacity-20" style={{
          background: `
            linear-gradient(-45deg, 
              transparent 40%, 
              rgba(236, 72, 153, 0.07) 50%, 
              transparent 60%
            )
          `,
          backgroundSize: '300% 300%',
          animation: 'gradient-wave 20s ease-in-out infinite reverse'
        }} />
        
        {/* Higher particle density around center for magnetized effect */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.4 + 0.2,
                boxShadow: '0 0 3px rgba(255, 255, 255, 0.8), 0 0 6px rgba(168, 85, 247, 0.5)'
              }}
              animate={{
                y: [0, -Math.random() * 80 - 40],
                x: [0, (Math.random() - 0.5) * 60],
                opacity: [0.3, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      {/* Smooth transition overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Enlarged content with glassmorphism card */}
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="glassmorphism-card p-16 lg:p-20 rounded-3xl"
            style={{
              background: 'rgba(16, 16, 16, 0.6)',
              backdropFilter: 'blur(25px) saturate(1.8)',
              border: '1px solid rgba(147, 51, 234, 0.3)',
              boxShadow: `
                0 20px 60px rgba(147, 51, 234, 0.2),
                0 8px 32px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `
            }}
          >
            {/* Heading with floating animation */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-orbitron font-bold text-4xl lg:text-6xl mb-8"
              style={{
                background: 'linear-gradient(135deg, #9333ea 0%, #a855f7 50%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.5))'
              }}
            >
              Join Us & Be Part of Our Journey
            </motion.h2>

            {/* Subtext with improved layout for wider section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
            >
              <div className="space-y-4">
                {[
                  "We're not just another hosting provider.",
                  "We're building a community of creators, gamers, and developers.",
                  "Experience faster, cheaper, and better hosting."
                ].map((line, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    className="text-lg lg:text-xl text-gray-200 font-medium leading-relaxed text-left"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="text-purple-400 mr-3">•</span>
                    {line}
                  </motion.p>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  "Hang out with those who understand you.",
                  "Join our Discord now and be part of the difference.",
                  "Ready to elevate your hosting experience?"
                ].map((line, index) => (
                  <motion.p
                    key={index + 3}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                    className="text-lg lg:text-xl text-gray-200 font-medium leading-relaxed text-left"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="text-pink-400 mr-3">•</span>
                    {line}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              {/* Experience the Difference Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(147, 51, 234, 0.8), 0 0 50px rgba(147, 51, 234, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleExperienceClick}
                className="group relative bg-gradient-to-r from-[#9333ea] to-[#ec4899] px-8 py-4 rounded-2xl text-lg font-bold text-white transition-all duration-300 btn-hover overflow-hidden"
                style={{
                  boxShadow: '0 8px 25px rgba(147, 51, 234, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Experience the Difference
                  <span className="text-xl">✨</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7] to-[#f472b6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              {/* Join Discord Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(236, 72, 153, 0.7), 0 0 40px rgba(236, 72, 153, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDiscordClick}
                className="group relative border-2 border-pink-500/50 px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 btn-hover overflow-hidden"
                style={{ 
                  background: 'rgba(236, 72, 153, 0.1)',
                  color: '#ec4899'
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors duration-300">
                  Join Our Discord
                  <span className="text-xl">💬</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ec4899] to-[#a855f7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}