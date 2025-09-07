'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Rocket, Heart } from 'phosphor-react'

export default function OurMission() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

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
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 via-transparent to-amber-900/10" />
        <div className="absolute inset-0 grid-bg opacity-10" />
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
            Our Mission
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering digital innovation through reliable, scalable, and secure hosting solutions
          </p>
        </motion.div>

        {/* Mission Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {/* Innovation Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              boxShadow: "0 0 40px rgba(249, 115, 22, 0.6)"
            }}
            className="group glass-card p-8 rounded-3xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
            
            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 glow-orange"
              >
                <Target size={32} className="text-white" weight="bold" />
              </motion.div>

              {/* Content */}
              <h3 className="font-orbitron font-bold text-2xl mb-4 text-orange-400 group-hover:text-orange-300 transition-colors duration-300">
                Innovation First
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We continuously push the boundaries of hosting technology, implementing cutting-edge solutions to deliver unmatched performance and reliability for our customers.
              </p>
            </div>

            {/* Animated Border */}
            <motion.div 
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(45deg, transparent, rgba(249, 115, 22, 0.5), transparent)',
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
          </motion.div>

          {/* Performance Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              boxShadow: "0 0 40px rgba(249, 115, 22, 0.6)"
            }}
            className="group glass-card p-8 rounded-3xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
            
            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                whileHover={{ 
                  scale: 1.2,
                  y: [-5, 5, -5]
                }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 glow-orange"
              >
                <Rocket size={32} className="text-white" weight="bold" />
              </motion.div>

              {/* Content */}
              <h3 className="font-orbitron font-bold text-2xl mb-4 text-orange-400 group-hover:text-orange-300 transition-colors duration-300">
                Lightning Speed
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our infrastructure is optimized for speed and efficiency, ensuring your websites and applications load instantly and perform flawlessly under any load.
              </p>
            </div>

            {/* Animated Border */}
            <motion.div 
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(45deg, transparent, rgba(239, 68, 68, 0.5), transparent)',
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
          </motion.div>

          {/* Customer Care Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              boxShadow: "0 0 40px rgba(249, 115, 22, 0.6)"
            }}
            className="group glass-card p-8 rounded-3xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
            
            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                whileHover={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 0.8 }}
                className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 glow-orange"
              >
                <Heart size={32} className="text-white" weight="bold" />
              </motion.div>

              {/* Content */}
              <h3 className="font-orbitron font-bold text-2xl mb-4 text-orange-400 group-hover:text-orange-300 transition-colors duration-300">
                Customer First
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Every decision we make is driven by our commitment to customer satisfaction. We provide 24/7 support and go above and beyond to exceed expectations.
              </p>
            </div>

            {/* Animated Border */}
            <motion.div 
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(45deg, transparent, rgba(236, 72, 153, 0.5), transparent)',
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}