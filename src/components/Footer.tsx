'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { DiscordLogo, InstagramLogo, YoutubeLogo, Question, EnvelopeSimple, FileText, Shield, Info, ArrowCounterClockwise } from 'phosphor-react'

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Create animated grid/scanline effect
    const createGridEffect = () => {
      if (!footerRef.current) return

      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      canvas.className = 'absolute inset-0 w-full h-full opacity-30'
      canvas.style.zIndex = '1'
      
      const resizeCanvas = () => {
        if (!footerRef.current) return
        canvas.width = footerRef.current.offsetWidth
        canvas.height = footerRef.current.offsetHeight
      }
      
      resizeCanvas()
      window.addEventListener('resize', resizeCanvas)
      
      footerRef.current.appendChild(canvas)

      let animationId: number
      let time = 0

      const animate = () => {
        if (!ctx || !canvas) return
        
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        // Grid lines
        ctx.strokeStyle = 'rgba(124, 58, 237, 0.1)'
        ctx.lineWidth = 1
        
        const gridSize = 50
        for (let x = 0; x < canvas.width; x += gridSize) {
          ctx.beginPath()
          ctx.moveTo(x, 0)
          ctx.lineTo(x, canvas.height)
          ctx.stroke()
        }
        
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath()
          ctx.moveTo(0, y)
          ctx.lineTo(canvas.width, y)
          ctx.stroke()
        }
        
        // Animated scanlines
        ctx.strokeStyle = 'rgba(124, 58, 237, 0.3)'
        ctx.lineWidth = 2
        
        const scanlineY = (time * 0.5) % (canvas.height + 100) - 50
        ctx.beginPath()
        ctx.moveTo(0, scanlineY)
        ctx.lineTo(canvas.width, scanlineY)
        ctx.stroke()
        
        time += 1
        animationId = requestAnimationFrame(animate)
      }
      
      animate()

      return () => {
        window.removeEventListener('resize', resizeCanvas)
        cancelAnimationFrame(animationId)
        if (footerRef.current && canvas.parentNode) {
          footerRef.current.removeChild(canvas)
        }
      }
    }

    const cleanup = createGridEffect()
    return cleanup
  }, [])

  const footerSections = [
    {
      title: "kaarma.cloud",
      items: [
        { text: "Powerful hosting solutions for modern applications. Built with performance, security, and reliability in mind.", type: "description" as const }
      ]
    },
    {
      title: "Services",
      items: [
        { text: "Minecraft Hosting", href: "/minecraft", icon: null },
        { text: "VPS Hosting", href: "/vps-hosting", icon: null },
        { text: "Website Hosting", href: "/web-hosting", icon: null }
      ]
    },
    {
      title: "Support",
      items: [
        { text: "Discord Community", href: "https://discord.com/invite/C2pfxwxeUf", icon: DiscordLogo },
        { text: "FAQs", href: "/support#faq", icon: Question },
        { text: "Contact Us", href: "/support", icon: EnvelopeSimple }
      ]
    },
    {
      title: "Legal",
      items: [
        { text: "Privacy Policy", href: "/privacy", icon: Shield },
        { text: "Terms of Service", href: "/terms", icon: FileText },
        { text: "About Us", href: "/about", icon: Info },
        { text: "Refund Policy", href: "/refund", icon: ArrowCounterClockwise }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <footer ref={footerRef} className="relative bg-jet-black border-t border-purple-500/20 overflow-hidden">
      {/* Dark Diagonal Gradient with Glowing Node Dots */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/30 to-black" />
      <div className="absolute inset-0 node-dots opacity-40" />
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-jet-black/80 via-dark-purple/10 to-jet-black/80 z-0" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {footerSections.map((section, sectionIndex) => (
            <motion.div key={section.title} variants={sectionVariants}>
              {/* Section Title */}
              <h3 className="font-orbitron font-bold text-xl mb-6 text-glow">
                {section.title}
              </h3>

              {/* Section Items */}
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => {
                  if ('type' in item && item.type === 'description') {
                    return (
                      <p key={itemIndex} className="text-gray-400 leading-relaxed">
                        {item.text}
                      </p>
                    )
                  }

                  const IconComponent = 'icon' in item ? item.icon : null

                  return (
                    <motion.a
                      key={itemIndex}
                      href={'href' in item ? item.href : '#'}
                      whileHover={{ 
                        x: 5,
                        color: "#a855f7",
                        textShadow: "0 0 10px rgba(124, 58, 237, 0.6)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-3 text-gray-400 hover:text-accent-purple transition-all duration-300 group cursor-pointer"
                    >
                      {IconComponent && (
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="group-hover:text-accent-purple transition-colors duration-300"
                        >
                          <IconComponent size={18} />
                        </motion.div>
                      )}
                      <span className="group-hover:glow transition-all duration-300">
                        {item.text}
                      </span>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="py-8 border-t border-purple-500/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} kaarma.cloud. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {[
                { icon: DiscordLogo, label: "Discord", href: "https://discord.gg/C2pfxwxeUf", color: "#5865F2" },
                { icon: InstagramLogo, label: "Instagram", href: "https://instagram.com/kaarma.cloud", color: "#E4405F" },
                { icon: YoutubeLogo, label: "YouTube", href: "https://youtube.com/@kaarmacloud?si=8yzErDNpMdXNn3T-", color: "#FF0000" }
              ].map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.2,
                      y: -2,
                      boxShadow: `0 0 15px ${social.color}66`
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    style={{
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
                    }}
                    aria-label={social.label}
                  >
                    <IconComponent size={20} weight="duotone" className="text-white" />
                  </motion.a>
                )
              })}
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 0 20px rgba(124, 58, 237, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              className="neuro px-4 py-2 rounded-xl text-sm hover:glow-purple transition-all duration-300 btn-hover"
            >
              Back to Top
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
    </footer>
  )
}