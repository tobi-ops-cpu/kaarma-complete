'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ListChecks, ShieldCheck, Clock, Lightning, Headphones, Trophy } from 'phosphor-react'

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const reasons = [
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      description: "Bank-grade security protocols protect your data with advanced encryption, DDoS protection, and regular security audits.",
      color: "from-orange-500 to-red-500",
      glowColor: "rgba(239, 68, 68, 0.6)"
    },
    {
      icon: Lightning,
      title: "Lightning Performance",
      description: "NVMe SSD storage, global CDN, and optimized infrastructure deliver blazing-fast load times for your applications.",
      color: "from-amber-500 to-yellow-500", 
      glowColor: "rgba(245, 158, 11, 0.6)"
    },
    {
      icon: Headphones,
      title: "24/7 Expert Support",
      description: "Our technical experts are available around the clock to help you with any questions or issues you might encounter.",
      color: "from-orange-500 to-amber-500",
      glowColor: "rgba(249, 115, 22, 0.6)"
    },
    {
      icon: Clock,
      title: "99.9% Uptime SLA",
      description: "Guaranteed uptime backed by redundant infrastructure and automatic failover systems to keep your services online.",
      color: "from-red-500 to-pink-500",
      glowColor: "rgba(236, 72, 153, 0.6)"
    },
    {
      icon: Trophy,
      title: "Industry Leading",
      description: "Award-winning hosting provider trusted by thousands of businesses worldwide with proven track record of excellence.",
      color: "from-yellow-500 to-orange-500",
      glowColor: "rgba(251, 191, 36, 0.6)"
    },
    {
      icon: ListChecks,
      title: "Transparent Pricing",
      description: "No hidden fees, no surprises. Clear, competitive pricing with flexible plans that scale with your business needs.",
      color: "from-orange-500 to-amber-500",
      glowColor: "rgba(249, 115, 22, 0.6)"
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-transparent to-red-900/10" />
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
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover what sets us apart and why thousands of customers trust us with their hosting needs
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            
            return (
              <motion.div
                key={reason.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  boxShadow: `0 0 40px ${reason.glowColor}`
                }}
                className="group glass-card p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2
                    }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-4 glow-orange`}
                  >
                    <IconComponent size={24} className="text-white" weight="bold" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-orbitron font-bold text-lg mb-3 text-orange-400 group-hover:text-orange-300 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Animated Border */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(45deg, transparent, ${reason.glowColor}, transparent)`,
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
            )
          })}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20"
        >
          <div className="glass-card p-8 rounded-3xl border border-orange-500/20">
            <h3 className="font-orbitron font-bold text-2xl text-center mb-8 text-orange-400">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">5000+</div>
                <div className="text-gray-400 text-sm">Active Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime Achieved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">&lt;30s</div>
                <div className="text-gray-400 text-sm">Support Response</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Expert Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}