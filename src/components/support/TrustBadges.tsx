'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, CreditCard, Shield, Lightning } from 'phosphor-react'

export default function TrustBadges() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const badges = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round the clock assistance',
      color: 'blue'
    },
    {
      icon: CreditCard,
      title: 'Refund Policy',
      description: '7-day money back guarantee',
      color: 'green'
    },
    {
      icon: Shield,
      title: 'Secure Hosting',
      description: 'Enterprise-grade security',
      color: 'purple'
    },
    {
      icon: Lightning,
      title: 'Fast Response',
      description: 'Quick resolution guarantee',
      color: 'yellow'
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

  const badgeVariants = {
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

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          icon: 'text-blue-400',
          bg: 'from-blue-500/20 to-blue-600/20',
          glow: 'glow-blue',
          border: 'border-blue-500/30'
        }
      case 'green':
        return {
          icon: 'text-green-400',
          bg: 'from-green-500/20 to-green-600/20',
          glow: 'glow-green',
          border: 'border-green-500/30'
        }
      case 'purple':
        return {
          icon: 'text-purple-400',
          bg: 'from-purple-500/20 to-purple-600/20',
          glow: 'glow-purple',
          border: 'border-purple-500/30'
        }
      case 'yellow':
        return {
          icon: 'text-yellow-400',
          bg: 'from-yellow-500/20 to-yellow-600/20',
          glow: 'glow-yellow',
          border: 'border-yellow-500/30'
        }
      default:
        return {
          icon: 'text-gray-400',
          bg: 'from-gray-500/20 to-gray-600/20',
          glow: '',
          border: 'border-gray-500/30'
        }
    }
  }

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-jet-black via-purple-900/10 to-jet-black" />
        <div className="absolute inset-0 grid-bg opacity-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-orbitron font-bold text-3xl lg:text-4xl mb-4 text-glow">
            Why Choose Our Support
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Trusted by thousands of customers worldwide with our commitment to excellence
          </p>
        </motion.div>

        {/* Trust Badges Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {badges.map((badge, index) => {
            const colorClasses = getColorClasses(badge.color)
            const IconComponent = badge.icon

            return (
              <motion.div
                key={badge.title}
                variants={badgeVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className={`glass-card p-6 rounded-2xl border ${colorClasses.border} transition-all duration-300 group-hover:${colorClasses.glow} relative overflow-hidden`}>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                  
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360
                      }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-to-br ${colorClasses.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 ${colorClasses.glow}`}
                    >
                      <IconComponent size={32} className={colorClasses.icon} weight="bold" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="font-orbitron font-bold text-lg mb-2 text-white group-hover:text-glow transition-colors duration-300">
                      {badge.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {badge.description}
                    </p>
                  </div>

                  {/* Animated Border */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(45deg, transparent, ${
                        badge.color === 'blue' ? 'rgba(59, 130, 246, 0.5)' :
                        badge.color === 'green' ? 'rgba(34, 197, 94, 0.5)' :
                        badge.color === 'purple' ? 'rgba(168, 85, 247, 0.5)' :
                        'rgba(234, 179, 8, 0.5)'
                      }, transparent)`,
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
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-8 mt-16 text-center"
        >
          <div className="glass-card px-6 py-4 rounded-xl">
            <div className="text-2xl font-bold text-accent-purple mb-1">99.9%</div>
            <div className="text-sm text-gray-400">Uptime SLA</div>
          </div>
          <div className="glass-card px-6 py-4 rounded-xl">
            <div className="text-2xl font-bold text-green-400 mb-1">&lt;30s</div>
            <div className="text-sm text-gray-400">Avg Response</div>
          </div>
          <div className="glass-card px-6 py-4 rounded-xl">
            <div className="text-2xl font-bold text-blue-400 mb-1">5000+</div>
            <div className="text-sm text-gray-400">Happy Customers</div>
          </div>
          <div className="glass-card px-6 py-4 rounded-xl">
            <div className="text-2xl font-bold text-yellow-400 mb-1">24/7</div>
            <div className="text-sm text-gray-400">Expert Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}