'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { GameController, Globe, Desktop, Clock } from 'phosphor-react'

export default function ServicesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = (sectionRef.current as HTMLElement).getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        setMousePosition({
          x: (e.clientX - centerX) / rect.width,
          y: (e.clientY - centerY) / rect.height
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const services = [
    {
      id: 'minecraft',
      title: "Minecraft Hosting",
      description: "High-performance Minecraft servers with premium hardware and 24/7 support",
      icon: GameController,
      available: true,
      features: ["Ryzen 7 & 9 CPUs", "NVMe SSD Storage", "DDoS Protection", "Instant Setup"],
      hoverBg: 'minecraft'
    },
    {
      id: 'web',
      title: "Website Hosting",
      description: "Fast and reliable web hosting with advanced security features",
      icon: Globe,
      available: true,
      features: ["99.9% Uptime", "Free SSL", "Daily Backups", "CDN Included"],
      hoverBg: 'web'
    },
    {
      id: 'vps',
      title: "VPS Hosting",
      description: "Powerful virtual private servers for your applications and projects",
      icon: Desktop,
      available: true,
      features: ["Full Root Access", "SSD Storage", "Multiple OS", "Scalable Resources"],
      hoverBg: 'vps'
    },
    {
      id: 'coming-soon',
      title: "Coming Soon",
      description: "More exciting hosting solutions are on the way",
      icon: Clock,
      available: false,
      features: ["Database Hosting", "Load Balancers", "Container Hosting", "AI/ML Services"],
      hoverBg: null
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={sectionRef} data-section="services" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse at center, #1a0b2e 0%, #0f0a1a 50%, #000000 100%),
            linear-gradient(135deg, #2d0a45 0%, #000000 100%)
          `
        }} />
        
        {/* Animated neon wave layers */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.12) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.1) 0%, transparent 35%)
          `,
          animation: 'neon-wave 15s ease-in-out infinite'
        }} />
        
        {/* Moving gradient waves */}
        <div className="absolute inset-0" style={{
          background: `
            linear-gradient(45deg, 
              transparent 40%, 
              rgba(147, 51, 234, 0.06) 50%, 
              transparent 60%
            )
          `,
          backgroundSize: '200% 200%',
          animation: 'gradient-wave 12s ease-in-out infinite'
        }} />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/8 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-pink-500/6 rounded-full blur-3xl" style={{ animation: 'float 15s ease-in-out infinite' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-600/10 rounded-full blur-xl" style={{ animation: 'float 12s ease-in-out infinite reverse' }} />
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-orbitron font-bold text-4xl lg:text-6xl mb-6 text-glow">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose from our range of premium hosting solutions designed for performance, 
            reliability, and scalability.
          </p>
        </motion.div>

        {/* Services Grid with Better Spacing */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 px-4"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                {/* Professional Themed Hover Background */}
                {hoveredCard === service.id && service.hoverBg && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 -m-2 rounded-2xl overflow-hidden pointer-events-none"
                  >
                    {/* Minecraft Theme - Professional blocky pattern */}
                    {service.hoverBg === 'minecraft' && (
                      <>
                        <div className="absolute inset-0" style={{
                          backgroundImage: `
                            repeating-linear-gradient(0deg, transparent, transparent 16px, rgba(34, 197, 94, 0.08) 16px, rgba(34, 197, 94, 0.08) 32px),
                            repeating-linear-gradient(90deg, transparent, transparent 16px, rgba(34, 197, 94, 0.06) 16px, rgba(34, 197, 94, 0.06) 32px),
                            repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(139, 69, 19, 0.04) 8px, rgba(139, 69, 19, 0.04) 16px)
                          `,
                          animation: 'minecraft-blocks 6s ease-in-out infinite'
                        }} />
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-pink-900/20" />
                        <div className="absolute inset-0 backdrop-blur-sm bg-black/10" />
                      </>
                    )}
                    
                    {/* Web Hosting Theme - Professional network pattern */}
                    {service.hoverBg === 'web' && (
                      <>
                        <div className="absolute inset-0" style={{
                          backgroundImage: `
                            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.06) 2px, transparent 2px),
                            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.04) 1px, transparent 1px),
                            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.06) 2px, transparent 2px),
                            radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.04) 1px, transparent 1px),
                            linear-gradient(45deg, transparent 48%, rgba(59, 130, 246, 0.02) 49%, rgba(59, 130, 246, 0.02) 51%, transparent 52%)
                          `,
                          backgroundSize: '60px 60px, 80px 80px, 100px 100px, 120px 120px, 40px 40px',
                          animation: 'network-pulse 4s ease-in-out infinite'
                        }} />
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-800/10 to-pink-900/20" />
                        <div className="absolute inset-0 backdrop-blur-sm bg-black/10" />
                      </>
                    )}
                    
                    {/* VPS Theme - Professional tech pattern */}
                    {service.hoverBg === 'vps' && (
                      <>
                        <div className="absolute inset-0" style={{
                          backgroundImage: `
                            repeating-linear-gradient(90deg, transparent, transparent 12px, rgba(156, 163, 175, 0.06) 12px, rgba(156, 163, 175, 0.06) 13px),
                            repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(156, 163, 175, 0.04) 20px, rgba(156, 163, 175, 0.04) 22px),
                            radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.06) 0%, transparent 30%),
                            radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.04) 0%, transparent 25%)
                          `,
                          backgroundSize: '40px 40px, 60px 60px, 120px 120px, 100px 100px',
                          animation: 'tech-flow 5s ease-in-out infinite'
                        }} />
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-800/10 to-pink-900/20" />
                        <div className="absolute inset-0 backdrop-blur-sm bg-black/10" />
                      </>
                    )}
                  </motion.div>
                )}
                {/* Card Content with Clean Design */}
                <div className="relative p-8 rounded-2xl h-full transition-all duration-500 group-hover:shadow-2xl"
                style={{
                  background: 'rgba(16, 16, 16, 0.7)',
                  backdropFilter: 'blur(20px) saturate(1.2)',
                  boxShadow: '0 8px 32px rgba(147, 51, 234, 0.15)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(147, 51, 234, 0.3), 0 0 30px rgba(147, 51, 234, 0.2)'
                  e.currentTarget.style.background = 'rgba(16, 16, 16, 0.85)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(147, 51, 234, 0.15)'
                  e.currentTarget.style.background = 'rgba(16, 16, 16, 0.7)'
                }}
                >
                  {/* Soft dark overlay for enhanced readability when hovered */}
                  {hoveredCard === service.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 rounded-2xl bg-black/20 pointer-events-none z-5"
                    />
                  )}
                  {/* Icon */}
                  <div className="mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                        service.available 
                          ? 'bg-gradient-to-br from-glow-purple to-accent-purple glow-purple' 
                          : 'bg-gray-600'
                      }`}
                    >
                      <IconComponent size={32} weight="duotone" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="font-orbitron font-semibold text-2xl mb-4 text-glow">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                          className="flex items-center text-sm text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 animate-pulse-glow" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ 
                      scale: 1.08,
                      boxShadow: service.available 
                        ? "0 0 40px rgba(124, 58, 237, 0.9), 0 0 60px rgba(124, 58, 237, 0.6)" 
                        : "0 0 20px rgba(107, 114, 128, 0.6)"
                    }}
                    whileTap={{ scale: 0.92 }}
                    disabled={!service.available}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 btn-hover ${
                      service.available
                        ? 'bg-gradient-to-r from-glow-purple to-accent-purple glow-purple hover:glow-purple-intense'
                        : 'bg-gray-600 cursor-not-allowed'
                    }`}
                  >
                    {service.available ? 'See Plans' : 'Coming Soon'}
                  </motion.button>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-glow-purple/20 to-accent-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Need a custom solution? We're here to help.
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(124, 58, 237, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://discord.com/invite/C2pfxwxeUf', '_blank')}
            className="neuro px-8 py-3 rounded-xl font-semibold hover:glow-purple transition-all duration-300 btn-hover"
          >
            Contact Sales
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}