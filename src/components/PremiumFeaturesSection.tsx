'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HardDrives, Cpu, Shield, Lightning, CloudArrowUp, Globe, Lock, Headphones } from 'phosphor-react'

export default function PremiumFeaturesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const features = [
    {
      icon: HardDrives,
      title: "NVMe SSD Storage",
      description: "Lightning-fast storage for maximum performance"
    },
    {
      icon: Cpu,
      title: "Ryzen 7 & 9 CPUs",
      description: "Latest AMD processors for unmatched speed"
    },
    {
      icon: Shield,
      title: "DDoS Protection",
      description: "Advanced security against attacks"
    },
    {
      icon: Lightning,
      title: "99.9% Uptime",
      description: "Reliable hosting you can count on"
    },
    {
      icon: CloudArrowUp,
      title: "Auto Backups",
      description: "Daily automated backups included"
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Worldwide content delivery network"
    },
    {
      icon: Lock,
      title: "Free SSL",
      description: "Secure connections with every plan"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert help whenever you need it"
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

  const featureVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden features-bg">
      {/* Soft Aurora Background for Premium Features */}
      <div className="absolute inset-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse at center, #1a0b2e 0%, #0f0a1a 50%, #000000 100%),
            linear-gradient(135deg, #2d0a45 0%, #000000 100%)
          `
        }} />
        
        {/* Soft animated aurora with transparency */}
        <div className="absolute inset-0 opacity-30" style={{
          background: `
            radial-gradient(circle at 30% 40%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 50% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 40%)
          `,
          animation: 'neon-wave 20s ease-in-out infinite'
        }} />
        
        {/* Very subtle wave overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          background: `
            linear-gradient(45deg, 
              transparent 45%, 
              rgba(147, 51, 234, 0.05) 50%, 
              transparent 55%
            )
          `,
          backgroundSize: '400% 400%',
          animation: 'gradient-wave 30s ease-in-out infinite'
        }} />
        
        {/* Faint radial spotlight behind feature cards */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-radial from-purple-900/20 to-transparent blur-3xl" />
          <div className="absolute top-1/3 right-1/3 w-56 h-56 rounded-full bg-gradient-radial from-indigo-900/15 to-transparent blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-gradient-radial from-pink-900/15 to-transparent blur-3xl" />
        </div>
        
        {/* Low density particle effect */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 rounded-full bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
              }}
              animate={{
                y: [0, -Math.random() * 50 - 20],
                opacity: [0.2, 0],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron font-bold text-4xl lg:text-6xl mb-6 text-glow">
            Premium Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the power of enterprise-grade infrastructure with features designed 
            for mission-critical applications.
          </p>
        </motion.div>

        {/* Features Grid - Clean layout with icons and text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            
            return (
              <motion.div
                key={feature.title}
                variants={featureVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group flex flex-col items-center text-center gap-4 p-6"
              >
                {/* Icon with dark purple gradient and enhanced hover effects */}
                <motion.div
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                  className="relative flex-shrink-0"
                >
                  {/* Enhanced glowing background on hover */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    whileHover={{
                      scale: [1, 1.4, 1.2],
                      opacity: [0.4, 0.7, 0.5],
                      boxShadow: [
                        '0 0 20px rgba(147, 51, 234, 0.4)',
                        '0 0 40px rgba(147, 51, 234, 0.7), 0 0 60px rgba(147, 51, 234, 0.4)',
                        '0 0 30px rgba(147, 51, 234, 0.6)'
                      ]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 w-20 h-20 rounded-2xl blur-lg"
                    style={{
                      background: 'linear-gradient(135deg, #2d0a45 0%, #1a0b2e 50%, #2d0a45 100%)'
                    }}
                  />
                  
                  {/* Icon container with dark purple gradient - Enlarged */}
                  <motion.div 
                    className="relative w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #2d0a45 0%, #1a0b2e 50%, #2d0a45 100%)',
                      boxShadow: '0 4px 15px rgba(45, 10, 69, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    }}
                    whileHover={{
                      boxShadow: [
                        '0 8px 25px rgba(45, 10, 69, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                        '0 12px 35px rgba(147, 51, 234, 0.8), 0 0 25px rgba(147, 51, 234, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                        '0 10px 30px rgba(147, 51, 234, 0.7), 0 0 20px rgba(147, 51, 234, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.25)'
                      ],
                      background: [
                        'linear-gradient(135deg, #2d0a45 0%, #1a0b2e 50%, #2d0a45 100%)',
                        'linear-gradient(135deg, #3d1a55 0%, #2a1b3e 50%, #3d1a55 100%)',
                        'linear-gradient(135deg, #351650 0%, #251a38 50%, #351650 100%)'
                      ],
                      transition: {
                        duration: 0.3,
                        ease: "easeOut"
                      }
                    }}
                  >
                    <IconComponent size={32} weight="duotone" className="text-white" />
                  </motion.div>
                </motion.div>

                {/* Feature name - Bold with neon accent */}
                <h3 className="font-orbitron font-bold text-xl mb-2 transition-colors duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                  {feature.title}
                </h3>

                {/* Description - Smaller text */}
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "99.9%", label: "Uptime Guarantee" },
            { number: "24/7", label: "Expert Support" },
            { number: "10Gb/s", label: "Network Speed" },
            { number: "100+", label: "Global Locations" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.08, y: -5 }}
              className="p-6 rounded-xl transition-all duration-300"
              style={{
                background: 'rgba(16, 16, 16, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(147, 51, 234, 0.3)',
                boxShadow: '0 8px 32px rgba(147, 51, 234, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(147, 51, 234, 0.4), 0 0 30px rgba(147, 51, 234, 0.3)'
                e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.6)'
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(147, 51, 234, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.3)'
                e.currentTarget.style.transform = 'translateY(0px) scale(1)'
              }}
            >
              <div className="font-orbitron font-bold text-3xl lg:text-4xl text-glow mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}