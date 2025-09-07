'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Shield, 
  HardDrives, 
  WifiHigh, 
  CloudArrowUp, 
  Envelope, 
  Globe, 
  Cpu,
  Lock,
  ChartLine,
  Headset
} from 'phosphor-react'

export default function HostingFeatures() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const features = [
    {
      icon: HardDrives,
      title: 'NVMe SSD Storage',
      description: 'Lightning-fast NVMe SSD storage for superior website performance and faster loading times.',
      color: 'text-blue-400'
    },
    {
      icon: WifiHigh,
      title: 'Unlimited Bandwidth',
      description: 'No traffic limits or bandwidth restrictions. Handle unlimited visitors without extra charges.',
      color: 'text-green-400'
    },
    {
      icon: Shield,
      title: 'Advanced DDoS Protection',
      description: 'Enterprise-grade DDoS protection keeps your website secure from attacks 24/7.',
      color: 'text-red-400'
    },
    {
      icon: CloudArrowUp,
      title: 'Automated Backups',
      description: 'Daily automated backups with one-click restore functionality to keep your data safe.',
      color: 'text-purple-400'
    },
    {
      icon: Globe,
      title: 'cPanel Control Panel',
      description: 'Industry-standard cPanel for easy website management, file uploads, and database administration.',
      color: 'text-orange-400'
    },
    {
      icon: Envelope,
      title: 'Professional Email',
      description: 'Unlimited professional email accounts with webmail access and spam protection.',
      color: 'text-yellow-400'
    },
    {
      icon: Lock,
      title: 'Free SSL Certificate',
      description: 'Free SSL certificates for secure HTTPS connections and improved search engine rankings.',
      color: 'text-teal-400'
    },
    {
      icon: Headset,
      title: '24/7 Expert Support',
      description: 'Round-the-clock technical support from experienced hosting professionals via tickets.',
      color: 'text-cyan-400'
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-purple/20 to-jet-black" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      
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
            Everything you need for a successful online presence. 
            Our hosting comes packed with professional features at no extra cost.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
                style={{ perspective: '1000px' }}
              >
                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.8 }}
                  whileHover={{ opacity: 1, y: -10, scale: 1 }}
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-glow-purple to-accent-purple px-3 py-1 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 glow-purple whitespace-nowrap"
                >
                  Learn More
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-500" />
                </motion.div>

                {/* Feature Card */}
                <div className="glass-card p-6 rounded-2xl h-full transition-all duration-300 group-hover:glow-purple relative overflow-hidden">
                  {/* Icon with enhanced animations */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ 
                      rotate: 360, 
                      scale: 1.1 
                    }}
                    transition={{ 
                      duration: 0.5 
                    }}
                  >
                    {/* Icon */}
                    <div className={`relative w-12 h-12 ${feature.color} flex items-center justify-center`}>
                      <IconComponent size={32} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-orbitron font-semibold text-lg mb-3 text-glow group-hover:text-accent-purple transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effects */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-glow-purple/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Animated Corner Accents */}
                  <motion.div
                    className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-purple-500/50 rounded-tl-2xl opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-purple-500/50 rounded-br-2xl opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}