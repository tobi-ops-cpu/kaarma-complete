'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Ticket, DiscordLogo, Envelope, Clock } from 'phosphor-react'

export default function ResponseTimes() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const responseTimes = [
    {
      icon: Ticket,
      method: 'Tickets',
      time: 'Avg. 30 mins reply',
      description: 'Technical and billing support',
      color: 'text-green-400'
    },
    {
      icon: DiscordLogo,
      method: 'Discord',
      time: 'Instant help',
      description: 'Staff & community support',
      color: 'text-blue-400'
    },
    {
      icon: Envelope,
      method: 'Email',
      time: '1–2 hours reply',
      description: 'Detailed assistance',
      color: 'text-purple-400'
    }
  ]

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-orbitron font-bold text-3xl lg:text-4xl mb-4 text-glow">
            Support Response Times
          </h2>
        </motion.div>

        {/* Response Times Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-4xl mx-auto glass-card p-8 rounded-2xl glow-purple"
        >
          <div className="flex items-center justify-center mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 bg-gradient-to-br from-glow-purple to-accent-purple rounded-2xl flex items-center justify-center mr-4"
            >
              <Clock size={24} className="text-white" />
            </motion.div>
            <h3 className="font-orbitron font-semibold text-2xl text-glow">
              We Respond Fast
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {responseTimes.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-xl hover:bg-purple-500/10 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 ${item.color} mx-auto mb-4 flex items-center justify-center`}
                  >
                    <IconComponent size={40} />
                  </motion.div>
                  
                  <h4 className="font-orbitron font-bold text-xl mb-2 text-glow">
                    {item.method}
                  </h4>
                  
                  <div className={`text-2xl font-bold ${item.color} mb-2`}>
                    {item.time}
                  </div>
                  
                  <p className="text-gray-400 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center mt-8 pt-8 border-t border-purple-500/20"
          >
            <p className="text-gray-400 text-sm">
              All response times are averaged over the last 30 days. 
              <span className="text-accent-purple font-semibold"> We're committed to fast, quality support.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}