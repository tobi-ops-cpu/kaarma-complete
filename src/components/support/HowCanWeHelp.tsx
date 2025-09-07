'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { DiscordLogo, Envelope, Ticket } from 'phosphor-react'

export default function HowCanWeHelp() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const helpOptions = [
    {
      icon: DiscordLogo,
      title: 'Join Discord',
      description: 'Chat with our active community and staff instantly.',
      color: 'from-blue-600 to-indigo-600',
      action: () => window.open('https://discord.com/invite/C2pfxwxeUf', '_blank')
    },
    {
      icon: Envelope,
      title: 'Email Us',
      description: 'Get personalized help straight to your inbox.',
      color: 'from-glow-purple to-accent-purple',
      action: () => window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=support@kaarma.cloud&su=Support+Request', '_blank')
    },
    {
      icon: Ticket,
      title: 'Submit Ticket',
      description: 'For technical or billing support, open a ticket with us anytime.',
      color: 'from-emerald-600 to-teal-600',
      action: () => window.open('https://kaarma.cloud/client/submitticket.php?step=2&deptid=1', '_blank')
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
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron font-bold text-4xl lg:text-6xl mb-6 text-glow">
            How Can We Help?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose the best way to get support based on your needs. 
            We're here to help you succeed with your hosting.
          </p>
        </motion.div>

        {/* Help Options Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {helpOptions.map((option, index) => {
            const IconComponent = option.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative cursor-pointer"
                style={{ perspective: '1000px' }}
                onClick={option.action}
              >
                {/* Enhanced Animated Border */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(45deg, transparent, rgba(124, 58, 237, 0.5), transparent)`,
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
                <div className="relative glass-card p-8 rounded-2xl h-full transition-all duration-300 group-hover:glow-purple overflow-hidden">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ 
                      rotate: 360, 
                      scale: 1.2,
                      filter: "drop-shadow(0 0 20px currentColor)"
                    }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white`}
                  >
                    <IconComponent size={32} />
                  </motion.div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="font-orbitron font-bold text-2xl mb-4 text-glow group-hover:text-accent-purple transition-colors duration-300">
                      {option.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {option.description}
                    </p>

                    {/* Action Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${option.color} px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300`}
                    >
                      <IconComponent size={18} />
                      Get Started
                    </motion.div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-glow-purple/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}