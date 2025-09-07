'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Shield, 
  HardDrives, 
  WifiHigh, 
  CloudArrowUp, 
  Terminal, 
  Cpu, 
  Database,
  Lock,
  ChartLine,
  Headset,
  MapPin,
  Lightning
} from 'phosphor-react'

export default function VPSFeatures() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Cpu,
      title: 'Dedicated vCores',
      description: 'Guaranteed dedicated CPU cores with Intel/AMD processors for consistent performance.',
      color: 'text-blue-400'
    },
    {
      icon: HardDrives,
      title: 'NVMe SSD Storage',
      description: 'Ultra-fast NVMe SSD storage with up to 10x faster read/write speeds than traditional drives.',
      color: 'text-purple-400'
    },
    {
      icon: WifiHigh,
      title: '1 Gbps Unmetered',
      description: 'High-speed 1 Gbps network connection with unlimited bandwidth and no traffic restrictions.',
      color: 'text-green-400'
    },
    {
      icon: Terminal,
      title: 'Full Root Access',
      description: 'Complete administrative control with root SSH access to install any software or configuration.',
      color: 'text-orange-400'
    },
    {
      icon: Shield,
      title: 'Advanced DDoS Protection',
      description: 'Enterprise-grade DDoS mitigation protecting against attacks up to 10Gbps in Delhi datacenter.',
      color: 'text-red-400'
    },
    {
      icon: CloudArrowUp,
      title: 'Automated Backups',
      description: 'Scheduled automated backups with instant snapshot recovery and multiple restore points.',
      color: 'text-cyan-400'
    },
    {
      icon: MapPin,
      title: 'Delhi Data Center',
      description: 'Premium Tier III datacenter in Delhi with 99.9% uptime SLA and redundant power systems.',
      color: 'text-yellow-400'
    },
    {
      icon: Lightning,
      title: 'Instant Deployment',
      description: 'VPS deployed instantly within 60 seconds with pre-configured OS templates and control panel.',
      color: 'text-pink-400'
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
            Enterprise VPS Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional-grade Virtual Private Servers with dedicated resources, 
            enterprise security, and full administrative control.
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
                  Professional Grade
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-500" />
                </motion.div>

                {/* Feature Card */}
                <div className="glass-card p-6 rounded-2xl h-full transition-all duration-300 group-hover:glow-purple relative overflow-hidden">
                  {/* Icon with enhanced animations */}
                  <motion.div
                    whileHover={{ 
                      rotate: 360, 
                      scale: 1.2,
                      filter: "drop-shadow(0 0 20px currentColor)"
                    }}
                    transition={{ duration: 0.6 }}
                    className="relative mb-4"
                  >
                    {/* Glow Ring */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.4, 1],
                        opacity: [0.3, 0.7, 0.3],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`absolute inset-0 w-12 h-12 ${feature.color} rounded-full blur-md opacity-30`}
                    />
                    
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

        {/* Performance Specs Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 glass-card p-8 rounded-2xl glow-purple"
        >
          <h3 className="font-orbitron font-bold text-2xl text-center mb-8 text-glow">
            Performance Specifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'CPU Performance', value: '99.8%', color: 'bg-blue-500' },
              { label: 'Memory Speed', value: '95.2%', color: 'bg-purple-500' },
              { label: 'Storage I/O', value: '98.5%', color: 'bg-green-500' },
              { label: 'Network Latency', value: '2.1ms', color: 'bg-orange-500' }
            ].map((spec, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-accent-purple mb-2">{spec.value}</div>
                <div className="text-gray-400 text-sm">{spec.label}</div>
                <motion.div
                  className={`h-1 ${spec.color} rounded-full mt-2`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : {}}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}