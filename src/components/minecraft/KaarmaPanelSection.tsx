'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CaretLeft, CaretRight, Download, Gear, Database, CloudArrowUp, Play } from 'phosphor-react'

export default function KaarmaPanelSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [currentSlide, setCurrentSlide] = useState(0)

  const panelScreenshots = [
    {
      title: 'Server Overview Dashboard',
      description: 'Monitor your server\'s performance, player count, and resource usage in real-time',
      image: '/panel-dashboard.jpg',
      features: ['Real-time monitoring', 'Performance metrics', 'Player analytics']
    },
    {
      title: 'One-Click Mod Installation',
      description: 'Browse and install thousands of mods with just one click. No technical knowledge required',
      image: '/panel-mods.jpg',
      features: ['1-click installation', '10,000+ mods', 'Auto-updates']
    },
    {
      title: 'Plugin Manager',
      description: 'Manage all your plugins effortlessly with our intuitive plugin management system',
      image: '/panel-plugins.jpg',
      features: ['Plugin library', 'Version control', 'Dependency management']
    },
    {
      title: 'File Manager',
      description: 'Edit, upload, and manage your server files directly from the web interface',
      image: '/panel-files.jpg',
      features: ['Web-based editor', 'FTP/SFTP access', 'File versioning']
    },
    {
      title: 'Backup System',
      description: 'Automated backups with easy restore options ensure your world is always safe',
      image: '/panel-backups.jpg',
      features: ['Automated backups', 'One-click restore', 'Multiple backup slots']
    }
  ]

  const premiumFeatures = [
    {
      icon: Download,
      title: '1-Click Mod Installation',
      description: 'Install any mod from our curated library with just one click'
    },
    {
      icon: CloudArrowUp,
      title: 'Automated Backups',
      description: 'Your world is automatically backed up every hour for maximum safety'
    },
    {
      icon: Gear,
      title: 'Easy Configuration',
      description: 'Modify server settings through our intuitive web interface'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Manage MySQL databases directly from the control panel'
    },
    {
      icon: Play,
      title: 'Instant Server Control',
      description: 'Start, stop, and restart your server with instant response times'
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % panelScreenshots.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % panelScreenshots.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + panelScreenshots.length) % panelScreenshots.length)
  }

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-jet-black via-dark-purple/10 to-jet-black" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron font-bold text-4xl lg:text-6xl mb-6 text-glow">
            Kaarma Panel
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the most advanced Minecraft server management panel. 
            Built on Pterodactyl with custom enhancements for the ultimate hosting experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Premium Features List - Shortened cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h3 className="font-orbitron font-semibold text-3xl text-glow mb-8">
              Premium Features
            </h3>
            <div className="space-y-4">
              {premiumFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-3 p-3 glass-card rounded-xl hover:glow-purple transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 bg-gradient-to-br from-glow-purple to-accent-purple rounded-lg flex items-center justify-center flex-shrink-0"
                    >
                      <IconComponent size={20} />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-glow mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Panel Screenshots Carousel with 3D Tilt - Increased size */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
            style={{
              perspective: '1000px'
            }}
          >
            {/* Carousel Container with Enhanced 3D Effects */}
            <motion.div 
              className="relative glass-card p-6 rounded-3xl glow-purple"
              whileHover={{
                rotateY: 5,
                rotateX: 2,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              <motion.div 
                className="relative overflow-hidden rounded-2xl aspect-video bg-gradient-to-br from-dark-purple to-jet-black"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(event, info) => {
                  const threshold = 50
                  if (info.offset.x > threshold) {
                    prevSlide()
                  } else if (info.offset.x < -threshold) {
                    nextSlide()
                  }
                }}
                whileDrag={{ 
                  scale: 0.95,
                  rotateY: 10,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
                }}
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Slides */}
                {panelScreenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: currentSlide === index ? 1 : 0,
                      scale: currentSlide === index ? 1 : 0.9,
                      x: currentSlide === index ? 0 : index > currentSlide ? 100 : -100
                    }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 flex items-center justify-center ${
                      currentSlide === index ? 'z-10' : 'z-0'
                    }`}
                  >
                    {/* Placeholder for screenshot - Increased size */}
                    <div className="w-full h-full bg-gradient-to-br from-glow-purple/20 to-accent-purple/20 rounded-xl flex items-center justify-center p-6">
                      <div className="text-center">
                        <div className="text-5xl mb-4">🖥️</div>
                        <h4 className="font-orbitron font-semibold text-xl text-glow mb-3">
                          {screenshot.title}
                        </h4>
                        <p className="text-gray-300 mb-4 max-w-md mx-auto">
                          {screenshot.description}
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {screenshot.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-3 py-1 bg-purple-500/30 rounded-full text-xs"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Navigation Arrows */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 bg-gradient-to-r from-glow-purple to-accent-purple rounded-full flex items-center justify-center glow-purple hover:glow-purple-intense transition-all duration-300"
                >
                  <CaretLeft size={16} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 bg-gradient-to-r from-glow-purple to-accent-purple rounded-full flex items-center justify-center glow-purple hover:glow-purple-intense transition-all duration-300"
                >
                  <CaretRight size={16} />
                </motion.button>
              </motion.div>

              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {panelScreenshots.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-gradient-to-r from-glow-purple to-accent-purple glow-purple' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Progress Bar */}
            <div className="mt-4 w-full h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-glow-purple to-accent-purple"
                initial={{ width: '0%' }}
                animate={{ width: `${((currentSlide + 1) / panelScreenshots.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Ready to experience the most advanced Minecraft hosting panel?
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(124, 58, 237, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-glow-purple to-accent-purple px-8 py-4 rounded-xl font-semibold glow-purple hover:glow-purple-intense transition-all duration-300"
          >
            Start Your Server Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}