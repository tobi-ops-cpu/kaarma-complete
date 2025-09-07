'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, DiscordLogo } from 'phosphor-react'

export default function CommunitySection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2]/10 via-purple-500/10 to-[#5865F2]/10" />
        <div className="absolute inset-0 grid-bg opacity-10" />
      </div>

      {/* Floating Discord Logos */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 opacity-20"
      >
        <DiscordLogo size={40} className="text-[#5865F2]" />
      </motion.div>
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -15, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 right-16 opacity-20"
      >
        <DiscordLogo size={60} className="text-[#5865F2]" />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Community Stats */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Users size={24} className="text-[#5865F2]" />
            </motion.div>
            <span className="font-semibold text-[#5865F2]">500+ Active Members</span>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="glass-card p-12 rounded-3xl border border-[#5865F2]/20 relative overflow-hidden"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 40px rgba(88, 101, 242, 0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-8 gap-4 h-full">
                {Array.from({ length: 32 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-[#5865F2] rounded-full"
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10">
              {/* Discord Icon */}
              <motion.div
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360
                }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 bg-gradient-to-br from-[#5865F2] to-[#4752C4] rounded-3xl flex items-center justify-center mx-auto mb-8 glow-blue"
              >
                <DiscordLogo size={40} className="text-white" weight="bold" />
              </motion.div>

              {/* Headline */}
              <h2 className="font-orbitron font-bold text-3xl lg:text-5xl mb-6 text-glow">
                Join Our Community
              </h2>

              {/* Description */}
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Join 500+ creators and server owners in our Discord community. Get instant help, share ideas, and grow together.
              </p>

              {/* Discord Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(88, 101, 242, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-[#5865F2] to-[#4752C4] px-10 py-5 rounded-2xl font-bold text-xl flex items-center gap-4 mx-auto glow-blue btn-hover relative overflow-hidden"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <DiscordLogo size={28} weight="bold" />
                </motion.div>
                Join Our Discord
                
                {/* Sweep effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.button>

              {/* Community Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#5865F2] mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Active Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#5865F2] mb-2">500+</div>
                  <div className="text-sm text-gray-400">Community Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#5865F2] mb-2">&lt;1min</div>
                  <div className="text-sm text-gray-400">Avg Response Time</div>
                </div>
              </motion.div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#5865F2]/10 to-[#4752C4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}