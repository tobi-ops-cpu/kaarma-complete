'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Rocket, Globe, Database, Key, ArrowRight } from 'phosphor-react'

export default function QuickGuides() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const guides = [
    {
      icon: Rocket,
      title: 'Connect to Your Minecraft Server',
      description: 'Step-by-step to join your hosted server.',
      color: 'text-orange-400',
      bgColor: 'from-orange-600 to-red-600'
    },
    {
      icon: Globe,
      title: 'Point Your Domain to Hosting',
      description: 'How to connect your domain to our servers.',
      color: 'text-blue-400',
      bgColor: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Database,
      title: 'Restore Backups',
      description: 'Quickly roll back to a saved version of your files.',
      color: 'text-green-400',
      bgColor: 'from-green-600 to-emerald-600'
    },
    {
      icon: Key,
      title: 'Reset Panel Password',
      description: 'How to regain access if you\'re locked out.',
      color: 'text-purple-400',
      bgColor: 'from-purple-600 to-violet-600'
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

  const cardVariants = {
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
    <section id="quick-guides" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-jet-black to-dark-purple/20" />
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
            Quick Guides
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get started quickly with our most popular help topics. 
            Step-by-step guides to solve common issues instantly.
          </p>
        </motion.div>

        {/* Quick Guides Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {guides.map((guide, index) => {
            const IconComponent = guide.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  rotateY: 3,
                  transition: { duration: 0.3 }
                }}
                className="group relative cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                {/* Hover Glow Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(45deg, transparent, rgba(124, 58, 237, 0.5), transparent)',
                    backgroundSize: '300% 300%'
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Card Content */}
                <div className="relative glass-card p-6 rounded-2xl h-full transition-all duration-300 group-hover:glow-purple overflow-hidden">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ 
                      rotate: 360, 
                      scale: 1.2,
                      filter: "drop-shadow(0 0 20px currentColor)"
                    }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 bg-gradient-to-br ${guide.bgColor} rounded-xl flex items-center justify-center mb-4 text-white`}
                  >
                    <IconComponent size={28} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-orbitron font-semibold text-lg mb-3 text-glow group-hover:text-accent-purple transition-colors duration-300 leading-tight">
                    {guide.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {guide.description}
                  </p>

                  {/* Read More Link */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-accent-purple text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <span>Read Guide</span>
                    <ArrowRight size={16} />
                  </motion.div>

                  {/* Hover Background */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-glow-purple/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Corner Accents */}
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Can't find what you're looking for? Our support team is ready to help.
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(124, 58, 237, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-glow-purple to-accent-purple px-8 py-4 rounded-xl font-semibold glow-purple hover:glow-purple-intense transition-all duration-300"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}