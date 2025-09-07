'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { UserCircle, Code, ShieldCheck } from 'phosphor-react'

export default function OurTeam() {
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

  const teamMembers = [
    {
      role: "Leadership Team",
      icon: UserCircle,
      description: "Visionary leaders with decades of combined experience in cloud infrastructure and technology innovation.",
      color: "from-orange-500 to-amber-500",
      glowColor: "rgba(249, 115, 22, 0.6)"
    },
    {
      role: "Development Team", 
      icon: Code,
      description: "Expert developers and engineers who craft cutting-edge solutions and maintain our robust infrastructure.",
      color: "from-amber-500 to-yellow-500",
      glowColor: "rgba(245, 158, 11, 0.6)"
    },
    {
      role: "Security Team",
      icon: ShieldCheck,
      description: "Cybersecurity specialists ensuring your data and applications remain protected with enterprise-grade security.",
      color: "from-orange-500 to-red-500",
      glowColor: "rgba(239, 68, 68, 0.6)"
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-l from-amber-900/10 via-transparent to-orange-900/10" />
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
            Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A diverse group of passionate professionals united by our commitment to excellence
          </p>
        </motion.div>

        {/* Team Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon
            
            return (
              <motion.div
                key={member.role}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -15,
                  boxShadow: `0 0 40px ${member.glowColor}`
                }}
                className="group glass-card p-8 rounded-3xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ 
                      rotateY: 360,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.8 }}
                    className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-3xl flex items-center justify-center mx-auto mb-6 glow-orange`}
                  >
                    <IconComponent size={40} className="text-white" weight="bold" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-orbitron font-bold text-2xl mb-4 text-orange-400 group-hover:text-orange-300 transition-colors duration-300">
                    {member.role}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Team Stats */}
                  <div className="mt-6 pt-6 border-t border-orange-500/20">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-orange-400">10+</div>
                        <div className="text-xs text-gray-400">Years Exp</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-orange-400">24/7</div>
                        <div className="text-xs text-gray-400">Available</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="font-orbitron font-bold text-2xl mb-4 text-orange-400">
              Join Our Growing Team
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We're always looking for talented individuals who share our passion for technology and customer success.
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(249, 115, 22, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-3 rounded-xl font-semibold glow-orange hover:glow-orange-intense transition-all duration-300 btn-hover relative overflow-hidden"
            >
              <span className="relative z-10">View Open Positions</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}