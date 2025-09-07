'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function PageAnimations() {
  useEffect(() => {
    // Smooth scroll enhancement
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const targetId = target.getAttribute('href')?.substring(1)
        const targetElement = document.getElementById(targetId || '')
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
          
          // Add micro-animation to target section
          targetElement.style.animation = 'pulse-glow 0.8s ease-out'
          setTimeout(() => {
            targetElement.style.animation = ''
          }, 800)
        }
      }
    }
    
    // Scroll-triggered icon animations
    const handleScroll = () => {
      const icons = document.querySelectorAll('[data-scroll-animate="true"]')
      
      icons.forEach((icon) => {
        const rect = icon.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        
        if (isVisible && !icon.classList.contains('animated')) {
          icon.classList.add('animated')
          
          // Trigger different animations based on icon type
          const animationType = icon.getAttribute('data-animation') || 'pulse'
          const iconElement = icon as HTMLElement
          
          switch (animationType) {
            case 'rotate':
              iconElement.style.animation = 'spin 1s ease-out'
              break
            case 'bounce':
              iconElement.style.animation = 'float 1s ease-out'
              break
            case 'glow':
              iconElement.style.animation = 'pulse-glow 1s ease-out'
              break
            default:
              iconElement.style.animation = 'pulse-glow 1s ease-out'
          }
          
          setTimeout(() => {
            iconElement.style.animation = ''
          }, 1000)
        }
      })
    }
    
    // Background gradient movement
    const handleBackgroundAnimation = () => {
      const sections = document.querySelectorAll('section')
      sections.forEach((section, index) => {
        if (index % 2 === 0) {
          section.style.background = `
            linear-gradient(135deg, rgba(124, 58, 237, 0.02) 0%, transparent 50%, rgba(168, 85, 247, 0.02) 100%),
            ${section.style.background || ''}
          `
        }
      })
    }
    
    // Add event listeners
    document.addEventListener('click', handleSmoothScroll)
    window.addEventListener('scroll', handleScroll)
    
    // Initialize background animations
    handleBackgroundAnimation()
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return (
    <>
      {/* Global floating particles */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </motion.div>
      
      {/* Neon lines along page edges */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      <motion.div
        className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.7 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent z-50"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2, delay: 0.9 }}
      />
      <motion.div
        className="fixed top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent z-50"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2, delay: 1.1 }}
      />
    </>
  )
}